// This file is part of the Free Fox project,
// Copyright (c) 2019 Bogachenko Vyacheslav
//
// Free Fox is a free project: you can distribute it and/or modify
// it in accordance with the MIT license published by the Massachusetts Institute of Technology.
//
// The Free Fox project is distributed in the hope that it will be useful,
// and is provided "AS IS", WITHOUT ANY WARRANTY, EXPRESSLY EXPRESSED OR IMPLIED.
// WE ARE NOT RESPONSIBLE FOR ANY DAMAGES DUE TO THE USE OF THIS PROJECT OR ITS PARTS.
// For more information, see the MIT license.
//
// Author: Bogachenko Vyacheslav <https://github.com/bogachenko>
// Email: bogachenkove@gmail.com
// Github: https://github.com/bogachenko/freefox/tree/master/firefox/
// Last modified: January 24, 2019
// License: MIT <https://github.com/bogachenko/freefox/blob/master/LICENSE.md>
// Problem reports: https://github.com/bogachenko/freefox/issues
// Title: user.js
// URL: https://github.com/bogachenko/freefox/blob/master/firefox/user.js
// Version: 64.0.2
//
// Download the entire Free Fox project at https://github.com/bogachenko/freefox/archive/master.zip

// Warning in "about:config"
// Предупреждение в "about:config"
user_pref("general.warnOnAboutConfig", false);

// Warning in "about:networking"
// Предупреждение в "about:networking"
user_pref("network.warnOnAboutNetworking", false);

// Warning about closing multiple tabs
// Предупреждение о закрытии нескольких вкладок
user_pref("browser.tabs.warnOnClose", true);
user_pref("browser.tabs.warnOnCloseOtherTabs", true);

// Warning about opening a large number of tabs
// Предупреждение о открытии большого количества вкладок
user_pref("browser.tabs.warnOnOpen", true);

// UserAgent
// The UserAgent string (part of the HTTP header) is used to communicate
// and transfer content (content) between the client program and the server. With the help of its analysis,
// the server determines the optimal parameters for interaction on the basis of existing specifications of a software,
// data on its purpose (browser, email client, etc.) and the current version.
// [NOTE] The above is the UserAgent from Firefox ESR, but you can change it and find
// the fake UserAgent values on the Internet. Please choose the most common options (as shown in the example above),
// trying not to "stand out" from the total mass of browsers.
// [WARNING] To prevent leaks of information about your operating system and browser through UA analysis,
// additionally disable JavaScript globally!
// UserAgent
// Строка User-Agent (часть HTTP-заголовка) используется для связи и передачи содержимого (контента)
// между клиентской программой и сервером. С помощью ее анализа сервер определяет оптимальные параметры
// для взаимодействия на основании уже имеющихся спецификаций того или иного программного обеспечения,
// данных о его назначении (браузер, почтовый клиент и т.п.) и текущей версии.
// [ЗАМЕТКА] Выше представлен UserAgent от Firefox ESR, однако вы можете его изменить и найти
// поддельные значения UserAgent в интернете. Пожалуйста, выбирайте наиболее общеупотребимые варианты
// (как это показано в примере выше), стараясь "не выделяться" из общей массы браузеров.
// [ВНИМАНИЕ] Для предотвращения утечек информации об используемой ОС и браузере посредством анализа UA,
// дополнительно запретите JavaScript глобально!
user_pref("general.useragent.override", "Mozilla/5.0 (Windows NT 6.1; rv:60.0) Gecko/20100101 Firefox/60.0");
user_pref("general.appname.override", "Netscape");
user_pref("general.appversion.override", "5.0 (Windows)");
user_pref("general.platform.override", "Win32");
user_pref("general.oscpu.override", "Windows NT 6.1");
user_pref("general.useragent.locale", "en-US");

// Check if Firefox is your default browser
// Проверять, является ли Firefox вашим браузером по умолчанию
user_pref("browser.shell.checkDefaultBrowser", false);

// Measuring browser startup time (and displaying a profile deletion notification if the launch time is long)
// Замер времени запуска браузера (и показ уведомления об удалении профиля, если время запуска долгое)
user_pref("browser.slowStartup.notificationDisabled", true);

// Opening pages "Welcome and what's new?"
// Открытие страниц "Добро пожаловать и что нового?"
user_pref("browser.startup.homepage_override.mstone", "ignore");
user_pref("startup.homepage_welcome_url", "");
user_pref("startup.homepage_welcome_url.additional", "");
user_pref("startup.homepage_override_url", "");

// Start page
//		0 = Blank page
//		1 = Home page
//		2 = Last page visited
//		3 = Resume previous session
// Стартовая страница
//		0 = Пустая страница
//		1 = Домашняя страница
//		2 = Последняя посещенная страница
//		3 = Возобновить предыдущую сессию
user_pref("browser.startup.page", 0);

// Homepage
// Домашняя страница
user_pref("browser.startup.homepage", "about:blank");

// Snippets
// Disable sending statistical information related to the technology Snippets (eng.: "piece", "fragment", "nothingness").
// The default Firefox home page (about:home) includes a built-in mechanism to show some information and track user preferences at the same time.
// Once a day, Firefox connects to the Mozilla server and then offers a new "piece". Mozilla keeps track of the number of taps,
// their names, the locale of the browser and its version. This information is stored on the Mozilla server for 60 days.
// To show the most suitable scraps, Firefox monthly sends a request to your Mozilla server about your location and IP address.
// Some "snatches" are interactive and can distribute your mailing address and phone number, which is especially dangerous.
// Сниппеты
// Отключение отсылки статистической информации, связанной с технологией Snippets (англ.: "обрывок", "фрагмент", "ничтожество").
// Домашняя страница Firefox, установленная по умолчанию (about:home), содержит встроенный механизм показа некоторой информации
// и одновременного слежения за пользовательскими предпочтениями. Раз в день Firefox соединяется с сервером Mozilla и затем предлагает новый "обрывок".
// Mozilla отслеживает количество нажатий, их имена, локаль браузера и его версию. Эта информация хранится на сервере Mozilla 60 дней.
// Для показа наиболее подходящих "обрывков", Firefox ежемесячно посылает на сервер Mozilla запрос о вашем местонахождении и IP-адресе.
// Некоторые "обрывки" интерактивны и могут распространять ваш почтовый адрес и телефонный номер, что особенно опасно.
user_pref("browser.aboutHomeSnippets.updateUrl", "");

// New inset
//		TRUE = Activity stream
//		FALSE = Blank page
// Новая вкладкa
//		TRUE = Activity stream
//		FALSE = Пустая страница
user_pref("browser.newtabpage.enabled", false);

// Pinned sites in a new tab
// [NOTE] Depends on the expansion of the Activity stream.
// Закрепленные сайты на новой вкладке
// [ЗАМЕТКА] Зависит от расширения Activity stream.
user_pref("browser.newtabpage.pinned", "");

// Preloading a new tab
// Предварительная загрузка новой вкладки
user_pref("browser.newtab.preload", false);

// Mouse wheel button action when clicked
//		TRUE = Open in new tab
//		FALSE = Open in new window
// Действие кнопки колесика мыши при нажатии по ссылке
//		TRUE = Открывать в новой вкладке
//		FALSE = Открывать в новом окне
user_pref("browser.tabs.opentabfor.middleclick", false);

// Opening tabs and external applications in the background
//		TRUE = Open such tabs in the background
//		FALSE = Switch to openable tabs
// Открытие вкладок и внешних приложений в фоновом режиме
//		TRUE = Открывать такие вкладки в фоне
//		FALSE = Переключаться на открываемые вкладки
user_pref("browser.tabs.loadDivertedInBackground", true);

// Configuring container tabs in settings
//		TRUE = Enable "Tabs in Container"
//		FALSE = Disable "Tabs in Container"
// Настройка вкладок контейнера в настройках
//		TRUE = Включить "Вкладки в контейнере"
//		FALSE = Отключить "Вкладки в контейнере"
user_pref("privacy.userContext.ui.enabled", true);

// Container tab item in context menu
//		TRUE = Display
//		FALSE = Do not display
// Пункт вкладок контейнеров в контекстном меню
//		TRUE = Отображать
//		FALSE = Не отображать
user_pref("privacy.userContext.enabled", true);

// Private container for sketch loads
// Частный контейнер для эскизных нагрузок
user_pref("privacy.usercontext.about_newtab_segregation.enabled", true);

// Conditions for long pressing the "+" button in the tabs
//		0 = Disable long press
//		1 = Display menu
//		2 = Menu is displayed after "N" milliseconds
// Условия после длительного нажатия кнопки "+" на вкладках
//		0 = Отключить длительное нажатие
//		1 = Отображается меню
//		2 = Меню отображается через "N" миллисекунд
user_pref("privacy.userContext.longPressBehavior", 0);

// Font size
// Размер шрифта
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

// Proportions (fonts)
// Пропорции (шрифты)
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

// Default Fonts
// Шрифты по умолчанию
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
user_pref("font.language.group", "x-western");
// user_pref("font.name-list.emoji", "Noto Color Emoji");

// Preferred language for displaying web pages
// Предпочитаемый язык для отображения веб-страниц
user_pref("intl.accept_languages", "en-US, en");

// Forced to use UTF-8 for text files
// Принудительное использование UTF-8 для текстовых файлов
user_pref("intl.charset.fallback.utf8_for_file", true);

// Automatic check for updates for extensions
// Автоматическая проверка обновлений для расширений
user_pref("extensions.update.enabled", false);

// Automatic installation of updates for Firefox
// Автоматическая установка обновлений для Firefox
user_pref("app.update.auto", false);

// Automatic installation of updates for extensions
// Автоматическая установка обновлений для расширений
user_pref("extensions.update.autoUpdateDefault", false);

// Background update service
// Служба для фонового обновления
user_pref("app.update.service.enabled", true);
user_pref("app.update.staging.enabled", false);

// Display information about the update
// Отображение информация об обновлении
user_pref("app.update.silent", false);

// Update extension metadata
// [NOTE] Disable profiled add-on information and block the sending of user metadata about the use of add-ons.
// The browser, based on the list of already installed add-ons, offers new ones on the "Get Add-ons" page
// in the add-ons manager. At the same time, Mozilla receives and analyzes information from the browser: version number,
// IP address, and so on.
// Обновление метаданных расширения
// [ЗАМЕТКА] Отключение профилируемой информации о дополнениях и блокирование отсылки пользовательских метаданных
// об использовании дополнений. Браузер, отталкиваясь от списка уже установленных дополнений, предлагает новые
// на странице "Get Add-ons" в менеджере дополнений. При этом Mozilla получает и анализирует информацию,
// поступающую от браузера: номер версии, IP-адрес и прочее.
user_pref("extensions.getAddons.cache.enabled", false);

// Automatic update of search engines
// Автоматическое обновление поисковых систем
user_pref("browser.search.update", false);

// Search suggestions
// The default search engine uses geolocation-related data (your real location, determined by IP address).
// This data is sent to the Mozilla and Google servers. In addition, Google collects and stores data
// about your search queries and preferences.
// Поисковые предложения
// Поисковый механизм по умолчанию использует данные, связанные с геолокацией (вашим реальным местонахождением,
// определяемым по IP-адресу). Эти данные отсылаются на серверы Mozilla и Google. Кроме того, Google собирает и
// хранит данные о ваших поисковых запросах и предпочтениях.
user_pref("browser.search.suggest.enabled", false);

// In "about:addons" remove the item "Get add-ons"
// [WARNING] Uses Google Analytics.
// В "about:addons" убрать пункт "Получить дополнения"
// [ВНИМАНИЕ] Использует Google Analytics.
user_pref("extensions.getAddons.showPane", false);
user_pref("extensions.webservice.discoverURL", "");

// Guessing the domain in the address bar
// Угадывание домена в адресной строке
user_pref("browser.fixup.alternate.enabled", false);
user_pref("browser.fixup.domainwhitelist.localhost", false);

// Number of steps "To previous page" and "To next page"
// If you change the value to "0", you can not use the "Back" button.
// Количество шагов "На предыдущую страницу" и "На следующую страницу"
// [ЗАМЕТКА] Если вы измените значение на "0", то не сможете воспользоваться кнопкой "Назад".
user_pref("browser.sessionhistory.max_entries", 10);

