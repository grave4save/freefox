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
 * Github: https://github.com/bogachenko/mozbackup/tree/master/waterfox/
 * Last modified: December 3, 2018
 * License: MIT <https://github.com/bogachenko/mozbackup/blob/master/LICENSE.md>
 * Problem reports: https://github.com/bogachenko/mozbackup/issues
 * Title: user.js
 * URL: https://github.com/bogachenko/mozbackup/blob/master/waterfox/user.js
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

/* UserAgent */
user_pref("general.useragent.override", "Mozilla/5.0 (Windows NT 6.1; rv:60.0) Gecko/20100101 Firefox/60.0");
user_pref("general.buildID.override", "20100101");
user_pref("general.appname.override", "Netscape");
user_pref("general.appversion.override", "5.0 (Windows)");
user_pref("general.platform.override", "Win32");
user_pref("general.oscpu.override", "Windows NT 6.1");
// user_pref("general.useragent.locale", "en-US");

/* Check if Firefox is your default browser
 * Проверять, является ли Firefox вашим браузером по умолчанию */
user_pref("browser.shell.checkDefaultBrowser", false);

/* Opening pages "Welcome and what's new?"
 * Открытие страниц "Добро пожаловать и что нового?" */
user_pref("browser.startup.homepage_override.mstone", "ignore");
user_pref("startup.homepage_welcome_url", "");
user_pref("startup.homepage_welcome_url.additional", "");
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

/* Snippets
 * Сниппеты */
user_pref("browser.aboutHomeSnippets.updateUrl", "data:,");

/* New inset
 *		TRUE = New page
 *		FALSE = Blank page
 * Новая вкладкa
 *		TRUE = Новая страница
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

/* Configuring container tabs in settings
 *		TRUE = Enable "Tabs in Container"
 *		FALSE = Disable "Tabs in Container"
 * Настройка вкладок контейнера в настройках
 *		TRUE = Включить "Вкладки в контейнере"
 *		FALSE = Отключить "Вкладки в контейнере" */
user_pref("privacy.userContext.ui.enabled", true);

/* Container tab item in context menu
 *		TRUE = Display
 *		FALSE = Do not display
 * Пункт вкладок контейнеров в контекстном меню
 *		TRUE = Отображать
 *		FALSE = Не отображать */
user_pref("privacy.userContext.enabled", true);

/* Private container for sketch loads
 * Частный контейнер для эскизных нагрузок */
user_pref("privacy.usercontext.about_newtab_segregation.enabled", true);

/* Conditions for long pressing the "+" button in the tabs
 *		0 = Disable long press
 *		1 = Display menu
 *		2 = Menu is displayed after "N" milliseconds
 * Условия после длительного нажатия кнопки "+" на вкладках
 *		0 = Отключить длительное нажатие
 *		1 = Отображается меню
 *		2 = Меню отображается через "N" миллисекунд */
user_pref("privacy.userContext.longPressBehavior", 0);

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

/* Preferred language for displaying web pages
 * Предпочитаемый язык для отображения веб-страниц */
// user_pref("intl.accept_languages", "ru-RU, ru, en-US, en"); // It is recommended to select only english locales ~ Рекомендуется выбрать только английские локали

/* Automatic check for updates for extensions
 * Автоматическая проверка обновлений для расширений */
user_pref("extensions.update.enabled", false);

/* Automatic installation of updates for Firefox
 * Автоматическая установка обновлений для Firefox */
user_pref("app.update.auto", false);

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

/* Automatic update of search engines
 * Автоматическое обновление поисковых систем */
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

/* Preloading autocomplete URLs (when you enter in the address bar)
 * Предварительная загрузка URL-адресов автозаполнения (при вводе в адресную строку) */
user_pref("browser.urlbar.speculativeConnect.enabled", false);

/* Autocomplete and suggestion types
 * Автозаполнение и типы предложений */
user_pref("browser.urlbar.autocomplete.enabled", false); // Autocomplete ~ Автозаполнение
user_pref("browser.urlbar.suggest.history", false); // History ~ История
user_pref("browser.urlbar.suggest.bookmark", false); // Bookmarks ~ Закладки
user_pref("browser.urlbar.suggest.openpage", false); // Open tabs ~ Открытые вкладки

/* The number of results displayed in the drop-down list in the address bar
 * Количество результатов, отображаемых в раскрывающемся списке в адресной строке */
user_pref("browser.urlbar.maxRichResults", 0);

/* Alternative search engines in the address bar
 * Альтернативные поисковые системы в адресной строке */
user_pref("browser.urlbar.oneOffSearches", false);

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

/* Automatic deletion of history when closing the browser
 * Автоматическое удаление истории при закрытии браузера */
user_pref("privacy.sanitize.sanitizeOnShutdown", true);

/* What elements of the story should be automatically deleted when you close Firefox
 * Какие элементы истории должны быть автоматически удалены при закрытии Firefox */
user_pref("privacy.clearOnShutdown.cache", true); // Cache ~ Кэш
user_pref("privacy.clearOnShutdown.cookies", false);// Cookies ~ Куки
user_pref("privacy.clearOnShutdown.downloads", true); // Downloads ~ Загрузки
user_pref("privacy.clearOnShutdown.formdata", true); // Form data ~ Данные форм
user_pref("privacy.clearOnShutdown.history", true); // History ~ История
user_pref("privacy.clearOnShutdown.offlineApps", false); // Offline website data ~ Данные автономных веб-сайтов
user_pref("privacy.clearOnShutdown.sessions", true); // Active sessions ~ Активные сеансы
user_pref("privacy.clearOnShutdown.siteSettings", false); // Site settings ~ Настройки сайтов

/* Master cleaner Firefox
 *		[NOTE] This dialog window is invoked by hotkeys - Ctrl + Shift + Del.
 * Мастер очистки Firefox
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

/* Open bookmarks in a new tab
 * Открытие закладок в новой вкладке */
user_pref("browser.tabs.loadBookmarksInTabs", true);

/* Opening bookmarks in background tabs
 * Открытие закладок в фоновых вкладках */
user_pref("browser.tabs.loadBookmarksInBackground", true);

/* "Backspace" button value
 *  0 = Previous page
 *		1 = Scroll page up
 *		2 = Do nothing
 * Значение кнопки "Backspace"
 *		0 = Предыдущая страница
 *		1 = Прокрутить страницу вверх
 *		2 = Ничего не делать */
user_pref("browser.backspace_action", 2);

/* WebRTC (Web Real-Time Communication)
 * WebRTC (Веб Связь в Реальном Времени) */
user_pref("media.navigator.video.enabled", false);
user_pref("media.peerconnection.dtmf.enabled", false);
user_pref("media.peerconnection.enabled", false);
user_pref("media.peerconnection.ice.tcp", false);
user_pref("media.peerconnection.identity.enabled", false);
user_pref("media.peerconnection.identity.timeout", 1);
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
user_pref("media.getusermedia.screensharing.enabled", false);

/* Automatic HTML5 media playback
 *		TRUE = Allow
 *		FALSE = Block
 *		[WARNING] This may break video playback on various sites.
 * Автоматическое воспроизведение мультимедиа в формате HTML5
 *		TRUE = Разрешить
 *		FALSE = Заблокировать
 *		[ВНИМАНИЕ] Это может нарушить воспроизведение видео на разных сайтах. */
// user_pref("media.autoplay.enabled", false);

/* Automatically play sound in inactive tabs
 *		TRUE = Do not play
 *		FALSE = Play
 * Автоматическое воспроизведение звука в неактивных вкладках
 *		TRUE = Не воспроизводить
 *		FALSE = Воспроизводить */
user_pref("media.block-autoplay-until-in-foreground", true);

/* WEBM */
user_pref("media.mediasource.webm.enabled", true);

/* Telemetry
 * Телеметрия */
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("toolkit.telemetry.enabled", false);
user_pref("toolkit.telemetry.newProfilePing.enabled", false);
user_pref("toolkit.telemetry.server", "data:,");
user_pref("toolkit.telemetry.shutdownPingSender.enabled", false);
user_pref("toolkit.telemetry.shutdownPingSender.enabledFirstSession", false);
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.updatePing.enabled", false);

/* Crash reports
 * Отчеты о сбоях */
user_pref("breakpad.reportURL", "");
user_pref("browser.crashReports.unsubmittedCheck.autoSubmit", false);
user_pref("browser.crashReports.unsubmittedCheck.enabled", false);
user_pref("browser.tabs.crashReporting.email", "");
user_pref("browser.tabs.crashReporting.emailMe", false);
user_pref("browser.tabs.crashReporting.includeURL", false);
user_pref("browser.tabs.crashReporting.sendReport", false);



























/* 0202: disable GeoIP-based search results
 * [NOTE] May not be hidden if Firefox has changed your settings due to your locale
 * [1] https://trac.torproject.org/projects/tor/ticket/16254
 * [2] https://support.mozilla.org/en-US/kb/how-stop-firefox-making-automatic-connections#w_geolocation-for-default-search-engine ***/
user_pref("browser.search.region", "US"); // (hidden pref)
user_pref("browser.search.geoip.url", "");
/* 0205: set OS & APP locale (FF59+)
 * If set to empty, the OS locales are used. If not set at all, default locale is used ***/
user_pref("intl.locale.requested", "en-US"); // (hidden pref)
/* 0206: disable geographically specific results/search engines e.g. "browser.search.*.US"
 * i.e. ignore all of Mozilla's various search engines in multiple locales ***/
user_pref("browser.search.geoSpecificDefaults", false);
user_pref("browser.search.geoSpecificDefaults.url", "");
/* 0208: enforce US English locale regardless of the system locale
 * [1] https://bugzilla.mozilla.org/867501 ***/
user_pref("javascript.use_us_english_locale", true); // (hidden pref)
/* 0209: use APP locale over OS locale in regional preferences (FF56+)
 * [1] https://bugzilla.mozilla.org/buglist.cgi?bug_id=1379420,1364789 ***/
user_pref("intl.regional_prefs.use_os_locales", false);
/* 0210: use Mozilla geolocation service instead of Google when geolocation is enabled
 * Optionally enable logging to the console (defaults to false) ***/
