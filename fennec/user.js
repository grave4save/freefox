/*
 * This file is part of the MozBackup project,
 * Copyright (c) 2018 Bogachenko Vyacheslav
 *
 * MozBackup is a free project: you can distribute it and/or modify
 * it in accordance with the MIT license published by the Massachusetts Institute of Technology.
 *
 * The MozBackup project is distributed in the hope that it will be useful,
 * and is provided "AS IS", WITHOUT ANY WARRANTY, EXPRESSLY EXPRESSED OR IMPLIED.
 * WE ARE NOT RESPONSIBLE FOR ANY DAMAGES DUE TO THE USE OF THIS PROJECT OR ITS PARTS.
 * For more information, see the MIT license.
 *
 * Author: Bogachenko Vyacheslav <https://github.com/bogachenko>
 * Email: bogachenkove@gmail.com
 * Github: https://github.com/bogachenko/mozbackup/tree/master/fennec/
 * Last modified: December 3, 2018
 * License: MIT <https://github.com/bogachenko/mozbackup/blob/master/LICENSE.md>
 * Problem reports: https://github.com/bogachenko/mozbackup/issues
 * Title: user.js
 * URL: https://github.com/bogachenko/mozbackup/blob/master/fennec/user.js
 *
 * Download the entire MozBackup project at https://github.com/bogachenko/mozbackup/archive/master.zip */

/* Warning in "about:config"
 * Предупреждение в "about:config" */
user_pref("general.warnOnAboutConfig", false);

/* Warning in "about:networking"
 * Предупреждение в "about:networking" */
user_pref("network.warnOnAboutNetworking", false);

/* Snippets
 * Сниппеты */
user_pref("browser.snippets.enabled", false);
user_pref("browser.snippets.firstrunHomepage.enabled", false);
user_pref("browser.snippets.geoUrl", "");
user_pref("browser.snippets.statsUrl", "");
user_pref("browser.snippets.syncPromo.enabled", false);
user_pref("browser.snippets.updateInterval", 0);
user_pref("browser.snippets.updateUrl", "");

/* Font size
 *		[NOTE] The fonts below have a standard size, so they are commented out.
 *		Don't change the size if you don't know what you're doing.
 * Размер шрифта
 *		[ЗАМЕТКА] Шрифты ниже имеют стандартный размер, поэтому они закомментированы.
 *		Не меняйте размер, если не знаете, что делаете. */
// user_pref("font.size.fixed.x-cyrillic", 13);
// user_pref("font.size.fixed.x-unicode", 13);
// user_pref("font.size.fixed.x-western", 13);
// user_pref("font.size.fixed.ar", 13);
// user_pref("font.size.fixed.el", 13);
// user_pref("font.size.fixed.he", 13);
// user_pref("font.size.fixed.ja", 16);
// user_pref("font.size.fixed.ko", 16);
// user_pref("font.size.fixed.th", 13);
// user_pref("font.size.fixed.x-armn", 13);
// user_pref("font.size.fixed.x-beng", 13);
// user_pref("font.size.fixed.x-cans", 13);
// user_pref("font.size.fixed.x-devanagari", 13);
// user_pref("font.size.fixed.x-ethi", 13);
// user_pref("font.size.fixed.x-geor", 13);
// user_pref("font.size.fixed.x-gujr", 13);
// user_pref("font.size.fixed.x-guru", 13);
// user_pref("font.size.fixed.x-khmr", 13);
// user_pref("font.size.fixed.x-knda", 13);
// user_pref("font.size.fixed.x-math", 13);
// user_pref("font.size.fixed.x-mlym", 13);
// user_pref("font.size.fixed.x-orya", 13);
// user_pref("font.size.fixed.x-sinh", 13);
// user_pref("font.size.fixed.x-tamil", 13);
// user_pref("font.size.fixed.x-telu", 13);
// user_pref("font.size.fixed.x-tibt", 13);
// user_pref("font.size.fixed.zh-CN", 16);
// user_pref("font.size.fixed.zh-HK", 16);
// user_pref("font.size.fixed.zh-TW", 16);
// user_pref("font.size.variable.ar", 16);
// user_pref("font.size.variable.el", 16);
// user_pref("font.size.variable.he", 16);
// user_pref("font.size.variable.ja", 16);
// user_pref("font.size.variable.ko", 16);
// user_pref("font.size.variable.th", 16);
// user_pref("font.size.variable.x-armn", 16);
// user_pref("font.size.variable.x-beng", 16);
// user_pref("font.size.variable.x-cans", 16);
// user_pref("font.size.variable.x-cyrillic", 16);
// user_pref("font.size.variable.x-devanagari", 16);
// user_pref("font.size.variable.x-ethi", 16);
// user_pref("font.size.variable.x-geor", 16);
// user_pref("font.size.variable.x-gujr", 16);
// user_pref("font.size.variable.x-guru", 16);
// user_pref("font.size.variable.x-khmr", 16);
// user_pref("font.size.variable.x-knda", 16);
// user_pref("font.size.variable.x-math", 16);
// user_pref("font.size.variable.x-mlym", 16);
// user_pref("font.size.variable.x-orya", 16);
// user_pref("font.size.variable.x-sinh", 16);
// user_pref("font.size.variable.x-tamil", 16);
// user_pref("font.size.variable.x-telu", 16);
// user_pref("font.size.variable.x-tibt", 16);
// user_pref("font.size.variable.x-unicode", 16);
// user_pref("font.size.variable.x-western", 16);
// user_pref("font.size.variable.zh-CN", 16);
// user_pref("font.size.variable.zh-HK", 16);
// user_pref("font.size.variable.zh-TW", 16);

/* Proportions (fonts)
 *		[NOTE] The proportions given below are standard, so they are commented out.
 *		Don't change the proportions if you don't know what you're doing.
 * Пропорции (шрифты)
 *		[ЗАМЕТКА] Указанные ниже пропорции являются стандартными, поэтому они закомментированы.
 *		Не изменяйте пропорции, если вы не знаете, что делаете. */
