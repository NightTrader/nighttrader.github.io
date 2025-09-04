<?php

/*
 * ==========================================================
 * COMPONENTS.PHP
 * ==========================================================
 *
 * Library of static html components for the admin area. This file must not be executed directly. � 2017-2024 board.support. All rights reserved.
 *
 */

function sb_profile_box() { ?>
    <div class="sb-profile-box sb-lightbox">
        <div class="sb-top-bar">
            <div class="sb-profile">
                <img src="<?php echo SB_URL ?>/media/user.svg" />
                <span class="sb-name"></span>
            </div>
            <div>
                <a data-value="custom_email" class="sb-btn-icon" data-sb-tooltip="<?php sb_e('Send email') ?>">
                    <i class="sb-icon-envelope"></i>
                </a>
                <?php
                if (sb_get_multi_setting('sms', 'sms-user')) {
                    echo '<a data-value="sms" class="sb-btn-icon" data-sb-tooltip="' . sb_('Send text message') . '"><i class="sb-icon-sms"></i></a>';
                }
                if (defined('SB_WHATSAPP') && (!function_exists('sb_whatsapp_active') || sb_whatsapp_active())) {
                    echo '<a data-value="whatsapp" class="sb-btn-icon" data-sb-tooltip="' . sb_('Send a WhatsApp message template') . '"><i class="sb-icon-social-wa"></i></a>'; // Deprecated: remove function_exists('sb_whatsapp_active')
                }
                if (((sb_is_agent(false, true, true) && !sb_supervisor()) || sb_get_multi_setting('agents', 'agents-edit-user')) || (sb_supervisor() && sb_get_multi_setting('supervisor', 'supervisor-edit-user'))) {
                    echo ' <a class="sb-edit sb-btn sb-icon" data-button="toggle" data-hide="sb-profile-area" data-show="sb-edit-area"><i class="sb-icon-user"></i>' . sb_('Edit user') . '</a>';
                }
                ?>
                <a class="sb-start-conversation sb-btn sb-icon">
                    <i class="sb-icon-message"></i>
                    <?php sb_e('Start a conversation') ?>
                </a>
                <a class="sb-close sb-btn-icon sb-btn-red" data-button="toggle" data-hide="sb-profile-area" data-show="sb-table-area">
                    <i class="sb-icon-close"></i>
                </a>
            </div>
        </div>
        <div class="sb-main sb-scroll-area">
            <div>
                <div class="sb-title">
                    <?php sb_e('Details') ?>
                </div>
                <div class="sb-profile-list"></div>
                <div class="sb-agent-area"></div>
            </div>
            <div>
                <div class="sb-title">
                    <?php sb_e('User conversations') ?>
                </div>
                <ul class="sb-user-conversations"></ul>
            </div>
        </div>
    </div>
<?php } ?>
<?php
function sb_profile_edit_box() { ?>
    <div class="sb-profile-edit-box sb-lightbox">
        <div class="sb-info"></div>
        <div class="sb-top-bar">
            <div class="sb-profile">
                <img src="<?php echo SB_URL ?>/media/user.svg" />
                <span class="sb-name"></span>
            </div>
            <div>
                <a class="sb-save sb-btn sb-icon">
                    <i class="sb-icon-check"></i>
                    <?php sb_e('Save changes') ?>
                </a>
                <a class="sb-close sb-btn-icon sb-btn-red" data-button="toggle" data-hide="sb-profile-area" data-show="sb-table-area">
                    <i class="sb-icon-close"></i>
                </a>
            </div>
        </div>
        <div class="sb-main sb-scroll-area">
            <div class="sb-details">
                <div class="sb-title">
                    <?php sb_e('Edit details') ?>
                </div>
                <div class="sb-edit-box">
                    <div id="profile_image" data-type="image" class="sb-input sb-input-image sb-profile-image">
                        <span>
                            <?php sb_e('Profile image') ?>
                        </span>
                        <div class="image">
                            <div class="sb-icon-close"></div>
                        </div>
                    </div>
                    <div id="user_type" data-type="select" class="sb-input sb-input-select">
                        <span>
                            <?php sb_e('Type') ?>
                        </span>
                        <select>
                            <option value="agent">
                                <?php sb_e('Agent') ?>
                            </option>
                            <option value="admin">
                                <?php sb_e('Admin') ?>
                            </option>
                        </select>
                    </div>
                    <?php sb_departments('select') ?>
                    <div id="first_name" data-type="text" class="sb-input">
                        <span>
                            <?php sb_e('First name') ?>
                        </span>
                        <input type="text" required />
                    </div>
                    <div id="last_name" data-type="text" class="sb-input">
                        <span>
                            <?php sb_e('Last name') ?>
                        </span>
                        <input type="text" required />
                    </div>
                    <div id="password" data-type="text" class="sb-input">
                        <span>
                            <?php sb_e('Password') ?>
                        </span>
                        <input type="password" />
                    </div>
                    <div id="email" data-type="email" class="sb-input">
                        <span>
                            <?php sb_e('Email') ?>
                        </span>
                        <input type="email" />
                    </div>
                </div>
                <a class="sb-delete sb-btn-text sb-btn-red">
                    <i class="sb-icon-delete"></i>
                    <?php sb_e('Delete user') ?>
                </a>
            </div>
            <div class="sb-additional-details">
                <div class="sb-title">
                    <?php sb_e('Edit additional details') ?>
                </div>
                <div class="sb-edit-box">
                    <div id="address" data-type="text" class="sb-input">
                        <span>
                            <?php sb_e('Address') ?>
                        </span>
                        <input type="text" />
                    </div>
                    <div id="city" data-type="text" class="sb-input">
                        <span>
                            <?php sb_e('City') ?>
                        </span>
                        <input type="text" />
                    </div>
                    <div id="country" data-type="select" class="sb-input">
                        <span>
                            <?php sb_e('Country') ?>
                        </span>
                        <?php echo sb_select_countries() ?>
                    </div>
                    <div id="postal_code" data-type="text" class="sb-input">
                        <span>
                            <?php sb_e('Postal code') ?>
                        </span>
                        <input type="text" />
                    </div>
                    <div id="state" data-type="text" class="sb-input">
                        <span>
                            <?php sb_e('State') ?>
                        </span>
                        <input type="text" />
                    </div>
                    <div id="phone" data-type="text" class="sb-input">
                        <span>
                            <?php sb_e('Phone') ?>
                        </span>
                        <input type="text" />
                    </div>
                    <div id="language" data-type="select" class="sb-input">
                        <span>
                            <?php sb_e('Language') ?>
                        </span>
                        <?php echo sb_select_languages() ?>
                    </div>
                    <div id="birthdate" data-type="date" class="sb-input">
                        <span>
                            <?php sb_e('Birthdate') ?>
                        </span>
                        <input type="date" />
                    </div>
                    <div id="company" data-type="text" class="sb-input">
                        <span>
                            <?php sb_e('Company') ?>
                        </span>
                        <input type="text" />
                    </div>
                    <div id="facebook" data-type="text" class="sb-input">
                        <span>
                            <?php sb_e('Facebook') ?>
                        </span>
                        <input type="text" />
                    </div>
                    <div id="twitter" data-type="text" class="sb-input">
                        <span>
                            <?php sb_e('Twitter') ?>
                        </span>
                        <input type="text" />
                    </div>
                    <div id="linkedin" data-type="text" class="sb-input">
                        <span>
                            <?php sb_e('LinkedIn') ?>
                        </span>
                        <input type="text" />
                    </div>
                    <div id="website" data-type="text" class="sb-input">
                        <span>
                            <?php sb_e('Website') ?>
                        </span>
                        <input type="text" />
                    </div>
                    <div id="timezone" data-type="text" class="sb-input">
                        <span>
                            <?php sb_e('Timezone') ?>
                        </span>
                        <input type="text" />
                    </div>
                    <?php
                    $additional_fields = sb_get_setting('user-additional-fields');
                    if ($additional_fields != false && is_array($additional_fields)) {
                        $code = '';
                        for ($i = 0; $i < count($additional_fields); $i++) {
                            $value = $additional_fields[$i];
                            if ($value['extra-field-name'] != '') {
                                $code .= '<div id="' . $value['extra-field-slug'] . '" data-type="text" class="sb-input"><span>' . $value['extra-field-name'] . '</span><input type="text"></div>';
                            }
                        }
                        echo $code;
                    }

                    ?>
                </div>
            </div>
        </div>
    </div>
<?php } ?>
<?php
function sb_login_box() { ?>
    <form class="sb sb-rich-login sb-admin-box">
        <div class="sb-info"></div>
        <div class="sb-top-bar">
            <img src="<?php echo sb_get_setting('login-icon', SB_URL . '/media/logo.svg') ?>" />
            <div class="sb-title">
                <?php sb_e('Sign In') ?>
            </div>
            <div class="sb-text">
                <?php echo sb_sanatize_string(sb_get_setting('login-message', defined('SB_WP') ? sb_('Please insert email and password of your WordPress account') : sb_('Enter your login details below'))) ?>
            </div>
        </div>
        <div class="sb-main">
            <div id="email" class="sb-input">
                <span>
                    <?php sb_e('Email') ?>
                </span>
                <input type="text" />
            </div>
            <div id="password" class="sb-input">
                <span>
                    <?php sb_e('Password') ?>
                </span>
                <input type="password" />
            </div>
            <div class="sb-bottom">
                <div class="sb-btn sb-submit-login">
                    <?php sb_e('Login') ?>
                </div>
            </div>
        </div>
    </form>
    <img id="sb-error-check" style="display:none" src="<?php echo SB_URL . '/media/logo.svg' ?>" />
    <script>
        (function ($) {
            $(document).ready(function () {
                $('.sb-admin-start').removeAttr('style');
                $('.sb-submit-login').on('click', function () {
                    SBF.loginForm(this, false, function () {
                        location.reload();
                    });
                });
                $('#sb-error-check').one('error', function () {
                    $('.sb-info').html('It looks like the chat URL has changed. Edit the config.php file(it\'s in the Support Board folder) and update the SB_URL constant with the new URL.').addClass('sb-active');
                });
                SBPusher.initServiceWorker();
            });
            $(window).keydown(function (e) {
                if (e.which == 13) {
                    $('.sb-submit-login').click();
                }
            });
        }(jQuery));
    </script>
<?php } ?>
<?php
function sb_dialog() { ?>
    <div class="sb-dialog-box sb-lightbox">
        <div class="sb-title"></div>
        <p></p>
        <div>
            <a class="sb-confirm sb-btn">
                <?php sb_e('Confirm') ?>
            </a>
            <a class="sb-cancel sb-btn sb-btn-red">
                <?php sb_e('Cancel') ?>
            </a>
            <a class="sb-close sb-btn">
                <?php sb_e('Close') ?>
            </a>
        </div>
    </div>
<?php } ?>
<?php
function sb_updates_box() { ?>
    <div class="sb-lightbox sb-updates-box">
        <div class="sb-info"></div>
        <div class="sb-top-bar">
            <div>
                <?php sb_e('Update center') ?>
            </div>
            <div>
                <a class="sb-close sb-btn-icon sb-btn-red">
                    <i class="sb-icon-close"></i>
                </a>
            </div>
        </div>
        <div class="sb-main sb-scroll-area">
            <div class="sb-bottom">
                <a class="sb-update sb-btn sb-icon">
                    <i class="sb-icon-reload"></i>
                    <?php sb_e('Update now') ?>
                </a>
                <a href="https://board.support/changes" target="_blank" class="sb-btn-text">
                    <i class="sb-icon-clock"></i>
                    <?php sb_e('Change Log') ?>
                </a>
            </div>
        </div>
    </div>
<?php } ?>
<?php
function sb_app_box() { ?>
    <div class="sb-lightbox sb-app-box" data-app="">
        <div class="sb-info"></div>
        <div class="sb-top-bar">
            <div></div>
            <div>
                <a class="sb-close sb-btn-icon sb-btn-red">
                    <i class="sb-icon-close"></i>
                </a>
            </div>
        </div>
        <div class="sb-main">
            <p></p>
            <div class="sb-title">
                <?php sb_e('License key') ?>
            </div>
            <div class="sb-input-setting sb-type-text">
                <input type="text" required />
            </div>
            <div class="sb-bottom">
                <a class="sb-btn sb-icon sb-btn-app-setting">
                    <i class="sb-icon-settings"></i>
                    <?php sb_e('Settings') ?>
                </a>
                <a class="sb-activate sb-btn sb-icon">
                    <i class="sb-icon-check"></i>
                    <?php sb_e('Activate') ?>
                </a>
                <a class="sb-btn sb-icon sb-btn-app-puchase" target="_blank" href="#">
                    <i class="sb-icon-plane"></i>
                    <?php sb_e('Purchase license') ?>
                </a>
                <a class="sb-btn-text sb-btn-app-details" target="_blank" href="#">
                    <i class="sb-icon-help"></i>
                    <?php sb_e('Read more') ?>
                </a>
            </div>
        </div>
    </div>
<?php } ?>
<?php
function sb_direct_message_box() { ?>
    <div class="sb-lightbox sb-direct-message-box">
        <div class="sb-info"></div>
        <div class="sb-top-bar">
            <div></div>
            <div>
                <a class="sb-close sb-btn-icon sb-btn-red">
                    <i class="sb-icon-close"></i>
                </a>
            </div>
        </div>
        <div class="sb-main sb-scroll-area">
            <div class="sb-title">
                <?php sb_e('User IDs') ?>
            </div>
            <div class="sb-input-setting sb-type-text sb-first">
                <input class="sb-direct-message-users" type="text" placeholder="<?php sb_e('User IDs separated by commas') ?>" required />
            </div>
            <div class="sb-title sb-direct-message-subject">
                <?php sb_e('Subject') ?>
            </div>
            <div class="sb-input-setting sb-type-text sb-direct-message-subject">
                <input type="text" placeholder="<?php sb_e('Email subject') ?>" />
            </div>
            <div class="sb-title sb-direct-message-title-subject">
                <?php sb_e('Message') ?>
            </div>
            <div class="sb-input-setting sb-type-textarea">
                <textarea placeholder="<?php sb_e('Write here your message...') ?>" required></textarea>
            </div>
            <div class="sb-bottom">
                <a class="sb-send-direct-message sb-btn sb-icon">
                    <i class="sb-icon-plane"></i>
                    <?php sb_e('Send message now') ?>
                </a>
                <div></div>
                <?php
                if (!sb_is_cloud() || defined('SB_CLOUD_DOCS')) {
                    echo '<a href="' . (sb_is_cloud() ? SB_CLOUD_DOCS : 'https://board.support/docs') . '#direct-messages" class="sb-btn-text" target="_blank"><i class="sb-icon-help"></i></a>';
                }
                ?>
            </div>
        </div>
    </div>
<?php } ?>
<?php
function sb_routing_select($exclude_id = false) {
    $agents = sb_db_get('SELECT id, first_name, last_name FROM sb_users WHERE (user_type = "agent" OR user_type = "admin")' . ($exclude_id ? (' AND id <> ' . sb_db_escape($exclude_id)) : ''), false);
    $code = '<div class="sb-inline sb-inline-agents"><h3>' . sb_('Agent') . '</h3><div id="conversation-agent" class="sb-select"><p>' . sb_('None') . '</p><ul><li data-id="" data-value="">' . sb_('None') . '</li>';
    for ($i = 0; $i < count($agents); $i++) {
        $code .= '<li data-id="' . $agents[$i]['id'] . '">' . $agents[$i]['first_name'] . ' ' . $agents[$i]['last_name'] . '</li>';
    }
    echo $code . '</ul></div></div>';
}
?>
<?php
function sb_installation_box($error = false) {
    global $SB_LANGUAGE;
    $SB_LANGUAGE = isset($_GET['lang']) ? $_GET['lang'] : strtolower(substr($_SERVER['HTTP_ACCEPT_LANGUAGE'], 0, 2));
    ?>
    <div class="sb-main sb-admin sb-admin-start">
        <form class="sb-intall sb-admin-box">
            <?php if ($error === false || $error == 'installation')
                echo '<div class="sb-info"></div>';
            else
                die('<div class="sb-info sb-active">' . sb_('We\'re having trouble connecting to your database. Please edit the file config.php and check your database connection details. Error: ') . $error . '.</div>'); ?>
            <div class="sb-top-bar">
                <img src="<?php echo (!SB_URL || SB_URL == '[url]' ? '' : SB_URL . '/') ?>media/logo.svg" />
                <div class="sb-title">
                    <?php sb_e('Installation') ?>
                </div>
                <div class="sb-text">
                    <?php sb_e('Please complete the installation process by entering your database connection details below. If you are not sure about this, contact your hosting provider for support.') ?>
                </div>
            </div>
            <div class="sb-main">
                <div id="db-name" class="sb-input">
                    <span>
                        <?php sb_e('Database Name') ?>
                    </span>
                    <input type="text" required />
                </div>
                <div id="db-user" class="sb-input">
                    <span>
                        <?php sb_e('Username') ?>
                    </span>
                    <input type="text" required />
                </div>
                <div id="db-password" class="sb-input">
                    <span>
                        <?php sb_e('Password') ?>
                    </span>
                    <input type="text" />
                </div>
                <div id="db-host" class="sb-input">
                    <span>
                        <?php sb_e('Host') ?>
                    </span>
                    <input type="text" required />
                </div>
                <div id="db-port" class="sb-input">
                    <span>
                        <?php sb_e('Port') ?>
                    </span>
                    <input type="text" placeholder="Default" />
                </div>
                <?php if ($error === false || $error == 'installation') { ?>
                    <div class="sb-text">
                        <?php sb_e('Enter the user details of the main account you will use to login into the administration area. You can update these details later.') ?>
                    </div>
                    <div id="first-name" class="sb-input">
                        <span>
                            <?php sb_e('First name') ?>
                        </span>
                        <input type="text" required />
                    </div>
                    <div id="last-name" class="sb-input">
                        <span>
                            <?php sb_e('Last name') ?>
                        </span>
                        <input type="text" required />
                    </div>
                    <div id="email" class="sb-input">
                        <span>
                            <?php sb_e('Email') ?>
                        </span>
                        <input type="email" required />
                    </div>
                    <div id="password" class="sb-input">
                        <span>
                            <?php sb_e('Password') ?>
                        </span>
                        <input type="password" required />
                    </div>
                    <div id="password-check" class="sb-input">
                        <span>
                            <?php sb_e('Repeat password') ?>
                        </span>
                        <input type="password" required />
                    </div>
                <?php } ?>
                <div class="sb-bottom">
                    <div class="sb-btn sb-submit-installation">
                        <?php sb_e('Complete installation') ?>
                    </div>
                </div>
            </div>
        </form>
    </div>
<?php } ?>
<?php
/*
 * ----------------------------------------------------------
 * ADMIN AREA
 * ----------------------------------------------------------
 *
 * Display the administration area
 *
 */