user_pref("geo.wifi.uri", "https://location.services.mozilla.com/v1/geolocate?key=%MOZILLA_API_KEY%");
   // user_pref("geo.wifi.logging.enabled", true); // (hidden pref)

/* 0307: disable auto updating of personas (themes) ***/
user_pref("lightweightThemes.update.enabled", false);
/* 0309: disable sending Flash crash reports ***/
user_pref("dom.ipc.plugins.flash.subprocess.crashreporter.enabled", false);
/* 0310: disable sending the URL of the website where a plugin crashed ***/
user_pref("dom.ipc.plugins.reportCrashURL", false);
/* 0380: disable Browser Error Reporter (FF60+)
 * [1] https://support.mozilla.org/en-US/kb/firefox-nightly-error-collection
 * [2] https://firefox-source-docs.mozilla.org/browser/browser/BrowserErrorReporter.html ***/
user_pref("browser.chrome.errorReporter.enabled", false);
user_pref("browser.chrome.errorReporter.submitUrl", "");
/** BLOCKLISTS ***/
/* 0401: enable Firefox blocklist, but sanitize blocklist url
 * [NOTE] It includes updates for "revoked certificates"
 * [1] https://blog.mozilla.org/security/2015/03/03/revoking-intermediate-certificates-introducing-onecrl/
 * [2] https://trac.torproject.org/projects/tor/ticket/16931 ***/
user_pref("extensions.blocklist.enabled", true); // default: true
user_pref("extensions.blocklist.url", "https://blocklists.settings.services.mozilla.com/v1/blocklist/3/%APP_ID%/%APP_VERSION%/");
/* 0403: disable individual unwanted/unneeded parts of the Kinto blocklists
 * What is Kinto?: https://wiki.mozilla.org/Firefox/Kinto#Specifications
 * As Firefox transitions to Kinto, the blocklists have been broken down into entries for certs to be
 * revoked, extensions and plugins to be disabled, and gfx environments that cause problems or crashes ***/
   // user_pref("services.blocklist.onecrl.collection", ""); // revoked certificates
   // user_pref("services.blocklist.addons.collection", "");
   // user_pref("services.blocklist.plugins.collection", "");
   // user_pref("services.blocklist.gfx.collection", "");
/* 0410: disable "Block dangerous and deceptive content" (under Options>Privacy & Security)
 * This covers deceptive sites such as phishing and social engineering ***/
   // user_pref("browser.safebrowsing.malware.enabled", false);
   // user_pref("browser.safebrowsing.phishing.enabled", false); // (FF50+)
/* 0411: disable "Block dangerous downloads" (under Options>Privacy & Security)
 * This covers malware and PUPs (potentially unwanted programs) ***/
   // user_pref("browser.safebrowsing.downloads.enabled", false);
/* 0412: disable "Warn me about unwanted and uncommon software" (under Options>Privacy & Security) (FF48+) ***/
   // user_pref("browser.safebrowsing.downloads.remote.block_potentially_unwanted", false);
   // user_pref("browser.safebrowsing.downloads.remote.block_uncommon", false);
   // user_pref("browser.safebrowsing.downloads.remote.block_dangerous", false); // (FF49+)
   // user_pref("browser.safebrowsing.downloads.remote.block_dangerous_host", false); // (FF49+)
/* 0413: disable Google safebrowsing updates ***/
   // user_pref("browser.safebrowsing.provider.google.updateURL", "");
   // user_pref("browser.safebrowsing.provider.google.gethashURL", "");
   // user_pref("browser.safebrowsing.provider.google4.updateURL", ""); // (FF50+)
   // user_pref("browser.safebrowsing.provider.google4.gethashURL", ""); // (FF50+)
/* 0414: disable binaries NOT in local lists being checked by Google (real-time checking) ***/
user_pref("browser.safebrowsing.downloads.remote.enabled", false);
user_pref("browser.safebrowsing.downloads.remote.url", "");
/* 0415: disable reporting URLs ***/
user_pref("browser.safebrowsing.provider.google.reportURL", "");
user_pref("browser.safebrowsing.reportPhishURL", "");
user_pref("browser.safebrowsing.provider.google4.reportURL", ""); // (FF50+)
user_pref("browser.safebrowsing.provider.google.reportMalwareMistakeURL", ""); // (FF54+)
user_pref("browser.safebrowsing.provider.google.reportPhishMistakeURL", ""); // (FF54+)
user_pref("browser.safebrowsing.provider.google4.reportMalwareMistakeURL", ""); // (FF54+)
user_pref("browser.safebrowsing.provider.google4.reportPhishMistakeURL", ""); // (FF54+)
/* 0416: disable 'ignore this warning' on Safe Browsing warnings which when clicked
 * bypasses the block for that session. This is a means for admins to enforce SB
 * [TEST] see github wiki APPENDIX A: Test Sites: Section 5
 * [1] https://bugzilla.mozilla.org/1226490 ***/
   // user_pref("browser.safebrowsing.allowOverride", false);
/* 0417: disable data sharing (FF58+) ***/
user_pref("browser.safebrowsing.provider.google4.dataSharing.enabled", false);
user_pref("browser.safebrowsing.provider.google4.dataSharingURL", "");
/* 0420: enable Tracking Protection in all windows
 * [NOTE] TP sends DNT headers regardless of the DNT pref (see 1610)
 * [1] https://wiki.mozilla.org/Security/Tracking_protection
 * [2] https://support.mozilla.org/kb/tracking-protection-firefox ***/
   // user_pref("privacy.trackingprotection.pbmode.enabled", true); // default: true
   // user_pref("privacy.trackingprotection.enabled", true);
/* 0422: set which Tracking Protection block list to use
 * [WARNING] We don't recommend enforcing this from here, as available block lists can change
 * [SETTING] Privacy & Security>Content Blocking>All Detected Trackers>Change block list ***/
   // user_pref("urlclassifier.trackingTable", "test-track-simple,base-track-digest256"); // basic
/* 0423: disable Mozilla's blocklist for known Flash tracking/fingerprinting (FF48+)
 * [1] https://www.ghacks.net/2016/07/18/firefox-48-blocklist-against-plugin-fingerprinting/
 * [2] https://bugzilla.mozilla.org/1237198 ***/
   // user_pref("browser.safebrowsing.blockedURIs.enabled", false);
/* 0424: disable Mozilla's tracking protection and Flash blocklist updates ***/
   // user_pref("browser.safebrowsing.provider.mozilla.gethashURL", "");
   // user_pref("browser.safebrowsing.provider.mozilla.updateURL", "");
/* 0425: disable passive Tracking Protection (FF53+)
 * Passive TP annotates channels to lower the priority of network loads for resources on the tracking protection list
 * [NOTE] It has no effect if TP is enabled, but keep in mind that by default TP is only enabled in Private Windows
 * This is included for people who want to completely disable Tracking Protection.
 * [1] https://bugzilla.mozilla.org/buglist.cgi?bug_id=1170190,1141814 ***/
   // user_pref("privacy.trackingprotection.annotate_channels", false);
   // user_pref("privacy.trackingprotection.lower_network_priority", false);
/* 0426: enforce Content Blocking (required to block cookies) (FF63+) ***/
user_pref("browser.contentblocking.enabled", true); // default: true
/* 0502: disable Mozilla permission to silently opt you into tests ***/
user_pref("network.allow-experiments", false);
/* 0503: disable Normandy/Shield (FF60+)
 * Shield is an telemetry system (including Heartbeat) that can also push and test "recipes"
 * [1] https://wiki.mozilla.org/Firefox/Shield
 * [2] https://github.com/mozilla/normandy ***/
user_pref("app.normandy.enabled", false);
user_pref("app.normandy.api_url", "");
user_pref("app.shield.optoutstudies.enabled", false);
/* 0505: disable System Add-on updates
 * [NOTE] In FF61 and lower, you will not get any System Add-on updates except when you update Firefox ***/
   // user_pref("extensions.systemAddon.update.enabled", false); // (FF62+)
   // user_pref("extensions.systemAddon.update.url", "");
/* 0506: disable PingCentre telemetry (used in several System Add-ons) (FF57+)
 * Currently blocked by 'datareporting.healthreport.uploadEnabled' (see 0333) ***/
user_pref("browser.ping-centre.telemetry", false);
/* 0510: disable Pocket (FF39+)
 * Pocket is a third party (now owned by Mozilla) "save for later" cloud service
 * [1] https://en.wikipedia.org/wiki/Pocket_(application)
 * [2] https://www.gnu.gl/blog/Posts/multiple-vulnerabilities-in-pocket/ ***/
user_pref("extensions.pocket.enabled", false);
/* 0515: disable Screenshots (FF55+)
 * alternatively in FF60+, disable uploading to the Screenshots server
 * [1] https://github.com/mozilla-services/screenshots
 * [2] https://www.ghacks.net/2017/05/28/firefox-screenshots-integrated-in-firefox-nightly/ ***/
   // user_pref("extensions.screenshots.disabled", true);
   // user_pref("extensions.screenshots.upload-disabled", true); // (FF60+)
/* 0516: disable Onboarding (FF55+)
 * Onboarding is an interactive tour/setup for new installs/profiles and features. Every time
 * about:home or about:newtab is opened, the onboarding overlay is injected into that page
 * [NOTE] Onboarding uses Google Analytics [2], and leaks resource://URIs [3]
 * [1] https://wiki.mozilla.org/Firefox/Onboarding
 * [2] https://github.com/mozilla/onboard/commit/db4d6c8726c89a5d6a241c1b1065827b525c5baf
 * [3] https://bugzilla.mozilla.org/863246#c154 ***/
user_pref("browser.onboarding.enabled", false);
/* 0517: disable Form Autofill (FF55+)
 * [SETTING] Privacy & Security>Forms & Passwords>Autofill addresses
 * [NOTE] Stored data is NOT secure (uses a JSON file)
 * [NOTE] Heuristics controls Form Autofill on forms without @autocomplete attributes
 * [1] https://wiki.mozilla.org/Firefox/Features/Form_Autofill
 * [2] https://www.ghacks.net/2017/05/24/firefoxs-new-form-autofill-is-awesome/ ***/
