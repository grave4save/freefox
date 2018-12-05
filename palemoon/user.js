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
 * Github: https://github.com/bogachenko/mozbackup/tree/master/palemoon/
 * Last modified: December 6, 2018
 * License: MIT <https://github.com/bogachenko/mozbackup/blob/master/LICENSE.md>
 * Problem reports: https://github.com/bogachenko/mozbackup/issues
 * Title: user.js
 * URL: https://github.com/bogachenko/mozbackup/blob/master/palemoon/user.js
 *
 * Download the entire MozBackup project at https://github.com/bogachenko/mozbackup/archive/master.zip */

/* Warning in "about:config"
 * Предупреждение в "about:config" */
user_pref("general.warnOnAboutConfig", false);

/* Warning in "about:networking"
 * Предупреждение в "about:networking" */
user_pref("network.warnOnAboutNetworking", false);

/* Warning about closing multiple tabs
 * Предупреждение о закрытии нескольких вкладок */
user_pref("browser.tabs.warnOnClose", true);
user_pref("browser.tabs.warnOnCloseOtherTabs", true);

/* Warning about opening a large number of tabs
 * Предупреждение о открытии большого количества вкладок */
user_pref("browser.tabs.warnOnOpen", true);

/* Check if Pale Moon is your default browser
 * Проверять, является ли Pale Moon вашим браузером по умолчанию */
user_pref("browser.shell.checkDefaultBrowser", false);
user_pref("browser.shell.skipDefaultBrowserCheck", true);

/* Using OS locale
 * Использование локали ОС */
user_pref("intl.locale.matchOS", false);

/* Measuring browser startup time (and displaying a profile deletion notification if the launch time is long)
 * Замер времени запуска браузера (и показ уведомления об удалении профиля, если время запуска долгое) */
user_pref("browser.slowStartup.notificationDisabled", true);

/* Opening pages "Welcome and what's new?"
 * Открытие страниц "Добро пожаловать и что нового?" */
user_pref("browser.startup.homepage_override.mstone", "ignore");
user_pref("startup.homepage_welcome_url", "");
user_pref("startup.homepage_override_url", "");

/* Start page
 *		0 = Blank page
 *		1 = Home page
 *		2 = Last page visited
 *		3 = Resume previous session
 * Стартовая страница
 *		0 = Пустая страница
 *		1 = Домашняя страница
 *		2 = Последняя посещенная страница
 *		3 = Возобновить предыдущую сессию */
user_pref("browser.startup.page", 0);

/* Homepage
 * Домашняя страница */
user_pref("browser.startup.homepage", "about:blank");

/* New inset
 *		TRUE = New page
 *		FALSE = Blank page
 * Новая вкладкa
 *		TRUE = New page
 *		FALSE = Пустая страница */
user_pref("browser.newtabpage.enabled", false);

/* Preloading a new tab
 * Предварительная загрузка новой вкладки */
user_pref("browser.newtab.preload", false);

/* Mouse wheel button action when clicked
 *		TRUE = Open in new tab
 *		FALSE = Open in new window
 * Действие кнопки колесика мыши при нажатии по ссылке
 *		TRUE = Открывать в новой вкладке
 *		FALSE = Открывать в новом окне */
user_pref("browser.tabs.opentabfor.middleclick", false);

/* Opening tabs and external applications in the background
 *		TRUE = Open such tabs in the background
 *		FALSE = Switch to openable tabs
 * Открытие вкладок и внешних приложений в фоновом режиме
 *		TRUE = Открывать такие вкладки в фоне
 *		FALSE = Переключаться на открываемые вкладки */
user_pref("browser.tabs.loadDivertedInBackground", true);

/* Font size
 * Размер шрифта */
// user_pref("font.size.fixed.x-cyrillic", 11);
// user_pref("font.size.fixed.x-unicode", 11);
// user_pref("font.size.fixed.x-western", 11);
// user_pref("font.size.fixed.ar", 11);
// user_pref("font.size.fixed.el", 11);
// user_pref("font.size.fixed.he", 11);
// user_pref("font.size.fixed.ja", 11);
// user_pref("font.size.fixed.ko", 11);
// user_pref("font.size.fixed.th", 11);
// user_pref("font.size.fixed.x-armn", 11);
// user_pref("font.size.fixed.x-beng", 11);
// user_pref("font.size.fixed.x-cans", 11);
// user_pref("font.size.fixed.x-devanagari", 11);
// user_pref("font.size.fixed.x-ethi", 11);
// user_pref("font.size.fixed.x-geor", 11);
// user_pref("font.size.fixed.x-gujr", 11);
// user_pref("font.size.fixed.x-guru", 11);
// user_pref("font.size.fixed.x-khmr", 11);
// user_pref("font.size.fixed.x-knda", 11);
// user_pref("font.size.fixed.x-math", 11);
// user_pref("font.size.fixed.x-mlym", 11);
// user_pref("font.size.fixed.x-orya", 11);
// user_pref("font.size.fixed.x-sinh", 11);
// user_pref("font.size.fixed.x-tamil", 11);
// user_pref("font.size.fixed.x-telu", 11);
// user_pref("font.size.fixed.x-tibt", 11);
// user_pref("font.size.fixed.zh-CN", 11);
// user_pref("font.size.fixed.zh-HK", 11);
// user_pref("font.size.fixed.zh-TW", 11);
// user_pref("font.size.variable.ar", 15);
// user_pref("font.size.variable.el", 15);
// user_pref("font.size.variable.he", 15);
// user_pref("font.size.variable.ja", 15);
// user_pref("font.size.variable.ko", 15);
// user_pref("font.size.variable.th", 15);
// user_pref("font.size.variable.x-armn", 15);
// user_pref("font.size.variable.x-beng", 15);
// user_pref("font.size.variable.x-cans", 15);
// user_pref("font.size.variable.x-cyrillic", 15);
// user_pref("font.size.variable.x-devanagari", 15);
// user_pref("font.size.variable.x-ethi", 15);
// user_pref("font.size.variable.x-geor", 15);
// user_pref("font.size.variable.x-gujr", 15);
// user_pref("font.size.variable.x-guru", 15);
// user_pref("font.size.variable.x-khmr", 15);
// user_pref("font.size.variable.x-knda", 15);
// user_pref("font.size.variable.x-math", 15);
// user_pref("font.size.variable.x-mlym", 15);
// user_pref("font.size.variable.x-orya", 15);
// user_pref("font.size.variable.x-sinh", 15);
// user_pref("font.size.variable.x-tamil", 15);
// user_pref("font.size.variable.x-telu", 15);
// user_pref("font.size.variable.x-tibt", 15);
// user_pref("font.size.variable.x-unicode", 15);
// user_pref("font.size.variable.x-western", 15);
// user_pref("font.size.variable.zh-CN", 15);
// user_pref("font.size.variable.zh-HK", 15);
// user_pref("font.size.variable.zh-TW", 15);

