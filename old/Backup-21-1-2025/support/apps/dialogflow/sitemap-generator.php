<?php

class SitemapGenerator {
    private $config;
    private $scanned;
    private $site_url_base;
    private $sitemap_file;

    public function __construct($conf) {
        $this->config = $conf;
        $this->scanned = [];
        $this->site_url_base = parse_url($this->config['SITE_URL'])['scheme'] . "://" . parse_url($this->config['SITE_URL'])['host'];
        $this->sitemap_file = fopen($this->config['SAVE_LOC'], "w");
    }

    public function GenerateSitemap() {
        $this->crawlPage($this->config['SITE_URL']);
        $this->generateFile($this->scanned);
    }

    private function getHtml($url) {
        $curl = curl_init();
        curl_setopt($curl, CURLOPT_URL, $url);
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
        $html = curl_exec($curl);
        curl_close($curl);
        $dom = new DOMDocument();
        if ($html) {
            @$dom->loadHTML($html);
        }
        return $dom;
    }

    private function crawlPage($page_url) {
        $url = filter_var($page_url, FILTER_SANITIZE_URL);
        if (in_array($url, $this->scanned) || !filter_var($page_url, FILTER_VALIDATE_URL) || (sb_is_cloud() && count($this->scanned) > 1000)) {
            return;
        }
        array_push($this->scanned, $page_url);
        $html = $this->getHtml($url);
        $anchors = $html->getElementsByTagName('a');
        foreach ($anchors as $a) {
            $next_url = $a->getAttribute('href');
            if ($this->config['CRAWL_ANCHORS_WITH_ID'] != "") {
                if ($a->getAttribute('id') != "" || $a->getAttribute('id') == $this->config['CRAWL_ANCHORS_WITH_ID']) {
                    continue;
                }
            }
            $base_page_url = explode("?", $page_url)[0];
            if (!$this->config['ALLOW_ELEMENT_LINKS']) {
                if (substr($next_url, 0, 1) == "#" || $next_url == "/") {
                    continue;
                }
            }
            if (!$this->config['ALLOW_EXTERNAL_LINKS']) {
                $parsed_url = parse_url($next_url);
                if (isset($parsed_url['host'])) {
                    if ($parsed_url['host'] != parse_url($this->config['SITE_URL'])['host']) {
                        continue;
                    }
                }
            }
            if (sb_is_allowed_extension(sb_isset(pathinfo($next_url), 'extension')) || strpos($next_url, '../') !== false || strpos($next_url, 'mailto')) {
                continue;
            }
            if (substr($next_url, 0, 7) != "http://" && substr($next_url, 0, 8) != "https://") {
                $next_url = $this->convertRelativeToAbsolute($base_page_url, $next_url);
            }
            $found = false;
            foreach ($this->config['KEYWORDS_TO_SKIP'] as $skip) {
                if (strpos($next_url, $skip) || $next_url === $skip) {
                    $found = true;
                }
            }
            if (!$found) {
                if (strpos($next_url, '#')) {
                    $next_url = explode('#', $next_url)[0];
                }
                $this->crawlPage($next_url);
            }
        }
    }

    private function convertRelativeToAbsolute($page_base_url, $link) {
        $first_character = substr($link, 0, 1);
        if ($first_character == "?" || $first_character == "#") {
            return $page_base_url . $link;
        } else if ($first_character != "/") {
            return $this->site_url_base . "/" . $link;
        } else {
            return $this->site_url_base . $link;
        }
    }

    private function generateFile($pages) {
        $xml = '<?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';
        foreach ($pages as $page) {
            $xml .= "<url><loc>" . $page . "</loc>
            <lastmod>" . $this->config['LAST_UPDATED'] . "</lastmod>
            <changefreq>" . $this->config['CHANGE_FREQUENCY'] . "</changefreq>
            <priority>" . $this->config['PRIORITY'] . "</priority></url>";
        }
        $xml .= "</urlset>";
        $xml = str_replace('&', '&amp;', $xml);
        $dom = new DOMDocument;
        $dom->preserveWhiteSpace = FALSE;
        $dom->loadXML($xml);
        $dom->formatOutput = TRUE;
        fwrite($this->sitemap_file, $dom->saveXML());
        fclose($this->sitemap_file);
        return true;
    }
}