// Preloading autocomplete URLs (when you enter in the address bar)
// Предварительная загрузка URL-адресов автозаполнения (при вводе в адресную строку)
user_pref("browser.urlbar.speculativeConnect.enabled", false);

// Autocomplete and suggestion types
// Автозаполнение и типы предложений
user_pref("browser.urlbar.autocomplete.enabled", false); // Autocomplete / Автозаполнение
user_pref("browser.urlbar.suggest.history", false); // History / История
user_pref("browser.urlbar.suggest.bookmark", false); // Bookmarks / Закладки
user_pref("browser.urlbar.suggest.openpage", false); // Open tabs / Открытые вкладки

// The number of results displayed in the drop-down list in the address bar
// Количество результатов, отображаемых в раскрывающемся списке в адресной строке
user_pref("browser.urlbar.maxRichResults", 0);

// Alternative search engines in the address bar
// Альтернативные поисковые системы в адресной строке
user_pref("browser.urlbar.oneOffSearches", false);

// Inline autocomplete
//		TRUE = Supplement the text typed in the address bar
//		FALSE = Show below
// Встроенное автозаполнение
//		TRUE = Дополнять текст, набранный в адресной строке
//		FALSE = Показывать ниже
user_pref("browser.urlbar.autoFill", false);

// Remember the search history and form data
// Помнить историю поиска и данные формы
user_pref("browser.formfill.enable", false);
user_pref("browser.formfill.expire_days", 0);

// Remember your browsing and download history
// Помните историю посещений и загрузок
user_pref("places.history.enabled", false);

// Automatic deletion of history when closing the browser
// Автоматическое удаление истории при закрытии браузера
user_pref("privacy.sanitize.sanitizeOnShutdown", true);

// What elements of the story should be automatically deleted when you close Firefox
// Какие элементы истории должны быть автоматически удалены при закрытии Firefox
user_pref("privacy.clearOnShutdown.cache", true); // Cache / Кэш
user_pref("privacy.clearOnShutdown.cookies", false); // Cookies / Куки
user_pref("privacy.clearOnShutdown.downloads", true); // Downloads / Загрузки
user_pref("privacy.clearOnShutdown.formdata", true); // Form data / Данные форм
user_pref("privacy.clearOnShutdown.history", true); // History / История
user_pref("privacy.clearOnShutdown.offlineApps", false); // Offline website data / Данные автономных веб-сайтов
user_pref("privacy.clearOnShutdown.sessions", true); // Active sessions / Активные сеансы
user_pref("privacy.clearOnShutdown.siteSettings", false); // Site settings / Настройки сайтов

// Master cleaner Firefox
// [NOTE] This dialog window is invoked by hotkeys - Ctrl + Shift + Del.
// Мастер очистки Firefox
// [ЗАМЕТКА] Это диалоговое окно вызывается горячими клавишами - Ctrl + Shift + Del.
user_pref("privacy.cpd.cache", true); // Cache / Кэш
user_pref("privacy.cpd.cookies", false); // Cookies / Куки
user_pref("privacy.cpd.downloads", true); // Downloads / Загрузки
user_pref("privacy.cpd.formdata", true); // Form data / Данные форм
user_pref("privacy.cpd.history", true); // History / История
user_pref("privacy.cpd.offlineApps", false); // Offline website data / Данные автономных веб-сайтов
user_pref("privacy.cpd.passwords", false); // Passwords / Пароли
user_pref("privacy.cpd.sessions", true); // Active sessions / Активные сеансы
user_pref("privacy.cpd.siteSettings", false); // Site settings / Настройки сайтов

// Time range to clear
//		0 = Everything
//		1 = Last hour
//		2 = Last two hours
//		3 = Last four hours
//		4 = Today
//		5 = Last five minutes
//		6 = Last twenty-four hours
// Диапазон времени для очистки
//		0 = Все
//		1 = Последний час
//		2 = Последние два часа
//		3 = Последние четыре часа
//		4 = Сегодня
//		5 = Последние пять минут
//		6 = Последние сутки
user_pref("privacy.sanitize.timeSpan", 0);

// Open bookmarks in a new tab
// Открытие закладок в новой вкладке
user_pref("browser.tabs.loadBookmarksInTabs", true);

// Opening bookmarks in background tabs
// Открытие закладок в фоновых вкладках
user_pref("browser.tabs.loadBookmarksInBackground", true);

// Maximum number of backup bookmarks
// Максимальное количество резервных закладок
user_pref("browser.bookmarks.max_backups", 3);

// "Backspace" button value
//		0 = Previous page
//		1 = Scroll page up
//		2 = Do nothing
// Значение кнопки "Backspace"
//		0 = Предыдущая страница
//		1 = Прокрутить страницу вверх
//		2 = Ничего не делать
user_pref("browser.backspace_action", 2);

// WebRTC (Web Real-Time Communication)
// This is an API that provides voice communication, video chats, file exchange using P2P technology
// between browser applications without the use of third-party add-ons.
// WebRTC (Веб Связь в Реальном Времени)
// Это API, который обеспечивает голосовое общение, видеочаты, обмен файлами по технологии P2P
// между браузерными приложениям без использования сторонних дополнений.
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

// API for microphone and webcam interaction
// API для взаимодействия с микрофоном и веб-камерой
user_pref("camera.control.autofocus_moving_callback.enabled", false);
user_pref("media.navigator.enabled", false);
user_pref("media.navigator.video.enabled", false);

// Limit WebRTC IP address leaks when using WebRTC
// Ограничение утечек IP-адресов WebRTC при использовании WebRTC
user_pref("media.peerconnection.ice.default_address_only", true);
user_pref("media.peerconnection.ice.no_host", true);

// Screensharing
// Blocking additional functionality of WebRTC WG (capture and video broadcasting of desktops) and Media Capture Task Force.
// Общий доступ к экрану
// Блокирование дополнительного функционала WebRTC WG (захват и видеотрансляция рабочих столов) и Media Capture Task Force.
user_pref("media.getusermedia.agc_enabled", false);
user_pref("media.getusermedia.audiocapture.enabled", false);
user_pref("media.getusermedia.browser.enabled", false);
user_pref("media.getusermedia.noise_enabled", false);
user_pref("media.getusermedia.screensharing.enabled", false);

// Status of permissions for camera, microphone, location, notifications
//		0 = Ask
//		1 = Enable
//		2 = Block
// Состояние разрешений для камеры, микрофона, местоположения, уведомлений 
//		0 = Всегда спрашивать
//		1 = Разрешить
//		2 = Блокировать
user_pref("permissions.default.camera", 2);
user_pref("permissions.default.desktop-notification", 2);
user_pref("permissions.default.geo", 2);
user_pref("permissions.default.microphone", 2);

// Automatic HTML5 media playback
//		0 = Allow
//		1 = Block
//		2 = Ask
// [WARNING] This may break video playback on various sites.
// Автоматическое воспроизведение мультимедиа в формате HTML5
//		0 = Разрешить
//		1 = Заблокировать
//		2 = Спросить
// [ВНИМАНИЕ] Это может нарушить воспроизведение видео на разных сайтах.
user_pref("media.autoplay.default", 1);

// Automatically play sound in inactive tabs
//		TRUE = Do not play
//		FALSE = Play
// Автоматическое воспроизведение звука в неактивных вкладках
//		TRUE = Не воспроизводить
//		FALSE = Воспроизводить
user_pref("media.block-autoplay-until-in-foreground", true);

// Volume status
// Состояние громкости
user_pref("media.default_volume", "0.5");

// WEBM
user_pref("media.mediasource.webm.enabled", true);

// Telemetry
// This feature sends data to Mozilla servers about usage, browser performance, user interface features,
// memory and hardware configuration, as well as real IP.
// In addition, information may be collected about the sites visited. This is a serious source of leakage and user tracking,
// it should be disabled.
// Телеметрия
// Эта функция шлет на серверы Mozilla данные об использовании, производительности браузера,
// особенностях пользовательского интерфейса, памяти и конфигурации оборудования, а также реальный IP.
// Кроме того, может собираться информация о посещаемых сайтах. Это серьезный источник утечек и слежения за пользователем,
// его следует отключить.
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("toolkit.telemetry.bhrPing.enabled", false);
user_pref("toolkit.telemetry.cachedClientID", "");
user_pref("toolkit.telemetry.enabled", false);
user_pref("toolkit.telemetry.firstShutdownPing.enabled", false);
user_pref("toolkit.telemetry.hybridContent.enabled", false);
user_pref("toolkit.telemetry.newProfilePing.enabled", false);
user_pref("toolkit.telemetry.server", "data:,");
user_pref("toolkit.telemetry.shutdownPingSender.enabled", false);
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.unifiedIsOptIn", true);
user_pref("toolkit.telemetry.updatePing.enabled", false);
user_pref("toolkit.coverage.opt-out", true);
user_pref("toolkit.telemetry.coverage.opt-out", true);

// Firefox health report
// This feature collects advanced information about the health of the browser and sends it to Mozilla servers,
// in particular: the number of falls, information about slow loading. It includes data on hardware, operating system, browser version,
// installed add-ons (number and type), intra-browser events, rendering, session recovery, session duration,
// profile age, number of pages visited.
// Отчет о состоянии здоровья Firefox
// Данная функция собирает расширенную информацию о работоспособности браузера и отсылает ее на серверы Mozilla,
// в частности: количество падений, сведения о медленной загрузке. Она включает в себя данные об оборудовании, операционной системе,
// версии браузера, установленных дополнениях (количество и тип), внутрибраузерных событиях, рендеринге, восстановлении сессий,
// их длительности, возрасте профиля, количестве посещенных страниц.
user_pref("datareporting.healthreport.infoURL", "");
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("datareporting.policy.dataSubmissionEnabled", false);

// Crash reports
// [NOTE] This feature sends information about browser crashes to the Mozilla server,
// including technical information (memory status, etc.), the time of the incident and the web links visited,
// as well as some user information.
// Отчеты о сбоях
// [ЗАМЕТКА] Эти функции отсылает на сервер Mozilla сведения о сбоях и падениях браузера,
// включая техническую информацию (состояние памяти и т.п.), время происшествия и посещаемые веб-ссылки,
// а также некоторую пользовательскую информацию.
user_pref("breakpad.reportURL", "");
user_pref("browser.chrome.errorReporter.enabled", false);
user_pref("browser.chrome.errorReporter.submitUrl", "");
user_pref("browser.crashReports.unsubmittedCheck.autoSubmit2", false);
user_pref("browser.crashReports.unsubmittedCheck.autoSubmit", false);
user_pref("browser.crashReports.unsubmittedCheck.enabled", false);
user_pref("browser.tabs.crashReporting.email", "");
user_pref("browser.tabs.crashReporting.emailMe", false);
user_pref("browser.tabs.crashReporting.includeURL", false);
user_pref("browser.tabs.crashReporting.sendReport", false);

// Promo for mobile phones
// Акция для мобильных телефонов
user_pref("identity.mobilepromo.android", "");
user_pref("identity.mobilepromo.ios", "");

// Shield
// Щит
user_pref("app.normandy.enabled", false);
user_pref("app.normandy.api_url", "");
user_pref("app.normandy.shieldLearnMoreUrl", "");
user_pref("app.shield.optoutstudies.enabled", false);

// PingCentre telemetry
// Телеметрия ПингЦентра
user_pref("browser.ping-centre.telemetry", false);
user_pref("browser.ping-centre.log", false);
user_pref("browser.ping-centre.staging.endpoint", "");
user_pref("browser.ping-centre.production.endpoint", "");

// Location accounting
// Firefox has built-in tools for transferring geodata (your location). This uses information obtained from the operating systems
// geolocation facilities, Wi-Fi networks, telephone and Internet operators, as well as a real IP address.
// In addition, the above data is sent to Google servers.
// Учет местоположения
// Firefox располагает встроенными средствами передачи геоданных (вашего местонахождения). При этом используются сведения,
// получаемые от геолокационных средств операционной системы, сетей Wi-Fi, телефонных и интернет-операторов, а также реальный IP-адрес.
// Кроме того, вышеперечисленные данные отсылаются на серверы Google.
user_pref("geo.enabled", false);
user_pref("browser.geolocation.warning.infoURL", "");

