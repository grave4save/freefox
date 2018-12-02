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
 * Last modified: December 3, 2018
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
 *    [NOTE] Instead of fonts DejaVu you can, for example, use Google fonts - Noto,
 *    but keep in mind that you must delete or comment out the DejaVu preferences.
 * Шрифты по умолчанию
 *    [ЗАМЕТКА] Вместо шрифтов DejaVu вы можете, например, использовать шрифты Google - Noto,
 *    но имейте в виду, что вы должны удалить или закомментировать настройки DejaVu. */

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

/* Preferred language for displaying web pages
 * Предпочитаемый язык для отображения веб-страниц */
// user_pref("intl.accept_languages", "ru-RU, ru, en-US, en"); // It is recommended to select only english locales ~ Рекомендуется выбрать только английские локали

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
 *		[WARNING] Uses Google Analytics.
 * В "about:addons" убрать пункт "Получить дополнения"
 *		[ВНИМАНИЕ] Использует Google Analytics. */
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

/* Master cleaner Pale Moon
 *		[NOTE] This dialog window is invoked by hotkeys - Ctrl + Shift + Del.
 * Мастер очистки Pale Moon
 *		[ЗАМЕТКА] Это диалоговое окно вызывается горячими клавишами - Ctrl + Shift + Del. */
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
 *		[WARNING] This may break video playback on various sites.
 * Автоматическое воспроизведение мультимедиа в формате HTML5
 *		TRUE = Разрешить
 *		FALSE = Заблокировать
 *		[ВНИМАНИЕ] Это может нарушить воспроизведение видео на разных сайтах. */
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
user_pref("browser.geolocation.warning.infoURL", ""); // WIKI

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
 *		[NOTE] Disables another way for sites to store their data on the user's personal computer.
 * API Хранилища
 *		[ЗАМЕТКА]Отключает еще один способ для сайтов хранить свои данные на персональном компьютере пользователя. */
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
 *		[NOTE] When enabled, the processor load increases, and the same uBlock Origin does well with this
 * Защита слежения во всех окнах
 *		[ЗАМЕТКА] При включении возрастает нагрузка на процессор, к тому же с этим хорошо справляется тот же uBlock Origin */
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
user_pref("security.insecure_field_warning.contextual.enabled", true);

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
 *		[NOTE] URL shortcuts use a cached randomly named .ico file which is stored in your shortcutCache directory.
 *		The .ico remains after the shortcut is deleted. If set to "false" then the shortcuts use a generic Pale Moon icon.
 * Значки на ярлыках
 *		[ЗАМЕТКА] В ярлыках URL используется кешированный файл с произвольным именем .ico,
 *		который хранится в вашем каталоге shortcutCache. Файл .ico остается после удаления ярлыка.
 *		Если установлено значение "false", в ярлыках используется общий значок Pale Moon. */
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