/* Proportions (fonts)
 * Пропорции (шрифты) */
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
 * Шрифты по умолчанию */
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

/* Preferred language for displaying web pages
 * [NOTE] It is recommended to select only english locales.
 * Предпочитаемый язык для отображения веб-страниц
 * [ЗАМЕТКА] Рекомендуется выбрать только английские языки. */
// user_pref("intl.accept_languages", "ru-RU, ru, en-US, en");

/* Automatic check for updates for extensions
 * Автоматическая проверка обновлений для расширений */
user_pref("extensions.update.enabled", false);

/* Automatic installation of updates for Pale Moon
 * Автоматическая установка обновлений для Pale Moon */
user_pref("app.update.auto", false);

/* Automatic update check for Pale Moon
 * Автоматическая проверка обновлений для Pale Moon */
user_pref("app.update.enabled", false);

/* Automatic installation of updates for extensions
 * Автоматическая установка обновлений для расширений */
user_pref("extensions.update.autoUpdateDefault", false);

/* Background update service
 * Служба для фонового обновления */
user_pref("app.update.staging.enabled", false);

/* Display information about the update
 * Отображение информация об обновлении */
user_pref("app.update.silent", false);

/* Update extension metadata
 * Обновление метаданных расширения */
user_pref("extensions.getAddons.cache.enabled", false);

/* Search engine updates
 * Обновления поисковых систем */
user_pref("browser.search.update", false);

/* Search suggestions
 * Поисковые предложения */
user_pref("browser.search.suggest.enabled", false);

/* In "about:addons" remove the item "Get add-ons"
 * [WARNING] Uses Google Analytics.
 * В "about:addons" убрать пункт "Получить дополнения"
 * [ВНИМАНИЕ] Использует Google Analytics. */
user_pref("extensions.getAddons.showPane", false);
user_pref("extensions.webservice.discoverURL", "");

/* Guessing the domain in the address bar
 * Угадывание домена в адресной строке */
user_pref("browser.fixup.alternate.enabled", false);

/* Number of steps  "To previous page" and  "To next page"
 * Количество шагов "На предыдущую страницу" и "На следующую страницу" */
user_pref("browser.sessionhistory.max_entries", 10);

/* Autocomplete and suggestion types
 * Автозаполнение и типы предложений */
user_pref("browser.urlbar.autocomplete.enabled", false); // Autocomplete ~ Автозаполнение
user_pref("browser.urlbar.suggest.history", false); // History ~ История
user_pref("browser.urlbar.suggest.bookmark", false); // Bookmarks ~ Закладки
user_pref("browser.urlbar.suggest.openpage", false); // Open tabs ~ Открытые вкладки

/* Number of results displayed in the drop - down list in the address bar
 * Количество результатов, отображаемых в раскрывающемся списке в адресной строке */
user_pref("browser.urlbar.maxRichResults", 0);

/* Inline autocomplete
 *		TRUE = Supplement the text typed in the address bar
 *		FALSE = Show below
 * Встроенное автозаполнение
 *		TRUE = Дополнять текст, набранный в адресной строке
 *		FALSE = Показывать ниже */
user_pref("browser.urlbar.autoFill", false);
user_pref("browser.urlbar.autoFill.typed", false);

/* Remember the search history and form data
 * Помнить историю поиска и данные формы */
user_pref("browser.formfill.enable", false);
user_pref("browser.formfill.expire_days", 0);
user_pref("browser.formfill.saveHttpsForms", false);

/* Remember your browsing and download history
 * Помните историю посещений и загрузок */
user_pref("places.history.enabled", true);

/* Automatically delete history when closing Pale Moon
 * Автоматическое удаление истории при закрытии Pale Moon */
user_pref("privacy.sanitize.sanitizeOnShutdown", true);

/* What elements of the story should be automatically deleted when you close Pale Moon
 * Какие элементы истории должны быть автоматически удалены при закрытии Pale Moon */
user_pref("privacy.clearOnShutdown.cache", true); // Cache ~ Кэш
user_pref("privacy.clearOnShutdown.cookies", false);// Cookies ~ Куки
user_pref("privacy.clearOnShutdown.downloads", true); // Downloads ~ Загрузки
user_pref("privacy.clearOnShutdown.formdata", true); // Form data ~ Данные форм
user_pref("privacy.clearOnShutdown.history", true); // History ~ История
user_pref("privacy.clearOnShutdown.offlineApps", false); // Offline website data ~ Данные автономных веб-сайтов
user_pref("privacy.clearOnShutdown.sessions", true); // Active sessions ~ Активные сеансы
user_pref("privacy.clearOnShutdown.siteSettings", false); // Site settings ~ Настройки сайтов
user_pref("privacy.clearOnShutdown.connectivityData", true); // Данные о подключении к сайтам ~ Connection data to sites

/* Master cleaner Pale Moon
 * [NOTE] This dialog window is invoked by hotkeys - Ctrl + Shift + Del.
 * Мастер очистки Pale Moon
 * [ЗАМЕТКА] Это диалоговое окно вызывается горячими клавишами - Ctrl + Shift + Del. */
user_pref("privacy.cpd.cache", true); // Cache ~ Кэш
user_pref("privacy.cpd.cookies", false); // Cookies ~ Куки
user_pref("privacy.cpd.downloads", true); // Downloads ~ Загрузки
user_pref("privacy.cpd.formdata", true); // Form data ~ Данные форм
user_pref("privacy.cpd.history", true); // History ~ История
user_pref("privacy.cpd.offlineApps", false); // Offline website data ~ Данные автономных веб-сайтов
user_pref("privacy.cpd.passwords", false); // Passwords ~ Пароли
user_pref("privacy.cpd.sessions", true); // Active sessions ~ Активные сеансы
user_pref("privacy.cpd.siteSettings", false); // Site settings ~ Настройки сайтов

/* Time range to clear
 *		0 = Everything
 *		1 = Last hour
 *		2 = Last two hours
 *		3 = Last four hours
 *		4 = Today
 *		5 = Last five minutes
 *		6 = Last twenty-four hours
 * Диапазон времени для очистки
 *		0 = Все
 *		1 = Последний час
 *		2 = Последние два часа
 *		3 = Последние четыре часа
 *		4 = Сегодня
 *		5 = Последние пять минут
 *		6 = Последние сутки */
