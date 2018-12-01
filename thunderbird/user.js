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
 * Github: https://github.com/bogachenko/mozbackup/tree/master/thunderbird/
 * Last modified: 26 November 2018
 * License: MIT <https://github.com/bogachenko/mozbackup/blob/master/LICENSE.md>
 * Problem reports: https://github.com/bogachenko/mozbackup/issues
 * Title: user.js
 * URL: https://github.com/bogachenko/mozbackup/blob/master/thunderbird/user.js
 *
 * Download the entire MozBackup project at https://github.com/bogachenko/mozbackup/archive/master.zip */

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
 *		[NOTE] Instead of fonts DejaVu you can, for example, use Google fonts - Noto,
 *		but keep in mind that you must delete or comment out the DejaVu preferences.
 * Шрифты по умолчанию
 *		[ЗАМЕТКА] Вместо шрифтов DejaVu вы можете, например, использовать шрифты Google - Noto,
 *		но имейте в виду, что вы должны удалить или закомментировать настройки DejaVu. */

user_pref("font.name.monospace.x-western", "DejaVu Sans Mono");
user_pref("font.name.monospace.x-cyrillic", "DejaVu Sans Mono");
user_pref("font.name.monospace.x-unicode", "DejaVu Sans Mono");

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

/* Warning in "about:config"
 * Предупреждение в "about:config" */
user_pref("general.warnOnAboutConfig", false);

/* Crash reports
 * Отчеты о сбоях */
user_pref("breakpad.reportURL", "");

/* Thunderbird health report
 * Отчет о состоянии здоровья Thunderbird */
user_pref("datareporting.policy.dataSubmissionEnabled", false);
user_pref("datareporting.policy.firstRunURL", "");

/* Guessing the domain in the address bar
 * Угадывание домена в адресной строке */
user_pref("browser.fixup.alternate.enabled", false);

/* Remember your browsing and download history
 * Помните историю посещений и загрузок */
user_pref("places.history.enabled", true);

/* Telemetry
 * Телеметрия */
user_pref("toolkit.telemetry.enabled", false);
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.server", "");
user_pref("security.ssl.errorReporting.url", "");
user_pref("toolkit.telemetry.infoURL", "");
user_pref("toolkit.telemetry.previousBuildID", "");

/* Crash Reporter related information
 * Crash Reporter связанная информация */
user_pref("toolkit.crashreporter.infoURL", "");

/* Remember the search history and form data
 * Помнить историю поиска и данные формы */
user_pref("browser.formfill.enable", false);
user_pref("browser.formfill.expire_days", 0);

/* Autocomplete
 * Автозаполнение */
user_pref("browser.urlbar.autocomplete.enabled", false);

/* Opening tabs and external applications in the background
 *		TRUE = Open such tabs in the background
 *		FALSE = Switch to openable tabs
 * Открытие вкладок и внешних приложений в фоновом режиме
 *		TRUE = Открывать такие вкладки в фоне
 *		FALSE = Переключаться на открываемые вкладки */
user_pref("browser.tabs.loadDivertedInBackground", true);

/* Search suggestions
 * Поисковые предложения */
user_pref("browser.search.suggest.enabled", false);

/* Automatic installation of updates for Thunderbird
 * Автоматическая установка обновлений для Thunderbird */
user_pref("app.update.auto", false);

/* Automatic check for updates for extensions
 * Автоматическая проверка обновлений для расширений */
user_pref("extensions.update.enabled", false);

/* Automatic installation of updates for extensions
 * Автоматическая установка обновлений для расширений */
user_pref("extensions.update.autoUpdateDefault", false);

/* Background update service
 * Служба для фонового обновления */
user_pref("app.update.service.enabled", false);
user_pref("app.update.staging.enabled", false);

/* Display information about the update
 * Отображение информация об обновлении */
user_pref("app.update.silent", false);

/* Update extension metadata
 * Обновление метаданных расширения */
user_pref("extensions.getAddons.cache.enabled", false);

/* Automatic update of search engines
 * Автоматическое обновление поисковых систем */
user_pref("browser.search.update", false);
user_pref("browser.search.update.interval", 0);
user_pref("browser.search.update.log", false);