// GeoIP-based search results
// Результаты поиска на основе GeoIP
user_pref("browser.search.region", "US");
user_pref("browser.search.geoip.url", "");
user_pref("browser.search.geoip.timeout", 0);

// Application language
// Язык приложения
user_pref("intl.locale.requested", "en-US");

// Browser geolocation (GeoIP) when working with search servers
// Геопозиционирования браузера (GeoIP) при работе с поисковыми серверами
user_pref("browser.search.geoSpecificDefaults", false);
user_pref("browser.search.geoSpecificDefaults.url", "");

// Request a web page in english to improve privacy
// Запрашивать веб-страницы на английском языке для повышения приватности
user_pref("javascript.use_us_english_locale", true);

// Use the application language over the language of your operating system in the regional settings
// Использовать язык приложения поверх языка вашей операционной системы в региональных настройках
user_pref("intl.regional_prefs.use_os_locales", false);

// First party isolation
// Изоляция первой стороны
user_pref("privacy.firstparty.isolate", true);
user_pref("privacy.firstparty.isolate.restrict_opener_access", true);
user_pref("privacy.firstparty.isolate.block_post_message", true);

// Firefox fingerprints
// [NOTE] Blocking the recognition of the browsers "digital fingerprints" - external dimensions (height and width) of the active browser window.
// As a rule, most users maximize the active browser window to full screen.
// Using a specially prepared web page, a hypothetical attacker (using the window.screen object and CSS media queries)
// can identify the physical dimensions of the monitor (in pixels) in this case, even if scripts are globally forbidden in the browser.
// Activating this setting will lead to the fact that a minor information about the size of the visible area of the web page being
// viewed will be available to the third party - i.e. without considering the size of the chrome elements of the browser window.
// Отпечатки пальцев Firefox
// [ЗАМЕТКА] Блокирование опознания "цифровых отпечатков" браузера - внешних размеров (высоты и ширины) активного окна браузера.
// Как правило, большинство пользователей разворачивает активное окно браузера на весь экран.
// При помощи специально подготовленной веб-страницы гипотетическая атакующая сторона
// (посредством использования объекта window.screen и CSS медиа-запросов) может опознать в этом случае физические размеры монитора (в пикселях),
// даже если в браузере глобально запрещены скрипты.
// Активация этой настройки приведет к тому, что третьей стороне будет доступна малозначительная информация о размере видимой области
// просматриваемой веб-страницы - т.е. без учета размеров chrome-элементов окна браузера.
user_pref("privacy.resistFingerprinting", true);
user_pref("privacy.resistFingerprinting.autoDeclineNoUserInputCanvasPrompts", false);

// MozAddonManager Web API
user_pref("privacy.resistFingerprinting.block_mozAddonManager", true);

// Recommended themes
// Рекомендованные темы
user_pref("lightweightThemes.recommendedThemes", "");

// Install only signed extensions
// Установка только подписанных расширений
user_pref("extensions.langpacks.signatures.required", true); // Require signing language pack / Требование подписи языкового пакета
user_pref("xpinstall.signatures.required", true); // Require signing extensions / Требовать подписание расширений
user_pref("xpinstall.signatures.devInfoURL", "");

// Add-on installation delay
// Задержка при установке дополнений
user_pref("security.dialog_enable_delay", 0);

// Default plugins state
// A plug - in is third-party software that allows a browser to process web content
// that it cannot play on its own. Usually these are proprietary (non-free)
// proprietary formats for processing audio and video content (Adobe Flash, Apple QuickTime,
// Microsoft Silverlight), as well as online games, presentations, tools for intercepting downloads and
// transferring them to special software-downloaders, etc.
// 		0 = Disabled
// 		1 = Request activation
// 		2 = Active, individual plugins can be overridden
// Состояние плагинов по умолчанию
// Плагин - стороннее программное обеспечение, которое позволяет браузеру обрабатывать веб-контент,
// который он не может воспроизвести самостоятельно. Обычно это проприетарные (несвободные)
// патентованные форматы для обработки аудио- и видео-содержимого (Adobe Flash, Apple QuickTime,
// Microsoft Silverlight), а также онлайн-игры, презентации, средства для перехвата закачек и
// передачи их в специальные программы-даунлоадеры и т.п.
// 		0 = Отключено
// 		1 = Запрашивать активацию
// 		2 = Активно, можно переопределить отдельные плагины
user_pref("plugin.default.state", 0);
user_pref("plugin.defaultXpi.state", 0);

// Activate the plugin by clicking
// Активация плагина по клику
user_pref("plugins.click_to_play", true);

// Time to run plugins
// Время для запуска плагинов
user_pref("plugin.sessionPermissionNow.intervalInMinutes", 0);

// Flash plugin
//		0 = Off
//		1 = Ask
//		2 = On
// Flash плагин
//		0 = Выключить
//		1 = Спросить
//		2 = Включить
user_pref("plugin.state.flash", 0);

// Scanning Plugin ID (PLID) in directories defined in the Windows registry
// Сканирование Plugin ID (PLID) в каталогах, определенных в реестре Windows
user_pref("plugin.scan.plid.all", false);

// OpenH264 codec (Gecko Media Plugins)
// Кодек OpenH264 (Gecko Медиа Плагины)
user_pref("media.gmp-gmpopenh264.autoupdate", false);
user_pref("media.gmp-gmpopenh264.enabled", false);
user_pref("media.gmp-manager.buildID", "");
user_pref("media.gmp-manager.cert.checkAttributes", false);
user_pref("media.gmp-manager.cert.requireBuiltIn", false);
user_pref("media.gmp-manager.certs.1.commonName", "");
user_pref("media.gmp-manager.certs.1.issuerName", "");
user_pref("media.gmp-manager.certs.2.commonName", "");
user_pref("media.gmp-manager.certs.2.issuerName", "");
user_pref("media.gmp-manager.lastCheck", "");
user_pref("media.gmp-manager.updateEnabled", false);
user_pref("media.gmp-manager.url", "data:text/plain,");
user_pref("media.gmp-manager.url.override", "data:text/plain,");
user_pref("media.gmp-provider.enabled", false);
user_pref("media.gmp.trial-create.enabled", false);

// Widevine CDM (Content Decryption Module)
// Widevine CDM (Модуль Расшифровки Контента)
user_pref("media.gmp-widevinecdm.autoupdate", false);
user_pref("media.gmp-widevinecdm.enabled", false);
user_pref("media.gmp-widevinecdm.visible", false);

// Digital rights management (DRM)
// Управление цифровыми правами
user_pref("media.eme.enabled", false);
user_pref("browser.eme.ui.enabled", false);

// Preload a page that the browser considers to be a logical next page
// Предварительная загрузка страницы, которую браузер считает логической следующей страницей
user_pref("network.prefetch-next", false);

// Pre-query DNS for all links on the active page (for HTTP and HTTPS-protected pages)
// [NOTE] This feature allows the browser in the background to determine the DNS for various web content
// in order to speed up the subsequent download (for links, graphics, CSS, JavaScript, etc.).
// Предварительный запрос DNS для всех ссылок на активной странице (для HTTP и HTTPS-защищенной страницы)
// [ЗАМЕТКА] Эта функция позволяет браузеру в фоновом режиме определять DNS для различного веб-контента
// с целью ускорения последующей загрузки (для ссылок, графики, CSS, JavaScript и т.п.).
user_pref("network.dns.disablePrefetch", true);
user_pref("network.dns.disablePrefetchFromHTTPS", true);

// Sending ping
// Sending data about clicking on a link to the addresses specified in the "a" tag ("ping" attribute).
// HTML5 allows you to use this attribute for an element called ping. This function sends data by the URI defined in the hyperlink
// (if the user clicks on it). It allows you to track user activity, preferences and collect statistics about them.
// Отправка пинга
// Отправка данных о нажатии на ссылку адресам, указанным в тэге "a" (атрибут "ping").
// HTML5 позволяет использовать этот атрибут для элемента под названием ping. Эта функция отсылает данные по URI,
// определенному в гиперссылке (если на нее нажимает пользователь). Это позволяет отслеживать активность, предпочтения
// ыпользователей и собирать статистику о них.
user_pref("browser.send_pings", false);
user_pref("browser.send_pings.max_per_link", 0);
user_pref("browser.send_pings.require_same_host", true);

// Send DNS requests through a proxy using SOCKS 5
// [WARNING] This setting is valid only if you are working through a remote server.
// For example, using onion routing. If the remote server is not used, the DNS server addresses
// specified in the properties of the current network connection of the computer are used,
// i.e. the setting does not matter.
// Отправлять DNS-запросы через прокси при использовании SOCKS 5
// [ВНИМАНИЕ] Этот параметр действителен, только если вы работаете через удаленный сервер.
// Например, используя луковую маршрутизацию. Если удаленный сервер не используется, то применяются адреса DNS-серверов,
// указанные в свойствах текущего сетевого подключения компьютера, т.е. настройка не имеет значения.
user_pref("network.proxy.socks_remote_dns", true);

// Redirecting to the providers page
// Перенаправление на страницу провайдера
user_pref("captivedetect.canonicalURL", "");
user_pref("network.captive-portal-service.enabled", false);
user_pref("network.captive-portal-service.minInterval", 0);

// HTTP Header "Do Not Track"
// Заголовок HTTP "Не Отслеживать"
user_pref("privacy.donottrackheader.enabled", true);

// TOR: hide referrer when leaving a ".onion" domain
// TOR: скрыть referrer при выходе с домена ".onion"
user_pref("network.http.referer.hideOnionSource", true);

// Synchronization integration
// Firefox Sync - remote synchronization of user data. Sync is a set of components that, using a single user account,
// remotely synchronizes data on different devices with Firefox installed (bookmarks, history, passwords, form data, open tabs, etc.).
// [WARNING] Unexpected leakage of such data (logins, passwords, cookies) in the process of synchronization,
// transfer them outside the individual device or during storage is incredibly critical and dangerous!
// Интеграция синхронизации
// Firefox Sync - удаленной синхронизации пользовательских данных. Sync - набор компонентов,
// который при помощи единого пользовательского аккаунта удаленно синхронизирует данные на разных устройствах
// с установленным Firefox (закладки, историю, пароли, данные форм, открытые вкладки и т.п.).
// [ВНИМАНИЕ] Непредвиденная утечка подобных данных (логинов, паролей, cookie) в процессе синхронизации,
// передачи их за пределы отдельного устройства или во время хранения - невероятно критична и опасна!
// user_pref("identity.fxaccounts.enabled", false);
// user_pref("identity.fxaccounts.auth.uri", "");

// Disable graphite font library
// Отключение библиотеки шрифтов graphite
user_pref("gfx.font_rendering.graphite.enabled", false);

// Synchronization of preferences
// Синхронизация предпочтений
user_pref("services.sync.engine.addresses", false);
user_pref("services.sync.engine.addresses.available", false);
user_pref("services.sync.engine.creditcards", false);
user_pref("services.sync.engine.creditcards.available", false);
user_pref("services.sync.engine.history", false);
user_pref("services.sync.engine.prefs", false);
user_pref("services.sync.engine.prefs.modified", false);
user_pref("services.sync.engine.tabs", false);

// Cache API (Cache storage)
// [NOTE] It is a repository on the user's computer where scripts can store information.
// It is part of the "Service workers" specification, but can be used without them.
// API Кэша (Хранилище кэша)
// [ЗАМЕТКА] Это хранилище на компьютере пользователя, куда скрипты могут складывать информацию.
// Оно является частью спецификации "Service workers", но может быть использовано и без них.
user_pref("dom.caches.enabled", false);

// Web notifications
// Веб-уведомления
user_pref("dom.webnotifications.enabled", false);
user_pref("dom.webnotifications.serviceworker.enabled", false);

// Push notifications
// Push-уведомления
user_pref("dom.push.enabled", false);
user_pref("dom.push.connection.enabled", false);
user_pref("dom.push.serverURL", "");
user_pref("dom.push.userAgentID", "");

// Disk cache
// Кэш-диска
user_pref("browser.cache.disk.capacity", 0);
user_pref("browser.cache.disk.enable", false);
user_pref("browser.cache.disk.smart_size.enabled", false);
user_pref("browser.cache.disk.smart_size.first_run", false);
user_pref("browser.cache.frecency_experiment", -1);