// user_pref("font.default.ar", "sans-serif");
// user_pref("font.default.el", "serif");
// user_pref("font.default.he", "sans-serif");
// user_pref("font.default.ja", "sans-serif");
// user_pref("font.default.ko", "sans-serif");
// user_pref("font.default.th", "sans-serif");
// user_pref("font.default.x-armn", "serif");
// user_pref("font.default.x-beng", "serif");
// user_pref("font.default.x-cans", "serif");
// user_pref("font.default.x-cyrillic", "serif");
// user_pref("font.default.x-devanagari", "serif");
// user_pref("font.default.x-ethi", "serif");
// user_pref("font.default.x-geor", "serif");
// user_pref("font.default.x-gujr", "serif");
// user_pref("font.default.x-guru", "serif");
// user_pref("font.default.x-khmr", "serif");
// user_pref("font.default.x-knda", "serif");
// user_pref("font.default.x-math", "serif");
// user_pref("font.default.x-mlym", "serif");
// user_pref("font.default.x-orya", "serif");
// user_pref("font.default.x-sinh", "serif");
// user_pref("font.default.x-tamil", "serif");
// user_pref("font.default.x-telu", "serif");
// user_pref("font.default.x-tibt", "serif");
// user_pref("font.default.x-unicode", "serif");
// user_pref("font.default.x-western", "serif");
// user_pref("font.default.zh-CN", "sans-serif");
// user_pref("font.default.zh-HK", "sans-serif");
// user_pref("font.default.zh-TW", "sans-serif");

/* Default Fonts
 *		[NOTE] The default is Droid, but you can change them for example on Google Noto <https://www.google.com/get/noto/>.
 * Шрифты по умолчанию
 *		[ЗАМЕТКА] По умолчанию используется Droid, однако вы можете изменить их например на Google Noto <https://www.google.com/get/noto/>. */
// user_pref("font.name.serif.x-cyrillic", "Noto Serif");
// user_pref("font.name.sans-serif.x-cyrillic", "Noto Sans");
// user_pref("font.name.monospace.x-cyrillic", "Noto Mono");
// user_pref("font.name.serif.x-western", "Noto Serif");
// user_pref("font.name.sans-serif.x-western", "Noto Sans");
// user_pref("font.name.monospace.x-western", "Noto Mono");
// user_pref("font.name.serif.ar", "Noto Naskh Arabic");
// user_pref("font.name.sans-serif.ar", "Noto Naskh Arabic");
// user_pref("font.name.monospace.ar", "Noto Naskh Arabic");
// user_pref("font.name.serif.x-armn", "Noto Serif Armenian");
// user_pref("font.name.sans-serif.x-armn", "Noto Sans Armenian");
// user_pref("font.name.monospace.x-armn", "Noto Sans Armenian");
// user_pref("font.name.serif.x-beng", "Noto Serif Bengali");
// user_pref("font.name.sans-serif.x-beng", "Noto Sans Bengali");
// user_pref("font.name.monospace.x-beng", "Noto Sans Bengali");
// user_pref("font.name.serif.zh-CN", "Noto Serif CJK SC");
// user_pref("font.name.sans-serif.zh-CN", "Noto Sans CJK SC");
// user_pref("font.name.monospace.zh-CN", "Noto Sans CJK SC");
// user_pref("font.name.serif.zh-TW", "Noto Serif CJK TC");
// user_pref("font.name.sans-serif.zh-TW", "Noto Sans CJK TC");
// user_pref("font.name.monospace.zh-TW", "Noto Sans CJK TC");
// user_pref("font.name.serif.zh-HK", "Noto Serif CJK TC");
// user_pref("font.name.sans-serif.zh-HK", "Noto Sans CJK TC");
// user_pref("font.name.monospace.zh-HK", "Noto Sans CJK TC");
// user_pref("font.name.serif.x-devanagari", "Noto Serif Devanagari");
// user_pref("font.name.sans-serif.x-devanagari", "Noto Sans Devanagari");
// user_pref("font.name.monospace.x-devanagari", "Noto Sans Devanagari");
// user_pref("font.name.serif.x-ethi", "Noto Serif Ethiopic");
// user_pref("font.name.sans-serif.x-ethi", "Noto Sans Ethiopic");
// user_pref("font.name.monospace.x-ethi", "Noto Sans Ethiopic");
// user_pref("font.name.serif.x-geor", "Noto Serif Georgian");
// user_pref("font.name.sans-serif.x-geor", "Noto Sans Georgian");
// user_pref("font.name.monospace.x-geor", "Noto Sans Georgian");
// user_pref("font.name.serif.x-gujr", "Noto Serif Gujarati");
// user_pref("font.name.sans-serif.x-gujr", "Noto Sans Gujarati");
// user_pref("font.name.monospace.x-gujr", "Noto Sans Gujarati");
// user_pref("font.name.serif.x-guru", "Noto Serif Gurmukhi");
// user_pref("font.name.sans-serif.x-guru", "Noto Sans Gurmukhi");
// user_pref("font.name.monospace.x-guru", "Noto Sans Gurmukhi");
// user_pref("font.name.serif.he", "Noto Serif Hebrew");
// user_pref("font.name.sans-serif.he", "Noto Sans Hebrew");
// user_pref("font.name.monospace.he", "Noto Sans Hebrew");
// user_pref("font.name.serif.ja", "Noto Serif CJK JP");
// user_pref("font.name.sans-serif.ja", "Noto Sans CJK JP");
// user_pref("font.name.monospace.ja", "Noto Sans CJK JP");
// user_pref("font.name.serif.el", "Noto Serif");
// user_pref("font.name.sans-serif.el", "Noto Sans");
// user_pref("font.name.monospace.el", "Noto Sans Mono");
// user_pref("font.name.serif.x-knda", "Noto Serif Kannada");
// user_pref("font.name.sans-serif.x-knda", "Noto Sans Kannada");
// user_pref("font.name.monospace.x-knda", "Noto Sans Kannada");
// user_pref("font.name.serif.x-khmr", "Noto Serif Khmer");
// user_pref("font.name.sans-serif.x-khmr", "Noto Sans Khmer");
// user_pref("font.name.monospace.x-khmr", "Noto Sans Khmer");
// user_pref("font.name.serif.ko", "Noto Serif CJK KR");
// user_pref("font.name.sans-serif.ko", "Noto Sans CJK KR");
// user_pref("font.name.monospace.ko", "Noto Sans CJK KR");
// user_pref("font.name.serif.x-mlym", "Noto Serif Malayalam");
// user_pref("font.name.sans-serif.x-mlym", "Noto Sans Malayalam");
// user_pref("font.name.monospace.x-mlym", "Noto Sans Malayalam");
// user_pref("font.name.serif.x-orya", "Noto Sans Oriya");
// user_pref("font.name.sans-serif.x-orya", "Noto Sans Oriya");
// user_pref("font.name.monospace.x-orya", "Noto Sans Oriya");
// user_pref("font.name.serif.x-math", "Latin Modern Math");
// user_pref("font.name.sans-serif.x-math", "Latin Modern Math");
// user_pref("font.name.monospace.x-math", "Latin Modern Math");
// user_pref("font.name.serif.x-sinh", "Noto Serif Sinhala");
// user_pref("font.name.sans-serif.x-sinh", "Noto Sans Sinhala");
// user_pref("font.name.monospace.x-sinh", "Noto Sans Sinhala");
// user_pref("font.name.serif.x-tamil", "Noto Serif Tamil");
// user_pref("font.name.sans-serif.x-tamil", "Noto Sans Tamil");
// user_pref("font.name.monospace.x-tamil", "Noto Sans Tamil");
// user_pref("font.name.serif.x-telu", "Noto Serif Telugu");
// user_pref("font.name.sans-serif.x-telu", "Noto Sans Telugu");
// user_pref("font.name.monospace.x-telu", "Noto Sans Telugu");
// user_pref("font.name.serif.x-tibt", "Noto Sans Tibetan");
// user_pref("font.name.sans-serif.x-tibt", "Noto Sans Tibetan");
// user_pref("font.name.monospace.x-tibt", "Noto Sans Tibetan");
// user_pref("font.name.serif.x-unicode", "Noto Serif");
// user_pref("font.name.sans-serif.x-unicode", "Noto Sans");
// user_pref("font.name.monospace.x-unicode", "Noto Mono");
// user_pref("font.name.serif.th", "Noto Serif Thai");
// user_pref("font.name.sans-serif.th", "Noto Sans Thai");
// user_pref("font.name.monospace.th", "Noto Sans Thai");
// user_pref("font.name.serif.x-cans", "serif");
// user_pref("font.name.sans-serif.x-cans", "sans-serif");
// user_pref("font.name.monospace.x-cans", "monospace");
// user_pref("font.language.group", "x-western");