user_pref("extensions.formautofill.addresses.enabled", false);
user_pref("extensions.formautofill.available", "off"); // (FF56+)
user_pref("extensions.formautofill.creditCards.enabled", false); // (FF56+)
user_pref("extensions.formautofill.heuristics.enabled", false);
/* 0518: disable Web Compatibility Reporter (FF56+)
 * Web Compatibility Reporter adds a "Report Site Issue" button to send data to Mozilla ***/
user_pref("extensions.webcompat-reporter.enabled", false);
/* 0601: disable link prefetching
 * [1] https://developer.mozilla.org/docs/Web/HTTP/Link_prefetching_FAQ ***/
user_pref("network.prefetch-next", false);
/* 0602: disable DNS prefetching
 * [1] https://www.ghacks.net/2013/04/27/firefox-prefetching-what-you-need-to-know/
 * [2] https://developer.mozilla.org/docs/Web/HTTP/Headers/X-DNS-Prefetch-Control ***/
user_pref("network.dns.disablePrefetch", true);
user_pref("network.dns.disablePrefetchFromHTTPS", true); // (hidden pref)
/* 0603a: disable Seer/Necko
 * [1] https://developer.mozilla.org/docs/Mozilla/Projects/Necko ***/
user_pref("network.predictor.enabled", false);
/* 0603b: disable more Necko/Captive Portal
 * [1] https://en.wikipedia.org/wiki/Captive_portal
 * [2] https://wiki.mozilla.org/Necko/CaptivePortal
 * [3] https://trac.torproject.org/projects/tor/ticket/21790 ***/
user_pref("captivedetect.canonicalURL", "");
user_pref("network.captive-portal-service.enabled", false); // (FF52+)
/* 0605: disable link-mouseover opening connection to linked server
 * [1] https://news.slashdot.org/story/15/08/14/2321202/how-to-quash-firefoxs-silent-requests
 * [2] https://www.ghacks.net/2015/08/16/block-firefox-from-connecting-to-sites-when-you-hover-over-links/ ***/
user_pref("network.http.speculative-parallel-limit", 0);
/* 0606: disable pings (but enforce same host in case)
 * [1] http://kb.mozillazine.org/Browser.send_pings
 * [2] http://kb.mozillazine.org/Browser.send_pings.require_same_host ***/
user_pref("browser.send_pings", false);
user_pref("browser.send_pings.require_same_host", true);
/* 0607: disable links launching Windows Store on Windows 8/8.1/10 [WINDOWS]
 * [1] https://www.ghacks.net/2016/03/25/block-firefox-chrome-windows-store/ ***/
user_pref("network.protocol-handler.external.ms-windows-store", false);
/* 0608: disable predictor / prefetching (FF48+) ***/
user_pref("network.predictor.enable-prefetch", false);

/*** 0700: HTTP* / TCP/IP / DNS / PROXY / SOCKS etc ***/
user_pref("_user.js.parrot", "0700 syntax error: the parrot's given up the ghost!");
/* 0701: disable IPv6
 * IPv6 can be abused, especially regarding MAC addresses. They also do not play nice
 * with VPNs. That's even assuming your ISP and/or router and/or website can handle it
 * [WARNING] This is just an application level fallback. Disabling IPv6 is best done
 * at an OS/network level, and/or configured properly in VPN setups
 * [TEST] http://ipv6leak.com/
 * [1] https://github.com/ghacksuserjs/ghacks-user.js/issues/437#issuecomment-403740626
 * [2] https://www.internetsociety.org/tag/ipv6-security/ (see Myths 2,4,5,6) ***/
user_pref("network.dns.disableIPv6", true);
/* 0702: disable HTTP2 (which was based on SPDY which is now deprecated)
 * HTTP2 raises concerns with "multiplexing" and "server push", does nothing to enhance
 * privacy, and in fact opens up a number of server-side fingerprinting opportunities
 * [1] https://http2.github.io/faq/
 * [2] https://blog.scottlogic.com/2014/11/07/http-2-a-quick-look.html
 * [3] https://queue.acm.org/detail.cfm?id=2716278
 * [4] https://github.com/ghacksuserjs/ghacks-user.js/issues/107 ***/
user_pref("network.http.spdy.enabled", false);
user_pref("network.http.spdy.enabled.deps", false);
user_pref("network.http.spdy.enabled.http2", false);
/* 0703: disable HTTP Alternative Services (FF37+)
 * [1] https://www.ghacks.net/2015/08/18/a-comprehensive-list-of-firefox-privacy-and-security-settings/#comment-3970881
 * [2] https://www.mnot.net/blog/2016/03/09/alt-svc ***/
user_pref("network.http.altsvc.enabled", false);
user_pref("network.http.altsvc.oe", false);
/* 0704: enforce the proxy server to do any DNS lookups when using SOCKS
 * e.g. in Tor, this stops your local DNS server from knowing your Tor destination
 * as a remote Tor node will handle the DNS request
 * [1] http://kb.mozillazine.org/Network.proxy.socks_remote_dns
 * [2] https://trac.torproject.org/projects/tor/wiki/doc/TorifyHOWTO/WebBrowsers ***/
user_pref("network.proxy.socks_remote_dns", true);
/* 0706: remove paths when sending URLs to PAC scripts (FF51+)
 * CVE-2017-5384: Information disclosure via Proxy Auto-Config (PAC)
 * [1] https://bugzilla.mozilla.org/1255474 ***/
user_pref("network.proxy.autoconfig_url.include_path", false); // default: false
/* 0707: disable (or setup) DNS-over-HTTPS (DoH) (FF60+)
 * TRR = Trusted Recursive Resolver
 * .mode: 0=off, 1=race, 2=TRR first, 3=TRR only, 4=race for stats, but always use native result
 * [WARNING] DoH bypasses hosts and gives info to yet another party (e.g. Cloudflare)
 * [1] https://www.ghacks.net/2018/04/02/configure-dns-over-https-in-firefox/
 * [2] https://hacks.mozilla.org/2018/05/a-cartoon-intro-to-dns-over-https/ ***/
   // user_pref("network.trr.mode", 0);
   // user_pref("network.trr.bootstrapAddress", "");
   // user_pref("network.trr.uri", "");
/* 0708: disable FTP (FF60+)
 * [1] https://www.ghacks.net/2018/02/20/firefox-60-with-new-preference-to-disable-ftp/ ***/
   // user_pref("network.ftp.enabled", false);
/* 0709: disable using UNC (Uniform Naming Convention) paths (FF61+)
 * [1] https://trac.torproject.org/projects/tor/ticket/26424 ***/
user_pref("network.file.disable_unc_paths", true); // (hidden pref)
/* 0710: disable GIO as a potential proxy bypass vector
 * Gvfs/GIO has a set of supported protocols like obex, network, archive, computer, dav, cdda,
 * gphoto2, trash, etc. By default only smb and sftp protocols are accepted so far (as of FF64)
 * [1] https://bugzilla.mozilla.org/1433507
 * [2] https://trac.torproject.org/23044
 * [3] https://en.wikipedia.org/wiki/GVfs
 * [4] https://en.wikipedia.org/wiki/GIO_(software) ***/
user_pref("network.gio.supported-protocols", "");
/* 0801: disable location bar using search - PRIVACY
 * don't leak typos to a search engine, give an error message instead ***/
user_pref("keyword.enabled", false);
/* 0803: display all parts of the url in the location bar - helps SECURITY ***/
user_pref("browser.urlbar.trimURLs", false);
/* 0805: disable CSS querying page history - CSS history leak - PRIVACY
 * [NOTE] This has NEVER been fully "resolved": in Mozilla/docs it is stated it's
 * only in 'certain circumstances', also see latest comments in [2]
 * [TEST] http://lcamtuf.coredump.cx/yahh/ (see github wiki APPENDIX C on how to use)
 * [1] https://dbaron.org/mozilla/visited-privacy
 * [2] https://bugzilla.mozilla.org/147777
 * [3] https://developer.mozilla.org/docs/Web/CSS/Privacy_and_the_:visited_selector ***/
user_pref("layout.css.visited_links_enabled", false);
/* 0806: disable displaying javascript in history URLs - SECURITY ***/
user_pref("browser.urlbar.filter.javascript", true);
/* 0808: disable location bar LIVE search suggestions (requires 0807 = true) - PRIVACY
 * Also disable the location bar prompt to enable/disable or learn more about it.
 * [SETTING] Search>Show search suggestions in address bar results ***/
user_pref("browser.urlbar.suggest.searches", false);
user_pref("browser.urlbar.userMadeSearchSuggestionsChoice", true); // (FF41+)
/* 0809: disable location bar suggesting "preloaded" top websites (FF54+)
 * [1] https://bugzilla.mozilla.org/1211726 ***/
user_pref("browser.urlbar.usepreloadedtopurls.enabled", false);
/* 0850f: disable location bar suggesting local search history (FF57+)
 * [1] https://bugzilla.mozilla.org/1181644 ***/
user_pref("browser.urlbar.maxHistoricalSearchSuggestions", 0);
/* 0864: disable date/time picker (FF57+ default true)
 * This can leak your locale if not en-US
 * [1] https://trac.torproject.org/projects/tor/ticket/21787 ***/
user_pref("dom.forms.datetime", false);
/* 0870: disable Windows jumplist [WINDOWS] ***/
user_pref("browser.taskbar.lists.enabled", false);
user_pref("browser.taskbar.lists.frequent.enabled", false);
user_pref("browser.taskbar.lists.recent.enabled", false);
user_pref("browser.taskbar.lists.tasks.enabled", false);
/* 0871: disable Windows taskbar preview [WINDOWS] ***/
user_pref("browser.taskbar.previews.enable", false);

/*** 0900: PASSWORDS ***/
user_pref("_user.js.parrot", "0900 syntax error: the parrot's expired!");
/* 0901: disable saving passwords
 * [SETTING] Privacy & Security>Forms & Passwords>Ask to save logins and passwords for sites
 * [NOTE] This does not clear any passwords already saved ***/
   // user_pref("signon.rememberSignons", false);
/* 0902: use a master password (recommended if you save passwords)
 * There are no preferences for this. It is all handled internally.
 * [SETTING] Privacy & Security>Forms & Passwords>Use a master password
 * [1] https://support.mozilla.org/kb/use-master-password-protect-stored-logins ***/
/* 0903: set how often Firefox should ask for the master password
 * 0=the first time (default), 1=every time it's needed, 2=every n minutes (as per the next pref) ***/
