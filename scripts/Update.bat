:: This file is part of the Free Fox project,
:: Copyright (c) 2019 Bogachenko Vyacheslav
::
:: Free Fox is a free project: you can distribute it and/or modify
:: it in accordance with the MIT license published by the Massachusetts Institute of Technology.
::
:: The Free Fox project is distributed in the hope that it will be useful,
:: and is provided "AS IS", WITHOUT ANY WARRANTY, EXPRESSLY EXPRESSED OR IMPLIED.
:: WE ARE NOT RESPONSIBLE FOR ANY DAMAGES DUE TO THE USE OF THIS PROJECT OR ITS PARTS.
:: For more information, see the MIT license.
::
:: Author: Bogachenko Vyacheslav <https://github.com/bogachenko>
:: Email: bogachenkove@gmail.com
:: Github: https://github.com/bogachenko/freefox/
:: Last modified: January 23, 2019
:: License: MIT <https://github.com/bogachenko/freefox/blob/master/LICENSE.md>
:: Problem reports: https://github.com/bogachenko/freefox/issues
:: Title: Update.bat
:: URL: https://raw.githubusercontent.com/bogachenko/freefox/master/scripts/update.bat
:: Version: 0.0.3
::
:: Download the entire Free Fox project at https://github.com/bogachenko/freefox/archive/master.zip

powershell -Command "(New-Object Net.WebClient).DownloadFile('https://raw.githubusercontent.com/bogachenko/freefox/master/fennec/user.js', '../fennec/user.js')"
powershell -Command "(New-Object Net.WebClient).DownloadFile('https://raw.githubusercontent.com/bogachenko/freefox/master/firefox/user.js', '../firefox/user.js')"
powershell -Command "(New-Object Net.WebClient).DownloadFile('https://raw.githubusercontent.com/bogachenko/freefox/master/firefox/chrome/userChrome.css', '../firefox/chrome/userChrome.css')"
powershell -Command "(New-Object Net.WebClient).DownloadFile('https://raw.githubusercontent.com/bogachenko/freefox/master/palemoon/user.js', '../palemoon/user.js')"
powershell -Command "(New-Object Net.WebClient).DownloadFile('https://raw.githubusercontent.com/bogachenko/freefox/master/palemoon/chrome/userChrome.css', '../palemoon/chrome/userChrome.css')"
powershell -Command "(New-Object Net.WebClient).DownloadFile('https://raw.githubusercontent.com/bogachenko/freefox/master/thunderbird/user.js', '../thunderbird/user.js')"
powershell -Command "(New-Object Net.WebClient).DownloadFile('https://raw.githubusercontent.com/bogachenko/freefox/master/thunderbird/chrome/userChrome.css', '../thunderbird/chrome/userChrome.css')"
powershell -Command "(New-Object Net.WebClient).DownloadFile('https://raw.githubusercontent.com/bogachenko/freefox/master/waterfox/user.js', '../waterfox/user.js')"
powershell -Command "(New-Object Net.WebClient).DownloadFile('https://raw.githubusercontent.com/bogachenko/freefox/master/waterfox/chrome/userChrome.css', '../waterfox/chrome/userChrome.css')"
powershell -Command "(New-Object Net.WebClient).DownloadFile('https://raw.githubusercontent.com/bogachenko/freefox/master/scripts/prefsCleaner.bat', '../scripts/prefsCleaner.bat')"
powershell -Command "(New-Object Net.WebClient).DownloadFile('https://raw.githubusercontent.com/bogachenko/freefox/master/scripts/prefsCleaner.sh', '../scripts/prefsCleaner.sh')"
powershell -Command "(New-Object Net.WebClient).DownloadFile('https://raw.githubusercontent.com/bogachenko/freefox/master/scripts/Compare-PrefJSnUserJS.ps1', '../scripts/Compare-PrefJSnUserJS.ps1')"
powershell -Command "(New-Object Net.WebClient).DownloadFile('https://raw.githubusercontent.com/bogachenko/freefox/master/scripts/Verify-UserJS.sh', '../scripts/Verify-UserJS.sh')"