function sb_component_admin() {
    $is_cloud = sb_is_cloud();
    $sb_settings = json_decode(file_get_contents(SB_PATH . '/resources/json/settings.json'), true);
    $active_user = sb_get_active_user(false, true);
    $collapse = sb_get_setting('collapse') ? ' sb-collapse' : '';
    $apps = [
        ['SB_WP', 'wordpress', 'WordPress'],
        ['SB_DIALOGFLOW', 'dialogflow', 'Artificial Intelligence', 'Connect smart chatbots and automate conversations by using one of the most advanced forms of artificial intelligence in the world.'],
        ['SB_TICKETS', 'tickets', 'Tickets', 'Provide help desk support to your customers by including a ticket area, with all chat features included, on any web page in seconds.'],
        ['SB_MESSENGER', 'messenger', 'Messenger', 'Read, manage and reply to all messages sent to your Facebook pages and Instagram accounts directly from Support Board.'],
        ['SB_WHATSAPP', 'whatsapp', 'WhatsApp', 'Lets your users reach you via WhatsApp. Read and reply to all messages sent to your WhatsApp Business account directly from Support Board.'],
        ['SB_TWITTER', 'twitter', 'Twitter', 'Lets your users reach you via Twitter. Read and reply to messages sent to your Twitter account directly from Support Board.'],
        ['SB_TELEGRAM', 'telegram', 'Telegram', 'Connect your Telegram bot to Support Board to read and reply to all messages sent to your Telegram bot directly in Support Board.'],
        ['SB_VIBER', 'viber', 'Viber', 'Connect your Viber bot to Support Board to read and reply to all messages sent to your Viber bot directly in Support Board.'],
        ['SB_GBM', 'gbm', 'Business Messages', 'Read and reply to messages sent from Google Search, Maps and brand-owned channels directly in Support Board.'],
        ['SB_LINE', 'line', 'Line', 'Connect your LINE bot to Support Board to read and reply to all messages sent to your LINE bot directly in Support Board.'],
        ['SB_WECHAT', 'wechat', 'WeChat', 'Lets your users reach you via WeChat. Read and reply to all messages sent to your WeChat official account directly from Support Board.'],
        ['SB_WOOCOMMERCE', 'woocommerce', 'WooCommerce', 'Increase sales, provide better support, and faster solutions, by integrating WooCommerce with Support Board.'],
        ['SB_SLACK', 'slack', 'Slack', 'Communicate with your users right from Slack. Send and receive messages and attachments, use emojis, and much more.'],
        ['SB_ZENDESK', 'zendesk', 'Zendesk', 'Automatically sync Zendesk customers with Support Board, view Zendesk tickets, or create new ones without leaving Support Board.'],
        ['SB_UMP', 'ump', 'Ultimate Membership Pro', 'Enable ticket and chat support for subscribers only, view member profile details and subscription details in the admin area.'],
        ['SB_PERFEX', 'perfex', 'Perfex', 'Synchronize your Perfex customers in real-time and let them contact you via chat! View profile details, proactively engage them, and more.'],
        ['SB_WHMCS', 'whmcs', 'Whmcs', 'Synchronize your customers in real-time, chat with them and boost their engagement, or provide a better and faster support.'],
        ['SB_OPENCART', 'opencart', 'OpenCart', 'Integrate OpenCart with Support Board for real-time syncing of customers, order history access, and customer cart visibility.'],
        ['SB_AECOMMERCE', 'aecommerce', 'Active eCommerce', 'Increase sales and connect you and sellers with customers in real-time by integrating Active eCommerce with Support Board.'],
        ['SB_ARMEMBER', 'armember', 'ARMember', 'Synchronize customers, enable ticket and chat support for subscribers only, view subscription plans in the admin area.'],
        ['SB_MARTFURY', 'martfury', 'Martfury', 'Increase sales and connect you and sellers with customers in real-time by integrating Martfury with Support Board.'],
    ];
    $logged = $active_user && sb_is_agent($active_user) && (!defined('SB_WP') || !sb_get_setting('wp-force-logout') || sb_wp_verify_admin_login());
    $supervisor = sb_supervisor() ? sb_get_setting('supervisor') : false;
    $is_admin = $active_user && sb_is_agent($active_user, true, true) && !$supervisor;
    $sms = sb_get_multi_setting('sms', 'sms-user');
    $css_class = ($logged ? 'sb-admin' : 'sb-admin-start') . (sb_get_setting('rtl-admin') || ($is_cloud && defined('SB_CLOUD_DEFAULT_RTL')) ? ' sb-rtl' : '') . ($is_cloud ? ' sb-cloud' : '') . ($supervisor ? ' sb-supervisor' : '');
    $active_areas = ['users' => $is_admin || (!$supervisor && sb_get_multi_setting('agents', 'agents-users-area')) || ($supervisor && $supervisor['supervisor-users-area']), 'settings' => $is_admin || ($supervisor && $supervisor['supervisor-settings-area']), 'reports' => ($is_admin && !sb_get_multi_setting('performance', 'performance-reports')) || ($supervisor && $supervisor['supervisor-reports-area'])];
    $disable_translations = sb_get_setting('admin-disable-settings-translations');
    $admin_colors = [sb_get_setting('color-admin-1'), sb_get_setting('color-admin-2')];
    if ($supervisor && !$supervisor['supervisor-send-message']) {
        echo '<style>.sb-board .sb-conversation .sb-editor,#sb-start-conversation,.sb-top-bar [data-value="sms"],.sb-top-bar [data-value="email"],.sb-menu-users [data-value="message"],.sb-menu-users [data-value="sms"],.sb-menu-users [data-value="email"] { display: none !important; }</style>';
    }
    if ($is_cloud) {
        require_once(SB_CLOUD_PATH . '/account/functions.php');
        cloud_custom_code();
    } else if (!sb_box_ve()) {
        return;
    }
    if ($admin_colors[0]) {
        $css = '.sb-menu-wide ul li.sb-active, .sb-tab > .sb-nav > ul li.sb-active,.sb-table input[type="checkbox"]:checked, .sb-table input[type="checkbox"]:hover { border-color: ' . $admin_colors[0] . '; }';
        $css .= '.sb-board > .sb-admin-list .sb-scroll-area li.sb-active,.sb-user-conversations > li.sb-active { border-left-color: ' . $admin_colors[0] . '; }';
        $css .= '.sb-setting input:focus, .sb-setting select:focus, .sb-setting textarea:focus, .sb-input-setting input:focus, .sb-input-setting select:focus, .sb-input-setting textarea:focus,.sb-setting.sb-type-upload-image .image:hover, .sb-setting [data-type="upload-image"] .image:hover, .sb-input-setting.sb-type-upload-image .image:hover, .sb-input-setting [data-type="upload-image"] .image:hover,.sb-input > input:focus, .sb-input > input.sb-focus, .sb-input > select:focus, .sb-input > select.sb-focus, .sb-input > textarea:focus, .sb-input > textarea.sb-focus,.sb-search-btn > input,.sb-search-btn > input:focus { border-color: ' . $admin_colors[0] . '; box-shadow: 0 0 5px rgb(108 108 108 / 20%);}';
        $css .= '.sb-menu-wide ul li.sb-active, .sb-menu-wide ul li:hover, .sb-tab > .sb-nav > ul li.sb-active, .sb-tab > .sb-nav > ul li:hover,.sb-admin > .sb-header > .sb-admin-nav > div > a:hover, .sb-admin > .sb-header > .sb-admin-nav > div > a.sb-active,.sb-setting input[type="checkbox"]:checked:before, .sb-input-setting input[type="checkbox"]:checked:before,.sb-language-switcher > i:hover,.sb-admin > .sb-header > .sb-admin-nav-right .sb-account .sb-menu li:hover, .sb-admin > .sb-header > .sb-admin-nav-right .sb-account .sb-menu li.sb-active:hover,.sb-admin > .sb-header > .sb-admin-nav-right > div > a:hover,.sb-search-btn i:hover, .sb-search-btn.sb-active i, .sb-filter-btn i:hover, .sb-filter-btn.sb-active i,.sb-loading:before,.sb-board .sb-conversation > .sb-top a:hover i,.sb-panel-details > i:hover,.sb-board .sb-conversation > .sb-top > a:hover,.sb-btn-text:hover,.sb-table input[type="checkbox"]:checked:before,.sb-profile-list [data-id="wp-id"]:hover, .sb-profile-list [data-id="wp-id"]:hover label, .sb-profile-list [data-id="conversation-source"]:hover, .sb-profile-list [data-id="conversation-source"]:hover label, .sb-profile-list [data-id="location"]:hover, .sb-profile-list [data-id="location"]:hover label, .sb-profile-list [data-id="timezone"]:hover, .sb-profile-list [data-id="timezone"]:hover label, .sb-profile-list [data-id="current_url"]:hover, .sb-profile-list [data-id="current_url"]:hover label, .sb-profile-list [data-id="envato-purchase-code"]:hover, .sb-profile-list [data-id="envato-purchase-code"]:hover label { color: ' . $admin_colors[0] . '; }';
        $css .= '.sb-btn, a.sb-btn,.sb-area-settings .sb-tab .sb-btn:hover, .sb-btn-white:hover,.daterangepicker td.active, .daterangepicker td.active:hover, .daterangepicker .ranges li.active,div ul.sb-menu li:hover, .sb-select ul li:hover,div.sb-select.sb-select-colors > p:hover { background-color: ' . $admin_colors[0] . '; }';
        $css .= '.sb-btn-icon:hover,.sb-tags-cnt > span:hover { border-color: ' . $admin_colors[0] . '; color: ' . $admin_colors[0] . '; }';
        $css .= '.sb-btn-icon:hover,.daterangepicker td.in-range { background-color: rgb(151 151 151 / 8%); }';
        $css .= '.sb-board .sb-user-details,.sb-admin > .sb-header,.sb-select.sb-select-colors > p:not([data-value]),.sb-table tr:hover td,.sb-board .sb-user-details .sb-user-conversations li:hover, .sb-board .sb-user-details .sb-user-conversations li.sb-active, .sb-select.sb-select-colors > p[data-value=""], .sb-select.sb-select-colors > p[data-value="-1"] {background-color: #f5f5f5  }';
        $css .= '.sb-board > .sb-admin-list .sb-scroll-area li:hover, .sb-board > .sb-admin-list .sb-scroll-area li.sb-active {background-color: #f5f5f5 !important; }';
        $css .= '.sb-profile-list > ul > li .sb-icon, .sb-profile-list > ul > li > img { color: #424242 }';
        if ($admin_colors[1]) {
            $css .= '.sb-btn:hover, .sb-btn:active, a.sb-btn:hover, a.sb-btn:active { background-color: ' . $admin_colors[1] . '}';
        }
        echo '<style>' . $css . '</style>';
    }
    ?>
    <div class="sb-main <?php echo $css_class ?>" style="opacity: 0">
        <?php if ($logged) { ?>
            <div class="sb-header">
                <div class="sb-admin-nav">
                    <img src="<?php echo $is_cloud ? SB_CLOUD_BRAND_ICON : sb_get_setting('admin-icon', SB_URL . '/media/icon.svg') ?>" />
                    <div>
                        <a id="sb-conversations" class="sb-active">
                            <span>
                                <?php sb_e('Conversations') ?>
                            </span>
                        </a>
                        <?php
                        if ($active_areas['users']) {
                            echo '<a id="sb-users"><span>' . sb_('Users') . '</span></a>';
                        }
                        if ($active_areas['settings']) {
                            echo '<a id="sb-settings"><span>' . sb_('Settings') . '</span></a>';
                        }
                        if ($active_areas['reports']) {
                            echo '<a id="sb-reports"><span>' . sb_('Reports') . '</span></a>';
                        }
                        ?>
                    </div>
                </div>
                <div class="sb-admin-nav-right sb-menu-mobile">
                    <i class="sb-icon-menu"></i>
                    <div class="sb-desktop">
                        <div class="sb-account">
                            <img src="<?php echo SB_URL ?>/media/user.svg" />
                            <div>
                                <a class="sb-profile">
                                    <img src="<?php echo SB_URL ?>/media/user.svg" />
                                    <span class="sb-name"></span>
                                </a>
                                <ul class="sb-menu">
                                    <li data-value="status" class="sb-online">
                                        <?php sb_e('Online') ?>
                                    </li>
                                    <?php
                                    if ($is_admin) {
                                        echo '<li data-value="edit-profile">' . sb_('Edit profile') . '</li>' . ($is_cloud ? ('<li data-value="account">' . sb_('Account') . '</li>' . (defined('SB_CLOUD_DOCS') ? '<li data-value="help"><a href="' . SB_CLOUD_DOCS . '" target="_blank">' . sb_('Help') . '</a></li>' : '')) : '');
                                    }
                                    ?>
                                    <li data-value="logout">
                                        <?php sb_e('Logout') ?>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <?php
                        if ($is_admin && (!$is_cloud || defined('SB_CLOUD_DOCS'))) {
                            echo '<a href="' . ($is_cloud ? SB_CLOUD_DOCS : 'https://board.support/docs') . '" target="_blank" class="sb-docs"><i class="sb-icon-help"></i></a><a href="#" class="sb-version">' . SB_VERSION . '</a>';
                        }
                        ?>
                    </div>
                    <div class="sb-mobile">
                        <?php
                        if ($is_admin || (!$supervisor && sb_get_multi_setting('agents', 'agents-edit-user')) || ($supervisor && $supervisor['supervisor-edit-user'])) {
                            echo '<a href="#" class="edit-profile">' . sb_('Edit profile') . '</a>' . ($is_cloud ? ('<a href="#" data-value="account">' . sb_('Account') . '</a>') : '') . '<a href="#" class="sb-docs">' . sb_('Docs') . '</a><a href="#" class="sb-version">' . sb_('Updates') . '</a>';
                        }
                        ?>
                        <a href="#" class="sb-online" data-value="status">
                            <?php sb_e('Online') ?>
                        </a>
                        <a href="#" class="logout">
                            <?php sb_e('Logout') ?>
                        </a>
                    </div>
                </div>
            </div>
            <main>
                <div class="sb-active sb-area-conversations">
                    <div class="sb-board">
                        <div class="sb-admin-list<?php echo sb_get_multi_setting('departments-settings', 'departments-show-list') ? ' sb-departments-show' : '' ?>">
                            <div class="sb-top">
                                <div class="sb-select">
                                    <p data-value="0">
                                        <?php sb_e('Inbox') ?><span></span>
                                    </p>
                                    <ul>
                                        <li data-value="0" class="sb-active">
                                            <?php sb_e('Inbox') ?>
                                            <span></span>
                                        </li>
                                        <li data-value="3">
                                            <?php sb_e('Archive') ?>
                                        </li>
                                        <li data-value="4">
                                            <?php sb_e('Trash') ?>
                                        </li>
                                    </ul>
                                </div>
                                <div class="sb-flex">
                                    <?php sb_conversations_filter() ?>
                                    <div class="sb-search-btn">
                                        <i class="sb-icon sb-icon-search"></i>
                                        <input type="text" autocomplete="false" placeholder="<?php sb_e('Search for keywords or users...') ?>" />
                                    </div>
                                </div>
                            </div>
                            <div class="sb-scroll-area">
                                <ul></ul>
                            </div>
                        </div>
                        <div class="sb-conversation">
                            <div class="sb-top">
                                <i class="sb-btn-back sb-icon-arrow-left"></i>
                                <a></a>
                                <div class="sb-labels"></div>
                                <div class="sb-menu-mobile">
                                    <i class="sb-icon-menu"></i>
                                    <ul>
                                        <li>
                                            <a data-value="archive" class="sb-btn-icon" data-sb-tooltip="<?php sb_e('Archive conversation') ?>">
                                                <i class="sb-icon-check"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a data-value="panel" class="sb-btn-icon" data-sb-tooltip="<?php sb_e('Details') ?>">
                                                <i class="sb-icon-arrow-left"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a data-value="read" class="sb-btn-icon" data-sb-tooltip="<?php sb_e('Mark as read') ?>">
                                                <i class="sb-icon-check-circle"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a data-value="transcript" class="sb-btn-icon" data-sb-tooltip="<?php sb_e('Transcript') ?>" data-action="<?php echo sb_get_multi_setting('transcript', 'transcript-action') ?>">
                                                <i class="sb-icon-download"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a data-value="inbox" class="sb-btn-icon" data-sb-tooltip="<?php sb_e('Send to inbox') ?>">
                                                <i class="sb-icon-back"></i>
                                            </a>
                                        </li>
                                        <?php
                                        if ($is_admin || sb_get_setting('agents-delete') || (!$supervisor && sb_get_multi_setting('agents', 'agents-delete-conversation')) || ($supervisor && $supervisor['supervisor-delete-conversation'])) {
                                            echo '<li><a data-value="delete" class="sb-btn-icon sb-btn-red" data-sb-tooltip="' . sb_('Delete conversation') . '"><i class="sb-icon-delete"></i></a></li><li><a data-value="empty-trash" class="sb-btn-icon sb-btn-red" data-sb-tooltip="' . sb_('Empty trash') . '"><i class="sb-icon-delete"></i></a></li>'; //temp delete  sb_get_setting('agents-delete')
                                        }
                                        ?>
                                    </ul>
                                </div>
                                <div class="sb-label-date-top"></div>
                            </div>
                            <div class="sb-list"></div>
                            <?php sb_component_editor(true); ?>
                            <div class="sb-no-conversation-message">
                                <div>
                                    <label>
                                        <?php sb_e('Select a conversation') ?>
                                    </label>
                                    <p>
                                        <?php sb_e('Select a conversation from the left menu.') ?>
                                    </p>
                                </div>
                            </div>
                            <?php
                            if (sb_get_setting('chat-sound-admin') != 'n' || sb_get_setting('online-users-notification')) {
                                echo '<audio id="sb-audio" preload="auto"><source src="' . sb_get_multi_setting('sound-settings', 'sound-settings-file-admin', SB_URL . '/media/sound.mp3') . '" type="audio/mpeg"></audio><audio id="sb-audio-out" preload="auto"><source src="' . SB_URL . '/media/sound-out.mp3" type="audio/mpeg"></audio>';
                            }
                            ?>
                        </div>
                        <div class="sb-user-details">
                            <div class="sb-top">
                                <div class="sb-profile">
                                    <img src="<?php echo SB_URL ?>/media/user.svg" />
                                    <span class="sb-name"></span>
                                </div>
                            </div>
                            <div class="sb-scroll-area">
                                <div class="sb-profile-list sb-profile-list-conversation<?php echo $collapse ?>"></div>
                                <?php
                                sb_apps_panel();
                                sb_departments('custom-select');
                                if (sb_get_setting('routing') || (sb_get_multi_setting('agent-hide-conversations', 'agent-hide-conversations-active') && sb_get_multi_setting('agent-hide-conversations', 'agent-hide-conversations-menu'))) {
                                    sb_routing_select();
                                }
                                if (!sb_get_multi_setting('disable', 'disable-notes')) {
                                    echo '<div class="sb-panel-details sb-panel-notes' . $collapse . '"><i class="sb-icon-plus"></i><h3>' . sb_('Notes') . '</h3><div></div></div>';
                                }
                                if (!sb_get_multi_setting('disable', 'disable-tags')) {
                                    echo '<div class="sb-panel-details sb-panel-tags"><i class="sb-icon-settings"></i><h3>' . sb_('Tags') . '</h3><div></div></div>';
                                }
                                if (!sb_get_multi_setting('disable', 'disable-attachments')) {
                                    echo '<div class="sb-panel-details sb-panel-attachments' . $collapse . '"></div>';
                                }
                                ?>
                                <h3 class="sb-hide">
                                    <?php sb_e('User conversations') ?>
                                </h3>
                                <ul class="sb-user-conversations"></ul>
                            </div>
                            <div class="sb-no-conversation-message"></div>
                        </div>
                    </div>
                    <i class="sb-btn-collapse sb-left sb-icon-arrow-left"></i>
                    <i class="sb-btn-collapse sb-right sb-icon-arrow-right"></i>
                </div>
                <?php if ($active_areas['users']) { ?>
                    <div class="sb-area-users">
                        <div class="sb-top-bar">
                            <div>
                                <h2>
                                    <?php sb_e('Users list') ?>
                                </h2>
                                <div class="sb-menu-wide sb-menu-users">
                                    <div>
                                        <?php sb_e('All') ?>
                                        <span data-count="0"></span>
                                    </div>
                                    <ul>
                                        <li data-type="all" class="sb-active">
                                            <?php sb_e('All') ?>
                                            <span data-count="0">(0)</span>
                                        </li>
                                        <li data-type="user">
                                            <?php sb_e('Users') ?>
                                            <span data-count="0">(0)</span>
                                        </li>
                                        <li data-type="lead">
                                            <?php sb_e('Leads') ?>
                                            <span data-count="0">(0)</span>
                                        </li>
                                        <li data-type="visitor">
                                            <?php sb_e('Visitors') ?>
                                            <span data-count="0">(0)</span>
                                        </li>
                                        <li data-type="online">
                                            <?php sb_e('Online') ?>
                                        </li>
                                        <?php
                                        if ($is_admin || (!$supervisor && sb_get_multi_setting('agents', 'agents-tab')) || ($supervisor && sb_get_multi_setting('supervisor', 'supervisor-agents-tab'))) {
                                            echo '<li data-type="agent">' . sb_('Agents & Admins') . '</li>';
                                        }
                                        ?>
                                    </ul>
                                </div>
                                <div class="sb-menu-mobile">
                                    <i class="sb-icon-menu"></i>
                                    <ul>
                                        <?php
                                        if ($is_admin) {
                                            echo '<li><a data-value="csv" class="sb-btn-icon" data-sb-tooltip="' . sb_('Download CSV') . '"><i class="sb-icon-download"></i></a></li>';
                                        }
                                        ?>
                                        <li>
                                            <a data-value="message" class="sb-btn-icon" data-sb-tooltip="<?php sb_e('Send a message') ?>">
                                                <i class="sb-icon-chat"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a data-value="custom_email" class="sb-btn-icon" data-sb-tooltip="<?php sb_e('Send an email') ?>">
                                                <i class="sb-icon-envelope"></i>
                                            </a>
                                        </li>
                                        <?php
                                        if ($sms) {
                                            echo '<li><a data-value="sms" class="sb-btn-icon" data-sb-tooltip="' . sb_('Send a text message') . '"><i class="sb-icon-sms"></i></a><li>';
                                        }
                                        if (defined('SB_WHATSAPP') && (!function_exists('sb_whatsapp_active') || sb_whatsapp_active())) {
                                            echo '<li><a data-value="whatsapp" class="sb-btn-icon" data-sb-tooltip="' . sb_('Send a WhatsApp message template') . '"><i class="sb-icon-social-wa"></i></a><li>'; // Deprecated: remove function_exists('sb_whatsapp_active')
                                        }
                                        if ($is_admin) {
                                            echo '<li><a data-value="delete" class="sb-btn-icon sb-btn-red" data-sb-tooltip="' . sb_('Delete users') . '" style="display: none;"><i class="sb-icon-delete"></i></a></li>';
                                        }
                                        ?>
                                    </ul>
                                </div>
                            </div>
                            <div>
                                <div class="sb-search-btn">
                                    <i class="sb-icon sb-icon-search"></i>
                                    <input type="text" autocomplete="false" placeholder="<?php sb_e('Search users ...') ?>" />
                                </div>
                                <a class="sb-btn sb-icon sb-new-user">
                                    <i class="sb-icon-user"></i>
                                    <?php sb_e('Add new user') ?>
                                </a>
                            </div>
                        </div>
                        <div class="sb-scroll-area">
                            <table class="sb-table sb-table-users">
                                <thead>
                                    <tr>
                                        <th>
                                            <input type="checkbox" />
                                        </th>
                                        <th data-field="first_name">
                                            <?php sb_e('Full name') ?>
                                        </th>
                                        <?php sb_users_table_extra_fields() ?>
                                        <th data-field="email">
                                            <?php sb_e('Email') ?>
                                        </th>
                                        <th data-field="user_type">
                                            <?php sb_e('Type') ?>
                                        </th>
                                        <th data-field="last_activity">
                                            <?php sb_e('Last activity') ?>
                                        </th>
                                        <th data-field="creation_time" class="sb-active">
                                            <?php sb_e('Registration date') ?>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody></tbody>
                            </table>
                        </div>
                    </div>
                <?php } ?>
                <?php if ($active_areas['settings']) { ?>
                    <div class="sb-area-settings">
                        <div class="sb-top-bar">
                            <div>
                                <h2>
                                    <?php sb_e('Settings') ?>
                                </h2>
                            </div>
                            <div>
                                <div class="sb-search-dropdown">
                                    <div class="sb-search-btn">
                                        <i class="sb-icon sb-icon-search"></i>
                                        <input id="sb-search-settings" type="text" autocomplete="false" placeholder="<?php sb_e('Search ...') ?>" />
                                    </div>
                                    <div class="sb-search-dropdown-items"></div>
                                </div>
                                <a class="sb-btn sb-save-changes sb-icon">
                                    <i class="sb-icon-check"></i>
                                    <?php sb_e('Save changes') ?>
                                </a>
                            </div>
                        </div>
                        <div class="sb-tab">
                            <div class="sb-nav">
                                <div>
                                    <?php sb_e('Settings') ?>
                                </div>
                                <ul>
                                    <li id="tab-chat" class="sb-active">
                                        <?php echo $disable_translations ? 'Chat' : sb_('Chat') ?>
                                    </li>
                                    <li id="tab-messages">
                                        <?php echo $disable_translations ? 'Messages' : sb_('Messages') ?>
                                    </li>
                                    <li id="tab-admin">
                                        <?php echo $disable_translations ? 'Admin' : sb_('Admin') ?>
                                    </li>
                                    <li id="tab-notifications">
                                        <?php echo $disable_translations ? 'Notifications' : sb_('Notifications') ?>
                                    </li>
                                    <li id="tab-users">
                                        <?php echo $disable_translations ? 'Users' : sb_('Users') ?>
                                    </li>
                                    <li id="tab-design">
                                        <?php echo $disable_translations ? 'Design' : sb_('Design') ?>
                                    </li>
                                    <li id="tab-various">
                                        <?php echo $disable_translations ? 'Miscellaneous' : sb_('Miscellaneous') ?>
                                    </li>
                                    <?php
                                    for ($i = 0; $i < count($apps); $i++) {
                                        if (defined($apps[$i][0])) {
                                            echo '<li id="tab-' . $apps[$i][1] . '">' . sb_($apps[$i][2]) . '</li>';
                                        }
                                    }
                                    ?>
                                    <li id="tab-apps">
                                        <?php echo $disable_translations ? 'Apps' : sb_('Apps') ?>
                                    </li>
                                    <li id="tab-articles">
                                        <?php echo $disable_translations ? 'Articles' : sb_('Articles') ?>
                                    </li>
                                    <li id="tab-automations">
                                        <?php echo $disable_translations ? 'Automations' : sb_('Automations') ?>
                                    </li>
                                    <li id="tab-translations">
                                        <?php echo $disable_translations ? 'Translations' : sb_('Translations') ?>
                                    </li>
                                </ul>
                            </div>
                            <div class="sb-content sb-scroll-area">
                                <div class="sb-active">
                                    <?php sb_populate_settings('chat', $sb_settings) ?>
                                </div>
                                <div>
                                    <?php sb_populate_settings('messages', $sb_settings) ?>
                                </div>
                                <div>
                                    <?php sb_populate_settings('admin', $sb_settings) ?>
                                </div>
                                <div>
                                    <?php sb_populate_settings('notifications', $sb_settings) ?>
                                </div>
                                <div>
                                    <?php sb_populate_settings('users', $sb_settings) ?>
                                </div>
                                <div>
                                    <?php sb_populate_settings('design', $sb_settings) ?>
                                </div>
                                <div>
                                    <?php sb_populate_settings('miscellaneous', $sb_settings) ?>
                                </div>
                                <?php sb_apps_area($apps) ?>
                                <div>
                                    <div class="sb-articles-area sb-inner-tab sb-tab">
                                        <div class="sb-nav sb-nav-only">
                                            <div class="sb-menu-wide">
                                                <div>
                                                    <?php sb_e('Articles') ?>
                                                </div>
                                                <ul>
                                                    <li data-type="articles" class="sb-active">
                                                        <?php sb_e('Articles') ?>
                                                    </li>
                                                    <li data-type="categories">
                                                        <?php sb_e('Categories') ?>
                                                    </li>
                                                </ul>
                                            </div>
                                            <ul></ul>
                                            <span class="sb-new-category-cnt"></span>
                                            <div class="sb-add-category sb-btn sb-icon">
                                                <i class="sb-icon-plus"></i>
                                                <?php sb_e('Add new category') ?>
                                            </div>
                                            <div class="sb-add-article sb-btn sb-icon">
                                                <i class="sb-icon-plus"></i>
                                                <?php sb_e('Add new article') ?>
                                            </div>
                                        </div>
                                        <div class="sb-content">
                                            <h2 class="sb-language-switcher-cnt">
                                                <?php sb_e('Article title') ?>
                                            </h2>
                                            <div class="sb-input-setting sb-type-text sb-article-title">
                                                <div>
                                                    <input type="text" />
                                                </div>
                                            </div>
                                            <h2>
                                                <?php sb_e('Content') ?>
                                            </h2>
                                            <div class="sb-input-setting sb-type-textarea sb-article-content">
                                                <div>
                                                    <?php echo sb_get_setting('disable-editor-js') ? '<textarea></textarea>' : '<div id="editorjs"></div>' ?>
                                                </div>
                                            </div>
                                            <h2>
                                                <?php sb_e('External link') ?>
                                            </h2>
                                            <div class="sb-input-setting sb-type-text sb-article-link">
                                                <div>
                                                    <input type="text" />
                                                </div>
                                            </div>
                                            <h2>
                                                <?php sb_e('Parent category') ?>
                                            </h2>
                                            <div class="sb-input-setting sb-type-select sb-article-parent-category">
                                                <div>
                                                    <select></select>
                                                </div>
                                            </div>
                                            <h2>
                                                <?php sb_e('Categories') ?>
                                            </h2>
                                            <div class="sb-grid sb-article-categories">
                                                <div class="sb-input-setting sb-type-select">
                                                    <div>
                                                        <select></select>
                                                    </div>
                                                </div>
                                                <div class="sb-input-setting sb-type-select">
                                                    <div>
                                                        <select></select>
                                                    </div>
                                                </div>
                                                <div class="sb-input-setting sb-type-select">
                                                    <div>
                                                        <select></select>
                                                    </div>
                                                </div>
                                            </div>
                                            <h2 id="sb-article-id"></h2>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div class="sb-automations-area">
                                        <div class="sb-select">
                                            <p data-value="messages">
                                                <?php sb_e('Messages') ?>
                                            </p>
                                            <ul>
                                                <li data-value="messages" class="sb-active">
                                                    <?php sb_e('Messages') ?>
                                                </li>
                                                <li data-value="emails">
                                                    <?php sb_e('Emails') ?>
                                                </li>
                                                <?php if ($sms)
                                                    echo '<li data-value="sms">' . sb_('Text messages') . '</li>' ?>
                                                    <li data-value="popups">
                                                    <?php sb_e('Pop-ups') ?>
                                                </li>
                                                <li data-value="design">
                                                    <?php sb_e('Design') ?>
                                                </li>
                                                <li data-value="more">
                                                    <?php sb_e('More') ?>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="sb-inner-tab sb-tab">
                                            <div class="sb-nav sb-nav-only">
                                                <ul></ul>
                                                <div class="sb-add-automation sb-btn sb-icon">
                                                    <i class="sb-icon-plus"></i>
                                                    <?php sb_e('Add new automation') ?>
                                                </div>
                                            </div>
                                            <div class="sb-content sb-hide">
                                                <div class="sb-automation-values">
                                                    <h2 class="sb-language-switcher-cnt">
                                                        <?php sb_e('Name') ?>
                                                    </h2>
                                                    <div class="sb-input-setting sb-type-text">
                                                        <div>
                                                            <input data-id="name" type="text" />
                                                        </div>
                                                    </div>
                                                    <h2>
                                                        <?php sb_e('Message') ?>
                                                    </h2>
                                                    <div class="sb-input-setting sb-type-textarea">
                                                        <div>
                                                            <textarea data-id="message"></textarea>
                                                        </div>
                                                    </div>
                                                    <div class="sb-automation-extra"></div>
                                                </div>
                                                <div class="sb-automation-conditions">
                                                    <hr />
                                                    <h2>
                                                        <?php sb_e('Conditions') ?>
                                                    </h2>
                                                    <div class="sb-conditions"></div>
                                                    <div class="sb-add-condition sb-btn sb-icon">
                                                        <i class="sb-icon-plus"></i>
                                                        <?php sb_e('Add condition') ?>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div class="sb-translations sb-tab">
                                        <div class="sb-nav sb-nav-only">
                                            <div class="sb-active"></div>
                                            <ul></ul>
                                        </div>
                                        <div class="sb-content">
                                            <div class="sb-hide">
                                                <div class="sb-menu-wide">
                                                    <div>
                                                        <?php sb_e('Front End') ?>
                                                    </div>
                                                    <ul>
                                                        <li data-value="front" class="sb-active">
                                                            <?php sb_e('Front End') ?>
                                                        </li>
                                                        <li data-value="admin">
                                                            <?php sb_e('Admin') ?>
                                                        </li>
                                                        <li data-value="admin/js">
                                                            <?php sb_e('Client side admin') ?>
                                                        </li>
                                                        <li data-value="admin/settings">
                                                            <?php sb_e('Settings') ?>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <a class="sb-btn sb-icon sb-add-translation">
                                                    <i class="sb-icon-plus"></i>
                                                    <?php sb_e('New translation') ?>
                                                </a>
                                            </div>
                                            <div class="sb-translations-list"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                <?php } ?>
                <?php if ($active_areas['reports']) { ?>
                    <div class="sb-area-reports sb-loading">
                        <div class="sb-top-bar">
                            <div>
                                <h2>
                                    <?php sb_e('Reports') ?>
                                </h2>
                            </div>
                            <div>
                                <div class="sb-setting sb-type-text">
                                    <input id="sb-date-picker" placeholder="00/00/0000 - 00/00/0000" type="text" />
                                </div>
                                <div class="sb-report-export sb-btn-icon">
                                    <i class="sb-icon-download"></i>
                                </div>
                            </div>
                        </div>
                        <div class="sb-tab">
                            <div class="sb-nav sb-nav-only">
                                <div>
                                    <?php sb_e('Reports') ?>
                                </div>
                                <ul>
                                    <li class="sb-tab-nav-title">
                                        <?php sb_e('Conversations') ?>
                                    </li>
                                    <li id="conversations" class="sb-active">
                                        <?php sb_e('Conversations') ?>
                                    </li>
                                    <li id="missed-conversations">
                                        <?php sb_e('Missed conversations') ?>
                                    </li>
                                    <li id="conversations-time">
                                        <?php sb_e('Conversations time') ?>
                                    </li>
                                    <li class="sb-tab-nav-title">
                                        <?php sb_e('Direct messages') ?>
                                    </li>
                                    <li id="direct-messages">
                                        <?php sb_e('Chat messages') ?>
                                    </li>
                                    <li id="direct-emails">
                                        <?php sb_e('Emails') ?>
                                    </li>
                                    <li id="direct-sms">
                                        <?php sb_e('Text messages') ?>
                                    </li>
                                    <li class="sb-tab-nav-title">
                                        <?php sb_e('Users and agents') ?>
                                    </li>
                                    <li id="visitors">
                                        <?php sb_e('Visitors') ?>
                                    </li>
                                    <li id="leads">
                                        <?php sb_e('Leads') ?>
                                    </li>
                                    <li id="users">
                                        <?php sb_e('Users') ?>
                                    </li>
                                    <li id="registrations">
                                        <?php sb_e('Registrations') ?>
                                    </li>
                                    <li id="agents-response-time">
                                        <?php sb_e('Agent response time') ?>
                                    </li>
                                    <li id="agents-conversations">
                                        <?php sb_e('Agent conversations') ?>
                                    </li>
                                    <li id="agents-conversations-time">
                                        <?php sb_e('Agent conversations time') ?>
                                    </li>
                                    <li id="agents-ratings">
                                        <?php sb_e('Agent ratings') ?>
                                    </li>
                                    <li id="countries">
                                        <?php sb_e('Countries') ?>
                                    </li>
                                    <li id="languages">
                                        <?php sb_e('Languages') ?>
                                    </li>
                                    <li id="browsers">
                                        <?php sb_e('Browsers') ?>
                                    </li>
                                    <li id="os">
                                        <?php sb_e('Operating systems') ?>
                                    </li>
                                    <li class="sb-tab-nav-title">
                                        <?php sb_e('Automation') ?>
                                    </li>
                                    <li id="subscribe">
                                        <?php sb_e('Subscribe') ?>
                                    </li>
                                    <li id="follow-up">
                                        <?php sb_e('Follow up') ?>
                                    </li>
                                    <li id="message-automations">
                                        <?php sb_e('Message automations') ?>
                                    </li>
                                    <li id="email-automations">
                                        <?php sb_e('Email automations') ?>
                                    </li>
                                    <?php
                                    if ($sms) {
                                        echo '<li id="sms-automations">' . sb_('Text message automations') . '</li>';
                                    }
                                    ?>
                                    <li class="sb-tab-nav-title">
                                        <?php sb_e('Articles') ?>
                                    </li>
                                    <li id="articles-searches">
                                        <?php sb_e('Searches') ?>
                                    </li>
                                    <li id="articles-views">
                                        <?php sb_e('Article views') ?>
                                    </li>
                                    <li id="articles-views-single">
                                        <?php sb_e('Article views by article') ?>
                                    </li>
                                    <li id="articles-ratings">
                                        <?php sb_e('Article ratings') ?>
                                    </li>
                                </ul>
                            </div>
                            <div class="sb-content sb-scroll-area">
                                <div class="sb-reports-chart">
                                    <div class="chart-cnt">
                                        <canvas></canvas>
                                    </div>
                                </div>
                                <div class="sb-reports-sidebar">
                                    <div class="sb-title sb-reports-title"></div>
                                    <p class="sb-reports-text"></p>
                                    <div class="sb-collapse">
                                        <div>
                                            <table class="sb-table"></table>
                                        </div>
                                    </div>
                                </div>
                                <p class="sb-no-results">
                                    <?php echo sb_('No data found.') ?>
                                </p>
                            </div>
                        </div>
                    </div>
                <?php } ?>
            </main>
            <?php
            sb_profile_box();
            sb_profile_edit_box();
            sb_dialog();
            sb_direct_message_box();
            if (defined('SB_DIALOGFLOW')) {
                sb_dialogflow_intent_box();
            }
            if (defined('SB_WHATSAPP')) {
                sb_whatsapp_send_template_box();
            }
            if ($is_admin && !$is_cloud) {
                sb_updates_box();
                sb_app_box();
            }
            ?>
            <div id="sb-generic-panel"></div>
            <form class="sb-upload-form-admin sb-upload-form" action="<?php echo sb_sanatize_string($_SERVER['PHP_SELF']) ?>" method="post" enctype="multipart/form-data">
                <input type="file" name="files[]" class="sb-upload-files" multiple />
            </form>
            <div class="sb-info-card"></div>
            <?php
        } else {
            if ($is_cloud) {
                sb_cloud_reset_login();
            } else {
                sb_login_box();
            }
        }
        ?>
        <div class="sb-lightbox sb-lightbox-media">
            <div></div>
            <i class="sb-icon-close"></i>
        </div>
        <div class="sb-lightbox-overlay"></div>
        <div class="sb-loading-global sb-loading sb-lightbox"></div>
        <input type="email" name="email" style="display:none" autocomplete="email" />
        <input type="password" name="hidden" style="display:none" autocomplete="new-password" />
    </div>
    <?php
    if (!empty(sb_get_setting('custom-js')) && !$is_cloud) {
        echo '<script id="sb-custom-js" src="' . sb_get_setting('custom-js') . '"></script>';
    }
    if (!empty(sb_get_setting('custom-css')) && !$is_cloud) {
        echo '<link id="sb-custom-css" rel="stylesheet" type="text/css" href="' . sb_get_setting('custom-css') . '" media="all">';
    }
    if ($is_cloud) {
        sb_cloud_css_js();
    }
}

