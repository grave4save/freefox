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
 * Last modified: December 2, 2018
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