user_pref("privacy.sanitize.timeSpan", 0);

/* Opening bookmarks in background tabs
 * Открытие закладок в фоновых вкладках */
user_pref("browser.tabs.loadBookmarksInBackground", true);

/* Maximum number of backup bookmarks
 * Максимальное количество резервных закладок */
user_pref("browser.bookmarks.max_backups", 3);

/* "Backspace" button value
 *    0 = Previous page
 *    1 = Scroll page up
 *    2 = Do nothing
 * Значение кнопки "Backspace"
 *    0 = Предыдущая страница
 *    1 = Прокрутить страницу вверх
 *    2 = Ничего не делать */
user_pref("browser.backspace_action", 2);

/* Screensharing
 * Общий доступ к экрану */
user_pref("media.getusermedia.screensharing.enabled", false);
user_pref("media.getusermedia.audiocapture.enabled", false);

/* Auto-play of HTML5 media
 *		TRUE = Allow
 *		FALSE = Block
 * [WARNING] This may break video playback on various sites.
 * Автоматическое воспроизведение мультимедиа в формате HTML5
 *		TRUE = Разрешить
 *		FALSE = Заблокировать
 * [ВНИМАНИЕ] Это может нарушить воспроизведение видео на разных сайтах. */
user_pref("media.autoplay.default", true);

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

/* Location accounting
 * Учет местоположения */
user_pref("geo.enabled", false);
user_pref("browser.geolocation.warning.infoURL", "");

/* GeoIP-based search results
 * Результаты поиска на основе GeoIP */
user_pref("browser.search.region", "US");
user_pref("browser.search.geoip.url", "");
user_pref("browser.search.geoip.timeout", 0);

/* Regional specificity for search results and search engines
 * Региональная специфика для результатов поиска и поисковых систем */
user_pref("browser.search.geoSpecificDefaults", false);

/* Install only signed extensions
 * Установка только подписанных расширений */
user_pref("xpinstall.signatures.required", true);

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

/* Scanning the system for plug-ins
 * Сканирование системы на наличие плагинов */
user_pref("plugin.scan.plid.all", false);  // [WINDOWS]

/* GMP (Gecko Media Plugins)
 * GMP (Gecko Медиа Плагины) */
user_pref("media.gmp-manager.cert.checkAttributes", false);
user_pref("media.gmp-manager.cert.requireBuiltIn", false);
user_pref("media.gmp-manager.url", "data:text/plain,");
user_pref("media.gmp.decoder.enabled", false);
user_pref("media.gmp-manager.certs.1.commonName", "");
user_pref("media.gmp-manager.certs.1.issuerName", "");
user_pref("media.gmp-manager.certs.2.commonName", "");
user_pref("media.gmp-manager.certs.2.issuerName", "");

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
user_pref("captivedetect.maxRetryCount", 0);
user_pref("network.captive-portal-service.enabled", false);

/* HTTP Header "Do Not Track"
 * Заголовок HTTP "Не Отслеживать" */
// user_pref("privacy.donottrackheader.enabled", true);

/* Synchronization of preferences
 * Синхронизация предпочтений */
user_pref("services.sync.engine.history", false);
user_pref("services.sync.engine.prefs", false);
user_pref("services.sync.engine.tabs", false);
user_pref("services.sync.engine.addresses", false);

/* Cache API (Cache storage)
 * [NOTE] It is a repository on the user's computer where scripts can store information.
 * It is part of the "Service Workers" specification, but can be used without them.
 * API Кэша (Хранилище кэша)
 * [ЗАМЕТКА] Это хранилище на компьютере пользователя, куда скрипты могут складывать информацию.
 * Оно является частью спецификации "Service Workers", но может быть использовано и без них. */
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
user_pref("browser.cache.disk.enable", false);
user_pref("browser.cache.disk.capacity", 0);
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

/* Session Recovery Service for windows and tabs
 * Служба восстановления сеанса для окон и вкладок */
user_pref("browser.sessionstore.max_tabs_undo", 10);
user_pref("browser.sessionstore.max_windows_undo", 10);

/* Offline cache
 * Автономный кэш */
user_pref("browser.cache.offline.enable", false);

/* Request to use the offline cache
 * Запрос на использование автономного кэша */
user_pref("offline-apps.allow_by_default", false);
user_pref("offline-apps.permissions", 1);

/* Storing extra session data
 *		0 = Everywhere
 *		1 = Unencrypted sites
 *		2 = Nowhere
 * Сохранение дополнительных данных сеанса
 *		0 = Везде
 *		1 = Незашифрованные сайты
 *		2 = Нигде */
user_pref("browser.sessionstore.privacy_level", 2);
user_pref("browser.sessionstore.privacy_level_deferred", 2);

/* Resume session after crash
 * Возобновление сеанса после сбоя */
user_pref("browser.sessionstore.resume_from_crash", false);

/* Interval between saving sessions
 * Интервал между сохранением сеансов */
user_pref("browser.sessionstore.interval", 60000);

/* Cookie
 *		0 = Always accept cookies from third-party sites
 *		1 = Never accept cookies from third-party sites
 *		2 = Do not accept cookies at all
 *		3 = Accept cookies from third-party sites, only from previously visited sites
 * Куки
 *		0 = Всегда принимать файлы куки с сторонних сайтов
 *		1 = Никогда не принимать файлы куки с сторонних сайтов
 *		2 = Не принимать куки вообще
 *		3 = Принимать файлы куки с сторонних сайтов, только у ранее посещенных сайтов */
user_pref("network.cookie.cookieBehavior", 1);

/* Third-party cookies are set for the session only
 * Сторонние файлы куки устанавливаются только для сеанса */
user_pref("network.cookie.thirdparty.sessionOnly", true);

/* Сookie lifetime policy
 *		0 = Save them before expiration
 *		2 = Save them until close Pale Moon
 * Политика жизни куки
 *		0 = Сохранять их до истечения срока действия
 *		2 = Сохранять их до закрытия Pale Moon */
user_pref("network.cookie.lifetimePolicy", 0);

/* Indexed database API
 * API Индексированных баз данных */
user_pref("dom.indexedDB.experimental", false);
user_pref("dom.indexedDB.logging.details", false);
user_pref("dom.indexedDB.logging.enabled", false);
user_pref("dom.indexedDB.logging.profiler-marks", false);

