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
 * Last modified: December 5, 2018
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

/* Promo for mobile phones
 * Акция для мобильных телефонов */
user_pref("identity.mobilepromo.android", "");
user_pref("identity.mobilepromo.ios", "");

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
user_pref("browser.search.geoSpecificDefaults.url", "");

/* Use the application language over the language of your operating system in the regional settings
 * Использовать язык приложения поверх языка вашей операционной системы в региональных настройках */
user_pref("intl.regional_prefs.use_os_locales", false);

/* First Party Isolation
 * Изоляция первой стороны */
user_pref("privacy.firstparty.isolate", true);
user_pref("privacy.firstparty.isolate.restrict_opener_access", true);

/* Firefox Fingerprints
 * Отпечатки пальцев Firefox */
user_pref("privacy.resistFingerprinting", true);

/* Recommended themes
 * Рекомендованные темы */
user_pref("lightweightThemes.recommendedThemes", "");

/* Install only signed extensions
 * Установка только подписанных расширений */
user_pref("xpinstall.signatures.required", true);
user_pref("xpinstall.signatures.devInfoURL", "");

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
user_pref("plugin.defaultXpi.state", 0);

/* Activate the plugin by clicking
 * Активация плагина по клику */
user_pref("plugins.click_to_play", true);

/* Time to run plugins
 * Время для запуска плагинов */
user_pref("plugin.sessionPermissionNow.intervalInMinutes", 0);

/* Flash plugin
 *		0 = Off
 *		1 = Ask
 *		2 = On
 * Flash плагин
 *		0 = Выключить
 *		1 = Спросить
 *		2 = Включить */
user_pref("plugin.state.flash", 0);

/* Scanning the system for plug-ins
 * Сканирование системы на наличие плагинов */
user_pref("plugin.scan.plid.all", false); // [WINDOWS]

/* GMP (Gecko Media Plugins)
 * GMP (Gecko Медиа Плагины) */
user_pref("media.gmp-provider.enabled", false);
user_pref("media.gmp.trial-create.enabled", false);
user_pref("media.gmp-manager.url", "data:text/plain,");
user_pref("media.gmp-manager.url.override", "data:text/plain,");
user_pref("media.gmp-manager.updateEnabled", false);
user_pref("media.gmp-manager.cert.checkAttributes", false);
user_pref("media.gmp-manager.buildID", "");
user_pref("media.gmp-manager.lastCheck", "");
user_pref("media.gmp-manager.certs.1.commonName", "");
user_pref("media.gmp-manager.certs.1.issuerName", "");
user_pref("media.gmp-manager.certs.2.commonName", "");
user_pref("media.gmp-manager.certs.2.issuerName", "");
user_pref("media.gmp-manager.cert.requireBuiltIn", false);

/* Widevine CDM (Content Decryption Module)
 * Widevine CDM (Модуль Расшифровки Контента) */
user_pref("media.gmp-widevinecdm.visible", false);
user_pref("media.gmp-widevinecdm.enabled", false);

/* Digital Rights Management (DRM)
 * Управление цифровыми правами */
user_pref("media.eme.enabled", false);
user_pref("browser.eme.ui.enabled", false);

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

/* Synchronization integration
 * Интеграция синхронизации */
user_pref("identity.fxaccounts.enabled", true);

/* Synchronization of preferences
 * Синхронизация предпочтений */
user_pref("services.sync.engine.addresses", false);
user_pref("services.sync.engine.addresses.available", false);
user_pref("services.sync.engine.creditcards", false);
user_pref("services.sync.engine.creditcards.available", false);
user_pref("services.sync.engine.history", false);
user_pref("services.sync.engine.prefs", false);
user_pref("services.sync.engine.prefs.modified", false);
user_pref("services.sync.engine.tabs", false);

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
user_pref("browser.cache.frecency_experiment", -1);

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
user_pref("browser.cache.offline.capacity", 0);

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
 *		3 = Block cookies from sites not visited
 * Куки
 *		0 = Принимать куки и данные сайтов
 *		1 = Блокировать стороннии куки
 *		2 = Блокировать все куки
 *		3 = Блокировать куки с не посещенных сайтов */
user_pref("network.cookie.cookieBehavior", 1);

/* Third-party cookies are set for the session only
 * Сторонние файлы куки устанавливаются только для сеанса */
user_pref("network.cookie.thirdparty.sessionOnly", true);

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
 * [NOTE] Disables another way for sites to store their data on the user's personal computer.
 * API Хранилища
 * [ЗАМЕТКА] Отключает еще один способ для сайтов хранить свои данные на персональном компьютере пользователя. */
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