/* Forced to use UTF-8 for text files
 * Принудительное использование UTF-8 для текстовых файлов */
user_pref("intl.charset.fallback.utf8_for_file", true);

/* Automatic check for updates for the Fennec browser
 * Автоматическая проверка обновлений для браузера Fennec */
user_pref("app.update.autodownload", "never");

/* Automatic check for updates for extensions
 * Автоматическая проверка обновлений для расширений */
user_pref("extensions.autoupdate.enabled", false);
user_pref("extensions.update.enabled", false);

/* Update extension metadata
 * Обновление метаданных расширения */
user_pref("extensions.getAddons.cache.enabled", false);

/* Automatic update of search engines
 * Автоматическое обновление поисковых систем */
user_pref("browser.search.update", false);

/* Search suggestions
 * Поисковые предложения */
user_pref("browser.search.suggest.enabled", false);

/* Guessing the domain in the address bar
 * Угадывание домена в адресной строке */
user_pref("browser.fixup.alternate.enabled", false);
user_pref("browser.fixup.alternate.prefix", "");
user_pref("browser.fixup.alternate.suffix", "");

/* Number of steps  "To previous page" and  "To next page"
 * Количество шагов "На предыдущую страницу" и "На следующую страницу" */
user_pref("browser.sessionhistory.max_entries", 10);

/* Autocomplete
 * Автозаполнение */
user_pref("browser.urlbar.autocomplete.enabled", false);

/* Remember the search history and form data
 * Помнить историю поиска и данные формы */
user_pref("browser.formfill.enable", false);
user_pref("browser.formfill.expire_days", 0);

/* Maximum number of backup bookmarks
 * Максимальное количество резервных закладок */
user_pref("browser.bookmarks.max_backups", 3);

/* WebRTC (Web Real-Time Communication)
 * WebRTC (Веб Связь в Реальном Времени) */
user_pref("media.navigator.video.enabled", false);
user_pref("media.peerconnection.dtmf.enabled", false);
user_pref("media.peerconnection.enabled", false);
user_pref("media.peerconnection.ice.tcp", false);
user_pref("media.peerconnection.identity.enabled", false);
user_pref("media.peerconnection.identity.timeout", 1);
user_pref("media.peerconnection.rtpsourcesapi.enabled", false);
user_pref("media.peerconnection.simulcast", false);
user_pref("media.peerconnection.turn.disable", true);
user_pref("media.peerconnection.use_document_iceservers", false);
user_pref("media.peerconnection.video.enabled", false);

/* Limit WebRTC IP address leaks when using WebRTC
 * Ограничение утечек IP-адресов WebRTC при использовании WebRTC */
user_pref("media.peerconnection.ice.default_address_only", true);
user_pref("media.peerconnection.ice.no_host", true);

/* Screensharing
 * Общий доступ к экрану */
user_pref("media.getusermedia.agc_enabled", false);
user_pref("media.getusermedia.audiocapture.enabled", false);
user_pref("media.getusermedia.browser.enabled", false);
user_pref("media.getusermedia.noise_enabled", false);

/* Automatic HTML5 media playback
 *		0 = Allow
 *		1 = Block
 *		2 = Ask
 *		[WARNING] This may break video playback on various sites.
 * Автоматическое воспроизведение мультимедиа в формате HTML5
 *		0 = Разрешить
 *		1 = Заблокировать
 *		2 = Спросить
 *		[ВНИМАНИЕ] Это может нарушить воспроизведение видео на разных сайтах. */
// user_pref("media.autoplay.default", 1);

/* Logic blocking autoplay version 2 and enable user interface
 * Логика блокировки автовоспроизведения версии 2 и включить пользовательский интерфейс */
// user_pref("media.autoplay.enabled.user-gestures-needed", true);

/* Allow asking for permission to autoplay to appear in user interface
 * Запрашивать разрешение на автовоспроизведение в пользовательском интерфейсе */