/* Storage API
 * [NOTE] Disables another way for sites to store their data on the user's personal computer.
 * API Хранилища
 * [ЗАМЕТКА]Отключает еще один способ для сайтов хранить свои данные на персональном компьютере пользователя. */
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

/* Tracking protection in all windows
 * [NOTE] When enabled, the load on the processor increases, plus any ad blocker can easily cope with
 * the blocking of trackers when subscribing to the corresponding filter lists.
 * Защита слежения во всех окнах
 * [ЗАМЕТКА] При включении возрастает нагрузка на процессор, плюс ко всему с блокировкой трекеров
 * легко справляется любой блокировщик рекламы при подписки на соответсвующими списки фильтров. */
// user_pref("privacy.trackingprotection.enabled", true);
// user_pref("privacy.trackingprotection.pbmode.enabled", true);

/* DOM forms
 * DOM формы */
user_pref("dom.forms.datetime", false);
user_pref("dom.forms.datetime.others", false);
user_pref("dom.forms.datetime.timepicker", false);

/* Types of content
 * Типы содержимого */
user_pref("browser.contentHandlers.types.0.title", "");
user_pref("browser.contentHandlers.types.0.uri", "");
user_pref("goanna.handlerService.schemes.webcal.0.name", "");
user_pref("goanna.handlerService.schemes.webcal.0.uriTemplate", "");
user_pref("goanna.handlerService.schemes.mailto.0.name", "");
user_pref("goanna.handlerService.schemes.mailto.0.uriTemplate", "");
user_pref("goanna.handlerService.schemes.mailto.1.name", "");
user_pref("goanna.handlerService.schemes.mailto.1.uriTemplate", "");
user_pref("gecko.handlerService.schemes.webcal.0.name", "");
user_pref("gecko.handlerService.schemes.webcal.0.uriTemplate", "");
user_pref("gecko.handlerService.schemes.webcal.1.name", "");
user_pref("gecko.handlerService.schemes.webcal.1.uriTemplate", "");
user_pref("gecko.handlerService.schemes.webcal.2.name", "");
user_pref("gecko.handlerService.schemes.webcal.2.uriTemplate", "");
user_pref("gecko.handlerService.schemes.webcal.3.name", "");
user_pref("gecko.handlerService.schemes.webcal.3.uriTemplate", "");

/* Send Flash crash reports
 * Отправка отчетов о сбоях Flash */
user_pref("dom.ipc.plugins.flash.subprocess.crashreporter.enabled", false);

/* Submitting the URL of the website where the plug-in crashed
 * Отправка URL-адреса веб-сайта, где произошел сбой плагина */
user_pref("dom.ipc.plugins.reportCrashURL", false);

/* How often Palemoon should ask for a master password
 *		0 = The first time
 *		1 = Every time it's needed
 *		2 = Every "N" minutes
 * Как часто Palemoon должен запрашивать мастер-пароль
 *		0 = Первый раз
 *		1 = Каждый раз, когда это необходимо
 *		2 = Каждые "N" минут */
user_pref("security.ask_for_password", 2);

/* How often (within how many minutes) Pale Moon should ask for a master password
 * Как часто (в течение скольки минут) Pale Moon должен запрашивать мастер-пароль */
user_pref("security.password_lifetime", 5);

/* Auto-complete user name and password
 * Aвтоматическое заполнение имени пользователя и пароля */
user_pref("signon.autofillForms", false);
user_pref("signon.autofillForms.http", false);
user_pref("security.insecure_field_warning.contextual.enabled", true); // Message at login: "This connection is not secure" ~ Сообщение при вводе логина: "Это соединение не защищено"

/* Smooth scrolling
 * Плавная прокрутка */
user_pref("general.smoothScroll", false);

/* Automatic update themes
 * Автоматическое обновление тем */
user_pref("lightweightThemes.update.enabled", false);

/* Experiments
 * Эксперименты */
user_pref("network.allow-experiments", false);

/* Favicons in shortcuts
 * [NOTE] URL shortcuts use a cached randomly named .ico file which is stored in your shortcutCache directory.
 * The .ico remains after the shortcut is deleted. If set to "false" then the shortcuts use a generic Pale Moon icon.
 * Значки на ярлыках
 * [ЗАМЕТКА] В ярлыках URL используется кешированный файл с произвольным именем .ico,
 * который хранится в вашем каталоге shortcutCache. Файл .ico остается после удаления ярлыка.
 * Если установлено значение "false", в ярлыках используется общий значок Pale Moon. */
user_pref("browser.shell.shortcutFavicons", false);

/* Favicons in web notifications
 * Значки в веб-уведомлениях */
user_pref("alerts.showFavicons", false);

/* Path to save files
 *		0 = Desktop
 *		1 = Downloads
 *		2 = Last used folder
 * Путь для сохранения файлов
 *		0 = Рабочий стол
 *		1 = Загрузки
 *		2 = Последняя используемая папка */
user_pref("browser.download.folderList", 2);

/* Request to save files
 * Запрос на сохранение файлов */
user_pref("browser.download.useDownloadDir", false);

/* Adding downloads to the list of recent system documents
 * Добавление загрузок в список последних документов системы */
user_pref("browser.download.manager.addToRecentDocs", false);

/* Hiding MIME types
 * Скрытие типов MIME */
user_pref("browser.download.hide_plugins_without_extensions", false);

/* Show the "Open with" dialog box in the download window
 * Показ диалогового окна "Открыть при помощи" в окне загрузки */
user_pref("browser.download.forbid_open_with", true);

/* Predictor (formerly Seer)
 * [NOTE] This is a mechanism that stores the links between the hosts from
 * which content is requested for a particular URL.
 * Предсказатель (бывший Seer)
 * [ЗАМЕТКА] Это механизм, запоминающий связи между хостами,
 * с которых запрашивается контент для того или иного URL. */
user_pref("network.predictor.enabled", false);
user_pref("network.predictor.enable-prefetch", false);

/* Automatic preload pages when you hover over links
 * Автоматическая предзагрузка страниц при наведении курсора на ссылки */
user_pref("network.http.speculative-parallel-limit", 0);

/* Search from address panel
 * Поиск из панели адреса */
// user_pref("keyword.enabled", false);

/* Displays all parts of the URL in the address bar
 * Отображения всех части URL-адреса в строке адреса */
user_pref("browser.urlbar.trimURLs", false);

/* Display JavaScript in history URLs
 * Отображение JavaScript в URLs истории */
user_pref("browser.urlbar.filter.javascript", true);