// Disk cache for SSL pages
// Кэш-диск для SSL-страниц
user_pref("browser.cache.disk_cache_ssl", false);

// Fastback cache
//		0 = Disable
//		-1 = Auto
// Кэш Fastback
//		0 = Отключить
//		-1 = Автоматически
user_pref("browser.sessionhistory.max_total_viewers", 0);

// Forbids saving permissions manager settings
// Запрет сохранения настроек диспетчера разрешений
user_pref("permissions.memory_only", true);

// Session Recovery Service for windows and tabs
// Служба восстановления сеанса для окон и вкладок
user_pref("browser.sessionstore.max_tabs_undo", 10);
user_pref("browser.sessionstore.max_windows_undo", 10);

// Offline cache
// Автономный кэш
user_pref("browser.cache.offline.enable", false);

// Offline cache on insecure sites
// Автономный кэш на небезопасных сайтах
user_pref("browser.cache.offline.insecure.enable", false);

// Request to use the offline cache
// Запрос на использование автономного кеша
user_pref("offline-apps.allow_by_default", false);

// Storing extra session data
//		0 = Everywhere
//		1 = Unencrypted sites
//		2 = Nowhere
// Сохранение дополнительных данных сеанса
//		0 = Везде
//		1 = Незашифрованные сайты
//		2 = Нигде
user_pref("browser.sessionstore.privacy_level", 2);

// Restore active session in case of browser crash
// Восстановления активной сессии в случае падения браузера
user_pref("browser.sessionstore.resume_from_crash", false);

// Interval between saving sessions
// Интервал между сохранением сеансов
user_pref("browser.sessionstore.interval", 60000);

// Firefox recovery after Windows restart
// Восстановление Firefox после перезагрузки Windows
user_pref("toolkit.winRegisterApplicationRestart", false);

// Cookies
// A Cookie is a piece of data (a small text file) that is sent by the server and stored in a browser.
// When the user re-loads the same page, the browser sends the cookie back to the server
// and notifies it of the previous activity of the application.
// Cookies store information such as passwords, logins, session data, credit card data, email addresses,
// and record various user activity and other statistics.
// [WARNING] Cookies are actively used by many web resources in the process of monitoring and tracking user activity.
// Theft and analysis of cookies is a potentially dangerous and serious attack, leading to global leaks of user data and unauthorized use.
//		0 = Accept cookies and site data
//		1 = Block third-party cookies
//		2 = Block all cookies
//		3 = Block cookies from sites not visited
//		4 = Block third-party trackers
// Куки
// Cookie - фрагмент данных (небольшой текстовый файл), отправляемый сервером и сохраняющийся в браузере.
// Когда пользователь вновь загружает ту же самую страницу, браузер отсылает cookie назад на сервер
// и уведомляет его тем самым о предыдущей активности приложения.
// Cookie хранят такую информацию, как пароли, логины, сеансовые данные, данные кредитных карт,
// электронные почтовые адреса и записывают различную пользовательскую активность и прочую статистику.
// [ВНИМАНИЕ] Cookie активно используются многими веб-ресурсами в процессе контроля и слежки за пользовательской активностью.
// Похищение и анализ cookie является потенциально опасной и серьезной атакой, приводящей к глобальным утечкам пользовательских данных
// и их несанкционированному использованию.
//		0 = Принимать куки и данные сайтов
//		1 = Блокировать стороннии куки
//		2 = Блокировать все куки
//		3 = Блокировать куки с не посещенных сайтов
//		4 = Блокировать стороннии трекеры
user_pref("network.cookie.cookieBehavior", 1);

// Third-party cookies are set for the session only
// Сторонние файлы куки устанавливаются только для сеанса
user_pref("network.cookie.thirdparty.sessionOnly", true);
user_pref("network.cookie.thirdparty.nonsecureSessionOnly", true);

// Сookie lifetime policy
//		0 = Save them before expiration
//		2 = Save them until close Firefox
// Политика жизни куки
//		0 = Сохранять их до истечения срока действия
//		2 = Сохранять их до закрытия Firefox
user_pref("network.cookie.lifetimePolicy", 2);

// Indexed database API
// API Индексированных баз данных
// user_pref("dom.indexedDB.enabled", false);
user_pref("dom.indexedDB.experimental", false);
user_pref("dom.indexedDB.logging.details", false);
user_pref("dom.indexedDB.logging.enabled", false);

// Storage API
// [NOTE] Disables another way for sites to store their data on the user's personal computer.
// API Хранилища
// [ЗАМЕТКА] Отключает еще один способ для сайтов хранить свои данные на персональном компьютере пользователя.
user_pref("dom.storageManager.enabled", false);

// Limit events that can trigger a pop-up
// Ограничения событий, которые могут вызвать всплывающее окно
user_pref("dom.popup_allowed_events", "click dblclick");

// Special services (accessibility support services)
// Специальные услуги (службы поддержки доступности)
user_pref("accessibility.force_disabled", 1);

// Additional analytics sent to the web server
// [NOTE] HTTP-data leaking from UserAgent to the server, especially when leaving the page.
// Дополнительная аналитика, отправленная на веб-сервер
// [ЗАМЕТКА] HTTP-данные утекающих от UserAgent на сервер, особенно при покидании страницы.
user_pref("beacon.enabled", false);

// Deleting temporary files opened by an external application
// Удаление временных файлов, открытые внешним приложением
user_pref("browser.helperApps.deleteTempFileOnExit", true);

// Web speech
// Веб-речь
user_pref("media.webspeech.synth.enabled", false);
user_pref("media.webspeech.recognition.enable", false);

// Collecting HTML video statistics
// Сбор HTML-видеостатистики
user_pref("media.video_stats.enabled", false);

// AV1 Video codec
// Видеокодек AV1
user_pref("media.av1.enabled", true);

// Show system extensions
// Показ системных расширений
user_pref("devtools.aboutdebugging.showSystemAddons", true);

// Activity stream extension
// Расширение Activity stream
user_pref("browser.library.activity-stream.enabled", false);
user_pref("browser.newtabpage.activity-stream.asrouter.devtoolsEnabled", false);
user_pref("browser.newtabpage.activity-stream.asrouter.messageProviders", "");
user_pref("browser.newtabpage.activity-stream.asrouter.providers.cfr", "");
user_pref("browser.newtabpage.activity-stream.asrouter.providers.onboarding", "");
user_pref("browser.newtabpage.activity-stream.asrouter.providers.snippets", "");
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr", false);
user_pref("browser.newtabpage.activity-stream.default.sites", "");
user_pref("browser.newtabpage.activity-stream.disableSnippets", true);
user_pref("browser.newtabpage.activity-stream.feeds.aboutpreferences", false);
user_pref("browser.newtabpage.activity-stream.feeds.asrouterfeed", false);
user_pref("browser.newtabpage.activity-stream.feeds.favicon", false);
user_pref("browser.newtabpage.activity-stream.feeds.migration", false);
user_pref("browser.newtabpage.activity-stream.feeds.newtabinit", false);
user_pref("browser.newtabpage.activity-stream.feeds.places", false);
user_pref("browser.newtabpage.activity-stream.feeds.prefs", false);
user_pref("browser.newtabpage.activity-stream.feeds.section.highlights", false);
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories", false);
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories.options", "");
user_pref("browser.newtabpage.activity-stream.feeds.sections", false);
user_pref("browser.newtabpage.activity-stream.feeds.snippets", false);
user_pref("browser.newtabpage.activity-stream.feeds.systemtick", false);
user_pref("browser.newtabpage.activity-stream.feeds.telemetry", false);
user_pref("browser.newtabpage.activity-stream.feeds.topsites", false);
user_pref("browser.newtabpage.activity-stream.filterAdult", false);
user_pref("browser.newtabpage.activity-stream.fxaccounts.endpoint", "");
user_pref("browser.newtabpage.activity-stream.improvesearch.noDefaultSearchTile", false);
user_pref("browser.newtabpage.activity-stream.improvesearch.topSiteSearchShortcuts", false);
user_pref("browser.newtabpage.activity-stream.improvesearch.topSiteSearchShortcuts.havePinned", "");
user_pref("browser.newtabpage.activity-stream.improvesearch.topSiteSearchShortcuts.searchEngines", "");
user_pref("browser.newtabpage.activity-stream.migrationExpired", true);
user_pref("browser.newtabpage.activity-stream.migrationLastShownDate", 0);
user_pref("browser.newtabpage.activity-stream.migrationRemainingDays", 0);
user_pref("browser.newtabpage.activity-stream.pocketCta", "");
user_pref("browser.newtabpage.activity-stream.prerender", false);
user_pref("browser.newtabpage.activity-stream.section.highlights.includeBookmarks", false);
user_pref("browser.newtabpage.activity-stream.section.highlights.includeDownloads", false);
user_pref("browser.newtabpage.activity-stream.section.highlights.includePocket", false);
user_pref("browser.newtabpage.activity-stream.section.highlights.includeVisited", false);
user_pref("browser.newtabpage.activity-stream.section.highlights.rows", 0);
user_pref("browser.newtabpage.activity-stream.section.topstories.rows", 0);
user_pref("browser.newtabpage.activity-stream.sectionOrder", "");
user_pref("browser.newtabpage.activity-stream.showSearch", false);
user_pref("browser.newtabpage.activity-stream.showSponsored", false);
user_pref("browser.newtabpage.activity-stream.telemetry", false);
user_pref("browser.newtabpage.activity-stream.telemetry.ping.endpoint", "");
user_pref("browser.newtabpage.activity-stream.telemetry.ut.events", false);
user_pref("browser.newtabpage.activity-stream.topSitesRows", 0);

// Block dangerous and deceptive content (malware, phishing, dangerous downloads)
// Блокировать опасное и обманывающее содержимое (вредоносные программы, фишинг, опасные загрузки)
user_pref("browser.safebrowsing.downloads.enabled", false);
user_pref("browser.safebrowsing.malware.enabled", false);
user_pref("browser.safebrowsing.phishing.enabled", false);

// Warning about unwanted and rarely downloaded programs
// Предупреждение о нежелательных и редко загружаемых программах
user_pref("browser.safebrowsing.downloads.remote.block_dangerous", false);
user_pref("browser.safebrowsing.downloads.remote.block_dangerous_host", false);
user_pref("browser.safebrowsing.downloads.remote.block_potentially_unwanted", false);
user_pref("browser.safebrowsing.downloads.remote.block_uncommon", false);

// Tracking protection in all windows
// [NOTE] When enabled, the load on the processor increases, plus any ad blocker can easily cope with
// the blocking of trackers when subscribing to the corresponding filter lists.
// Защита слежения во всех окнах
// [ЗАМЕТКА] При включении возрастает нагрузка на процессор, плюс ко всему с блокировкой трекеров
// легко справляется любой блокировщик рекламы при подписки на соответсвующими списки фильтров.
user_pref("privacy.trackingprotection.enabled", false);
user_pref("privacy.trackingprotection.pbmode.enabled", false);
user_pref("privacy.trackingprotection.introURL", "");
user_pref("privacy.trackingprotection.annotate_channels", false);
user_pref("privacy.trackingprotection.lower_network_priority", false);

// DOM forms
// DOM формы
user_pref("dom.forms.datetime", false);
user_pref("dom.forms.datetime.others", false);
user_pref("dom.forms.datetime.timepicker", false);

// Types of content
// Типы содержимого
user_pref("gecko.handlerService.schemes.mailto.0.name", "");
user_pref("gecko.handlerService.schemes.mailto.0.uriTemplate", "");
user_pref("gecko.handlerService.schemes.mailto.1.name", "");
user_pref("gecko.handlerService.schemes.mailto.1.uriTemplate", "");
user_pref("gecko.handlerService.schemes.mailto.2.name", "");
user_pref("gecko.handlerService.schemes.mailto.2.uriTemplate", "");
user_pref("gecko.handlerService.schemes.mailto.3.name", "");
user_pref("gecko.handlerService.schemes.mailto.3.uriTemplate", "");
user_pref("gecko.handlerService.schemes.webcal.0.name", "");
user_pref("gecko.handlerService.schemes.webcal.0.uriTemplate", "");
user_pref("gecko.handlerService.schemes.webcal.1.name", "");
user_pref("gecko.handlerService.schemes.webcal.1.uriTemplate", "");
user_pref("gecko.handlerService.schemes.webcal.2.name", "");
user_pref("gecko.handlerService.schemes.webcal.2.uriTemplate", "");
user_pref("gecko.handlerService.schemes.webcal.3.name", "");
user_pref("gecko.handlerService.schemes.webcal.3.uriTemplate", "");