// user_pref("media.autoplay.ask-permission", true);

/* Automatically play sound in inactive tabs
 *		TRUE = Do not play
 *		FALSE = Play
 * Автоматическое воспроизведение звука в неактивных вкладках
 *		TRUE = Не воспроизводить
 *		FALSE = Воспроизводить */
user_pref("media.block-autoplay-until-in-foreground", true);

/* Volume status
 * Состояние громкости */       
user_pref("media.default_volume", "0.5");

/* WEBM */
user_pref("media.mediasource.webm.enabled", true);

/* Telemetry
 * Телеметрия */
user_pref("toolkit.telemetry.enabled", false);
user_pref("toolkit.telemetry.server", "data:,");
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.debugSlowSql", false);
user_pref("toolkit.telemetry.reportingpolicy.firstRun", false);

/* Firefox health report
 * Отчет о состоянии здоровья Firefox */
user_pref("datareporting.policy.dataSubmissionEnabled", false);

/* Crash reports
 * Отчеты о сбоях */
user_pref("breakpad.reportURL", "");

/* Location accounting
 * Учет местоположения */
user_pref("geo.enabled", false);

/* GeoIP-based search results
 * Результаты поиска на основе GeoIP */
user_pref("browser.search.region", "US");
user_pref("browser.search.geoip.url", "");
user_pref("browser.search.geoip.timeout", 0);

/* Application language
 * Язык приложения */
// user_pref("intl.locale.requested", "ru");

/* Regional specificity for search results and search engines
 * Региональная специфика для результатов поиска и поисковых систем */
user_pref("browser.search.geoSpecificDefaults", false);
user_pref("browser.search.geoSpecificDefaults.url", "");

/* Use the application language over the language of your operating system in the regional settings
 * Использовать язык приложения поверх языка вашей операционной системы в региональных настройках */
user_pref("intl.regional_prefs.use_os_locales", false);

/* First Party Isolation
 * Изоляция первой стороны */
user_pref("privacy.firstparty.isolate", true);

/* First Party Isolation restriction
 * Ограничение изоляции первой стороны */
user_pref("privacy.firstparty.isolate.restrict_opener_access", true);

/* Firefox Fingerprints
 * Отпечатки пальцев Firefox */
user_pref("privacy.resistFingerprinting", true);
user_pref("privacy.resistFingerprinting.autoDeclineNoUserInputCanvasPrompts", false);

/* Install only signed extensions
 * Установка только подписанных расширений */
user_pref("extensions.langpacks.signatures.required", true); // Require signing language pack ~ Требование подписи языкового пакета
user_pref("xpinstall.signatures.required", true); // Require signing extensions ~ Требовать подписание расширений

/* Add-on installation delay
 * Задержка при установке дополнений */
user_pref("security.dialog_enable_delay", 0);

/* Default plugins state
 *		0 = Disabled
 *		1 = Request activation
 *		2 = Active, individual plugins can be overridden
 * Состояние плагинов по умолчанию
 *		0 = Отключено
 *		1 = Запрашивать активацию
 *		2 = Активно, можно переопределить отдельные плагины */
user_pref("plugin.default.state", 0);

/* Activate the plugin by clicking
 * Активация плагина по клику */
user_pref("plugins.click_to_play", true);

/* Time to run plugins
 * Время для запуска плагинов */
user_pref("plugin.sessionPermissionNow.intervalInMinutes", 0);

/* GMP (Gecko Media Plugins)
 * GMP (Gecko Медиа Плагины) */
user_pref("media.gmp-provider.enabled", false);
user_pref("media.gmp.trial-create.enabled", false);
user_pref("media.gmp-manager.url", "data:text/plain,");
user_pref("media.gmp-manager.cert.checkAttributes", false);
user_pref("media.gmp-manager.buildID", "");
user_pref("media.gmp-manager.lastCheck", "");
user_pref("media.gmp-manager.certs.1.commonName", "");
user_pref("media.gmp-manager.certs.1.issuerName", "");
user_pref("media.gmp-manager.certs.2.commonName", "");
user_pref("media.gmp-manager.certs.2.issuerName", "");
user_pref("media.gmp-manager.cert.requireBuiltIn", false);

/* Digital Rights Management (DRM)
 * Управление цифровыми правами */
user_pref("media.eme.enabled", false);

/* Preload browser links
 * Предварительная загрузка браузером ссылок */
user_pref("network.prefetch-next", false);

/* DNS browser preloading
 * Предварительная загрузка браузером DNS */
user_pref("network.dns.disablePrefetch", true);
user_pref("network.dns.disablePrefetchFromHTTPS", true);

/* Sending ping
 * Отправка пинга */
user_pref("browser.send_pings", false);
user_pref("browser.send_pings.max_per_link", 0);
user_pref("browser.send_pings.require_same_host", true);

/* Send DNS requests through a proxy using SOCKS 5
 * Отправлять DNS-запросы через прокси при использовании SOCKS 5 */
user_pref("network.proxy.socks_remote_dns", true);

/* Redirecting to the provider's page
 * Перенаправление на страницу провайдера */
user_pref("captivedetect.canonicalURL", "");
user_pref("network.captive-portal-service.enabled", false);
user_pref("network.captive-portal-service.minInterval", 0);

/* HTTP Header "Do Not Track"
 * Заголовок HTTP "Не Отслеживать" */
// user_pref("privacy.donottrackheader.enabled", true);

/* TOR: hide referrer when leaving a .onion domain
 * TOR: скрыть referrer при выходе с домена .onion */
user_pref("network.http.referer.hideOnionSource", true);

/* Cache API (Cache storage)
 *		[NOTE] It is a repository on the user's computer where scripts can store information.
 *		It is part of the "Service Workers" specification, but can be used without them.
 * API Кэша (Хранилище кэша)
 *		[ЗАМЕТКА] Это хранилище на компьютере пользователя, куда скрипты могут складывать информацию.
 *		Оно является частью спецификации "Service Workers", но может быть использовано и без них. */
user_pref("dom.caches.enabled", false);

/* Web notifications
 * Веб-уведомления */
user_pref("dom.webnotifications.enabled", false);
user_pref("dom.webnotifications.serviceworker.enabled", false);