/*
 * ----------------------------------------------------------
 * HTML FUNCTIONS
 * ----------------------------------------------------------
 *
 * 1. Echo the apps settings and apps area
 * 2. Echo the apps conversation panel container
 * 3. Code check
 * 4. Return the users table extra fields
 * 5. Return the Dialogflow languages list
 * 6. Return the conversations filter
 *
 */

function sb_apps_area($apps) {
    $apps_wp = ['SB_WP', 'SB_WOOCOMMERCE', 'SB_UMP', 'SB_ARMEMBER'];
    $apps_php = [];
    $wp = defined('SB_WP');
    $code = '';
    for ($i = 0; $i < count($apps); $i++) {
        if (defined($apps[$i][0])) {
            $code .= '<div>' . sb_populate_app_settings($apps[$i][1]) . '</div>';
        }
    }
    $code .= '<div><div class="sb-apps">';
    for ($i = 1; $i < count($apps); $i++) {
        if (($wp && !in_array($apps[$i][0], $apps_php)) || (!$wp && !in_array($apps[$i][0], $apps_wp))) {
            $code .= '<div data-app="' . $apps[$i][1] . '">' . (defined($apps[$i][0]) ? '<i class="sb-icon-check"></i>' : '') . ' <img src="' . SB_URL . '/media/apps/' . $apps[$i][1] . '.svg" /><h2>' . $apps[$i][2] . '</h2><p>' . sb_s($apps[$i][3]) . '</p></div>';
        }
    }
    echo $code . '</div></div>';
}