/* Change the default encoding for text files
 * Изменение кодировки по умолчанию для текстовых файлов */
user_pref("intl.charset.fallback.utf8_for_file", true);

/* Send Flash crash reports
 * Отправка отчетов о сбоях Flash */
user_pref("dom.ipc.plugins.flash.subprocess.crashreporter.enabled", false);

/* Submitting the URL of the website where the plug-in crashed
 * Отправка URL-адреса веб-сайта, где произошел сбой плагина */
user_pref("dom.ipc.plugins.reportCrashURL", false);
user_pref("plugins.crash.supportUrl", "");

/* Spell check before departure
 * Проверка орфографии перед отправлением */
user_pref("mail.SpellCheckBeforeSend", false);

/* Check if Thunderbird is your default email client
 * Проверять, является ли Thunderbird вашим почтовым клиентом по умолчанию */
user_pref("mail.shell.checkDefaultClient", false);

/* Master cleaner Thunderbird
 *		[NOTE] This dialog window is invoked by hotkeys - Ctrl + Shift + Del.
 * Мастер очистки Thunderbird
 *		[ЗАМЕТКА] Это диалоговое окно вызывается горячими клавишами - Ctrl + Shift + Del. */
user_pref("privacy.cpd.cache", true);
user_pref("privacy.cpd.cookies", false);
user_pref("privacy.cpd.history", true);
user_pref("privacy.sanitize.timeSpan", 0);

/* Whether to show the Thunderbird icon in the system tray
 * Отображать ли значок Thunderbird в системном трее */
user_pref("mail.biff.show_tray_icon", false);

/* Show start page in the message viewing area
 * Показ стартовой страницы в области просмотра сообщений */
user_pref("mailnews.start_page.url", "");
user_pref("mailnews.start_page.enabled", false);

/* Closing Thunderbird when closing the last tab
 * Закрытие Thunderbird при закрытии последней вкладки */
user_pref("mail.tabs.closeWindowWithLastTab", false);

/* Push notifications
 * Push-уведомления */
user_pref("dom.push.enabled", false);
user_pref("dom.push.connection.enabled", false);
user_pref("dom.push.serverURL", "");
user_pref("dom.push.userAgentID", "");

/* Warning in "about:networking"
 * Предупреждение в "about:networking" */
user_pref("network.warnOnAboutNetworking", false);

/* Control the selection of sent "Referrer" through sources
 *		0 = Send "Referrer" in all cases
 *		1 = Send only if the base domains match
 *		2 = Send "Referer" only to the same host
 * Контроль выбора отправляемых "Referrer" через источники
 *		0 = Отправлять "Referrer" во всех случаях
 *		1 = Отправлять, только если базовые домены совпадают
 *		2 = Отправить "Referer" только на тот же хост */
user_pref("network.http.referer.XOriginPolicy", 1);

/* Activate the plugin by clicking
 * Активация плагина по клику */
user_pref("plugins.click_to_play", true);

/* Require a valid OCSP response for OCSP enabled certificates
 *		[NOTE] When you turn on breaks some sites
 * Требовать действительный ответ OCSP для сертификатов с поддержкой OCSP
 *		[ЗАМЕТКА] При включении ломается некоторые сайты */
// user_pref("security.OCSP.require", true);

/* Enumerate multimedia devices
 * Перечисление устройств мультимедиа */
user_pref("media.navigator.enabled", false);

/* WebRTC (Web Real-Time Communication)
 * WebRTC (Веб Связь в Реальном Времени) */
user_pref("media.gmp-manager.cert.checkAttributes", false);
user_pref("media.gmp-manager.cert.requireBuiltIn", false);
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

/* Web Audio API
 *		[NOTE] Web Audio API is a technology that allows you to significantly enhance the ability to play audio in the browser. 
 *		It is a powerful and versatile tool for manipulating the sound component on a Web page,
 *		which allows developers to choose sources, add special sound effects to them, visualize them and much more.
 *		[WARNING] Dangerously, because can withdraw the sound fingerprints browser.
 * API Веб-аудио
 *		[ЗАМЕТКА] Web Audio API - это технология, позволяющая существенно расширить возможности воспроизведения звука в браузере.
 *		Это мощный и многогранный инструмент для манипуляции звуковой составляющей на веб-странице,
 *		что дает возможность разработчикам выбрать источники, добавить к ним специальные звуковые эффекты,
 *		визуализировать их и многое другое.
 *		[ВНИМАНИЕ] Опасно, потому что можно снять звуковые отпечатки браузера. */
