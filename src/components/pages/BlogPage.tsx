import Link from "@/components/ui/Link.tsx";
import Spinner from "@/components/ui/Spinner.tsx";
import React from "react";

import LinkExternal from "@/assets/link-external.svg";

type MediumArticle = {
  title: string;
  pubDate: string;
  link: string;
  guid: string;
  author: string;
  thumbnail: string;
  description: string;
  content: string;
  categories: string[];
}

export default function BlogPage() {
  const [articles, setArticles] = React.useState<MediumArticle[]>([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    let isAborted = false;
    
    (async () => {
      const username = "nighttrader";
      const rssUrl = `https://medium.com/feed/@${username}`;
      const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${rssUrl}`;

      try {
        const response = await fetch(apiUrl);
        
        const data = await response.json();
        
        const items = data.items;
        
        if (isAborted || !Array.isArray(items)) return;
        
        setArticles(items);
      } catch {
        // skip
      } finally {
        setIsLoading(false);
      }
    })();
    
    return () => {
      isAborted = true;
    }
  }, []);
  
  return (
    <>
      {isLoading && (
        <div className={"flex flex-col gap-10 md:gap-20 py-14 md:py-28 px-8 md:px-16"}>
          <Spinner/>
        </div>
      )}
      {!isLoading && articles.length > 0 && (
        <div className={"flex flex-col gap-10 md:gap-20 py-14 md:py-28 px-8 md:px-16"}>
          <div className={"flex flex-col gap-2 md:gap-4"}>
            <p className={"text-base font-semibold"}>Blog</p>
            <p className={"text-3xl md:text-5xl font-semibold"}>Latest Insights and Trends</p>
            <p className={"text-base"}>Stay updated with our latest blog posts.</p>
          </div>
          <div className={"flex flex-col md:flex-row gap-8 w-full"}>
            {articles.map((article) => (
              <Link
                key={article.guid}
                to={article.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className={"flex flex-col gap-2 p-4 border border-black px-6 py-3"}>
                  <div className={"flex items-center justify-between"}>
                    <div className={"flex gap-2"}>
                      {article.categories.splice(3).map((tag) => (
                        <p className={"text-xs font-semibold capitalize"} key={tag}>{tag}</p>
                      ))}
                    </div>
                    <LinkExternal className={"size-4"}/>
                  </div>
                  <p className={"text-lg font-bold"}>{article.title}</p>
                  <p className={"text-xs"}>{new Date(article.pubDate).toLocaleDateString()}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
      <div className={"flex flex-col md:flex-row items-center gap-10 md:gap-20 py-14 md:py-28 px-8 md:px-16"}>
        <div className={"w-full flex flex-col gap-3 md:gap-6"}>
          <p className={"text-3xl md:text-5xl font-bold"}>Stay Updated with NightTrader</p>
          <p>Subscribe to our blog for the latest insights and follow us on social media for updates.</p>
          <div className={"flex gap-4"}>
            <Link
              to={"https://nighttraderexchange.substack.com/"}
              target={"_blank"}
              rel={"noopener noreferrer"}
              className={"flex w-full md:w-auto gap-3 items-center py-3 px-6 border border-black"}
            >
              Substack
              <LinkExternal className={"size-4"}/>
            </Link>
            <Link
              to={"https://medium.com/@nighttrader"}
              target={"_blank"}
              rel={"noopener noreferrer"}
              className={"flex w-full md:w-auto gap-3 items-center py-3 px-6 border border-black"}
            >
              Medium
              <LinkExternal className={"size-4"}/>
            </Link>
          </div>
        </div>
        <div className={"w-full aspect-square empty-image"}/> 
      </div>
    </>
  );
}