function sb_apps_panel() {
    $code = '';
    $collapse = sb_get_setting('collapse') ? ' sb-collapse' : '';
    $panels = [['SB_UMP', 'ump'], ['SB_WOOCOMMERCE', 'woocommerce'], ['SB_PERFEX', 'perfex'], ['SB_WHMCS', 'whmcs'], ['SB_AECOMMERCE', 'aecommerce'], ['SB_ARMEMBER', 'armember'], ['SB_ZENDESK', 'zendesk'], ['SB_MARTFURY', 'martfury'], ['SB_OPENCART', 'opencart']];
    for ($i = 0; $i < count($panels); $i++) {
        if (defined($panels[$i][0])) {
            $code .= '<div class="sb-panel-details sb-panel-' . $panels[$i][1] . $collapse . '"></div>';
        }
    }
    echo $code;
}

function sb_box_ve() {
    if ((!isset($_COOKIE['SA_' . 'VGC' . 'KMENS']) && !isset($_COOKIE['_ga_' . 'VGC' . 'KMENS'])) || !password_verify('VGC' . 'KMENS', isset($_COOKIE['_ga_' . 'VGC' . 'KMENS']) ? $_COOKIE['_ga_' . 'VGC' . 'KMENS'] : $_COOKIE['SA_' . 'VGC' . 'KMENS'])) { // Deprecated. _ga will be removed
        echo file_get_contents(SB_PATH . '/resources/sb.html');
        return false;
    }
    return true;
}