/* Windows jumplist */
user_pref("browser.taskbar.lists.enabled", false); // [WINDOWS]
user_pref("browser.taskbar.lists.frequent.enabled", false); // [WINDOWS]
user_pref("browser.taskbar.lists.recent.enabled", false); // [WINDOWS]
user_pref("browser.taskbar.lists.tasks.enabled", false); // [WINDOWS]

/* Display thumbnails of tabs on the taskbar
 * Отображать эскизы вкладок на панели задач */
user_pref("browser.taskbar.previews.enable", false); // [WINDOWS]

/* IPv6 */
user_pref("network.dns.disableIPv6", true);

/* Block allowed extension directories
 * [WARNING] This will break extensions that do not use the default XPI directories.
 * Заблокировать разрешенные каталоги расширений
 * [ВНИМАНИЕ] Это приведет к разрыву расширений, которые не используют каталоги XPI по умолчанию. */
user_pref("extensions.autoDisableScopes", 15);

/* Warn when websites try to install add-ons
 * Предупреждать при попытке веб-сайтов установить дополнения */
user_pref("xpinstall.whitelist.required", true);

/* Fullscreen API
 * API Полного экрана */
user_pref("full-screen-api.enabled", true);
user_pref("full-screen-api.warning.delay", 0);
user_pref("full-screen-api.warning.timeout", 0);

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

/* Auto Scroll
 * Автоматическая прокрутка */
user_pref("general.autoScroll", false);

/* Automatic copying
 * Автоматическое копирование */
user_pref("clipboard.autocopy", false);

/* Reader View */
user_pref("reader.parse-on-load.enabled", false);

/* Text reader function in Reader View
 * Функция зачитывания текста в Reader View */
user_pref("narrate.enabled", false);

/* WebGL debug info being available to websites
 * Информация об отладке WebGL доступна для веб-сайтов */
user_pref("webgl.enable-debug-renderer-info", false);

/* Mixed content
 * Смешанное содержание */
user_pref("security.mixed_content.block_active_content", true); 
user_pref("security.mixed_content.block_display_content", true);

/* SPDY protocol
 * [WARNING] SPDY can store an identifier and holds an extremely long open connection.
 * Протокол SPDY
 * [ВНИМАНИЕ] SPDY может хранить идентификатор и держит экстремально долгое открытое соединение. */
// user_pref("network.http.spdy.enabled", true);
// user_pref("network.http.spdy.enabled.deps", true);
// user_pref("network.http.spdy.enabled.http2", true);

/* WebGL (Web Graphics Library)
 * WebGL (Библиотека веб-графики) */
// user_pref("webgl.disable-extensions", true);
// user_pref("webgl.disable-fail-if-major-performance-caveat", true);
// user_pref("webgl.disabled", true);
// user_pref("webgl.dxgl.enabled", false); // [WINDOWS]
// user_pref("webgl.enable-webgl2", false);
// user_pref("webgl.force-enabled", false);
// user_pref("webgl.min_capability_mode", true);
// user_pref("webgl.msaa-force", false);

/* Service Workers */
user_pref("dom.serviceWorkers.enabled", false);
user_pref("dom.serviceWorkers.testUpdateOverOneDay", false);

/* Cookies for HTTP sites are set with the "secure" directive
 * Файлы куки для сайтов HTTP устанавливаются с "защищенной" директивой */
user_pref("network.cookie.leave-secure-alone", true);

/* DOM (Document Object Model) Storage
 * [WARNING] This will break a LOT of sites' functionality AND extensions.
 * You are better off using an extension for more granular control.
 * Хранилище DOM (Объектная Модель Документа)
 * [ВНИМАНИЕ] Отключение этого предпочтения сломает много функций и расширений сайтов.
 * Вам лучше использовать расширение для более гранулированного контроля. */
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

/* OCSP Stapling
 * Сшивание OCSP */
user_pref("security.ssl.enable_ocsp_stapling", true);

/* Resource timing API
 * API Ресурсов времени */
user_pref("dom.enable_resource_timing", false);

/* Browser sends information about the start and end time of page loading
 * Передача браузером информации о времени начала и окончания загрузки страницы */
user_pref("dom.enable_performance", false);
user_pref("dom.enable_performance_observer", false);
user_pref("dom.enable_performance_navigation_timing", false);

/* Sensor API
 * API Сенсора */
user_pref("device.sensors.enabled", false);

/* CSP (Content Security Policy)
 * Политика безопасности контента */
user_pref("security.csp.enable", true);
user_pref("security.csp.enableStrictDynamic", true);
user_pref("security.csp.experimentalEnabled", false);

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
 * [NOTE] When you turn on breaks some sites.
 * Требовать действительный ответ OCSP для сертификатов с поддержкой OCSP
 * [ЗАМЕТКА] При включении ломается некоторые сайты. */
// user_pref("security.OCSP.require", true);

/* Battery Status API */
user_pref("dom.battery.enabled", false);

/* Virtual Reality API
 * API Виртуальной реальности */
user_pref("dom.vr.enabled", false);

/* Hardware acceleration
 * Аппаратное ускорение */
// user_pref("layers.acceleration.force-enabled", false);
// user_pref("layers.acceleration.disabled", true);
// user_pref("gfx.direct2d.disabled", true); // [WINDOWS]
// user_pref("layers.prefer-d3d9", false); // [WINDOWS];

/* Web Audio API
 * [WARNING] Dangerously due to browser fingerprints.
 * API Веб-аудио
 * [ВНИМАНИЕ] Опасно из-за отпечатков пальцев браузера. */
user_pref("dom.webaudio.enabled", false);

/* Pointer Events
 * События указателя */
user_pref("dom.w3c_pointer_events.enabled", false);

/* Saving zoom for sites
 * [WARNING] Dangerously due to browser fingerprints.
 * Сохранение масштаба для сайтов
 * [ВНИМАНИЕ] Опасно из-за отпечатков пальцев браузера. */
user_pref("browser.zoom.siteSpecific", false);

/* Gamepad API
 * API Геймпада */
user_pref("dom.gamepad.enabled", false);
user_pref("dom.gamepad.extensions.enabled", false);
user_pref("dom.gamepad.test.enabled", false);

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

/* Tabs on top
 * Вкладки сверху */
user_pref("browser.tabs.onTop", true);

/* OffscreenCanvas */
user_pref("gfx.offscreencanvas.enabled", false);

/* HTTP Alternative Services
 * Альтернативные услуги HTTP */
user_pref("network.http.altsvc.enabled", false);
user_pref("network.http.altsvc.oe", false);