/* Push notifications
 * Push-уведомления */
user_pref("dom.push.enabled", false);
user_pref("dom.push.connection.enabled", false);
user_pref("dom.push.serverURL", "");
user_pref("dom.push.userAgentID", "");

/* Disk cache
 * Кэш-диска */
user_pref("browser.cache.disk.capacity", 0);
user_pref("browser.cache.disk.enable", false);
user_pref("browser.cache.disk.smart_size.enabled", false);
user_pref("browser.cache.disk.smart_size.first_run", false);

/* Disk cache for SSL pages
 * Кэш-диск для SSL-страниц */
user_pref("browser.cache.disk_cache_ssl", false);

/* Fastback cache
 *		0 = Disable
 *		-1 = Auto
 * Кэш Fastback
 *		0 = Отключить
 *		-1 = Автоматически */
user_pref("browser.sessionhistory.max_total_viewers", 0);

/* Session Recovery Service for tabs
 * Служба восстановления сеанса для вкладок */
user_pref("browser.sessionstore.max_tabs_undo", 10);

/* Offline cache
 * Автономный кэш */
user_pref("browser.cache.offline.enable", false);

/* Offline cache on insecure sites
 * Автономный кэш на небезопасных сайтах */
user_pref("browser.cache.offline.insecure.enable", false);

/* Request to use the offline cache
 * Запрос на использование автономного кеша */
user_pref("offline-apps.allow_by_default", false);

/* Storing extra session data
 *		0 = Everywhere
 *		1 = Unencrypted sites
 *		2 = Nowhere
 * Сохранение дополнительных данных сеанса
 *		0 = Везде
 *		1 = Незашифрованные сайты
 *		2 = Нигде */
user_pref("browser.sessionstore.privacy_level", 2);

/* Resume session after crash
 * Возобновление сеанса после сбоя */
user_pref("browser.sessionstore.resume_from_crash", false);

/* Interval between saving sessions
 * Интервал между сохранением сеансов */
user_pref("browser.sessionstore.interval", 60000);

/* Cookies
 *		0 = Accept cookies and site data
 *		1 = Block third-party cookies
 *		2 = Block all cookies
 * Куки
 *		0 = Принимать куки и данные сайтов
 *		1 = Блокировать стороннии куки
 *		2 = Блокировать все куки */
user_pref("network.cookie.cookieBehavior", 1);

/* Third-party cookies are set for the session only
 * Сторонние файлы куки устанавливаются только для сеанса */
user_pref("network.cookie.thirdparty.sessionOnly", true);
user_pref("network.cookie.thirdparty.nonsecureSessionOnly", true);

/* Сookie lifetime policy
 *		0 = Save them before expiration
 *		2 = Save them until close Firefox
 * Политика жизни куки
 *		0 = Сохранять их до истечения срока действия
 *		2 = Сохранять их до закрытия Firefox */
user_pref("network.cookie.lifetimePolicy", 0);

/* Indexed database API
 * API Индексированных баз данных */
user_pref("dom.indexedDB.enabled", true);
user_pref("dom.indexedDB.experimental", false);
user_pref("dom.indexedDB.logging.details", false);
user_pref("dom.indexedDB.logging.enabled", false);

/* Storage API
 *		[NOTE] Disables another way for sites to store their data on the user's personal computer.
 * API Хранилища
 *		[ЗАМЕТКА] Отключает еще один способ для сайтов хранить свои данные на персональном компьютере пользователя. */
user_pref("dom.storageManager.enabled", false);

/* Limit events that can trigger a pop-up
 * Ограничения событий, которые могут вызвать всплывающее окно */
user_pref("dom.popup_allowed_events", "click dblclick");

/* Special services (accessibility support services)
 * Специальные услуги (службы поддержки доступности) */
user_pref("accessibility.force_disabled", 1);

/* Additional analytics sent to the web server
 * Дополнительная аналитика, отправленная на веб-сервер */
user_pref("beacon.enabled", false);

/* Deleting temporary files opened by an external application
 * Удаление временных файлов, открытые внешним приложением */
user_pref("browser.helperApps.deleteTempFileOnExit", true);

/* Web Speech
 * Веб-речь */
user_pref("media.webspeech.synth.enabled", false);
user_pref("media.webspeech.recognition.enable", false);

/* Sending video playback statistics
 * Отправка статистики воспроизведения видео */
user_pref("media.video_stats.enabled", false);

/* AV1 video codec
 * Видеокодек AV1 */
user_pref("media.av1.enabled", true);

/* Block dangerous and deceptive content (malware, phishing, dangerous downloads)
 * Блокировать опасное и обманывающее содержимое (вредоносные программы, фишинг, опасные загрузки) */
user_pref("browser.safebrowsing.downloads.enabled", false);
user_pref("browser.safebrowsing.malware.enabled", false);
user_pref("browser.safebrowsing.phishing.enabled", false);

/* Warning about unwanted and rarely downloaded programs
 * Предупреждение о нежелательных и редко загружаемых программах */
user_pref("browser.safebrowsing.downloads.remote.block_dangerous", false);
user_pref("browser.safebrowsing.downloads.remote.block_dangerous_host", false);
user_pref("browser.safebrowsing.downloads.remote.block_potentially_unwanted", false);
user_pref("browser.safebrowsing.downloads.remote.block_uncommon", false);

/* Tracking protection in all windows
 *		[NOTE] When enabled, the processor load increases, and the same uBlock Origin does well with this
 * Защита слежения во всех окнах
 *		[ЗАМЕТКА] При включении возрастает нагрузка на процессор, к тому же с этим хорошо справляется тот же uBlock Origin */
user_pref("privacy.trackingprotection.enabled", false);
user_pref("privacy.trackingprotection.pbmode.enabled", false);
user_pref("privacy.trackingprotection.introURL", "");
user_pref("privacy.trackingprotection.annotate_channels", false);
user_pref("privacy.trackingprotection.lower_network_priority", false);

/* DOM forms
 * DOM формы */
user_pref("dom.forms.datetime", false);
user_pref("dom.forms.datetime.others", false);
user_pref("dom.forms.datetime.timepicker", false);

/* Send Flash crash reports
 * Отправка отчетов о сбоях Flash */