user_pref("security.ask_for_password", 2);
/* 0904: set how often in minutes Firefox should ask for the master password (see pref above)
 * in minutes, default is 30 ***/
user_pref("security.password_lifetime", 5);
/* 0905: disable auto-filling username & password form fields - SECURITY
 * can leak in cross-site forms AND be spoofed
 * [NOTE] Password will still be auto-filled after a user name is manually entered
 * [1] http://kb.mozillazine.org/Signon.autofillForms ***/
user_pref("signon.autofillForms", false);
/* 0906: disable websites' autocomplete="off" (FF30+)
 * Don't let sites dictate use of saved logins and passwords. Increase security through
 * stronger password use. The trade-off is the convenience. Some sites should never be
 * saved (such as banking sites). Set at true, informed users can make their own choice. ***/
user_pref("signon.storeWhenAutocompleteOff", true); // default: true
/* 0907: display warnings for logins on non-secure (non HTTPS) pages
 * [1] https://bugzilla.mozilla.org/1217156 ***/
user_pref("security.insecure_password.ui.enabled", true);
/* 0908: remove user & password info when attempting to fix an entered URL (i.e. 0802 is true)
 * e.g. //user:password@foo -> //user@(prefix)foo(suffix) NOT //user:password@(prefix)foo(suffix) ***/
user_pref("browser.fixup.hide_user_pass", true);
/* 0909: disable formless login capture for Password Manager (FF51+) ***/
user_pref("signon.formlessCapture.enabled", false);
/* 0910: disable autofilling saved passwords on HTTP pages and show warning (FF52+)
 * [1] https://www.fxsitecompat.com/en-CA/docs/2017/insecure-login-forms-now-disable-autofill-show-warning-beneath-input-control/
 * [2] https://bugzilla.mozilla.org/buglist.cgi?bug_id=1217152,1319119 ***/
user_pref("signon.autofillForms.http", false);
user_pref("security.insecure_field_warning.contextual.enabled", true);
/* 0911: prevent cross-origin images from triggering an HTTP-Authentication prompt (FF55+)
 * [1] https://bugzilla.mozilla.org/1357835 ***/
user_pref("network.auth.subresource-img-cross-origin-http-auth-allow", false);
/* 1001: disable disk cache ***/
user_pref("browser.cache.disk.enable", false);
user_pref("browser.cache.disk.capacity", 0);
user_pref("browser.cache.disk.smart_size.enabled", false);
user_pref("browser.cache.disk.smart_size.first_run", false);
/* 1002: disable disk cache for SSL pages
 * [1] http://kb.mozillazine.org/Browser.cache.disk_cache_ssl ***/
user_pref("browser.cache.disk_cache_ssl", false);
/* 1003: disable memory cache
 * [NOTE] Not recommended due to performance issues ***/
   // user_pref("browser.cache.memory.enable", false);
   // user_pref("browser.cache.memory.capacity", 0); // (hidden pref)
/* 1005: disable fastback cache
 * To improve performance when pressing back/forward Firefox stores visited pages
 * so they don't have to be re-parsed. This is not the same as memory cache.
 * 0=none, -1=auto (that's minus 1), or for other values see [1]
 * [NOTE] Not recommended unless you know what you're doing
 * [1] http://kb.mozillazine.org/Browser.sessionhistory.max_total_viewers ***/
   // user_pref("browser.sessionhistory.max_total_viewers", 0);
/* 1006: disable permissions manager from writing to disk [RESTART]
 * [NOTE] This means any permission changes are session only
 * [1] https://bugzilla.mozilla.org/967812 ***/
   // user_pref("permissions.memory_only", true); // (hidden pref)
/* 1008: set DNS cache and expiration time (default 400 and 60, same as Tor Browser) ***/
   // user_pref("network.dnsCacheEntries", 400);
   // user_pref("network.dnsCacheExpiration", 60);
/** SESSIONS & SESSION RESTORE ***/
/* 1020: disable the Session Restore service completely
 * [WARNING] [SETUP] This also disables the "Recently Closed Tabs" feature
 * It does not affect "Recently Closed Windows" or any history. ***/
user_pref("browser.sessionstore.max_tabs_undo", 0);
user_pref("browser.sessionstore.max_windows_undo", 0);
/* 1021: disable storing extra session data
 * extra session data contains contents of forms, scrollbar positions, cookies and POST data
 * define on which sites to save extra session data:
 * 0=everywhere, 1=unencrypted sites, 2=nowhere ***/
user_pref("browser.sessionstore.privacy_level", 2);
/* 1022: disable resuming session from crash [SETUP] ***/
user_pref("browser.sessionstore.resume_from_crash", false);
/* 1023: set the minimum interval between session save operations - increasing it
 * can help on older machines and some websites, as well as reducing writes, see [1]
 * Default is 15000 (15 secs). Try 30000 (30sec), 60000 (1min) etc
 * [WARNING] This can also affect entries in the "Recently Closed Tabs" feature:
 * i.e. the longer the interval the more chance a quick tab open/close won't be captured.
 * This longer interval *may* affect history but we cannot replicate any history not recorded
 * [1] https://bugzilla.mozilla.org/1304389 ***/
user_pref("browser.sessionstore.interval", 30000);
/* 1024: disable automatic Firefox start and session restore after reboot [WINDOWS] (FF62+)
 * [1] https://bugzilla.mozilla.org/603903 ***/
user_pref("toolkit.winRegisterApplicationRestart", false);
/** FAVICONS ***/
/* 1030: disable favicons in shortcuts
 * URL shortcuts use a cached randomly named .ico file which is stored in your
 * profile/shortcutCache directory. The .ico remains after the shortcut is deleted.
 * If set to false then the shortcuts use a generic Firefox icon ***/
user_pref("browser.shell.shortcutFavicons", false);
/* 1031: disable favicons in tabs and new bookmarks
 * bookmark favicons are stored as data blobs in favicons.sqlite ***/
   // user_pref("browser.chrome.site_icons", false);
/* 1032: disable favicons in web notifications ***/
user_pref("alerts.showFavicons", false);
/* 1201: disable old SSL/TLS "insecure" renegotiation (vulnerable to a MiTM attack)
 * [WARNING] <2% of secure sites do NOT support the newer "secure" renegotiation, see [2]
 * [1] https://wiki.mozilla.org/Security:Renegotiation
 * [2] https://www.ssllabs.com/ssl-pulse/ ***/
user_pref("security.ssl.require_safe_negotiation", true);
/* 1202: control TLS versions with min and max
 * 1=min version of TLS 1.0, 2=min version of TLS 1.1, 3=min version of TLS 1.2 etc
 * [NOTE] Jul-2017: Telemetry indicates approx 2% of TLS web traffic uses 1.0 or 1.1
 * [WARNING] If you get an "SSL_ERROR_NO_CYPHER_OVERLAP" error, temporarily
 * set a lower value for 'security.tls.version.min' in about:config
 * [1] http://kb.mozillazine.org/Security.tls.version.*
 * [2] https://www.ssl.com/how-to/turn-off-ssl-3-0-and-tls-1-0-in-your-browser/
 * [2] archived: https://archive.is/hY2Mm ***/
   // user_pref("security.tls.version.min", 3);
user_pref("security.tls.version.max", 4); // 4 = allow up to and including TLS 1.3
/* 1203: disable SSL session tracking (FF36+)
 * SSL Session IDs speed up HTTPS connections (no need to renegotiate) and last for 48hrs.
 * Since the ID is unique, web servers can (and do) use it for tracking. If set to true,
 * this disables sending SSL Session IDs and TLS Session Tickets to prevent session tracking
 * [1] https://tools.ietf.org/html/rfc5077
 * [2] https://bugzilla.mozilla.org/967977 ***/
user_pref("security.ssl.disable_session_identifiers", true); // (hidden pref)
/* 1204: disable SSL Error Reporting
 * [1] https://firefox-source-docs.mozilla.org/browser/base/sslerrorreport/preferences.html ***/
user_pref("security.ssl.errorReporting.automatic", false);
user_pref("security.ssl.errorReporting.enabled", false);
user_pref("security.ssl.errorReporting.url", "");
/* 1205: disable TLS1.3 0-RTT (round-trip time) (FF51+)
 * [1] https://github.com/tlswg/tls13-spec/issues/1001
 * [2] https://blog.cloudflare.com/tls-1-3-overview-and-q-and-a/ ***/
user_pref("security.tls.enable_0rtt_data", false); // (FF55+ default true)

/** OCSP (Online Certificate Status Protocol)
    #Required reading [#] https://scotthelme.co.uk/revocation-is-broken/ ***/
/* 1210: enable OCSP Stapling
 * [1] https://blog.mozilla.org/security/2013/07/29/ocsp-stapling-in-firefox/ ***/
user_pref("security.ssl.enable_ocsp_stapling", true);
/* 1211: control when to use OCSP fetching (to confirm current validity of certificates)
 * 0=disabled, 1=enabled (default), 2=enabled for EV certificates only
 * OCSP (non-stapled) leaks information about the sites you visit to the CA (cert authority)
 * It's a trade-off between security (checking) and privacy (leaking info to the CA)
 * [NOTE] This pref only controls OCSP fetching and does not affect OCSP stapling
 * [1] https://en.wikipedia.org/wiki/Ocsp ***/
user_pref("security.OCSP.enabled", 1);
/* 1212: set OCSP fetch failures (non-stapled, see 1211) to hard-fail
 * When a CA cannot be reached to validate a cert, Firefox just continues the connection (=soft-fail)
 * Setting this pref to true tells Firefox to instead terminate the connection (=hard-fail)
 * It is pointless to soft-fail when an OCSP fetch fails: you cannot confirm a cert is still valid (it
 * could have been revoked) and/or you could be under attack (e.g. malicious blocking of OCSP servers)
 * [1] https://blog.mozilla.org/security/2013/07/29/ocsp-stapling-in-firefox/
 * [2] https://www.imperialviolet.org/2014/04/19/revchecking.html ***/
user_pref("security.OCSP.require", true);

