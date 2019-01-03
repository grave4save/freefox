#!/bin/sh

## This file is part of the Liberty fox project,
## Copyright (c) 2019 Bogachenko Vyacheslav
##
## Liberty fox is a free project: you can distribute it and/or modify
## it in accordance with the MIT license published by the Massachusetts Institute of Technology.
##
## The Liberty fox project is distributed in the hope that it will be useful,
## and is provided "AS IS", WITHOUT ANY WARRANTY, EXPRESSLY EXPRESSED OR IMPLIED.
## WE ARE NOT RESPONSIBLE FOR ANY DAMAGES DUE TO THE USE OF THIS PROJECT OR ITS PARTS.
## For more information, see the MIT license.
##
## Author: Bogachenko Vyacheslav <https://github.com/bogachenko>
## Email: bogachenkove@gmail.com
## Github: https://github.com/bogachenko/libertyfox/
## Last modified: January 4, 2019
## License: MIT <https://github.com/bogachenko/libertyfox/blob/master/LICENSE.md>
## Problem reports: https://github.com/bogachenko/libertyfox/issues
## Title: Update.sh
## URL: https://raw.githubusercontent.com/bogachenko/libertyfox/master/scripts/update.sh
## Version: 0.0.2
##
## Download the entire Liberty fox project at https://github.com/bogachenko/libertyfox/archive/master.zip

wget https://raw.githubusercontent.com/bogachenko/libertyfox/master/fennec/user.js -O ../fennec/user.js
wget https://raw.githubusercontent.com/bogachenko/libertyfox/master/firefox/user.js -O ../firefox/user.js
wget https://raw.githubusercontent.com/bogachenko/libertyfox/master/firefox/chrome/userChrome.css -O ../firefox/chrome/userChrome.css
wget https://raw.githubusercontent.com/bogachenko/libertyfox/master/palemoon/user.js -O ../palemoon/user.js
wget https://raw.githubusercontent.com/bogachenko/libertyfox/master/palemoon/chrome/userChrome.css -O ../palemoon/chrome/userChrome.css
wget https://raw.githubusercontent.com/bogachenko/libertyfox/master/thunderbird/user.js -O ../thunderbird/user.js
wget https://raw.githubusercontent.com/bogachenko/libertyfox/master/thunderbird/chrome/userChrome.css -O ../thunderbird/chrome/userChrome.css
wget https://raw.githubusercontent.com/bogachenko/libertyfox/master/waterfox/user.js -O ../waterfox/user.js
wget https://raw.githubusercontent.com/bogachenko/libertyfox/master/waterfox/chrome/userChrome.css -O ../waterfox/chrome/userChrome.css
wget https://raw.githubusercontent.com/bogachenko/libertyfox/master/scripts/prefsCleaner.bat -O ../scripts/prefsCleaner.bat
wget https://raw.githubusercontent.com/bogachenko/libertyfox/master/scripts/prefsCleaner.sh -O ../scripts/prefsCleaner.sh