function sb_users_table_extra_fields() {
    $extra_fields = sb_get_setting('user-table-extra-columns');
    $count = $extra_fields && !is_string($extra_fields) ? count($extra_fields) : false;
    if ($count) {
        $code = '';
        for ($i = 0; $i < $count; $i++) {
            $slug = $extra_fields[$i]['user-table-extra-slug'];
            $code .= '<th data-field="' . $slug . '" data-extra="true">' . sb_string_slug($slug, 'string') . '</th>';
        }
        echo $code;
    }
}

function sb_dialogflow_languages_list() {
    $languages = json_decode(file_get_contents(SB_PATH . '/apps/dialogflow/dialogflow_languages.json'), true);
    $code = '<div data-type="select" class="sb-input-setting sb-type-select sb-dialogflow-languages"><div class="input"><select><option value="">' . sb_('Default') . '</option>';
    for ($i = 0; $i < count($languages); $i++) {
        $code .= '<option value="' . $languages[$i][1] . '">' . $languages[$i][0] . '</option>';
    }
    return $code . '</select></div></div>';
}

function sb_conversations_filter() {
    if (sb_get_multi_setting('disable', 'disable-filters')) {
        return;
    }
    $departments = sb_is_agent(false, true, true) || !sb_isset(sb_get_active_user(), 'department') ? sb_get_setting('departments') : false;
    $count = is_array($departments) ? count($departments) : 0;
    $sources = [['em', 'Email', true], ['tk', 'Tickets', 'SB_TICKETS'], ['wa', 'WhatsApp', 'SB_WHATSAPP'], ['fb', 'Messenger', 'SB_MESSENGER'], ['ig', 'Instagram', 'SB_MESSENGER'], ['tg', 'Telegram', 'SB_TELEGRAM'], ['tw', 'Twitter', 'SB_TWITTER'], ['bm', 'Business Messages', 'SB_GBM'], ['vb', 'Viber', 'SB_VIBER'], ['ln', 'LINE', 'SB_LINE'], ['wc', 'WeChat', 'SB_WECHAT'], ['tm', 'Text message', true]];
    $tags = sb_get_multi_setting('disable', 'disable-tags') ? [] : sb_get_setting('tags', []);
    $code = '<div class="sb-filter-btn"><i class="sb-icon sb-icon-filter"></i><div><div class="sb-select' . ($count ? '' : ' sb-hide') . '"><p>' . sb_('All departments') . '</p><ul><li data-value="">' . sb_('All departments') . '</li>';
    for ($i = 0; $i < $count; $i++) {
        $code .= '<li data-value="' . $departments[$i]['department-id'] . '">' . ucfirst(sb_($departments[$i]['department-name'])) . '</li>';
    }
    $code .= '</ul></div>';
    if (!sb_get_multi_setting('disable', 'disable-channels-filter')) {
        $code .= '<div class="sb-select"><p>' . sb_('All channels') . '</p><ul><li data-value="false">' . sb_('All channels') . '</li><li data-value="">' . sb_('Chat') . '</li>';
        for ($i = 0; $i < count($sources); $i++) {
            if ($sources[$i][2] === true || defined($sources[$i][2])) {
                $code .= '<li data-value="' . $sources[$i][0] . '">' . $sources[$i][1] . '</li>';
            }
        }
        $code .= '</ul></div>';
    } else {
        $code .= '<div class="sb-select sb-hide"></div>';
    }
    if (count($tags)) {
        $code .= '<div class="sb-select"><p>' . sb_('All tags') . '</p><ul><li data-value="">' . sb_('All tags') . '</li>';
        for ($i = 0; $i < count($tags); $i++) {
            $code .= '<li data-value="' . $tags[$i]['tag-name'] . '">' . $tags[$i]['tag-name'] . '</li>';
        }
        $code .= '</ul></div>';
    } else {
        $code .= '<div class="sb-select sb-hide"></div>';
    }
    echo $code .= '</div></div>';
}

?>