// Crash reporter related information
// Информация о сбоях репортера
user_pref("toolkit.crashreporter.infoURL", "");

// Sending telemetry data and website address, about where and how the plugin failed
// Отправка телеметрических данных и адреса сайта, о том, где и как произошел сбой плагина
user_pref("dom.ipc.plugins.reportCrashURL", false);
user_pref("dom.ipc.plugins.flash.subprocess.crashreporter.enabled", false);

// Forms autofill
// [NOTE] Stored data is NOT secure (uses a JSON file).
// Heuristics controls Form Autofill on forms without @autocomplete attributes.
// Формы автозаполнения
// [ЗАМЕТКА] Хранимые данные не защищены (использует файл JSON).
// Эвристика контролирует заполнение форм в формах без @autocomplete атрибутов.
user_pref("extensions.formautofill.addresses.enabled", false);
user_pref("extensions.formautofill.available", "off");
user_pref("extensions.formautofill.creditCards.enabled", false);
user_pref("extensions.formautofill.heuristics.enabled", false);

// How often Firefox should ask for a master password
//		0 = The first time
//		1 = Every time its needed
//		2 = Every "N" minutes
// Как часто Firefox должен запрашивать мастер-пароль
//		0 = Первый раз
//		1 = Каждый раз, когда это необходимо
//		2 = Каждые "N" минут
user_pref("security.ask_for_password", 2);

// How often (within how many minutes) Firefox should ask for a master password
// Как часто (в течение скольки минут) Firefox должен запрашивать мастер-пароль
user_pref("security.password_lifetime", 5);

// Autocomplete user name and password
// Aвтоматическое заполнение имени пользователя и пароля
user_pref("signon.autofillForms", false);
user_pref("signon.autofillForms.http", false);
user_pref("security.insecure_field_warning.contextual.enabled", true); // Message at login: "This connection is not secure" / Сообщение при вводе логина: "Это соединение не защищено"

// Smooth scrolling
// Плавная прокрутка
// user_pref("general.smoothScroll", false);

// Automatic update themes
// Автоматическое обновление тем
user_pref("lightweightThemes.update.enabled", false);

// Pocket extension
// Proprietary application Pocket (formerly known as Read It Later) allows you to save links to texts in the cloud storage
// for further reading, storing data about user activity and synchronizing them between all devices subscribed to the service.
// This can de-anonymize users and reveal their preferences.
// [NOTE] Pocket is a third-party (now owned by Mozilla) cloud service,
// which operates on the principle of "Save for later use".
// Расширение Pocket
// Проприетарное приложение Pocket (ранее известное как Read It Later) позволяет сохранять ссылки на тексты в облачном хранилище
// для их дальнейшего прочтения, храня таким образом данные о пользовательской активности и синхронизируя их между всеми устройствами,
// подписанным на услуги сервиса. Это может деанонимизировать пользователей и раскрыть их предпочтения.
// [ЗАМЕТКА] Pocket является сторонним (теперь принадлежит Mozilla) облачным сервисом,
// который работает по принципу "Сохранить для последующего использования".
user_pref("extensions.pocket.enabled", false);

// Screenshots
// Скриншоты
user_pref("extensions.screenshots.disabled", true);
user_pref("extensions.screenshots.upload-disabled", true);

// Experiments
// [NOTE] Allows you to automatically download and run tested add-ons.
// Эксперименты
// [ЗАМЕТКА] Позволяет автоматически загружать и запускать тестируемые дополнения.
user_pref("network.allow-experiments", false);

// Web compatibility reporter
// Отправка отчетов о совместимости с интернетом
user_pref("extensions.webcompat-reporter.enabled", false);
user_pref("extensions.webcompat-reporter.newIssueEndpoint", "");

// Favicons in shortcuts
// [NOTE] URL shortcuts use a cached randomly named .ico file which is stored in your shortcutCache directory.
// The .ico remains after the shortcut is deleted. If set to "false" then the shortcuts use a generic Firefox icon.
// Значки на ярлыках
// [ЗАМЕТКА] В ярлыках URL используется кешированный файл с произвольным именем .ico,
// который хранится в вашем каталоге shortcutCache. Файл .ico остается после удаления ярлыка.
// Если установлено значение "false", в ярлыках используется общий значок Firefox.
user_pref("browser.shell.shortcutFavicons", false);

// Favicons in web notifications
// Значки в веб-уведомлениях
user_pref("alerts.showFavicons", false);

// Path to save files
//		0 = Desktop
//		1 = Downloads
//		2 = Last used folder
// Путь для сохранения файлов
//		0 = Рабочий стол
//		1 = Загрузки
//		2 = Последняя используемая папка
user_pref("browser.download.folderList", 2);

// Request to save files
// Запрос на сохранение файлов
user_pref("browser.download.useDownloadDir", false);

// Adding downloads to the list of recent system documents
// Добавление загрузок в список последних документов системы
user_pref("browser.download.manager.addToRecentDocs", false);

// Hiding MIME types
// Скрытие типов MIME
user_pref("browser.download.hide_plugins_without_extensions", false);

// Show the "Open with" dialog box in the download window
// Показ диалогового окна "Открыть при помощи" в окне загрузки
user_pref("browser.download.forbid_open_with", true);

// Predictor (formerly Seer)
// This function creates the simplest connections to the server. When the cursor is over a certain link,
// Firefox tries to predict further user actions on the page in order to increase the performance
// and speed of processing the content on the page.
// Предсказатель (бывший Seer)
// Это функция создает простейшие соединения с сервером. Когда курсор находится над определенной ссылкой,
// Firefox пытается предугадать дальнейшие действия пользователя на странице с целью увеличения производительность
// и скорости обработки контента на странице.
user_pref("network.predictor.enabled", false);
user_pref("network.predictor.enable-hover-on-ssl", false);
user_pref("network.predictor.enable-prefetch", false);
user_pref("network.predictor.prefetch-rolling-load-count", 0);

// Speculative pre-connections
// Спекулятивные предварительные соединения
user_pref("network.http.speculative-parallel-limit", 0);

// Search from address panel
// Поиск из панели адреса
// user_pref("keyword.enabled", false);

// Displays all parts of the URL in the address bar
// Отображения всех части URL-адреса в строке адреса
user_pref("browser.urlbar.trimURLs", false);

// Display JavaScript in history URLs
// Отображение JavaScript в URLs истории
user_pref("browser.urlbar.filter.javascript", true);

// Display search suggestions when using the address bar
// Отображать поисковые предложения при использовании панели адреса
user_pref("browser.urlbar.suggest.searches", false);
user_pref("browser.urlbar.userMadeSearchSuggestionsChoice", true);

// Adding sites from Alexa Top 500 to the address bar Autocomplete list
// Добавление сайтов из Alexa Top 500 в список автозаполнения адресной строки
user_pref("browser.urlbar.usepreloadedtopurls.enabled", false);

// Maximum number of history results in the address bar
// Максимальное количество результатов истории в панеле адреса
user_pref("browser.urlbar.maxHistoricalSearchSuggestions", 0);

// Windows jumplist
// user_pref("browser.taskbar.lists.enabled", false);
// user_pref("browser.taskbar.lists.frequent.enabled", false);
// user_pref("browser.taskbar.lists.recent.enabled", false);
// user_pref("browser.taskbar.lists.tasks.enabled", false);

// Display thumbnails of tabs on the taskbar
// Отображать эскизы вкладок на панели задач
// user_pref("browser.taskbar.previews.enable", true);

// Sending DNS requests via IPv6
// Отправление DNS-запросов посредством IPv6
user_pref("network.dns.disableIPv6", true);

// Block allowed extension directories
// [WARNING] This will break extensions that do not use the default XPI directories.
// Заблокировать разрешенные каталоги расширений
// [ВНИМАНИЕ] Это приведет к разрыву расширений, которые не используют каталоги XPI по умолчанию.
user_pref("extensions.enabledScopes", 1);
user_pref("extensions.autoDisableScopes", 15);

// WebExtension restrictions for specific Mozilla domains
// Ограничения WebExtension для определенных доменов Mozilla
user_pref("extensions.webextensions.restrictedDomains", "");

// Warning when websites try to install add-ons
// Предупреждение при попытке веб-сайтов установить дополнения
user_pref("xpinstall.whitelist.required", true);

// Fullscreen API
// [WARNING] Dangerously due to browser fingerprints.
// API Полного экрана
// [ВНИМАНИЕ] Опасно из-за отпечатков пальцев браузера.
user_pref("full-screen-api.enabled", false);
user_pref("full-screen-api.unprefix.enabled", false);
user_pref("full-screen-api.warning.delay", 0);
user_pref("full-screen-api.warning.timeout", 0);

// Auto-hide the "Downloads" button
// Автоскрытие кнопки "Загрузок"
// user_pref("browser.download.autohideButton", false);

// Animated gradient that runs through the tab after the page is fully loaded
// Анимированный градиент, который пробегает по вкладке после полной загрузки страницы
// user_pref("toolkit.cosmeticAnimations.enabled", false);

// Search for text on the page as it is typed
// Искать текст на странице по мере его набора
// user_pref("accessibility.typeaheadfind", false);

// Spellchecking
//		0 = Do not check
//		1 = Check in multiline fields
//		2 = Check in all text fields
// Проверка орфографии
//		0 = Не проверять
//		1 = Проверка в многострочных полях
//		2 = Проверка во всех текстовых полях
user_pref("layout.spellcheckDefault", 2);

// Auto scroll
// Автоматическая прокрутка
// user_pref("general.autoScroll", false);

// Automatic copying
// Автоматическое копирование
// user_pref("clipboard.autocopy", false);

// Reader view
// user_pref("reader.parse-on-load.enabled", false);

// Text reader function in Reader view
// Функция зачитывания текста в Reader view
// user_pref("narrate.enabled", false);

// Displaying an empty window as early as possible with the subsequent filling
// Отображение пустого окна, как можно раньше с последующим заполнением
user_pref("browser.startup.blankWindow", false);

// WebGL debug info being available to websites
// Информация об отладке WebGL доступна для веб-сайтов
user_pref("webgl.enable-debug-renderer-info", false);

// Mixed content
// Смешанное содержание
user_pref("security.mixed_content.block_active_content", true); 
user_pref("security.mixed_content.block_display_content", true);

// SPDY protocol
// SPDY protocol developed with the participation of Google for the transport of web content.
// SPDY modifies web traffic in order to reduce its download time by compression, multiplex and prioritization mechanism.
// [WARNING] SPDY can store an identifier and holds an extremely long open connection.
// Протокол SPDY
// SPDY протокол, разработанный с участием Google для транспортировки веб-контента.
// SPDY видоизменяет веб-трафик с целью сокращения времени его загрузки путем компрессии,
// мультиплекса и механизма расстановки приоритетов.
// [ВНИМАНИЕ] SPDY может хранить идентификатор и держит экстремально долгое открытое соединение.
user_pref("network.http.spdy.enabled", false);
user_pref("network.http.spdy.enabled.deps", false);
user_pref("network.http.spdy.enabled.http2", false);

// WebGL (Web Graphics Library)
// [NOTE] Turning off WebGL to block the definition of the CPU and the speed of the video card on the "digital fingerprints".
// Also recommended for braking, crashes and problems with the video card.
// WebGL (Библиотека веб-графики)
// [ЗАМЕТКА] Выключение WebGL с целью блокирования определения CPU и скорости видеокарты по "цифровым отпечаткам".
// Также рекомендовано при торможениях, сбоях и проблемах с видеокартой.
user_pref("pdfjs.enableWebGL", false);
user_pref("webgl.disable-extensions", true);
user_pref("webgl.disable-fail-if-major-performance-caveat", true);
user_pref("webgl.disabled", true);
user_pref("webgl.dxgl.enabled", false);
user_pref("webgl.enable-webgl2", false);
user_pref("webgl.force-enabled", false);
user_pref("webgl.min_capability_mode", true);
user_pref("webgl.msaa-force", false);