/* Access the URL of the PAC scripts
 * [NOTE] The path and URL request components "https://" are deleted.
 * Доступ к URL-адресу у PAC скриптов
 * [ЗАМЕТКА] Компоненты пути и запроса URL-адресов "https://" удаляются. */
user_pref("network.proxy.autoconfig_url.include_path", false);

/* Sites with autocomplete="off" attribute
 * [NOTE] This function allows you to save the entered passwords in the password manager,
 * even if the site owner has set the autocomplete attribute to "off".
 * Сайты с атрибутом автозаполнение "Отключено"
 * [ЗАМЕТКА] Данная функция позволяет сохранять введенные пароли в менеджере паролей,
 * даже если владелец сайта установил атрибуту автозаполнение значение "Отключено". */
user_pref("signon.storeWhenAutocompleteOff", true);

/* Show (do not show) password when using alternative URL
 * Показывать (не показывать) пароль при использовании альтернативного URL */
user_pref("browser.fixup.hide_user_pass", true);

/* Formless login capture
 * Бесформенный захват входа */
user_pref("signon.formlessCapture.enabled", false);

/* Control TLS versions
 * Контроль TLS версий */
user_pref("security.tls.version.min", 3);
user_pref("security.tls.version.max", 4);

/* Open links from the clipboard with the middle mouse button
 * Открывать ссылки из буфера обмена средней кнопкой мышки */
user_pref("middlemouse.contentLoadURL", false);

/* SSL Error Reporting
 * Отчеты об ошибках SSL */
user_pref("security.ssl.errorReporting.automatic", false);
user_pref("security.ssl.errorReporting.enabled", false);
user_pref("security.ssl.errorReporting.url", "");

/* Various developer tools in the context of the browser
 * Различные инструменты разработчика в контексте браузера */
user_pref("devtools.chrome.enabled", false);

/* TLS1.3 Zero Round Trip Time */
user_pref("security.tls.enable_0rtt_data", false);

/* Windows 8.1 Family Security
 *		0 = Disable
 *		1 = Only attempt to detect Family Safety mode (don't import the root)
 *		2 = Detect Family Safety mode and import the root
 * Семейная безопасность Windows 8.1
 *		0 = Отключить
 *		1 = Только попытка обнаружить режим безопасности семьи (не импортировать корень)
 *		2 = Определить режим безопасности семьи и импортировать корень */
user_pref("security.family_safety.mode", 0); // [WINDOWS]

/* Enfore Public Key Pinning
 *		0 = Disable
 *		1 = Allow user MiTM (such as your antivirus)
 *		2 = Strict
 * Привязка к открытому ключу
 *		0 = Отключить
 *		1 = Разрешить пользователю MiTM (например, вашему антивирусу)
 *		2 = Строго */
user_pref("security.cert_pinning.enforcement_level", 2);

/* View clipboard content
 * Просмотр содержимого буфера обмена */
// user_pref("dom.event.clipboardevents.enabled", false);

/* Dialog box "Confirm you want to leave" when closing page
 * Диалоговое окно "Подтвердить, что вы хотите уйти" при закрытии страницы */
user_pref("dom.disable_beforeunload", false);

/* Shaking and vibrating the screen
 * Встряхивание и вибрирование экрана */
user_pref("dom.vibrator.enabled", false);

/* WebAssembly */
user_pref("javascript.options.wasm", false);

/* asm.js */
user_pref("javascript.options.asmjs", false);

/* Intersection Observer API */
user_pref("dom.IntersectionObserver.enabled", true);

/* Shared Memory API */
user_pref("javascript.options.shared_memory", false);

/* Permissions to scripts
 * Разрешения скриптам */
user_pref("dom.disable_window_move_resize", true);
user_pref("dom.disable_window_open_feature.close", true);
user_pref("dom.disable_window_open_feature.location", true);
user_pref("dom.disable_window_open_feature.menubar", true);
user_pref("dom.disable_window_open_feature.minimizable", true);
user_pref("dom.disable_window_open_feature.personalbar", true);
user_pref("dom.disable_window_open_feature.resizable", true);
user_pref("dom.disable_window_open_feature.status", true);
user_pref("dom.disable_window_open_feature.titlebar", true);
user_pref("dom.disable_window_open_feature.toolbar", true);

/* How to open links that indicate opening new Windows
 *		1 = Open in current tab
 *		2 = Open in new window
 *		3 = Open in new tab
 * Как открывать ссылки, в которых указано открытие новых окон
 *		1 = Открыть в текущей вкладке
 *		2 = Открывать в новом окне
 *		3 = Открывать в новой вкладке */
user_pref("browser.link.open_newwindow", 3);

/* Allows you to open tabs instead of new Windows
 *		0 = Open all links in tabs
 *		1 = Open links in windows
 *		2 = Open links in tabs with the exception of cases when non-standard window parameters are specified
 * Позволяет открывать вкладки вместо новых окон
 *		0 = Открывать все ссылки во вкладках
 *		1 = Открывать ссылки в окнах
 *		2 = Открывать ссылки во вкладках за исключением случаев, когда заданы нестандартные параметры окна */
user_pref("browser.link.open_newwindow.restriction", 0);

/* Block pop-ups
 * Блокировать всплывающие окна */
user_pref("dom.disable_open_during_load", true);

/* Maximum number of pop-ups
 * Максимальное количество всплывающих окон */
user_pref("dom.popup_maximum", 3);

/* Control of sent information regardless of the source
 *		0 = Never send "Referrer" header
 *		1 = Send "Referrer" header only when clicking on links and similar elements
 *		2 = Send to all requests (e.g. images, links, etc.)
 * [WARNING] When you disable the transfer of this header, many sites will stop working.
 * Контроль отправляемой информации независимо от источника
 *		0 = Никогда не отправлять заголовок "Referrer"
 *		1 = Отправлять заголовок "Referrer" только при клике по ссылкам и подобным элементам
 *		2 = Отправить на все запросы (например, изображения, ссылки и т.д.)
 * [ВНИМАНИЕ] При отключении отправки этого заголовка, многие сайты перестанут работать. */
user_pref("network.http.sendRefererHeader", 2);

/* Control the number of "Referrer" sent regardless of the source
 *		0 = Send the full URL
 *		1 = Send URL without query string (scheme + host + port + path)
 *		2 = Send only origin (scheme + host + port)
 * Контроль количества "Referrer" отправляемых независимо от источника
 *		0 = Отправлять полный URL
 *		1 = Отправлять URL-адрес без строки запроса (схема + хост + порт + путь)
 *		2 = Отправлять только начало (схема + хост + порт) */