/** CERTS / HSTS (HTTP Strict Transport Security) / HPKP (HTTP Public Key Pinning) ***/
/* 1220: disable Windows 8.1's Microsoft Family Safety cert [WINDOWS] (FF50+)
 * 0=disable detecting Family Safety mode and importing the root
 * 1=only attempt to detect Family Safety mode (don't import the root)
 * 2=detect Family Safety mode and import the root
 * [1] https://trac.torproject.org/projects/tor/ticket/21686 ***/
user_pref("security.family_safety.mode", 0);
/* 1221: disable intermediate certificate caching (fingerprinting attack vector) [RESTART]
 * [NOTE] This may be better handled under FPI (ticket 1323644, part of Tor Uplift)
 * [WARNING] This affects login/cert/key dbs. The effect is all credentials are session-only.
 * Saved logins and passwords are not available. Reset the pref and restart to return them.
 * [TEST] https://fiprinca.0x90.eu/poc/
 * [1] https://bugzilla.mozilla.org/1334485 - related bug
 * [2] https://bugzilla.mozilla.org/1216882 - related bug (see comment 9) ***/
   // user_pref("security.nocertdb", true); // (hidden pref)
/* 1222: enforce strict pinning
 * PKP (Public Key Pinning) 0=disabled 1=allow user MiTM (such as your antivirus), 2=strict
 * [WARNING] If you rely on an AV (antivirus) to protect your web browsing
 * by inspecting ALL your web traffic, then leave at current default=1
 * [1] https://trac.torproject.org/projects/tor/ticket/16206 ***/
user_pref("security.cert_pinning.enforcement_level", 2);

/** MIXED CONTENT ***/
/* 1240: disable insecure active content on https pages - mixed content
 * [1] https://trac.torproject.org/projects/tor/ticket/21323 ***/
user_pref("security.mixed_content.block_active_content", true); // default: true
/* 1241: disable insecure passive content (such as images) on https pages - mixed context ***/
user_pref("security.mixed_content.block_display_content", true);
/* 1243: block unencrypted requests from Flash on encrypted pages to mitigate MitM attacks (FF59+)
 * [1] https://bugzilla.mozilla.org/1190623 ***/
user_pref("security.mixed_content.block_object_subrequest", true);

/** CIPHERS [see the section 1200 intro] ***/
/* 1260: disable or limit SHA-1
 * 0=all SHA1 certs are allowed
 * 1=all SHA1 certs are blocked (including perfectly valid ones from 2015 and earlier)
 * 2=deprecated option that now maps to 1
 * 3=only allowed for locally-added roots (e.g. anti-virus)
 * 4=only allowed for locally-added roots or for certs in 2015 and earlier
 * [WARNING] When disabled, some man-in-the-middle devices (e.g. security scanners and
 * antivirus products, may fail to connect to HTTPS sites. SHA-1 is *almost* obsolete.
 * [1] https://blog.mozilla.org/security/2016/10/18/phasing-out-sha-1-on-the-public-web/ ***/
user_pref("security.pki.sha1_enforcement_level", 1);
/* 1261: disable 3DES (effective key size < 128)
 * [1] https://en.wikipedia.org/wiki/3des#Security
 * [2] http://en.citizendium.org/wiki/Meet-in-the-middle_attack
 * [3] https://www-archive.mozilla.org/projects/security/pki/nss/ssl/fips-ssl-ciphersuites.html ***/
   // user_pref("security.ssl3.rsa_des_ede3_sha", false);
/* 1262: disable 128 bits ***/
   // user_pref("security.ssl3.ecdhe_ecdsa_aes_128_sha", false);
   // user_pref("security.ssl3.ecdhe_rsa_aes_128_sha", false);
/* 1263: disable DHE (Diffie-Hellman Key Exchange)
 * [WARNING] May break obscure sites, but not major sites, which should support ECDH over DHE
 * [1] https://www.eff.org/deeplinks/2015/10/how-to-protect-yourself-from-nsa-attacks-1024-bit-DH ***/
   // user_pref("security.ssl3.dhe_rsa_aes_128_sha", false);
   // user_pref("security.ssl3.dhe_rsa_aes_256_sha", false);
/* 1264: disable the remaining non-modern cipher suites as of FF52
 * [NOTE] Commented out because it still breaks too many sites ***/
   // user_pref("security.ssl3.rsa_aes_128_sha", false);
   // user_pref("security.ssl3.rsa_aes_256_sha", false);

/** UI (User Interface) ***/
/* 1270: display warning (red padlock) for "broken security" (see 1201)
 * [1] https://wiki.mozilla.org/Security:Renegotiation ***/
user_pref("security.ssl.treat_unsafe_negotiation_as_broken", true);
/* 1271: control "Add Security Exception" dialog on SSL warnings
 * 0=do neither 1=pre-populate url 2=pre-populate url + pre-fetch cert (default)
 * [1] https://github.com/pyllyukko/user.js/issues/210 ***/
user_pref("browser.ssl_override_behavior", 1);
/* 1272: display advanced information on Insecure Connection warning pages
 * only works when it's possible to add an exception
 * i.e. it doesn't work for HSTS discrepancies (https://subdomain.preloaded-hsts.badssl.com/)
 * [TEST] https://expired.badssl.com/ ***/
user_pref("browser.xul.error_pages.expert_bad_cert", true);
/* 1273: display "insecure" icon (FF59+) and "Not Secure" text (FF60+) on HTTP sites ***/
user_pref("security.insecure_connection_icon.enabled", true); // all windows
user_pref("security.insecure_connection_text.enabled", true);
   // user_pref("security.insecure_connection_icon.pbmode.enabled", true); // private windows only
   // user_pref("security.insecure_connection_text.pbmode.enabled", true);

/*** 1400: FONTS ***/
user_pref("_user.js.parrot", "1400 syntax error: the parrot's bereft of life!");
/* 1401: disable websites choosing fonts (0=block, 1=allow)
 * If you disallow fonts, this drastically limits/reduces font
 * enumeration (by JS) which is a high entropy fingerprinting vector.
 * [SETTING] General>Language and Appearance>Fonts & Colors>Advanced>Allow pages to choose...
 * [SETUP] Disabling fonts can uglify the web a fair bit. ***/
user_pref("browser.display.use_document_fonts", 0);
/* 1403: disable icon fonts (glyphs) (FF41) and local fallback rendering
 * [1] https://bugzilla.mozilla.org/789788
 * [2] https://trac.torproject.org/projects/tor/ticket/8455 ***/
   // user_pref("gfx.downloadable_fonts.enabled", false);
   // user_pref("gfx.downloadable_fonts.fallback_delay", -1);
/* 1404: disable rendering of SVG OpenType fonts
 * [1] https://wiki.mozilla.org/SVGOpenTypeFonts - iSECPartnersReport recommends to disable this ***/
user_pref("gfx.font_rendering.opentype_svg.enabled", false);
/* 1405: disable WOFF2 (Web Open Font Format) (FF35+) ***/
user_pref("gfx.downloadable_fonts.woff2.enabled", false);
/* 1406: disable CSS Font Loading API
 * [SETUP] Disabling fonts can uglify the web a fair bit. ***/
user_pref("layout.css.font-loading-api.enabled", false);
/* 1407: disable special underline handling for a few fonts which you will probably never use [RESTART]
 * Any of these fonts on your system can be enumerated for fingerprinting.
 * [1] http://kb.mozillazine.org/Font.blacklist.underline_offset ***/
user_pref("font.blacklist.underline_offset", "");
/* 1408: disable graphite which FF49 turned back on by default
 * In the past it had security issues. Update: This continues to be the case, see [1]
 * [1] https://www.mozilla.org/security/advisories/mfsa2017-15/#CVE-2017-7778 ***/
user_pref("gfx.font_rendering.graphite.enabled", false);
/* 1409: limit system font exposure to a whitelist (FF52+) [SETUP] [RESTART]
 * If the whitelist is empty, then whitelisting is considered disabled and all fonts are allowed.
 * [NOTE] Creating your own probably highly-unique whitelist will raise your entropy. If
 * you block sites choosing fonts in 1401, this preference is irrelevant. In future,
 * privacy.resistFingerprinting (see 4500) may cover this, and 1401 can be relaxed.
 * [1] https://bugzilla.mozilla.org/1121643 ***/
   // user_pref("font.system.whitelist", "");
/* 1601: ALL: control when images/links send a referer
 * 0=never, 1=send only when links are clicked, 2=for links and images (default) ***/
user_pref("network.http.sendRefererHeader", 2);
/* 1602: ALL: control the amount of information to send
 * 0=send full URI (default), 1=scheme+host+port+path, 2=scheme+host+port ***/
user_pref("network.http.referer.trimmingPolicy", 0);
/* 1603: CROSS ORIGIN: control when to send a referer [SETUP]
 * 0=always (default), 1=only if base domains match, 2=only if hosts match ***/
user_pref("network.http.referer.XOriginPolicy", 1);
/* 1604: CROSS ORIGIN: control the amount of information to send (FF52+)
 * 0=send full URI (default), 1=scheme+host+port+path, 2=scheme+host+port ***/
user_pref("network.http.referer.XOriginTrimmingPolicy", 0);
/* 1605: ALL: disable spoofing a referer
 * [WARNING] Spoofing effectively disables the anti-CSRF (Cross-Site Request Forgery) protections that some sites may rely on ***/
user_pref("network.http.referer.spoofSource", false);
/* 1606: ALL: set the default Referrer Policy
 * 0=no-referer, 1=same-origin, 2=strict-origin-when-cross-origin, 3=no-referrer-when-downgrade
 * [NOTE] This is only a default, it can be overridden by a site-controlled Referrer Policy
 * [1] https://www.w3.org/TR/referrer-policy/
 * [2] https://developer.mozilla.org/docs/Web/HTTP/Headers/Referrer-Policy
 * [3] https://blog.mozilla.org/security/2018/01/31/preventing-data-leaks-by-stripping-path-information-in-http-referrers/ ***/
user_pref("network.http.referer.defaultPolicy", 3); // (FF59+) default: 3
user_pref("network.http.referer.defaultPolicy.pbmode", 2); // (FF59+) default: 2
/* 1607: TOR: hide (not spoof) referrer when leaving a .onion domain (FF54+)
 * [NOTE] Firefox cannot access .onion sites by default. We recommend you use
 * the Tor Browser which is specifically designed for hidden services
 * [1] https://bugzilla.mozilla.org/1305144 ***/
