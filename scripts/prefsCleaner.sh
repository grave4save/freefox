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
## Author: claustromaniac <https://github.com/claustromaniac>, Bogachenko Vyacheslav <https://github.com/bogachenko>
## Email: bogachenkove@gmail.com
## Github: https://github.com/bogachenko/freefox/
## Last modified: January 23, 2019
## License: MIT <https://github.com/bogachenko/freefox/blob/master/LICENSE.md>
## Problem reports: https://github.com/bogachenko/freefox/issues
## Title: prefsCleaner.sh
## URL: https://raw.githubusercontent.com/bogachenko/freefox/master/scripts/prefsCleaner.sh
## Version: 0.0.4
##
## Download the entire Free Fox project at https://github.com/bogachenko/freefox/archive/master.zip

currdir=$(pwd)
sfp=$(readlink -f "${BASH_SOURCE[0]}" 2>/dev/null || greadlink -f "${BASH_SOURCE[0]}" 2>/dev/null)
if [ -z "$sfp" ]; then sfp=${BASH_SOURCE[0]}; fi
cd "$(dirname "${sfp}")"
ProcessQuit() {
	cd "${currdir}"
	echo -e "\n$2"
	exit $1
}
ProcessСheck() {
	while [ -e webappsstore.sqlite-shm ]; do
		echo -e "\nThis profile is used. Close your browser or email program and try again.\n"
		read -p "Press any key to continue."
	done
}
ProcessClean() {
	prefs="@@"
	prefexp="user_pref[ 	]*\([ 	]*[\"']([^\"']+)[\"'][ 	]*,"
	while read -r line; do
		if [[ "$line" =~ $prefexp && $prefs != *"@@${BASH_REMATCH[1]}@@"* ]]; then
			prefs="${prefs}${BASH_REMATCH[1]}@@"
		fi
	done <<< "`grep -E \"$prefexp\" user.js`"

	while IFS='' read -r line || [[ -n "$line" ]]; do
		if [[ "$line" =~ ^$prefexp ]]; then
			if [[ $prefs != *"@@${BASH_REMATCH[1]}@@"* ]]; then
				echo "$line"
			fi
		else
			echo "$line"
		fi
	done < "$1" > prefs.js
}
echo -e "\nThis script should be run from the profile folder of your browser or email client.\n"
echo "This file will remove the entries from prefs.js that already exist in user.js."
echo "This will allow inactive preferences to be reset to their default values."
echo -e "\nYour profile should not be used during this process.\n"
select option in Start Help Exit; do
	case $option in
		Start)
			if [ ! -e user.js ]; then
				ProcessQuit 1 "user.js not found in the current directory."
			elif [ ! -e prefs.js ]; then
				ProcessQuit 1 "prefs.js not found in the current directory."
			fi

			ProcessСheck
			bakfile="prefs.js.backup.$(date +"%Y-%m-%d_%H%M")"
			mv prefs.js "${bakfile}" || ProcessQuit 1 "Operation aborted.\nReason: Could not create backup file $bakfile"
			echo -e "\nprefs.js backed up: $bakfile"
			echo "Cleaning prefs.js..."
			ProcessClean "$bakfile"
			ProcessQuit 0 "All done!"
			;;
		Help)
			echo -e "\nThis script creates a backup of your prefs.js file before doing anything."
			echo -e "This should go safely, but you can follow these steps if something goes wrong:\n"
			echo "1. Make sure the program is closed."
			echo "2. Delete prefs.js in your profile folder."
			echo "3. Delete Invalidprefs.js if you have one in the same folder."
			echo "4. Rename or copy your latest backup to prefs.js."
			echo "5. Run the program and check them out."
			echo "6. If you do notice something wrong, especially with your extensions, and/or with the UI, go to about:support, and restart your program with add-ons disabled. Then restart the program again and see if the problems are resolved."
			echo -e "If you cannot determine the cause of your problems, please raise this problem on GitHub.\n"
			;;
		Exit)
			ProcessQuit 0
			;;
	esac
done