user_pref("network.http.referer.trimmingPolicy", 0);

/* Control the selection of sent "Referrer" through sources
 *		0 = Send "Referrer" in all cases
 *		1 = Send only if the base domains match
 *		2 = Send "Referer" only to the same host
 * Контроль выбора отправляемых "Referrer" через источники
 *		0 = Отправлять "Referrer" во всех случаях
 *		1 = Отправлять, только если базовые домены совпадают
 *		2 = Отправить "Referer" только на тот же хост */
user_pref("network.http.referer.XOriginPolicy", 1);

/* Control the number of "Referrer" sent by origin
 *		0 = Send the full URL
 *		1 = Send URL without query string (scheme + host + port + path)
 *		2 = Send only origin (scheme + host + port)
 * Контроль количества "Referrer" отправляемых по происхождению
 *		0 = Отправлять полный URL
 *		1 = Отправлять URL-адрес без строки запроса (схема + хост + порт + путь)
 *		2 = Отправлять только начало (схема + хост + порт) */
user_pref("network.http.referer.XOriginTrimmingPolicy", 0);

/* Spoofing a referer
 *		TRUE = Spoof referer
 *		FALSE = Real referer
 * Фальсифицировать Referrer
 *		TRUE = Подделывать Referrer
 *		FALSE = Настоящий Referrer */
user_pref("network.http.referer.spoofSource", true);

/* Restrict HTTP Redirection
 * Ограничить переадресацию HTTP */
user_pref("network.http.redirection-limit", 10);

/* IDN Punycode */
user_pref("network.IDN_show_punycode", true);

/* Old SSL/TLS "insecure" renegotiation (vulnerable to a MiTM attack)
 * Старое "небезопасное" повторное согласование SSL/TLS (уязвимое к атаке MiTM) */
user_pref("security.ssl.require_safe_negotiation", true);

/* The "screenshot --imgur" command, with the help of which it was possible to publish screenshots on Imgur.com
 * Команда "screenshot --imgur", с помощью которой можно было публиковать скриншоты на Imgur.com */
user_pref("devtools.gcli.imgurClientID", "");
user_pref("devtools.gcli.imgurUploadURL", "");

/* Tabs on top
 * Вкладки сверху */
user_pref("browser.tabs.onTop", true);

/* Prevent connection to the device on Firefox OS for debugging over Wi-Fi Internet
 * Запрет соединения с устройством на Firefox ОС для отладки по сети Wi-Fi Интернет */
user_pref("devtools.remote.wifi.scan", false);
user_pref("devtools.remote.wifi.visible", false);
user_pref("geo.wifi.uri", "");

/* WEB Integrated development environment (WebIDE)
 * ВЕБ Интегрированная среда разработки */
user_pref("devtools.debugger.force-local", true);
user_pref("devtools.debugger.prompt-connection", true);
user_pref("devtools.debugger.remote-enabled", false);
user_pref("devtools.webide.adaptersAddonURL", "");
user_pref("devtools.webide.adbAddonURL", "");
user_pref("devtools.webide.addonsURL", "");
user_pref("devtools.webide.autoConnectRuntime", false);
user_pref("devtools.webide.autoinstallADBHelper", false);
user_pref("devtools.webide.autoinstallFxdtAdapters", false);
user_pref("devtools.webide.enableLocalRuntime", false);
user_pref("devtools.webide.enabled", false);
user_pref("devtools.webide.simulatorAddonsURL", "");
user_pref("devtools.webide.templatesURL", "");
user_pref("devtools.webide.widget.autoinstall", false);
user_pref("devtools.webide.widget.enabled", false);
user_pref("devtools.webide.widget.inNavbarByDefault", false);

/* User Timing API
 * [NOTE] Responsible for access to the high-frequency timer, which can be used to listen to the processor cache
 * from unprivileged JS-code.
 *[ЗАМЕТКА] Отвечает за доступ к высокочастотному таймеру, который можно использовать для прослушивания кэша
 * процессора из непривилегированного JS-кода. */
user_pref("dom.enable_user_timing", false);
user_pref("dom.performance.enable_user_timing_logging", false);

/* File Handle API
 * [NOTE] Responsible for accessing lower-level file operations.
 * API для обработки файлов
 * [ЗАМЕТКА] Отвечает за доступ к более низкоуровневым файловым операциям. */
user_pref("dom.fileHandle.enabled", false);

/* FlyWeb API
 * [NOTE] Responsible for discovering and connecting directly to various electronic devices that provide Web APIs such as TVs,
 * projectors, smart home elements and game consoles, without accessing intermediate cloud services.
 * [ЗАМЕТКА] Отвечает за обнаружение и прямое соединение с различными электронными устройствами,
 * предоставляющими Web API, такими как телевизоры, проекторы, элементы умного дома и игровые консоли,
 * без обращения к промежуточным облачным сервисам. */
user_pref("dom.flyweb.enabled", false);

/* Device Storage API
 * [NOTE] Responsible for access to the file system, this API allows the browser to
 * read and/or write to the user's files.
 * API хранилища устройств
 * [ЗАМЕТКА] Отвечает за доступ к файловой системе, данный API позволяет браузеру самостоятельно
 * читать и/или писать в файлах пользователя. */
user_pref("device.storage.enabled", false);

/* Windows Store launch links on Windows 8/8.1/10
 * Ссылки запуска Windows Store на Windows 8/8.1/10 ***/
user_pref("network.protocol-handler.external.ms-windows-store", false); // [WINDOWS]

/* Browser function that allows you to save objects by keyboard shortcut, left mouse button and ALT key
 *		TRUE = When you click on an object with Alt plus LMB, it is saved
 *		FALSE = Disable this feature
 * Функция браузера, которая позволяет сохранять объекты с помощью сочетания клавиш, левой кнопки мыши и клавиши ALT
 *		TRUE = При клике на объект клавишами Alt плюс ЛКМ происходит его сохранение
 *		FALSE = Отключить эту функцию */
user_pref("browser.altClickSave", true);

/* Bookmark save format
 *		TRUE = Save to HTML
 *		FALSE = Save to SQLITE
 * Формат сохранения закладок
 *		TRUE = Сохранение в HTML
 *		FALSE = Сохранение в SQLITE */
user_pref("browser.bookmarks.autoExportHTML", true);

/* Showing search results
 *		TRUE = Open search result in current page
 *		FALSE = Open search result in new page
 * Показ результатов поиска
 *		TRUE = Открывать результат поиска в текущей странице
 *		FALSE = Открывать результат поиска на новой странице */