user_pref("network.http.referer.hideOnionSource", true);
/* 1610: ALL: enable the DNT (Do Not Track) HTTP header
 * [SETTING] Privacy & Security>Content Blocking>Send websites a "Do Not Track"...
 * [NOTE] DNT is enforced with TP (see 0420) regardless of this pref ***/
user_pref("privacy.donottrackheader.enabled", true);

/*** 1800: PLUGINS ***/
user_pref("_user.js.parrot", "1800 syntax error: the parrot's pushing up daisies!");
/* 1801: set default plugin state (i.e. new plugins on discovery) to never activate
 * 0=disabled, 1=ask to activate, 2=active - you can override individual plugins ***/
user_pref("plugin.default.state", 0);
user_pref("plugin.defaultXpi.state", 0);
/* 1802: enable click to play and set to 0 minutes ***/
user_pref("plugins.click_to_play", true);
user_pref("plugin.sessionPermissionNow.intervalInMinutes", 0);
/* 1803: disable Flash plugin (Add-ons>Plugins)
 * 0=deactivated, 1=ask, 2=enabled
 * ESR52.x is the last branch to *fully* support NPAPI, FF52+ stable only supports Flash
 * [NOTE] You can still override individual sites via site permissions
 * [1] https://www.ghacks.net/2013/07/09/how-to-make-sure-that-a-firefox-plugin-never-activates-again/ ***/
user_pref("plugin.state.flash", 0);
/* 1805: disable scanning for plugins [WINDOWS]
 * [1] http://kb.mozillazine.org/Plugin_scanning
 * plid.all = whether to scan the directories specified in the Windows registry for PLIDs.
 * Used to detect RealPlayer, Java, Antivirus etc, but since FF52 only covers Flash ***/
user_pref("plugin.scan.plid.all", false);
/* 1820: disable all GMP (Gecko Media Plugins) [SETUP]
 * [1] https://wiki.mozilla.org/GeckoMediaPlugins ***/
user_pref("media.gmp-provider.enabled", false);
user_pref("media.gmp.trial-create.enabled", false);
user_pref("media.gmp-manager.url", "data:text/plain,");
user_pref("media.gmp-manager.url.override", "data:text/plain,"); // (hidden pref)
user_pref("media.gmp-manager.updateEnabled", false); // disable local fallback (hidden pref)
/* 1825: disable widevine CDM (Content Decryption Module) [SETUP] ***/
user_pref("media.gmp-widevinecdm.visible", false);
user_pref("media.gmp-widevinecdm.enabled", false);
user_pref("media.gmp-widevinecdm.autoupdate", false);
/* 1830: disable all DRM content (EME: Encryption Media Extension) [SETUP]
 * [SETTING] General>DRM Content>Play DRM-controlled content
 * [1] https://www.eff.org/deeplinks/2017/10/drms-dead-canary-how-we-just-lost-web-what-we-learned-it-and-what-we-need-do-next ***/
user_pref("media.eme.enabled", false);
/* 1840: disable the OpenH264 Video Codec by Cisco to "Never Activate"
 * This is the bundled codec used for video chat in WebRTC ***/
user_pref("media.gmp-gmpopenh264.enabled", false); // (hidden pref)
user_pref("media.gmp-gmpopenh264.autoupdate", false);
/* 2010: disable WebGL (Web Graphics Library), force bare minimum feature set if used & disable WebGL extensions
 * [1] https://www.contextis.com/resources/blog/webgl-new-dimension-browser-exploitation/
 * [2] https://security.stackexchange.com/questions/13799/is-webgl-a-security-concern ***/
user_pref("webgl.disabled", true);
user_pref("pdfjs.enableWebGL", false);
user_pref("webgl.min_capability_mode", true);
user_pref("webgl.disable-extensions", true);
user_pref("webgl.disable-fail-if-major-performance-caveat", true);
/* 2012: disable two more webgl preferences (FF51+) ***/
user_pref("webgl.dxgl.enabled", false); // [WINDOWS]
user_pref("webgl.enable-webgl2", false);
/* 2026: disable canvas capture stream (FF41+)
 * [1] https://developer.mozilla.org/docs/Web/API/HTMLCanvasElement/captureStream ***/
user_pref("canvas.capturestream.enabled", false);
/* 2027: disable camera image capture (FF35+)
 * [1] https://trac.torproject.org/projects/tor/ticket/16339 ***/
user_pref("dom.imagecapture.enabled", false); // default: false
/* 2028: disable offscreen canvas (FF44+)
 * [1] https://developer.mozilla.org/docs/Web/API/OffscreenCanvas ***/
user_pref("gfx.offscreencanvas.enabled", false);

/* 2201: prevent websites from disabling new window features
 * [1] http://kb.mozillazine.org/Prevent_websites_from_disabling_new_window_features ***/
user_pref("dom.disable_window_open_feature.close", true);
user_pref("dom.disable_window_open_feature.location", true); // default: true
user_pref("dom.disable_window_open_feature.menubar", true);
user_pref("dom.disable_window_open_feature.minimizable", true);
user_pref("dom.disable_window_open_feature.personalbar", true); // bookmarks toolbar
user_pref("dom.disable_window_open_feature.resizable", true); // default: true
user_pref("dom.disable_window_open_feature.status", true); // status bar - default: true
user_pref("dom.disable_window_open_feature.titlebar", true);
user_pref("dom.disable_window_open_feature.toolbar", true);
/* 2202: prevent scripts moving and resizing open windows ***/
user_pref("dom.disable_window_move_resize", true);
/* 2203: open links targeting new windows in a new tab instead
 * This stops malicious window sizes and some screen resolution leaks.
 * You can still right-click a link and open in a new window.
 * [TEST] https://people.torproject.org/~gk/misc/entire_desktop.html
 * [1] https://trac.torproject.org/projects/tor/ticket/9881 ***/
user_pref("browser.link.open_newwindow", 3);
user_pref("browser.link.open_newwindow.restriction", 0);
/* 2204: disable Fullscreen API (requires user interaction) to prevent screen-resolution leaks
 * [NOTE] You can still manually toggle the browser's fullscreen state (F11),
 * but this pref will disable embedded video/game fullscreen controls, e.g. youtube
 * [TEST] https://developer.mozilla.org/samples/domref/fullscreen.html ***/
   // user_pref("full-screen-api.enabled", false);
/* 2210: block popup windows
 * [SETTING] Privacy & Security>Permissions>Block pop-up windows ***/
user_pref("dom.disable_open_during_load", true);
/* 2211: set max popups from a single non-click event - default is 20! ***/
user_pref("dom.popup_maximum", 3);
/* 2212: limit events that can cause a popup
 * default is "change click dblclick mouseup pointerup notificationclick reset submit touchend"
 * [1] http://kb.mozillazine.org/Dom.popup_allowed_events ***/
user_pref("dom.popup_allowed_events", "click dblclick");
/* 2302: disable service workers
 * Service workers essentially act as proxy servers that sit between web apps, and the browser
 * and network, are event driven, and can control the web page/site it is associated with,
 * intercepting and modifying navigation and resource requests, and caching resources.
 * [NOTE] Service worker APIs are hidden (in Firefox) and cannot be used when in PB mode.
 * [NOTE] Service workers only run over HTTPS. Service Workers have no DOM access. ***/
user_pref("dom.serviceWorkers.enabled", false);
/* 2304: disable web notifications
 * [1] https://developer.mozilla.org/docs/Web/API/Notifications_API ***/
user_pref("dom.webnotifications.enabled", false); // (FF22+)
user_pref("dom.webnotifications.serviceworker.enabled", false);
/* 2306: disable push notifications (FF44+)
 * web apps can receive messages pushed to them from a server, whether or
 * not the web app is in the foreground, or even currently loaded
 * [1] https://developer.mozilla.org/docs/Web/API/Push_API ***/
user_pref("dom.push.enabled", false);
user_pref("dom.push.connection.enabled", false);
user_pref("dom.push.serverURL", "");
user_pref("dom.push.userAgentID", "");
/* 2401: disable website control over browser right-click context menu
 * [NOTE] Shift-Right-Click will always bring up the browser right-click context menu ***/
   // user_pref("dom.event.contextmenu.enabled", false);
/* 2402: disable website access to clipboard events/content
 * [WARNING] This will break some sites functionality such as pasting into facebook, wordpress
 * this applies to onCut, onCopy, onPaste events - i.e. you have to interact with
 * the website for it to look at the clipboard
 * [1] https://www.ghacks.net/2014/01/08/block-websites-reading-modifying-clipboard-contents-firefox/ ***/
user_pref("dom.event.clipboardevents.enabled", false);
/* 2403: disable clipboard commands (cut/copy) from "non-privileged" content (FF41+)
 * this disables document.execCommand("cut"/"copy") to protect your clipboard
 * [1] https://bugzilla.mozilla.org/1170911 ***/
user_pref("dom.allow_cut_copy", false); // (hidden pref)
/* 2404: disable "Confirm you want to leave" dialog on page close
 * Does not prevent JS leaks of the page close event.
 * [1] https://developer.mozilla.org/docs/Web/Events/beforeunload
 * [2] https://support.mozilla.org/questions/1043508 ***/
user_pref("dom.disable_beforeunload", true);
/* 2414: disable shaking the screen ***/
user_pref("dom.vibrator.enabled", false);
/* 2420: disable asm.js (FF22+)
 * [1] http://asmjs.org/
 * [2] https://www.mozilla.org/security/advisories/mfsa2015-29/
 * [3] https://www.mozilla.org/security/advisories/mfsa2015-50/
 * [4] https://www.mozilla.org/security/advisories/mfsa2017-01/#CVE-2017-5375
 * [5] https://www.mozilla.org/security/advisories/mfsa2017-05/#CVE-2017-5400
 * [6] https://rh0dev.github.io/blog/2017/the-return-of-the-jit/ ***/
user_pref("javascript.options.asmjs", false);
/* 2421: disable Ion and baseline JIT to help harden JS against exploits
 * [WARNING] Causes the odd site issue and there is also a performance loss
 * [1] https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2015-0817 ***/
   // user_pref("javascript.options.ion", false);
   // user_pref("javascript.options.baselinejit", false);