user_pref("dom.ipc.plugins.flash.subprocess.crashreporter.enabled", false);

/* Submitting the URL of the website where the plug-in crashed
 * Отправка URL-адреса веб-сайта, где произошел сбой плагина */
user_pref("dom.ipc.plugins.reportCrashURL", false);

/* How often Firefox should ask for a master password
 *		0 = The first time
 *		1 = Every time it's needed
 *		2 = Every "N" minutes
 * Как часто Firefox должен запрашивать мастер-пароль
 *		0 = Первый раз
 *		1 = Каждый раз, когда это необходимо
 *		2 = Каждые "N" минут */
user_pref("security.ask_for_password", 2);

/* How often (within how many minutes) Firefox should ask for a master password
 * Как часто (в течение скольки минут) Firefox должен запрашивать мастер-пароль */
user_pref("security.password_lifetime", 5);

/* Auto-complete user name and password
 * Aвтоматическое заполнение имени пользователя и пароля */
user_pref("signon.autofillForms", false);
user_pref("signon.autofillForms.http", false);
user_pref("security.insecure_field_warning.contextual.enabled", true);

/* Experiments
 * Эксперименты */
user_pref("network.allow-experiments", false);

/* Web Compatibility Reporter
 * Отправка отчетов о совместимости с Интернетом */
user_pref("extensions.webcompat-reporter.enabled", false);
user_pref("extensions.webcompat-reporter.newIssueEndpoint", "");

/* Favicons in web notifications
 * Значки в веб-уведомлениях */
user_pref("alerts.showFavicons", false);

/* Request to save files
 * Запрос на сохранение файлов */
user_pref("browser.download.useDownloadDir", false);

/* Adding downloads to the list of recent system documents
 * Добавление загрузок в список последних документов системы */
user_pref("browser.download.manager.addToRecentDocs", false);

/* Show the "Open with" dialog box in the download window
 * Показ диалогового окна "Открыть при помощи" в окне загрузки */
user_pref("browser.download.forbid_open_with", true);

/* Predictor (formerly Seer)
 *		[NOTE] This is a mechanism that stores the links between the hosts from
 *		which content is requested for a particular URL.
 * Предсказатель (бывший Seer)
 *		[ЗАМЕТКА] Это механизм, запоминающий связи между хостами,
 *		с которых запрашивается контент для того или иного URL. */
user_pref("network.predictor.enabled", false);
user_pref("network.predictor.enable-hover-on-ssl", false);
user_pref("network.predictor.enable-prefetch", false);
user_pref("network.predictor.prefetch-rolling-load-count", 0);

/* Automatic preload pages when you hover over links
 * Автоматическая предзагрузка страниц при наведении курсора на ссылки */
user_pref("network.http.speculative-parallel-limit", 0);

/* Search from address panel
 * Поиск из панели адреса */
// user_pref("keyword.enabled", false);

/* Displays all parts of the URL in the address bar
 * Отображения всех части URL-адреса в строке адреса */
user_pref("browser.urlbar.trimURLs", false);

/* Adding sites from Alexa Top 500 to the address bar auto-complete list
 * Добавление сайтов из Alexa Top 500 в список автозаполнения адресной строки */
user_pref("browser.urlbar.usepreloadedtopurls.enabled", false);

/* IPv6 */
user_pref("network.dns.disableIPv6", true);

/* Block allowed extension directories
 *		[WARNING] This will break extensions that do not use the default XPI directories.
 * Заблокировать разрешенные каталоги расширений
 *		[ВНИМАНИЕ] Это приведет к разрыву расширений, которые не используют каталоги XPI по умолчанию. */
user_pref("extensions.enabledScopes", 1);
user_pref("extensions.autoDisableScopes", 15);

/* WebExtension Restrictions for Specific Mozilla Domains
 * Ограничения WebExtension для определенных доменов Mozilla */
user_pref("extensions.webextensions.restrictedDomains", "");

/* Warning when websites try to install add-ons
 * Предупреждение при попытке веб-сайтов установить дополнения */
user_pref("xpinstall.whitelist.required", true);

/* Fullscreen API
 * API Полного экрана */
user_pref("full-screen-api.enabled", true);
user_pref("full-screen-api.warning.delay", 0);
user_pref("full-screen-api.warning.timeout", 0);

/* Animated gradient that runs through the tab after the page is fully loaded
 * Анимированный градиент, который пробегает по вкладке после полной загрузки страницы */
user_pref("toolkit.cosmeticAnimations.enabled", false);

/* Search for text on the page as it is typed
 * Искать текст на странице по мере его набора */
user_pref("accessibility.typeaheadfind", false);

/* Spellchecking
 *		0 = Do not check
 *		1 = Check in multiline fields
 *		2 = Check in all text fields
 * Проверка орфографии
 *		0 = Не проверять
 *		1 = Проверка в многострочных полях
 *		2 = Проверка во всех текстовых полях */
user_pref("layout.spellcheckDefault", 2);

/* Automatic copying
 * Автоматическое копирование */
user_pref("clipboard.autocopy", false);

/* Reader View */
// user_pref("reader.parse-on-load.enabled", false);

/* Text reader function in Reader View
 * Функция зачитывания текста в Reader View */
// user_pref("narrate.enabled", false);

/* WebGL debug info being available to websites
 * Информация об отладке WebGL доступна для веб-сайтов */
user_pref("webgl.enable-debug-renderer-info", false);

/* Mixed content
 * Смешанное содержание */
user_pref("security.mixed_content.block_active_content", true); 
user_pref("security.mixed_content.block_display_content", true);

/* SPDY protocol
 *		[WARNING] This protocol has a privacy problem protocol, use at your own risk.
 * Протокол SPDY
 *		[ВНИМАНИЕ] Данный протокол имеет протокол проблемы с приватностью, используйте на свой страх и риск. */
user_pref("network.http.spdy.enabled", true);
user_pref("network.http.spdy.enabled.deps", true);
user_pref("network.http.spdy.enabled.http2", true);

/* WebGL (Web Graphics Library)
 * WebGL (Библиотека веб-графики) */
