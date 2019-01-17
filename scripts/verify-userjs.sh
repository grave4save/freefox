#!/bin/sh

clear

echo "\033[37;1;41m User.js \033[0m"
grep -E -n -v '^[ 	]*(//|#[a-z]+|(user_pref\("[a-zA-Z0-9._-]+", (true|false|-?[0-9]+|"([^\"]|\\")*")\);)|$)' user.js

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
