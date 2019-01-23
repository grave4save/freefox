#!/bin/sh

## This file is part of the Free Fox project,
## Copyright (c) 2019 Bogachenko Vyacheslav
##
## Free Fox is a free project: you can distribute it and/or modify
## it in accordance with the MIT license published by the Massachusetts Institute of Technology.
##
## The Free Fox project is distributed in the hope that it will be useful,
## and is provided "AS IS", WITHOUT ANY WARRANTY, EXPRESSLY EXPRESSED OR IMPLIED.
## WE ARE NOT RESPONSIBLE FOR ANY DAMAGES DUE TO THE USE OF THIS PROJECT OR ITS PARTS.
## For more information, see the MIT license.
##
## Author: Bogachenko Vyacheslav <https://github.com/bogachenko>
## Email: bogachenkove@gmail.com
## Github: https://github.com/bogachenko/freefox/
## Last modified: January 18, 2019
## License: MIT <https://github.com/bogachenko/freefox/blob/master/LICENSE.md>
## Problem reports: https://github.com/bogachenko/freefox/issues
## Title: verify-userjs.sh
## URL: https://raw.githubusercontent.com/bogachenko/freefox/master/scripts/verify-userjs.sh
## Version: 0.0.3
##
## Download the entire Free Fox project at https://github.com/bogachenko/freefox/archive/master.zip

clear

echo "\033[37;1;41m Fennec \033[0m"
grep -E -n -v '^[ 	]*(//|#[a-z]+|(user_pref\("[a-zA-Z0-9._-]+", (true|false|-?[0-9]+|"([^\"]|\\")*")\);)|$)' fennec/user.js

echo "\033[37;1;41m Firefox \033[0m"
grep -E -n -v '^[ 	]*(//|#[a-z]+|(user_pref\("[a-zA-Z0-9._-]+", (true|false|-?[0-9]+|"([^\"]|\\")*")\);)|$)' firefox/user.js

echo "\033[37;1;41m Palemoon \033[0m"
grep -E -n -v '^[ 	]*(//|#[a-z]+|(user_pref\("[a-zA-Z0-9._-]+", (true|false|-?[0-9]+|"([^\"]|\\")*")\);)|$)' palemoon/user.js

echo "\033[37;1;41m Thunderbird \033[0m"
grep -E -n -v '^[ 	]*(//|#[a-z]+|(user_pref\("[a-zA-Z0-9._-]+", (true|false|-?[0-9]+|"([^\"]|\\")*")\);)|$)' thunderbird/user.js

echo "\033[37;1;41m Waterfox \033[0m"
grep -E -n -v '^[ 	]*(//|#[a-z]+|(user_pref\("[a-zA-Z0-9._-]+", (true|false|-?[0-9]+|"([^\"]|\\")*")\);)|$)' waterfox/user.js