// Service Workers
// "Service workers" essentially act as proxy servers that sit between web apps, and the browser and network,
// are event driven, and can control the web page/site it is associated with, intercepting and modifying navigation
// and resource requests, and caching resources.
// [NOTE] This heavily loads the system resources and takes up most of the RAM.
// Service Workers
// "Service workers" по существу действуют как прокси-серверы, которые находятся между веб-приложениями,
// браузером и сетью, управляются событиями и могут управлять веб-страницей или сайтом, с которыми они связаны,
// перехватывать и изменять запросы навигации и ресурсов, а также кэшировать ресурсы.
// [ЗАМЕТКА] Это сильно нагружает ресурсы системы и занимает большую часть оперативной памяти.
user_pref("dom.serviceWorkers.enabled", false);

// Cookies for HTTP sites are set with the "secure" directive
// Файлы куки для сайтов HTTP устанавливаются с "защищенной" директивой
user_pref("network.cookie.leave-secure-alone", true);

// SameSite сookies
// Куки SameSite
user_pref("network.cookie.same-site.enabled", true);

// DOM (Document Object Model) Storage
// The DOM specifications of web applications define a mechanism that allows web pages to store their data
// on the client side in a special storage.
// [WARNING] This will break a lot of sites functionality and extensions.
// You are better off using an extension for more granular control.
// Хранилище DOM (Объектная Модель Документа)
// DOM-спецификации веб-приложений определяют механизм, разрешающий веб-страницам сохранять свои данные
// на клиентской стороне в специальном хранилище.
// [ВНИМАНИЕ] Отключение этого предпочтения сломает много функций и расширений сайтов.
// Вам лучше использовать расширение для более гранулированного контроля.
// user_pref("dom.storage.enabled", false);

// Warn showing red lock for "broken security"
// Предупреждать, показывая красный замок для "сломанной безопасности"
user_pref("security.ssl.treat_unsafe_negotiation_as_broken", true);

// In the "Add Security Exception" dialog box on SSL warnings
//		0 = Do not fill out the current URL as an exception and do not select an SSL certificate
//		1 = Pre-populate the current URL, but do not pre-select the certificate
//		2 = Pre-populate the current URL and select a certificate
// В диалоговом окне "Добавить исключение безопасности" на предупреждениях SSL
//		0 = Не заполнять текущий URL-адрес в качестве исключения и
//			не выполнять выбор SSL-сертификата
//		1 = Предварительно заполнять текущий URL-адрес,
//			но не выполнять предварительный выбор сертификата
//		2 = Предварительно заполнить текущий URL-адрес и выбрать сертификат
user_pref("browser.ssl_override_behavior", 2);

// Additional information about the pages warning about unsafe connections
// Дополнительная информация о страницах, предупреждающая о небезопасном подключении
user_pref("browser.xul.error_pages.expert_bad_cert", true);

// For HTTP sites, display the icon and the text "insecure" and "unprotected"
// Для сайтов HTTP отображать значок и текст "небезопасный" и "незащищенный"
user_pref("security.insecure_connection_icon.enabled", true);
user_pref("security.insecure_connection_text.enabled", true);
user_pref("security.insecure_connection_icon.pbmode.enabled", true);
user_pref("security.insecure_connection_text.pbmode.enabled", true);

// MediaDevices
user_pref("media.ondevicechange.enabled", false);

// Querying Google application reputation database for downloaded binary files
// Запрос базы данных репутации приложения Google для загруженных двоичных файлов
user_pref("browser.safebrowsing.downloads.remote.enabled", false);
user_pref("browser.safebrowsing.downloads.remote.url", "");

// Safebrowsing reports
// Отчеты Safebrowsing
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

// Button "Ignore this warning" on the pages of safe browsing
// [NOTE] Useless for regular users, its meant for admins on bigger network as a way to secure their users.
// Кнопка "Игнорировать это предупреждение" на страницах безопасного просмотра
// [ЗАМЕТКА] Бесполезный для обычных пользователей, он предназначен для администраторов в большей сети,
// как способ защитить своих пользователей.
user_pref("browser.safebrowsing.allowOverride", false);

// OCSP Stapling
// Сшивание OCSP
user_pref("security.ssl.enable_ocsp_stapling", true);
user_pref("security.ssl.enable_ocsp_must_staple", true);

// Resource timing API
// API Ресурсов времени
user_pref("dom.enable_resource_timing", false);

// Browser sends information about the start and end time of page loading
// Передача браузером информации о времени начала и окончания загрузки страницы
user_pref("dom.enable_performance", false);
user_pref("dom.enable_performance_navigation_timing", false);
user_pref("dom.enable_performance_observer", false);

// Sensor API
// [NOTE] Collecting information from sensors
// API Сенсора
// [ЗАМЕТКА] Сбора информации с сенсоров
user_pref("device.sensors.enabled", false);
 
// Content security policy (CSP)
// Политика безопасности контента
user_pref("security.csp.enable", true);
user_pref("security.csp.experimentalEnabled", false);
user_pref("security.data_uri.block_toplevel_data_uri_navigations", true);

// Online certificate status protocol
//		0 = Disabled
//		1 = Enabled
//		2 = Enabled for EV certificates only
// Протокол статуса сертификата онлайн
//		0 = Отключено
//		1 = Включен
//		2 = Включено только для сертификатов EV
user_pref("security.OCSP.enabled", 1);
 
// Require a valid OCSP response for OCSP enabled certificates
// [WARNING] When you turn on breaks some sites.
// Требовать действительный ответ OCSP для сертификатов с поддержкой OCSP
// [ВНИМАНИЕ] При включении ломается некоторые сайты.
// user_pref("security.OCSP.require", true);

// Battery API
// Monitoring computer battery
// API аккумулятора
// Мониторинга аккумулятора компьютера
user_pref("dom.battery.enabled", false);

// Virtual reality API
// API Виртуальной реальности
user_pref("dom.vr.enabled", false);
user_pref("dom.vr.service.enabled", false); 

// Hardware acceleration
// Аппаратное ускорение
user_pref("layers.acceleration.force-enabled", false);
user_pref("layers.acceleration.disabled", true);
user_pref("gfx.direct2d.disabled", true);

// Web audio API
// [WARNING] Dangerously due to browser fingerprints.
// API Веб-аудио
// [ВНИМАНИЕ] Опасно из-за отпечатков пальцев браузера.
user_pref("dom.webaudio.enabled", false);

// Pointer events
// События указателя
user_pref("dom.w3c_pointer_events.enabled", false);

// Saving zoom for sites
// [WARNING] Dangerously due to browser fingerprints.
// Сохранение масштаба для сайтов
// [ВНИМАНИЕ] Опасно из-за отпечатков пальцев браузера.
user_pref("browser.zoom.siteSpecific", false);

// Gamepad API
// API Геймпада
user_pref("dom.gamepad.enabled", false);
user_pref("dom.gamepad.test.enabled", false);
user_pref("dom.gamepad.extensions.enabled", false);
user_pref("dom.gamepad.haptic_feedback.enabled", false);

// Definition and sending of parameters (type) of network connection (Wi-Fi, LAN, etc.) and current speed
// Определение и отправка параметров (типа) сетевого соединения (Wi-Fi, LAN и т.п.) и текущей скорости
user_pref("dom.netinfo.enabled", false);

// Touch-events
//		0 = Disabled
//		1 = Enabled
//		2 = Automatic detection
// Тач-события
//		0 = Отключить
//		1 = Включить
//		2 = Автоматическое обнаружение
user_pref("dom.w3c_touch_events.enabled", 0);

// SHA-1 Algorithm
//		0 = All SHA1 certs are allowed
//		1 = All SHA1 certs are blocked (including perfectly valid ones from 2015 and earlier)
//		2 = Deprecated option that now maps to 1
//		3 = Only allowed for locally-added roots (e.g. anti-virus)
//		4 = Only allowed for locally-added roots or for certs in 2015 and earlier
// Алгоритм SHA-1
//		0 = Все сертификаты SHA1 разрешены
//		1 = Все сертификаты SHA1 заблокированы (в том числе вполне допустимые с 2015 года и ранее)
//		2 = Deprecated option that now maps to 1
//		3 = Разрешено только для локально добавляемых корней (например, Антивирус)
//		4 = Разрешено только для локально добавленных корней или сертификатов в 2015 году и ранее
user_pref("security.pki.sha1_enforcement_level", 1);

// Capture stream API
// API Потокового захвата
user_pref("canvas.capturestream.enabled", false);

// Image capture API
// API Захвата изображений
user_pref("dom.imagecapture.enabled", false);

// Offscreen Canvas
// This mechanism provides the ability to perform rendering through WebGL in a separate thread.
// Running WebGL in a separate thread is done using The offscreen Canvas API added to the Workers system,
// which provides tools for background execution of long JavaScript operations (even when the application is already closed!).
// Offscreen Canvas
// Этот механизм обеспечивает возможность выполнения отрисовки через WebGL в отдельном потоке.
// Запуск WebGL в отдельном потоке производится с помощью API Offscreen Canvas, добавленного в систему Workers,
// предоставляющую средства для фонового выполнения длительных JavaScript-операций (даже при уже закрытом приложении!).
user_pref("gfx.offscreencanvas.enabled", false);

// Block known Flash trackers and fingerprints
// Блокировать известные Flash трекеры и отпечатки пальцев
user_pref("browser.safebrowsing.blockedURIs.enabled", false);
user_pref("urlclassifier.blockedTable", "");

// HTTP Alternative services
// Альтернативные услуги HTTP
user_pref("network.http.altsvc.enabled", false);
user_pref("network.http.altsvc.oe", false);

// Access the URL of the PAC scripts
// [NOTE] The path and URL request components "https://" are deleted.
// Доступ к URL-адресу у PAC скриптов
// [ЗАМЕТКА] Компоненты пути и запроса URL-адресов "https://" удаляются.
user_pref("network.proxy.autoconfig_url.include_path", false);

// DNS-over-HTTPS (DoH)
//		0 = Disable
//		1 = DNS or TRR is used, whichever is faster
//		2 = TRR is used by default, and DNS as a fallback
//		3 = Only TRR is used
//		4 = Race for statistics, mirroring mode in which TRR and DNS are enabled in parallel
// [WARNING] DoH bypasses hosts and gives info to yet another party (e.g. Cloudflare).
// DNS-над-HTTPS
//		0 = Отключить
//		1 = Используется DNS или TRR, в зависимости от того, что быстрее
//		2 = Используется TRR по умолчанию, а DNS как запасной вариант
//		3 = Используется только TRR
//		4 = Гонка за статистикой, режим зеркалирования при котором TRR и DNS задействованы параллельно
// [ВНИМАНИЕ] DoH обходит хосты и предоставляет информацию еще одной стороне (например, Cloudflare).
// user_pref("network.trr.mode", 0);
// user_pref("network.trr.bootstrapAddress", "");
// user_pref("network.trr.uri", "");

// UNC (Uniform Naming Convention) paths
// UNC (Универсальное Соглашение об Именовании) путей
user_pref("network.file.disable_unc_paths", true);

// GIO, as a potential proxy bypass vector
// GIO, как потенциальный вектор обхода прокси
user_pref("network.gio.supported-protocols", "");

// Sites with autocomplete="off" attribute
// [NOTE] This function allows you to save the entered passwords in the password manager,
// even if the site owner has set the autocomplete attribute to "off".
// Сайты с атрибутом автозаполнение "Отключено"
// [ЗАМЕТКА] Данная функция позволяет сохранять введенные пароли в менеджере паролей,
// даже если владелец сайта установил атрибуту автозаполнение значение "Отключено".
user_pref("signon.storeWhenAutocompleteOff", true);

// Display a warning when you log on to unprotected pages (not HTTPS)
// При входе на незащищенные страницы (не HTTPS) отображать предупреждение
user_pref("security.insecure_password.ui.enabled", true);

// Show (do not show) password when using alternative URL
// Показывать (не показывать) пароль при использовании альтернативного URL
user_pref("browser.fixup.hide_user_pass", true);