user_pref("dom.webaudio.enabled", false);

/* Sending video playback statistics
 * Отправка статистики воспроизведения видео */
user_pref("media.video_stats.enabled", false);

/* Gamepad API
 *		[NOTE] Disables gamepad support, which can be used to obtain manufacturer and model IDs
 *		for gamepads connected to your computer.
 * API Геймпада
 *		[ЗАМЕТКА] Отключает поддержку геймпада, которое может быть использовано для получения
 *		идентификаторов производителя и модели подключенных к компьютеру геймпадов. */
user_pref("dom.gamepad.enabled", false);
user_pref("dom.gamepad.extensions.enabled", false);
user_pref("dom.gamepad.haptic_feedback.enabled", false);

/* Location accounting
 * Учет местоположения */
user_pref("geo.enabled", false);
user_pref("geo.wifi.xhr.timeout", 0);

/* GeoIP-based search results
 * Результаты поиска на основе GeoIP */
user_pref("browser.search.geoip.url", "");
user_pref("browser.search.geoip.timeout", 0);

/* Regional specificity for search results and search engines
 * Региональная специфика для результатов поиска и поисковых систем */
user_pref("browser.search.geoSpecificDefaults", false);

/* Browser sends information about the start and end time of page loading
 * Передача браузером информации о времени начала и окончания загрузки страницы */
user_pref("dom.enable_performance", false);
user_pref("dom.enable_performance_navigation_timing", false);
user_pref("dom.enable_performance_observer", false);

/* Resource timing API
 * API Ресурсов времени */
user_pref("dom.enable_resource_timing", false);

/* View clipboard content
 * Просмотр содержимого буфера обмена */
user_pref("dom.event.clipboardevents.enabled", false);

/* Automatic preload pages when you hover over links
 * Автоматическая предзагрузка страниц при наведении курсора на ссылки */
user_pref("network.http.speculative-parallel-limit", 0);

/* Additional analytics sent to the web server
 * Дополнительная аналитика, отправленная на веб-сервер */
user_pref("beacon.enabled", false);


/* Block dangerous and deceptive content (malware, phishing, dangerous downloads)
 * Блокировать опасное и обманывающее содержимое (вредоносные программы, фишинг, опасные загрузки) */
user_pref("browser.safebrowsing.malware.enabled", false);
user_pref("browser.safebrowsing.phishing.enabled", false);
user_pref("browser.safebrowsing.downloads.enabled", false);

/* Warning about unwanted and rarely downloaded programs
 * Предупреждение о нежелательных и редко загружаемых программах */
user_pref("browser.safebrowsing.downloads.remote.block_dangerous", false);
user_pref("browser.safebrowsing.downloads.remote.block_dangerous_host", false);
user_pref("browser.safebrowsing.downloads.remote.block_potentially_unwanted", false);
user_pref("browser.safebrowsing.downloads.remote.block_uncommon", false);

/* Querying Google Application Reputation database for downloaded binary files
 * Запрос базы данных репутации приложения Google для загруженных двоичных файлов */
user_pref("browser.safebrowsing.downloads.remote.enabled", false);
user_pref("browser.safebrowsing.downloads.remote.url", "");

/* URLs Reports
 * Отчеты URLs */
user_pref("browser.safebrowsing.provider.google4.reportMalwareMistakeURL", "");
user_pref("browser.safebrowsing.provider.google4.reportPhishMistakeURL", "");
user_pref("browser.safebrowsing.provider.google4.reportURL", "");
user_pref("browser.safebrowsing.provider.google.reportMalwareMistakeURL", "");
user_pref("browser.safebrowsing.provider.google.reportPhishMistakeURL", "");
user_pref("browser.safebrowsing.provider.google.reportURL", "");
user_pref("browser.safebrowsing.reportPhishURL", "");