/* 2422: disable WebAssembly for now (FF52+)
 * [1] https://developer.mozilla.org/docs/WebAssembly ***/
user_pref("javascript.options.wasm", false);
/* 2426: disable Intersection Observer API (FF53+)
 * Almost a year to complete, three versions late to stable (as default false),
 * number #1 cause of crashes in nightly numerous times, and is (primarily) an
 * ad network API for "ad viewability checks" down to a pixel level
 * [1] https://developer.mozilla.org/docs/Web/API/Intersection_Observer_API
 * [2] https://w3c.github.io/IntersectionObserver/
 * [3] https://bugzilla.mozilla.org/1243846 ***/
user_pref("dom.IntersectionObserver.enabled", false);
/* 2427: disable Shared Memory (Spectre mitigation)
 * [1] https://github.com/tc39/ecmascript_sharedmem/blob/master/TUTORIAL.md
 * [2] https://blog.mozilla.org/security/2018/01/03/mitigations-landing-new-class-timing-attack/ ***/
user_pref("javascript.options.shared_memory", false);

/*** 2500: HARDWARE FINGERPRINTING ***/
user_pref("_user.js.parrot", "2500 syntax error: the parrot's shuffled off 'is mortal coil!");
/* 2502: disable Battery Status API
 * Initially a Linux issue (high precision readout) that was fixed.
 * However, it is still another metric for fingerprinting, used to raise entropy.
 * e.g. do you have a battery or not, current charging status, charge level, times remaining etc
 * [NOTE] From FF52+ Battery Status API is only available in chrome/privileged code. see [1]
 * [1] https://bugzilla.mozilla.org/1313580 ***/
   // user_pref("dom.battery.enabled", false);
/* 2504: disable virtual reality devices
 * [WARNING] [SETUP] Optional protection depending on your connected devices
 * [1] https://developer.mozilla.org/docs/Web/API/WebVR_API ***/
   // user_pref("dom.vr.enabled", false);
/* 2505: disable media device enumeration (FF29+)
 * [NOTE] media.peerconnection.enabled should also be set to false (see 2001)
 * [1] https://wiki.mozilla.org/Media/getUserMedia
 * [2] https://developer.mozilla.org/docs/Web/API/MediaDevices/enumerateDevices ***/
user_pref("media.navigator.enabled", false);
/* 2508: disable hardware acceleration to reduce graphics fingerprinting
 * [SETTING] General>Performance>Custom>Use hardware acceleration when available
 * [WARNING] [SETUP] Affects text rendering (fonts will look different), impacts video performance,
 * and parts of Quantum that utilize the GPU will also be affected as they are rolled out
 * [1] https://wiki.mozilla.org/Platform/GFX/HardwareAcceleration ***/
   // user_pref("gfx.direct2d.disabled", true); // [WINDOWS]
user_pref("layers.acceleration.disabled", true);
/* 2510: disable Web Audio API (FF51+)
 * [1] https://bugzilla.mozilla.org/1288359 ***/
user_pref("dom.webaudio.enabled", false);
/* 2516: disable PointerEvents
 * [1] https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent ***/
user_pref("dom.w3c_pointer_events.enabled", false);
/* 2517: disable Media Capabilities API (FF63+)
 * [WARNING] This *may* affect media performance if disabled, no one is sure
 * [1] https://github.com/WICG/media-capabilities
 * [2] https://wicg.github.io/media-capabilities/#security-privacy-considerations ***/
   // user_pref("media.media-capabilities.enabled", false);

/*** 2600: MISCELLANEOUS ***/
user_pref("_user.js.parrot", "2600 syntax error: the parrot's run down the curtain!");
/* 2601: prevent accessibility services from accessing your browser [RESTART]
 * [SETTING] Privacy & Security>Permissions>Prevent accessibility services from accessing your browser
 * [1] https://support.mozilla.org/kb/accessibility-services ***/
user_pref("accessibility.force_disabled", 1);
/* 2602: disable sending additional analytics to web servers
 * [1] https://developer.mozilla.org/docs/Web/API/Navigator/sendBeacon ***/
user_pref("beacon.enabled", false);
/* 2603: remove temp files opened with an external application
 * [1] https://bugzilla.mozilla.org/302433 ***/
user_pref("browser.helperApps.deleteTempFileOnExit", true);
/* 2604: disable page thumbnail collection
 * look in profile/thumbnails directory - you may want to clean that out ***/
user_pref("browser.pagethumbnails.capturing_disabled", true); // (hidden pref)
/* 2605: block web content in file processes (FF55+)
 * [WARNING] [SETUP] You may want to disable this for corporate or developer environments
 * [1] https://bugzilla.mozilla.org/1343184 ***/
user_pref("browser.tabs.remote.allowLinkedWebInFileUriProcess", false);
/* 2606: disable UITour backend so there is no chance that a remote page can use it ***/
user_pref("browser.uitour.enabled", false);
user_pref("browser.uitour.url", "");
/* 2607: disable various developer tools in browser context
 * [SETTING] Devtools>Advanced Settings>Enable browser chrome and add-on debugging toolboxes
 * [1] https://github.com/pyllyukko/user.js/issues/179#issuecomment-246468676 ***/
user_pref("devtools.chrome.enabled", false);
/* 2608: disable WebIDE to prevent remote debugging and extension downloads
 * [1] https://trac.torproject.org/projects/tor/ticket/16222 ***/
user_pref("devtools.webide.autoinstallADBHelper", false);
user_pref("devtools.debugger.remote-enabled", false);
user_pref("devtools.webide.enabled", false);
/* 2609: disable MathML (Mathematical Markup Language) (FF51+)
 * [TEST] http://browserspy.dk/mathml.php
 * [1] https://bugzilla.mozilla.org/1173199 ***/
user_pref("mathml.disabled", true);
/* 2610: disable in-content SVG (Scalable Vector Graphics) (FF53+)
 * [WARNING] Expect breakage incl. youtube player controls. Best left for a "hardened" profile.
 * [1] https://bugzilla.mozilla.org/1216893 ***/
   // user_pref("svg.disabled", true);
/* 2611: disable middle mouse click opening links from clipboard
 * [1] https://trac.torproject.org/projects/tor/ticket/10089
 * [2] http://kb.mozillazine.org/Middlemouse.contentLoadURL ***/
user_pref("middlemouse.contentLoadURL", false);
/* 2614: limit HTTP redirects (this does not control redirects with HTML meta tags or JS)
 * [WARNING] A low setting of 5 or under will probably break some sites (e.g. gmail logins)
 * To control HTML Meta tag and JS redirects, use an extension. Default is 20 ***/
user_pref("network.http.redirection-limit", 10);
/* 2615: disable websites overriding Firefox's keyboard shortcuts (FF58+)
 * [SETTING] to add site exceptions: Page Info>Permissions>Override Keyboard Shortcuts
 * [NOTE] At the time of writing, causes issues with delete and backspace keys ***/
   // user_pref("permissions.default.shortcuts", 2); //  0 (default) or 1=allow, 2=block
/* 2616: remove special permissions for certain mozilla domains (FF35+)
 * [1] resource://app/defaults/permissions ***/
user_pref("permissions.manager.defaultsUrl", "");
/* 2617: remove webchannel whitelist ***/
user_pref("webchannel.allowObject.urlWhitelist", "");
/* 2618: disable exposure of system colors to CSS or canvas (FF44+)
 * [NOTE] see second listed bug: may cause black on black for elements with undefined colors
 * [1] https://bugzilla.mozilla.org/buglist.cgi?bug_id=232227,1330876 ***/
user_pref("ui.use_standins_for_native_colors", true); // (hidden pref)
/* 2619: enforce Punycode for Internationalized Domain Names to eliminate possible spoofing
 * Firefox has *some* protections, but it is better to be safe than sorry. The downside: it will also
 * display legitimate IDN's punycoded, which might be undesirable for users of non-latin alphabets
 * [TEST] https://www.xn--80ak6aa92e.com/ (www.apple.com)
 * [1] https://wiki.mozilla.org/IDN_Display_Algorithm
 * [2] https://en.wikipedia.org/wiki/IDN_homograph_attack
 * [3] CVE-2017-5383: https://www.mozilla.org/security/advisories/mfsa2017-02/
 * [4] https://www.xudongz.com/blog/2017/idn-phishing/ ***/
user_pref("network.IDN_show_punycode", true);
/* 2620: enable Firefox's built-in PDF reader [SETUP]
 * [SETTING] General>Applications>Portable Document Format (PDF)
 * This setting controls if the option "Display in Firefox" in the above setting is available
 *   and by effect controls whether PDFs are handled in-browser or externally ("Ask" or "Open With")
 * PROS: pdfjs is lightweight, open source, and as secure/vetted as any pdf reader out there (more than most)
 *   Exploits are rare (1 serious case in 4 yrs), treated seriously and patched quickly.
 *   It doesn't break "state separation" of browser content (by not sharing with OS, independent apps).
 *   It maintains disk avoidance and application data isolation. It's convenient. You can still save to disk.
 * CONS: You may prefer a different pdf reader for security reasons
 * CAVEAT: JS can still force a pdf to open in-browser by bundling its own code (rare) ***/
user_pref("pdfjs.disabled", false);

/** DOWNLOADS ***/
/* 2650: discourage downloading to desktop (0=desktop 1=downloads 2=last used)
 * [SETTING] To set your default "downloads": General>Downloads>Save files to ***/
user_pref("browser.download.folderList", 2);
/* 2651: enforce user interaction for security by always asking the user where to download
 * [SETTING] General>Downloads>Always ask you where to save files ***/
user_pref("browser.download.useDownloadDir", false);
/* 2652: disable adding downloads to the system's "recent documents" list ***/
user_pref("browser.download.manager.addToRecentDocs", false);
/* 2653: disable hiding mime types (Options>General>Applications) not associated with a plugin ***/
user_pref("browser.download.hide_plugins_without_extensions", false);
/* 2654: disable "open with" in download dialog (FF50+)
 * This is very useful to enable when the browser is sandboxed (e.g. via AppArmor)
 * in such a way that it is forbidden to run external applications.
 * [SETUP] This may interfere with some users' workflow or methods
 * [1] https://bugzilla.mozilla.org/1281959 ***/