// Formless login capture
// Бесформенный захват входа
user_pref("signon.formlessCapture.enabled", false);

// HTTP Authentication on 3rd party images
// Аутентификация HTTP на сторонних изображениях
user_pref("network.auth.subresource-img-cross-origin-http-auth-allow", false);

// Control TLS versions
// Контроль TLS версий
user_pref("security.tls.version.min", 3);
user_pref("security.tls.version.max", 4);

// SSL session tracking
// [NOTE] Disables sending Session Tickets (TLS) and Session Identifiers (SSL) - unique identifiers
// used to speed up the re-establishment of an encrypted connection, which can also be used to track a user.
// Отслеживание сеансов SSL
// [ЗАМЕТКА] Отключает посылку Session Tickets (TLS) и Session Identifiers (SSL) - уникальных идентификаторов,
// применяемых для ускорения повторной установки шифрованного соединения, которые могут быть также использованы и
// для отслеживания пользователя.
user_pref("security.ssl.disable_session_identifiers", true);

// SSL Error reporting
// Отчеты об ошибках SSL
user_pref("security.ssl.errorReporting.automatic", false);
user_pref("security.ssl.errorReporting.enabled", false);
user_pref("security.ssl.errorReporting.url", "");

// TLS1.3 Zero Round Trip Time
user_pref("security.tls.enable_0rtt_data", false);

// Windows 8.1 family security
//		0 = Disable
//		1 = Only attempt to detect Family Safety mode (don't import the root)
//		2 = Detect Family Safety mode and import the root
// Семейная безопасность Windows 8.1
//		0 = Отключить
//		1 = Только попытка обнаружить режим безопасности семьи (не импортировать корень)
//		2 = Определить режим безопасности семьи и импортировать корень
user_pref("security.family_safety.mode", 0);

// Enfore public key pinning
//		0 = Disable
//		1 = Allow user MiTM (such as your antivirus)
//		2 = Strict
// Привязка к открытому ключу
//		0 = Отключить
//		1 = Разрешить пользователю MiTM (например, вашему антивирусу)
//		2 = Строго
user_pref("security.cert_pinning.enforcement_level", 2);

// Sketches of visited pages
// Эскизы посещенных страниц
user_pref("browser.pagethumbnails.capturing_disabled", true);

// Web content in file processes
// Веб-контент в файловых процессах
user_pref("browser.tabs.remote.allowLinkedWebInFileUriProcess", false);

// User interface tour (UITour)
// Тур по интерфейсу пользователя
user_pref("browser.uitour.enabled", false);
user_pref("browser.uitour.url", "");

// Various developer tools in the context of the browser
// Различные инструменты разработчика в контексте браузера
user_pref("devtools.chrome.enabled", false);

// WEB Integrated development environment (WebIDE)
// ВЕБ Интегрированная среда разработки
user_pref("devtools.debugger.force-local", true);
user_pref("devtools.debugger.prompt-connection", true);
user_pref("devtools.debugger.remote-enabled", false);
user_pref("devtools.webide.autoConnectRuntime", false);
user_pref("devtools.webide.enableLocalRuntime", false);
user_pref("devtools.webide.enabled", false);
user_pref("devtools.webide.templatesURL", "");
user_pref("devtools.webide.autoinstallADBExtension", false);
user_pref("devtools.remote.adb.extensionURL", "");

// Web channel whitelist
// Белый список веб-каналов
user_pref("webchannel.allowObject.urlWhitelist", "");

// View clipboard content
// Просмотр содержимого буфера обмена
// user_pref("dom.event.clipboardevents.enabled", false);

// Clipboard commands (cut/copy) from "non-privileged" content
// Команды буфера обмена (вырезать/копировать) от "непривилегированного" контента
user_pref("dom.allow_cut_copy", false);

// Dialog box "Confirm you want to leave" when closing page
// Диалоговое окно "Подтвердить, что вы хотите уйти" при закрытии страницы
user_pref("dom.disable_beforeunload", false);

// Interaction with a mobile device vibrator
// Взаимодействие с вибратором мобильного устройства
user_pref("dom.vibrator.enabled", false);

// JS Shared Memory
user_pref("javascript.options.shared_memory", false);

// DOM (Document Object Model) JavaScript
// Disable JavaScript, executable by the DOM.
// When a web page is loaded, the browser creates its "behavior model"
// and may allow the hypothetical execution of unwanted and potentially dangerous functionality.
// To prevent the following actions:
//		1. JavaScript can add, change, or delete any HTML element or page attribute.
//		2. JavaScript can change all CSS styles on a page.
//		3. JavaScript can respond to any event on the page.
//		4. JavaScript can create new events on the page.
// JavaScript DOM (Объектная Модель Документа)
// Отключение JavaScript, исполняемого с помощью DOM. Когда веб-страница загружена, браузер создает ее "модель поведения"
// и может позволить гипотетическое исполнение нежелательного и потенциально опасного функционала.
// Для предотвращения следующих действий:
//		1. JavaScript может добавлять, менять и удалять любые HTML-элементы и атрибуты страницы.
//		2. JavaScript может менять все стили CSS на странице.
//		3. JavaScript может реагировать на любые события на странице.
//		4. JavaScript может создавать новые события на странице.
user_pref("dom.allow_scripts_to_close_windows", true); // Prevent scripts from closing windows / Запрет скриптам закрывать окна
user_pref("dom.disable_window_flip", true); // Prevent scripts from changing the focus of windows (move one to another) / Запрет скриптам менять фокус окон (перемещать одно под другое)
user_pref("dom.disable_window_move_resize", true); // Prevent scripts from resizing and/or moving Windows / Запрет скриптам менять размер и/или перемещать окна
user_pref("dom.disable_window_open_feature.close", true); // Prevent scripts from disabling the window close button / Запрет скриптам отключать кнопку закрытия окна
user_pref("dom.disable_window_open_feature.location", true); // Prevent scripts from hiding the address bar / Запрет скриптам скрывать адресную строку
user_pref("dom.disable_window_open_feature.menubar", true); // Prevent scripts from hiding the menu bar / Запрет скриптам скрывать панель меню
user_pref("dom.disable_window_open_feature.minimizable", true); // Prevent scripts from hiding the minimize window button / Запрет скриптам скрывать кнопку минимизации окна
user_pref("dom.disable_window_open_feature.resizable", true); // Prevent scripts from resizing the window / Запрет скриптам изменять размер окна
user_pref("dom.disable_window_open_feature.status", true); // Prevent scripts from hiding the status bar / Запрет скриптам скрывать панель состояния
user_pref("dom.disable_window_open_feature.personalbar", true); // Prevent scripts from hiding user bookmarks bar / Запрет скриптам скрывать пользовательскую панель закладок
user_pref("dom.disable_window_open_feature.toolbar", true); // Prevent scripts from hiding the navigation bar / Запрет скриптам скрывать панель навигации

// How to open links that indicate opening new Windows
//		1 = Open in current tab
//		2 = Open in new window
//		3 = Open in new tab
// Как открывать ссылки, в которых указано открытие новых окон
//		1 = Открыть в текущей вкладке
//		2 = Открывать в новом окне
//		3 = Открывать в новой вкладке
user_pref("browser.link.open_newwindow", 3);

// Allows you to open tabs instead of new Windows
//		0 = Open all links in tabs
//		1 = Open links in windows
//		2 = Open links in tabs with the exception of cases
//      	when non-standard window parameters are specified
// Позволяет открывать вкладки вместо новых окон
//		0 = Открывать все ссылки во вкладках
//		1 = Открывать ссылки в окнах
//		2 = Открывать ссылки во вкладках за исключением случаев,
//      	когда заданы нестандартные параметры окна
user_pref("browser.link.open_newwindow.restriction", 0);

// Block pop-ups
// Блокировать всплывающие окна
user_pref("dom.disable_open_during_load", true);

// Maximum number of pop-ups
// Максимальное количество всплывающих окон
user_pref("dom.popup_maximum", 3);

// Control of sent information regardless of the source
//		0 = Never send "Referrer" header
//		1 = Send "Referrer" header only when clicking on links and similar elements
//		2 = Send to all requests (e.g. images, links, etc.)
// [WARNING] When you disable the transfer of this header, many sites will stop working.
// Контроль отправляемой информации независимо от источника
//		0 = Никогда не отправлять заголовок "Referrer"
//		1 = Отправлять заголовок "Referrer" только при клике по ссылкам и подобным элементам
//		2 = Отправить на все запросы (например, изображения, ссылки и т.д.)
// [ВНИМАНИЕ] При отключении отправки этого заголовка, многие сайты перестанут работать.
user_pref("network.http.sendRefererHeader", 2);

// Control the number of "Referrer" sent regardless of the source
//		0 = Send the full URL
//		1 = Send URL without query string (scheme + host + port + path)
//		2 = Send only origin (scheme + host + port)
// Контроль количества "Referrer" отправляемых независимо от источника
//		0 = Отправлять полный URL
//		1 = Отправлять URL-адрес без строки запроса (схема + хост + порт + путь)
//		2 = Отправлять только начало (схема + хост + порт)
user_pref("network.http.referer.trimmingPolicy", 0);

// Control the selection of sent "Referrer" through sources
//		0 = Send "Referrer" in all cases
//		1 = Send only if the base domains match
//		2 = Send "Referer" only to the same host
// Контроль выбора отправляемых "Referrer" через источники
//		0 = Отправлять "Referrer" во всех случаях
//		1 = Отправлять, только если базовые домены совпадают
//		2 = Отправить "Referer" только на тот же хост
user_pref("network.http.referer.XOriginPolicy", 1);

// Control the number of "Referrer" sent by origin
//		0 = Send the full URL
//		1 = Send URL without query string (scheme + host + port + path)
//		2 = Send only origin (scheme + host + port)
// Контроль количества "Referrer" отправляемых по происхождению
//		0 = Отправлять полный URL
//		1 = Отправлять URL-адрес без строки запроса (схема + хост + порт + путь)
//		2 = Отправлять только начало (схема + хост + порт)
user_pref("network.http.referer.XOriginTrimmingPolicy", 0);

// Spoofing a referer
//		TRUE = Spoof referer
//		FALSE = Real referer
// Фальсифицировать Referrer
//		TRUE = Подделывать Referrer
//		FALSE = Настоящий Referrer
user_pref("network.http.referer.spoofSource", true);

// Referrer policy
//		0 = No referer
//		1 = Same origin
//		2 = Strict origin when crossing origin
//		3 = No referrer when downgrade
// Политика Referrer
//		0 = Нет реферера
//		1 = То же происхождение
//		2 = Строгое происхождение при пересечении происхождения
//		3 = Отсутствие реферера при понижении
user_pref("network.http.referer.defaultPolicy", 3);
user_pref("network.http.referer.defaultPolicy.pbmode", 2);

// Open links from the clipboard with the middle mouse button
// Открывать ссылки из буфера обмена средней кнопкой мышки
// user_pref("middlemouse.contentLoadURL", false);

// Restrict HTTP redirection
// Ограничить переадресацию HTTP
user_pref("network.http.redirection-limit", 10);

// Setting default permissions (resource://app/defaults/permissions) in the Permission Manager
// Установка по умолчанию разрешений (resource://app/defaults/permissions) в Менеджере Разрешений
user_pref("permissions.manager.defaultsUrl", "");

// The impact of the system colors to CSS or canvas
// Воздействие системных цветов на CSS или canvas
user_pref("ui.use_standins_for_native_colors", true);

// Force punycode for internationalized domain names
// Принудительное использование Юникода для интернационализированных доменных имен
user_pref("network.IDN_show_punycode", true);

// Old SSL/TLS "insecure" renegotiation (vulnerable to a MiTM attack)
// Старое "небезопасное" повторное согласование SSL/TLS (уязвимое к атаке MiTM)
user_pref("security.ssl.require_safe_negotiation", true);

// Prevent connection to the device on Firefox OS for debugging over Wi-Fi Internet
// Firefox collects information about the closest wireless access points and your real IP address
// and then transfers it to the nearest geolocation provider, as well as to Google Location Services.
// [WARNING] Dangerous, may reveal your location.
// Запрет соединения с устройством на Firefox ОС для отладки по сети Wi-Fi Интернет
// Firefox собирает информацию о ближайших беспроводных точках доступа и вашем реальном IP-адресе
// и затем передает ее в ближайшему геолокационному провайдеру, а также в службу Google Location Services.
// [ВНИМАНИЕ] Опасно, может раскрыть ваше расположение.
user_pref("devtools.remote.wifi.scan", false);
user_pref("network.tickle-wifi.enabled", false);
user_pref("geo.wifi.uri", "");
user_pref("geo.wifi.logging.enabled", false);