// user_pref("webgl.disable-extensions", true);
// user_pref("webgl.disable-fail-if-major-performance-caveat", true);
// user_pref("webgl.disabled", true);
// user_pref("webgl.enable-webgl2", false);
// user_pref("webgl.force-enabled", false);
// user_pref("webgl.min_capability_mode", true);
// user_pref("webgl.msaa-force", false);

/* Service Workers
 *		[NOTE] "Service workers" essentially act as proxy servers that sit between web apps, and the browser and network,
 *		are event driven, and can control the web page/site it is associated with, intercepting and modifying navigation
 *		and resource requests, and caching resources.
 *		[ЗАМЕТКА] "Service workers" по существу действуют как прокси-серверы, которые находятся между веб-приложениями,
 *		браузером и сетью, управляются событиями и могут управлять веб-страницей или сайтом, с которыми они связаны,
 *		перехватывать и изменять запросы навигации и ресурсов, а также кэшировать ресурсы. */
user_pref("dom.serviceWorkers.enabled", false);

/* Cookies for HTTP sites are set with the "secure" directive
 * Файлы куки для сайтов HTTP устанавливаются с "защищенной" директивой */
user_pref("network.cookie.leave-secure-alone", true);

/* SameSite сookies
 * Куки SameSite */
user_pref("network.cookie.same-site.enabled", true);

/* DOM (Document Object Model) Storage
 *		[WARNING] This will break a LOT of sites' functionality AND extensions.
 *		You are better off using an extension for more granular control.
 * Хранилище DOM (Объектная Модель Документа)
 *		[ВНИМАНИЕ] Отключение этого предпочтения сломает много функций и расширений сайтов.
 *		Вам лучше использовать расширение для более гранулированного контроля. */
user_pref("dom.storage.enabled", true);

/* Warn showing red lock for "broken security"
 * Предупреждать, показывая красный замок для "сломанной безопасности" */
user_pref("security.ssl.treat_unsafe_negotiation_as_broken", true);

/* In the "Add Security Exception" dialog box on SSL warnings
 *		0 = Do not fill out the current URL as an exception and do not select an SSL certificate
 *		1 = Pre-populate the current URL, but do not pre-select the certificate
 *		2 = Pre-populate the current URL and select a certificate
 * В диалоговом окне "Добавить исключение безопасности" на предупреждениях SSL
 *		0 = Не заполнять текущий URL-адрес в качестве исключения и
 *			не выполнять выбор SSL-сертификата
 *		1 = Предварительно заполнять текущий URL-адрес,
 *			но не выполнять предварительный выбор сертификата
 *		2 = Предварительно заполнить текущий URL-адрес и выбрать сертификат */
user_pref("browser.ssl_override_behavior", 0);

/* Additional information about the pages warning about unsafe connections
 * Дополнительная информация о страницах, предупреждающая о небезопасном подключении */
user_pref("browser.xul.error_pages.expert_bad_cert", true);

/* MediaDevices */
user_pref("media.ondevicechange.enabled", false);

/* Querying Google Application Reputation database for downloaded binary files
 * Запрос базы данных репутации приложения Google для загруженных двоичных файлов */
user_pref("browser.safebrowsing.downloads.remote.enabled", false);
user_pref("browser.safebrowsing.downloads.remote.url", "");

/* Safebrowsing reports
 * Отчеты Safebrowsing */
user_pref("browser.safebrowsing.provider.google4.reportMalwareMistakeURL", "");
user_pref("browser.safebrowsing.provider.google4.reportPhishMistakeURL", "");
user_pref("browser.safebrowsing.provider.google4.reportURL", "");
user_pref("browser.safebrowsing.provider.google.reportMalwareMistakeURL", "");
user_pref("browser.safebrowsing.provider.google.reportPhishMistakeURL", "");
user_pref("browser.safebrowsing.provider.google.reportURL", "");
user_pref("browser.safebrowsing.reportPhishURL", "");
user_pref("browser.safebrowsing.provider.mozilla.lists", "");
user_pref("browser.safebrowsing.provider.mozilla.updateURL", "");
user_pref("browser.safebrowsing.provider.mozilla.gethashURL", "");
user_pref("browser.safebrowsing.provider.google4.dataSharing.enabled", false);
user_pref("browser.safebrowsing.provider.google4.dataSharingURL", "");

/* Button "Ignore this warning" on the pages of safe browsing
 *		[NOTE] Useless for regular users, it's meant for admins on bigger network as a way to secure their users.
 * Кнопка "Игнорировать это предупреждение" на страницах безопасного просмотра
 *		[ЗАМЕТКА] Бесполезный для обычных пользователей, он предназначен для администраторов в большей сети,
 *		как способ защитить своих пользователей. */
user_pref("browser.safebrowsing.allowOverride", false);

/* OCSP Stapling
 * Сшивание OCSP */
user_pref("security.ssl.enable_ocsp_stapling", true);
user_pref("security.ssl.enable_ocsp_must_staple", true);

/* Resource timing API
 * API Ресурсов времени */
user_pref("dom.enable_resource_timing", false);

/* Browser sends information about the start and end time of page loading
 * Передача браузером информации о времени начала и окончания загрузки страницы */
user_pref("dom.enable_performance", false);
user_pref("dom.enable_performance_navigation_timing", false);
user_pref("dom.enable_performance_observer", false);

/* Sensor API
 *		[NOTE] Disables events from the accelerometer and other sensors.
 * API Сенсора
 *		[ЗАМЕТКА] Отключает события от акселерометра и других сенсоров. */
user_pref("device.sensors.enabled", false);

/* CSP (Content Security Policy)
 * Политика безопасности контента */
user_pref("security.csp.enable", true);
user_pref("security.csp.enable_violation_events", false);
user_pref("security.csp.experimentalEnabled", false);
user_pref("security.data_uri.block_toplevel_data_uri_navigations", true);

/* Online Certificate Status Protocol
 *		0 = Disabled
 *		1 = Enabled
 *		2 = Enabled for EV certificates only
 * Протокол статуса сертификата онлайн
 *		0 = Отключено
 *		1 = Включен
 *		2 = Включено только для сертификатов EV */
user_pref("security.OCSP.enabled", 1);

/* Require a valid OCSP response for OCSP enabled certificates
 *		[WARNING] When you turn on breaks some sites.
 * Требовать действительный ответ OCSP для сертификатов с поддержкой OCSP
 *		[ВНИМАНИЕ] При включении ломается некоторые сайты. */