user_pref("browser.download.forbid_open_with", true);

/** EXTENSIONS ***/
/* 2660: lock down allowed extension directories
 * [WARNING] This will break extensions that do not use the default XPI directories
 * [1] https://mike.kaply.com/2012/02/21/understanding-add-on-scopes/
 * [1] archived: https://archive.is/DYjAM ***/
user_pref("extensions.enabledScopes", 1); // (hidden pref)
user_pref("extensions.autoDisableScopes", 15);
/* 2662: disable webextension restrictions on certain mozilla domains (also see 4503) (FF60+)
 * [1] https://bugzilla.mozilla.org/buglist.cgi?bug_id=1384330,1406795,1415644,1453988 ***/
   // user_pref("extensions.webextensions.restrictedDomains", "");
/* 2663: enable warning when websites try to install add-ons
 * [SETTING] Privacy & Security>Permissions>Warn you when websites try to install add-ons ***/
user_pref("xpinstall.whitelist.required", true); // default: true

/** SECURITY ***/
/* 2680: enable CSP (Content Security Policy)
 * [1] https://developer.mozilla.org/docs/Web/HTTP/CSP ***/
user_pref("security.csp.enable", true); // default: true
/* 2681: disable CSP violation events (FF59+)
 * [1] https://developer.mozilla.org/docs/Web/API/SecurityPolicyViolationEvent ***/
user_pref("security.csp.enable_violation_events", false);
/* 2682: enable CSP 1.1 experimental hash-source directive (FF29+)
 * [1] https://bugzilla.mozilla.org/buglist.cgi?bug_id=855326,883975 ***/
user_pref("security.csp.experimentalEnabled", true);
/* 2683: block top level window data: URIs (FF56+)
 * [1] https://bugzilla.mozilla.org/1331351
 * [2] https://www.wordfence.com/blog/2017/01/gmail-phishing-data-uri/
 * [3] https://www.fxsitecompat.com/en-CA/docs/2017/data-url-navigations-on-top-level-window-will-be-blocked/ ***/
user_pref("security.data_uri.block_toplevel_data_uri_navigations", true); // default: true in FF59+
/* 2684: enforce a security delay on some confirmation dialogs such as install, open/save
 * [1] http://kb.mozillazine.org/Disable_extension_install_delay_-_Firefox
 * [2] https://www.squarefree.com/2004/07/01/race-conditions-in-security-dialogs/ ***/
user_pref("security.dialog_enable_delay", 700);
user_pref("_user.js.parrot", "2700 syntax error: the parrot's joined the bleedin' choir invisible!");
/* 2701: disable 3rd-party cookies and site-data [SETUP]
 * You can set exceptions under site permissions or use an extension
 * 0=Accept cookies and site data, 1=Block third-party cookies, 2=Block all cookies,
 * 3=Block cookies from unvisited sites, 4=Block third-party trackers (FF63+)
 * [NOTE] value 4 is tied to the Tracking Protection lists so make sure you have 0424 + 0425 on default values!
 * [SETTING] Privacy & Security>Cookies and Site Data>Type blocked
 * [NOTE] Blocking 3rd party controls 3rd party access to localStorage, IndexedDB, Cache API and Service Worker Cache.
 * Blocking 1st party controls access to localStorage and IndexedDB (note: Service Workers can still use IndexedDB).
 * [1] https://www.fxsitecompat.com/en-CA/docs/2015/web-storage-indexeddb-cache-api-now-obey-third-party-cookies-preference/ ***/
user_pref("network.cookie.cookieBehavior", 1);
/* 2702: set third-party cookies (i.e ALL) (if enabled, see above pref) to session-only
   and (FF58+) set third-party non-secure (i.e HTTP) cookies to session-only
   [NOTE] .sessionOnly overrides .nonsecureSessionOnly except when .sessionOnly=false and
   .nonsecureSessionOnly=true. This allows you to keep HTTPS cookies, but session-only HTTP ones
 * [1] https://feeding.cloud.geek.nz/posts/tweaking-cookies-for-privacy-in-firefox/
 * [2] http://kb.mozillazine.org/Network.cookie.thirdparty.sessionOnly ***/
user_pref("network.cookie.thirdparty.sessionOnly", true);
user_pref("network.cookie.thirdparty.nonsecureSessionOnly", true); // (FF58+)
/* 2703: set cookie lifetime policy
 * 0=until they expire (default), 2=until you close Firefox
 * [NOTE] 3=for n days : no longer supported in FF63+ (see 2704-deprecated)
 * [SETTING] Privacy & Security>Cookies and Site Data>Keep until... ***/
   // user_pref("network.cookie.lifetimePolicy", 0);
/* 2705: disable HTTP sites setting cookies with the "secure" directive (FF52+)
 * [1] https://developer.mozilla.org/Firefox/Releases/52#HTTP ***/
user_pref("network.cookie.leave-secure-alone", true); // default: true
/* 2706: enable support for same-site cookies (FF60+)
 * [1] https://bugzilla.mozilla.org/795346
 * [2] https://blog.mozilla.org/security/2018/04/24/same-site-cookies-in-firefox-60/
 * [3] https://www.sjoerdlangkemper.nl/2016/04/14/preventing-csrf-with-samesite-cookie-attribute/ ***/
   // user_pref("network.cookie.same-site.enabled", true); // default: true
/* 2710: disable DOM (Document Object Model) Storage
 * [WARNING] This will break a LOT of sites' functionality AND extensions!
 * You are better off using an extension for more granular control ***/
   // user_pref("dom.storage.enabled", false);
/* 2720: enforce IndexedDB (IDB) as enabled
 * IDB is required for extensions and Firefox internals (even before FF63 in [1])
 * To control *website* IDB data, control allowing cookies and service workers, or use
 * Temporary Containers. To mitigate *website* IDB, FPI helps (4001), and/or sanitize
 * on close (Offline Website Data, see 2800) or on-demand (Ctrl-Shift-Del), or automatically
 * via an extenion. Note that IDB currently cannot be sanitized by host.
 * [1] https://blog.mozilla.org/addons/2018/08/03/new-backend-for-storage-local-api/ ***/
user_pref("dom.indexedDB.enabled", true); // default: true
/* 2730: disable offline cache ***/
user_pref("browser.cache.offline.enable", false);
/* 2730b: disable offline cache on insecure sites (FF60+)
 * [1] https://blog.mozilla.org/security/2018/02/12/restricting-appcache-secure-contexts/ ***/
user_pref("browser.cache.offline.insecure.enable", false); // default: false in FF62+
/* 2731: enforce websites to ask to store data for offline use
 * [1] https://support.mozilla.org/questions/1098540
 * [2] https://bugzilla.mozilla.org/959985 ***/
user_pref("offline-apps.allow_by_default", false);
/* 2740: disable service workers cache and cache storage
 * [1] https://w3c.github.io/ServiceWorker/#privacy ***/
user_pref("dom.caches.enabled", false);
/* 2750: disable Storage API (FF51+)
 * The API gives sites the ability to find out how much space they can use, how much
 * they are already using, and even control whether or not they need to be alerted
 * before the user agent disposes of site data in order to make room for other things.
 * [1] https://developer.mozilla.org/docs/Web/API/StorageManager
 * [2] https://developer.mozilla.org/docs/Web/API/Storage_API
 * [3] https://blog.mozilla.org/l10n/2017/03/07/firefox-l10n-report-aurora-54/ ***/
   // user_pref("dom.storageManager.enabled", false);
/* 2805: privacy.*.openWindows (clear session restore data) (FF34+)
 * [NOTE] There is a years-old bug that these cause two windows when Firefox restarts.
 * You do not need these anyway if session restore is disabled (see 1020) ***/
   // user_pref("privacy.clearOnShutdown.openWindows", true);
   // user_pref("privacy.cpd.openWindows", true);
/* 4001: enable First Party Isolation (FF51+)
 * [WARNING] May break cross-domain logins and site functionality until perfected
 * [1] https://bugzilla.mozilla.org/1260931 ***/
user_pref("privacy.firstparty.isolate", true);
/* 4002: enforce FPI restriction for window.opener (FF54+)
 * [NOTE] Setting this to false may reduce the breakage in 4001
 * [FF65+] blocks postMessage with targetOrigin "*" if originAttributes don't match. But
 * to reduce breakage it ignores the 1st-party domain (FPD) originAttribute. (see [2],[3])
 * The 2nd pref removes that limitation and will only allow communication if FPDs also match.
 * [1] https://bugzilla.mozilla.org/1319773#c22
 * [2] https://bugzilla.mozilla.org/1492607
 * [3] https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage ***/
user_pref("privacy.firstparty.isolate.restrict_opener_access", true); // default: true
   // user_pref("privacy.firstparty.isolate.block_post_message", true); // (hidden pref)
/* 4501: enable privacy.resistFingerprinting (FF41+)
 * [1] https://bugzilla.mozilla.org/418986 ***/
user_pref("privacy.resistFingerprinting", true); // (hidden pref) (not hidden FF55+)
/* 4502: set new window sizes to round to hundreds (FF55+) [SETUP]
 * [NOTE] Width will round down to multiples of 200s and height to 100s, to fit your screen.
 * The override values are a starting point to round from if you want some control
 * [1] https://bugzilla.mozilla.org/1330882
 * [2] https://hardware.metrics.mozilla.com/ ***/
   // user_pref("privacy.window.maxInnerWidth", 1600); // (hidden pref)
   // user_pref("privacy.window.maxInnerHeight", 900); // (hidden pref)
/* 4503: disable mozAddonManager Web API (FF57+)
 * [NOTE] As a side-effect in FF57-59 this allowed extensions to work on AMO. In FF60+ you also need
 * to sanitize or clear extensions.webextensions.restrictedDomains (see 2662) to keep that side-effect
 * [1] https://bugzilla.mozilla.org/buglist.cgi?bug_id=1384330,1406795,1415644,1453988 ***/
user_pref("privacy.resistFingerprinting.block_mozAddonManager", true); // (hidden pref)
/* 4504: disable showing about:blank as soon as possible during startup (FF60+)
 * When default true (FF62+) this no longer masks the RFP resizing activity
 * [1] https://bugzilla.mozilla.org/1448423 ***/
user_pref("browser.startup.blankWindow", false);