// File handle API
// [NOTE] Responsible for accessing lower-level file operations.
// API для обработки файлов
// [ЗАМЕТКА] Отвечает за доступ к более низкоуровневым файловым операциям.
user_pref("dom.fileHandle.enabled", false);

// Device storage API
// [NOTE] Responsible for access to the file system, this API allows the browser to
// read and/or write to the user's files.
// API хранилища устройств
// [ЗАМЕТКА] Отвечает за доступ к файловой системе, данный API позволяет браузеру самостоятельно
// читать и/или писать в файлах пользователя.
user_pref("device.storage.enabled", false);

// Windows store launch links on Windows 8/8.1/10
// Ссылки запуска Windows Store на Windows 8/8.1/10
user_pref("network.protocol-handler.external.ms-windows-store", false);

// Browser function that allows you to save objects by keyboard shortcut, left mouse button and ALT key
//		TRUE = When you click on an object with Alt plus LMB, it is saved
//		FALSE = Disable this feature
// Функция браузера, которая позволяет сохранять объекты с помощью сочетания клавиш, левой кнопки мыши и клавиши ALT
//		TRUE = При клике на объект клавишами Alt плюс ЛКМ происходит его сохранение
//		FALSE = Отключить эту функцию
user_pref("browser.altClickSave", true);

// Bookmark save format
//		TRUE = Save to HTML
//		FALSE = Save to SQLITE
// Формат сохранения закладок
//		TRUE = Сохранение в HTML
//		FALSE = Сохранение в SQLITE
user_pref("browser.bookmarks.autoExportHTML", true);

// Showing search results
//		TRUE = Open search result in current page
//		FALSE = Open search result in new page
// Показ результатов поиска
//		TRUE = Открывать результат поиска в текущей странице
//		FALSE = Открывать результат поиска на новой странице
user_pref("browser.search.openintab", true);

// Automatic selection of the entire line in the address bar
// Автоматическое выделение всей строки в поле адресной строки
// user_pref("browser.urlbar.clickSelectsAll", false);

// Showing search results
//		TRUE = To wrap lines
//		FALSE = Do not wrap lines
// Показ результатов поиска
//		TRUE = Переносить строки
//		FALSE = Не переносить строки
user_pref("view_source.wrap_long_lines", true);

// Media capabilities API
// [WARNING] This may affect media performance if disabled, no one is sure.
// API Возможностей мультимедиа
// [ВНИМАНИЕ] Это может повлиять на работу медиа, если отключен, никто не уверен.
// user_pref("media.media-capabilities.enabled", false);

// Block unencrypted requests from Flash on encrypted pages to mitigate MitM attacks
// Блокировка незашифрованных запросов от Flash на зашифрованных страницах для смягчения MitM-атак
user_pref("security.mixed_content.block_object_subrequest", true);

// Content blocking (required to block cookies)
// Блокировка содержимого (требуется для блокировки файлов cookie)
user_pref("browser.contentblocking.enabled", true);

// Feedback URL
// URL обратной связи
user_pref("app.feedback.baseURL", "");

// Help URL
// URL справки
user_pref("app.support.baseURL", "");

// Manual URL
// [NOTE] This preference determines the address that the user can view to update the browser manually
// if an application update has failed.
// Ссылка на мануал
// [ЗАМЕТКА] Это предпочтение определяет адрес, который пользователь может просмотреть для обновления браузера вручную,
// если обновление приложения потерпело неудачу.
user_pref("app.update.url.details", "");

// CSS :visited selectors
// [ЗАМЕТКА] Disables the use of styles with the: visited selector to visited links,
// which prevents the user from finding out what URLs the user has in the browser history.
// CSS :visited селекторы
// [ЗАМЕТКА] Отключает применение к посещенным ссылкам стилей с селектором :visited,
// что предотвращает возможность выяснить, какие URL есть у пользователя в истории браузера.
user_pref("layout.css.visited_links_enabled", false);

// Closing Firefox when closing the last tab
// Закрытие Firefox при закрытии последней вкладки
user_pref("browser.tabs.closeWindowWithLastTab", false);

// Private browsing mode
// Режим приватного просмотра
// user_pref("browser.privatebrowsing.autostart", true);

// List of allowed fonts
// Список разрешенных шрифтов
// user_pref("font.system.whitelist", "");

// asm.js
user_pref("javascript.options.asmjs", false);

// WebAssembly
user_pref("javascript.options.wasm", false);

// The time of inactivity of the user through which the browser will begin to save the session
// Время отсутствия активности пользователя, через который браузер начнет сохранять сессию
user_pref("browser.sessionstore.idleDelay", 720000);

// Preloading documents or resources specified via <link rel = "preload">
// Предзагрузка документов или ресурсов, указанных через <link rel="preload">
user_pref("network.preload", false);

// Semi transparent tab previews
// Полупрозрачная превью вкладок
// user_pref("nglayout.enable_drag_images", false);

// Disable preconnects and preresolves
// Отключить предварительные соединения и пререзоливы
user_pref("network.predictor.prefetch-min-confidence", 101);
user_pref("network.predictor.preconnect-min-confidence", 101);
user_pref("network.predictor.preresolve-min-confidence", 101);

// Module LaterRun
// [NOTE] Displaying new users with various help information when "N" starts up the browser.
// Модуль LaterRun
// [ЗАМЕТКА] Показ новых пользователей различной справочной информация при "N" запуске браузера.
user_pref("browser.laterrun.enabled", false);

// Disables the registration of the Safebrowsing and Tracking Protection tables in the URL Classifier
// Отключает регистрацию таблиц Safebrowsing и Tracking Protection в URL Classifier
user_pref("urlclassifier.malwareTable", "");
user_pref("urlclassifier.phishTable", "");
user_pref("urlclassifier.downloadBlockTable", "");
user_pref("urlclassifier.downloadAllowTable", "");
user_pref("urlclassifier.trackingTable", "");
user_pref("urlclassifier.trackingWhitelistTable", "");
user_pref("urlclassifier.disallow_completions", "");
user_pref("urlclassifier.passwordAllowTable", "");

// Disable the whitelist domain list for Flash
// Отключить белый список доменов для Flash
user_pref("plugins.flashBlock.enabled", false);
user_pref("urlclassifier.flashAllowTable", "");
user_pref("urlclassifier.flashAllowExceptTable", "");
user_pref("urlclassifier.flashTable", "");
user_pref("urlclassifier.flashExceptTable", "");
user_pref("urlclassifier.flashSubDocTable", "");
user_pref("urlclassifier.flashSubDocExceptTable", "");
user_pref("urlclassifier.flashInfobarTable", "");

// Do not track network topology
// Не отслеживать топологию сети
user_pref("network.notify.changed", false);

// DOMHighResTimeStamp API
// [WARNING] Required for normalization of timestamps and any timer resolution mitigations.
// DOMHighResTimeStamp API
// [ВНИМАНИЕ] Требуется для нормализации временных меток и любых смягчений разрешения таймера.
user_pref("dom.event.highrestimestamp.enabled", true);

// Allow websites to use their own fonts
//		0 = Block
//		1 = Allow
// Разрешить веб-сайтам использовать свои шрифты
//		0 = Заблокировать
//		1 = Разрешить
user_pref("browser.display.use_document_fonts", 0);

// Control: which root programs do not trust politicians
//		0 = No distrust policies enforced
//		1 = Symantec roots distrusted for certificates issued after cutoff
//		2 = Symantec roots distrusted regardless of date
// Контроль: какие корневые программы не доверяют политикам
//		0 = Политика недоверия не применяется
//		1 = Корни Symantec не доверяют сертификатам, выданным после отключения
//		2 = Корни Symantec доверяют независимо от даты
user_pref("security.pki.distrust_ca_policy", 2);

// Enable collecting of docgroup activity in the scheduler
// Включить сбор активности группы документов в планировщике
user_pref("dom.performance.enable_scheduler_timing", false);

// Runtime storage for API calls
// Хранилище времени выполнения для вызовов API
user_pref("extensions.webextensions.enablePerformanceCounters", false);

// Preferences for the new performance panel This pref configures the base URL
// for the perf.html instance to use
// [WARNING] Uses Google Analytics
// Настройка для новой панели производительности. Этот преф настраивает базовый URL
// для используемого экземпляра perf.html
// [ВНИМАНИЕ] Использует Google Analytics
user_pref("devtools.performance.recording.ui-base-url", "");

// HTTP authentication credentials dialogs triggered by sub-resources hardens against potential credentials phishing
//		0 = Don't allow sub-resources to open HTTP authentication credentials dialogs
//		1 = Don't allow cross-origin sub-resources to open HTTP authentication credentials dialogs
//		2 = Allow sub-resources to open HTTP authentication credentials dialogs
// Диалоги аутентификации HTTP, запускаемые подресурсами, защищают от фишинга потенциальных учетных данных
//		0 = Не разрешать субресурсам открывать диалоги аутентификации HTTP
//		1 = Не позволяйте подресурсам из разных источников открывать диалоги аутентификации HTTP
//		2 = Разрешить субресурсам открывать диалоги аутентификации HTTP
user_pref("network.auth.subresource-http-auth-allow", 1);

// JavaScript
// JavaScript is a programming language; one of the main web technologies.
// At the same time, JavaScript allows you to run malicious code on any computer using
// two main types of vulnerabilities. XSS vulnerabilities are used if the attacker has
// the ability to embed the executable code on the page and demonstrate it to the user.
// In this case, an attacker could gain user rights and use them for their own purposes.
// Another type of vulnerability is CSRF, when an attacker attempts to force a browser to perform
// an undesirable action on another site, such as transferring funds from an account to an account.
// JavaScript technologies can leak a variety of information about the operating system, browser,
// monitor size and resolution, installed fonts, and other data.
// [NOTE] It is recommended not to enable this setting, and to use addition-type NoScript or uMatrix.
// JavaScript
// JavaScript - язык программирования; одна из главных веб-технологий.
// В то же время JavaScript позволяет запускать вредоносный код на любом компьютере при помощи
// двух основных типов уязвимостей. XSS-уязвимости используются, если у атакующей стороны есть
// возможность внедрить исполняемый код на страницу и продемонстрировать ее пользователю.
// В этом случае злоумышленник может получить права данного пользователя и использовать их в своих целях.
// Иной тип уязвимости - CSRF, когда атакующая сторона пытается заставить браузер осуществить нежелательное действие
// на другом сайте, например - перевести средства со счета на счет.
// JavaScript-технологии могут способствовать утечкам разнообразной информации об операционной системе,
// браузере, размере и разрешении монитора, установленных шрифтах и других данных.
// [ЗАМЕТКА] Рекомендуется не включать этот параметр, а использовать дополнение типа NoScript или uMatrix.
// user_pref("javascript.enabled", false);

// Black ports list
// Prevent connections on certain ports. Many ports are reserved for different services, serving, for example, FTP, POP, etc.
// To prevent the potential risk it is necessary to prohibit access.
// Список черных портов
// Запрет на установку соединений по определенным портам. Многие порты зарезервированы за разными службами, обслуживающими,
// к примеру, FTP, POP и т.п. Для предотвращения потенциального риска необходимо запретить обращения к ним.
user_pref("network.security.ports.banned", "9050,9051,9150,9151,8118,4444");

// Recommended performance settings
// Рекомендуемые настройки производительности
user_pref("browser.preferences.defaultPerformanceSettings.enabled", false);

// Intelligent definition of a set of localized characters
// Интеллектуальное определение набора локализованных символов
user_pref("intl.charset.detector", "");

// Breakdowns reports for Content blocking
// Отчеты об поломках для Блокировки контента
user_pref("browser.contentblocking.reportBreakage.enabled", false);
user_pref("browser.contentblocking.reportBreakage.url", "");
user_pref("browser.contentblocking.rejecttrackers.reportBreakage.enabled", false);