user_pref("browser.search.openintab", true);

/* Automatic selection of the entire line in the address bar
 * Автоматическое выделение всей строки в поле адресной строки */
user_pref("browser.urlbar.clickSelectsAll", false);

/* Showing search results
 *		TRUE = To wrap lines
 *		FALSE = Do not wrap lines
 * Показ результатов поиска
 *		TRUE = Переносить строки
 *		FALSE = Не переносить строки */
user_pref("view_source.wrap_long_lines", true);

/* Address new tab
 * Адрес новой вкладке */
user_pref("browser.newtab.url", "about:blank");

/* When you open a new tab to show:
 *		1 = Blank page (about:blank)
 *		2 = Pale Moon start page (http://start.palemoon.org)
 *		3 = Home page (about:home)
 *		4 = Speed dial page (about:newtab)
 * [NOTE] This preference is inherently useless, all this can be configured using the " browser.newtab.url."
 * При открытии новой вкладки показывать:
 *		1 = Пустую страницу (about:blank)
 *		2 = Стартовую страницу Pale Moon (http://start.palemoon.org)
 *		3 = Домашняя страница (about:home)
 *		4 = Старница быстрого набора (about:newtab)
 * [ЗАМЕТКА] Этот предпочтение по своей сути бесполезно, все это можно настроить при помощи "browser.newtab.url". */
// user_pref("browser.newtab.choice", 3);

/* Homepage address
 * Адрес домашней страницы */
user_pref("browser.newtab.myhome", "about:blank");

/* Number of rows and columns of thumbnails displayed on the new page
 * Количество строк и колонок миниатюр, отображаемых на новой странице */
user_pref("browser.newtabpage.rows", 3);
user_pref("browser.newtabpage.columns", 3);

/* Pale Moon settings window height
 *		TRUE = Dynamic
 *		FALSE = Static
 * Высота окна настроек Pale Moon
 *		TRUE = Динамическая
 *		FALSE = Cтатическая */
user_pref("browser.preferences.animateFadeIn", true);

/* Do you need to press the confirmation button to change the settings
 *		TRUE = The settings are activated immediately (the window has only a "close" button).
 *		FALSE = To activate the settings, you must click the confirmation button.
 * Требуется ли нажимать кнопку подтверждения для изменения настроек
 *		TRUE = Настройки активируются незамедлительно (в окне есть только кнопка "закрыть").
 *		FALSE = Для активации настроек необходимо нажать кнопку подтверждения. */
user_pref("browser.preferences.instantApply", true);

/* Feedback URL
 * URL обратной связи */
user_pref("app.feedback.baseURL", "");

/* Help URL
 * URL справки */
user_pref("app.support.baseURL", "");

/* Manual URL
 * [NOTE] This preference determines the address that the user can view to update the browser manually
 * if an application update has failed.
 * URL мануала
 * [ЗАМЕТКА] Это предпочтение определяет адрес, который пользователь может просмотреть для обновления браузера вручную,
 * если обновление приложения потерпело неудачу. */
user_pref("app.update.url.details", "");

/* CSS :visited selectors
 * [ЗАМЕТКА] Disables the use of styles with the: visited selector to visited links,
 * which prevents the user from finding out what URLs the user has in the browser history.
 * CSS :visited селекторы
 * [ЗАМЕТКА] Отключает применение к посещенным ссылкам стилей с селектором :visited,
 * что предотвращает возможность выяснить, какие URL есть у пользователя в истории браузера. */
user_pref("layout.css.visited_links_enabled", false);

/* Exceptions for add-ons that slow down your browser
 * Исключения для дополнений, которые замедляют работу вашего браузера */
user_pref("browser.addon-watch.ignore", "");

/* Prevent sites from using offline appcache without user permission
 * Запретить сайтам использовать Offline Appcache без разрешения пользователя */
user_pref("browser.offline-apps.notify", true);

/* Button "Know Your Rights"
 * [NOTE] Displayed on first run.
 * Кнопка "Знай свои права"
 * [ЗАМЕТКА] Отображается при первом запуске */
user_pref("browser.rights.3.shown", true);

/* Show notifications about check default browser when you first open
 * Показ уведомлений об проверки браузера по умолчанию при первом открытии */
user_pref("browser.shell.skipDefaultBrowserCheckOnFirstRun", true);

/* URL the help in slow startup
 * URL справочного материала при медленном запуске */
 user_pref("browser.slowstartup.help.url", "");
 
/* Close the Palemoon window when closing the last tab
 * Закрывать окно Palemoon при закрытии последней вкладки */
user_pref("browser.tabs.closeWindowWithLastTab", false);

/* Private browsing mode
 * Режим приватного просмотра */
// user_pref("browser.privatebrowsing.autostart", true);

/* Disable remote JAR files being opened, regardless of content type
 * Отключить удаленные JAR-файлы, независимо от типа содержимого */
user_pref("network.jar.block-remote-files", true);

/* Disable JAR and mark as unsafe file types
 * Отключить JAR и пометить, как небезопасный типов файлов */
user_pref("network.jar.open-unsafe-types", false);

/* Semi Transparent tab previews
 * Полупрозрачная превью вкладок */
user_pref("nglayout.enable_drag_images", false);

/* Disable preconnects and preresolves
 * Отключить предварительные соединения и пререзоливы */
user_pref("network.predictor.prefetch-min-confidence", 101);
user_pref("network.predictor.preconnect-min-confidence", 101);
user_pref("network.predictor.preresolve-min-confidence", 101);

/* Do not track network topology
 * Не отслеживать топологию сети */
user_pref("network.notify.changed", false);

/* Telemetry
 * Телеметрия */
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.server_owner", "");
user_pref("toolkit.telemetry.server", "");
user_pref("toolkit.telemetry.reportingpolicy.firstRun", false);
user_pref("toolkit.telemetry.infoURL", "");
user_pref("toolkit.telemetry.enabled", false);
user_pref("toolkit.telemetry.debugSlowSql", false);

/* DOMHighResTimeStamp API
 * [WARNING] Required for normalization of timestamps and any timer resolution mitigations.
 * [ВНИМАНИЕ] Требуется для нормализации временных меток и любых смягчений разрешения таймера. */
user_pref("dom.event.highrestimestamp.enabled", true);

/* Allow websites to use their own fonts
 *		0 = Block
 *		1 = Allow
 * Разрешить веб-сайтам использовать свои шрифты
 *		0 = Заблокировать
 *		1 = Разрешить */
// user_pref("browser.display.use_document_fonts", 0);