// user_pref("security.OCSP.require", true);

/* Battery Status API */
user_pref("dom.battery.enabled", false);

/* Virtual Reality API
 *		[NOTE] Disables support for virtual reality devices.
 * API Виртуальной реальности
 *		[ЗАМЕТКА] Отключает поддержку устройств виртуальной реальности. */
user_pref("dom.vr.enabled", false);

/* Enumerate multimedia devices
 * Перечисление устройств мультимедиа */
user_pref("media.navigator.enabled", false);

/* Hardware acceleration
 * Аппаратное ускорение */
// user_pref("layers.acceleration.force-enabled", false);
// user_pref("layers.acceleration.disabled", true);

/* Web Audio API
 *		[WARNING] Dangerously, because can withdraw the sound fingerprints browser.
 * API Веб-аудио
 *		[ВНИМАНИЕ] Опасно, потому что можно снять звуковые отпечатки браузера. */
user_pref("dom.webaudio.enabled", false);

/* Pointer Events
 * События указателя */
user_pref("dom.w3c_pointer_events.enabled", false);

/* Gamepad API
 * API Геймпада */
user_pref("dom.gamepad.enabled", false);
user_pref("dom.gamepad.test.enabled", false);
user_pref("dom.gamepad.extensions.enabled", false);
user_pref("dom.gamepad.haptic_feedback.enabled", false);

/* Providing network information
 * Предоставление информации о сети */
user_pref("dom.netinfo.enabled", false);

/* Touch-events
 *		0 = Disabled
 *		1 = Enabled
 *		2 = Automatic detection
 * Тач-события
 *		0 = Отключить
 *		1 = Включить
 *		2 = Автоматическое обнаружение */
user_pref("dom.w3c_touch_events.enabled", 0);

/* SHA-1 Algorithm
 *		0 = All SHA1 certs are allowed
 *		1 = All SHA1 certs are blocked (including perfectly valid ones from 2015 and earlier)
 *		2 = Deprecated option that now maps to 1
 *		3 = Only allowed for locally-added roots (e.g. anti-virus)
 *		4 = Only allowed for locally-added roots or for certs in 2015 and earlier
 * Алгоритм SHA-1
 *		0 = Все сертификаты SHA1 разрешены
 *		1 = Все сертификаты SHA1 заблокированы (в том числе вполне допустимые с 2015 года и ранее)
 *		2 = Deprecated option that now maps to 1
 *		3 = Разрешено только для локально добавляемых корней (например, Антивирус)
 *		4 = Разрешено только для локально добавленных корней или сертификатов в 2015 году и ранее */
user_pref("security.pki.sha1_enforcement_level", 1);

/* Capture Stream API
 * API Потокового захвата */
user_pref("canvas.capturestream.enabled", false);

/* Image Capture API
 * API Захвата изображений */
user_pref("dom.imagecapture.enabled", false);

/* OffscreenCanvas */
user_pref("gfx.offscreencanvas.enabled", false);

/* Block known Flash trackers and fingerprints
 * Блокировать известные Flash трекеры и отпечатки пальцев */
user_pref("browser.safebrowsing.blockedURIs.enabled", false);
user_pref("urlclassifier.blockedTable", "");

/* HTTP Alternative Services
 * Альтернативные услуги HTTP */
user_pref("network.http.altsvc.enabled", false);
user_pref("network.http.altsvc.oe", false);

/* Access the URL of the PAC scripts
 *		[NOTE] The path and URL request components "https://" are deleted.
 * Доступ к URL-адресу у PAC скриптов
 *		[ЗАМЕТКА] Компоненты пути и запроса URL-адресов "https://" удаляются. */
user_pref("network.proxy.autoconfig_url.include_path", false);

/* DNS-over-HTTPS (DoH)
 *		0 = Disable
 *		1 = DNS or TRR is used, whichever is faster
 *		2 = TRR is used by default, and DNS as a fallback
 *		3 = Only TRR is used
 *		4 = Race for statistics, mirroring mode in which TRR and DNS are enabled in parallel
 *		[WARNING] DoH bypasses hosts and gives info to yet another party (e.g. Cloudflare).
 * DNS-над-HTTPS
 *		0 = Отключить
 *		1 = Используется DNS или TRR, в зависимости от того, что быстрее
 *		2 = Используется TRR по умолчанию, а DNS как запасной вариант
 *		3 = Используется только TRR
 *		4 = Гонка за статистикой, режим зеркалирования при котором TRR и DNS задействованы параллельно
 *		[ВНИМАНИЕ] DoH обходит хосты и предоставляет информацию еще одной стороне (например, Cloudflare). */
// user_pref("network.trr.mode", 0);
// user_pref("network.trr.bootstrapAddress", "");
// user_pref("network.trr.uri", "");

/* Sites with autocomplete="off" attribute
 *		[NOTE] This function allows you to save the entered passwords in the password manager,
 *		even if the site owner has set the autocomplete attribute to "off".
 * Сайты с атрибутом автозаполнение "Отключено"
 *		[ЗАМЕТКА] Данная функция позволяет сохранять введенные пароли в менеджере паролей,
 *		даже если владелец сайта установил атрибуту автозаполнение значение "Отключено". */
user_pref("signon.storeWhenAutocompleteOff", true);

/* Show (do not show) password when using alternative URL
 * Показывать (не показывать) пароль при использовании альтернативного URL */
user_pref("browser.fixup.hide_user_pass", true);

/* Formless login capture
 * Бесформенный захват входа */
user_pref("signon.formlessCapture.enabled", false);

/* HTTP Authentication on 3rd party images
 * Аутентификация HTTP на сторонних изображениях */
user_pref("network.auth.subresource-img-cross-origin-http-auth-allow", false);

/* Control TLS versions
 * Контроль TLS версий */
user_pref("security.tls.version.min", 3);
user_pref("security.tls.version.max", 4);

/* SSL Error Reporting
 * Отчеты об ошибках SSL */
user_pref("security.ssl.errorReporting.automatic", false);
user_pref("security.ssl.errorReporting.enabled", false);
user_pref("security.ssl.errorReporting.url", "");