/* Data sharing
 * Обмен данными */
user_pref("browser.safebrowsing.provider.google4.dataSharing.enabled", false);
user_pref("browser.safebrowsing.provider.google4.dataSharingURL", "");

/* Button "Ignore this warning" on the pages of safe browsing
 *		[NOTE] Useless for regular users, it's meant for admins on bigger network as a way to secure their users.
 * Кнопка "Игнорировать это предупреждение" на страницах безопасного просмотра
 *		[ЗАМЕТКА] Бесполезный для обычных пользователей, он предназначен для администраторов в большей сети,
 *		как способ защитить своих пользователей. */
user_pref("browser.safebrowsing.allowOverride", false);

/* Block known Flash trackers and fingerprints
 * Блокировать известные Flash трекеры и отпечатки пальцев */
user_pref("browser.safebrowsing.blockedURIs.enabled", false);

/* Windows 8.1 Family Security
 *		0 = Disable
 *		1 = Only attempt to detect Family Safety mode (don't import the root)
 *		2 = Detect Family Safety mode and import the root
 * Семейная безопасность Windows 8.1
 *		0 = Отключить
 *		1 = Только попытка обнаружить режим безопасности семьи (не импортировать корень)
 *		2 = Определить режим безопасности семьи и импортировать корень */
user_pref("security.family_safety.mode", 0); // [WINDOWS]

/* IDN Punycode */
user_pref("network.IDN_show_punycode", true);

/* Automatic update check for Thunderbird
 * Автоматическая проверка обновлений для Thunderbird */
user_pref("app.update.enabled", false);

/* Battery Status API */
user_pref("dom.battery.enabled", false);

/* DNS browser preloading
 * Предварительная загрузка браузером DNS */
user_pref("network.dns.disablePrefetch", true);

/* Preload browser links
 * Предварительная загрузка браузером ссылок */
user_pref("network.prefetch-next", false);

/* UserAgent */
user_pref("general.appname.override", "Netscape");
user_pref("general.appversion.override", "5.0 (Windows)");
user_pref("general.buildID.override", "20100101");
user_pref("general.oscpu.override", "Windows NT 6.1");
user_pref("general.platform.override", "Win32");
// user_pref("general.useragent.locale", "en-US");
user_pref("general.useragent.override", "Mozilla/5.0 (Windows NT 6.1; rv:60.0) Gecko/20100101 Firefox/60.0");

/* Smooth scrolling
 * Плавная прокрутка */
user_pref("general.smoothScroll", false);

/* Auto Scroll
 * Автоматическая прокрутка */
user_pref("general.autoScroll", false);

/* Hardware acceleration
 * Аппаратное ускорение */
user_pref("layers.acceleration.force-enabled", true);
user_pref("layers.acceleration.disabled", false);
// user_pref("gfx.direct2d.disabled", true); // [WINDOWS]

/* Maximum number of backup bookmarks
 * Максимальное количество резервных закладок */
user_pref("browser.bookmarks.max_backups", 3);

/* Limit WebRTC IP address leaks when using WebRTC
 * Ограничение утечек IP-адресов WebRTC при использовании WebRTC */
user_pref("media.peerconnection.ice.default_address_only", true);
user_pref("media.peerconnection.ice.no_host", true);

/* Screensharing
 * Общий доступ к экрану */
user_pref("media.getusermedia.aec_enable", false);
user_pref("media.getusermedia.agc_enabled", false);
user_pref("media.getusermedia.audiocapture.enabled", false);
user_pref("media.getusermedia.browser.enabled", false);
user_pref("media.getusermedia.noise_enabled", false);
user_pref("media.getusermedia.screensharing.enabled", false);

/* Auto-play of HTML5 media
 *		TRUE = Allow
 *		FALSE = Block
 *		[WARNING] This may break video playback on various sites.
 * Автоматическое воспроизведение мультимедиа в формате HTML5
 *		TRUE = Разрешить
 *		FALSE = Заблокировать
 *		[ВНИМАНИЕ] Это может нарушить воспроизведение видео на разных сайтах. */
user_pref("media.autoplay.enabled", false);

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
