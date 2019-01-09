@ECHO OFF & SETLOCAL DisableDelayedExpansion
TITLE prefsCleaner.bat

:: This file is part of the Liberty fox project,
:: Copyright (c) 2019 Bogachenko Vyacheslav
::
:: Liberty fox is a free project: you can distribute it and/or modify
:: it in accordance with the MIT license published by the Massachusetts Institute of Technology.
::
:: The Liberty fox project is distributed in the hope that it will be useful,
:: and is provided "AS IS", WITHOUT ANY WARRANTY, EXPRESSLY EXPRESSED OR IMPLIED.
:: WE ARE NOT RESPONSIBLE FOR ANY DAMAGES DUE TO THE USE OF THIS PROJECT OR ITS PARTS.
:: For more information, see the MIT license.
::
:: Author: claustromaniac <https://github.com/claustromaniac>; Bogachenko Vyacheslav <https://github.com/bogachenko>
:: Email: bogachenkove@gmail.com
:: Github: https://github.com/bogachenko/libertyfox/
:: Last modified: January 9, 2019
:: License: MIT <https://github.com/bogachenko/libertyfox/blob/master/LICENSE.md>
:: Problem reports: https://github.com/bogachenko/libertyfox/issues
:: Title: prefsCleaner.bat
:: URL: https://raw.githubusercontent.com/bogachenko/libertyfox/master/scripts/prefsCleaner.bat
:: Version: 0.0.2
::
:: Download the entire Liberty fox project at https://github.com/bogachenko/libertyfox/archive/master.zip

CD /D "%~dp0"
:begin
CALL :message "This script should be run from the profile folder of your browser or email client."
ECHO   This file will remove the entries from prefs.js that already exist in user.js.
CALL :message "This will allow inactive preferences to be reset to their default values."
ECHO   Your profile should not be used during this process.
CALL :message ""
TIMEOUT 1 /nobreak >nul
CHOICE /C SHE /N /M "Start [S] Help [H] Exit [E]"
CLS
IF ERRORLEVEL 3 (EXIT /B)
IF ERRORLEVEL 2 (GOTO :showhelp)
IF NOT EXIST "user.js" (CALL :abort "user.js not found in the current directory." 30)
IF NOT EXIST "prefs.js" (CALL :abort "prefs.js not found in the current directory." 30)
CALL :ProcessСheck
CALL :message "Backing up prefs.js..."
SET "_time=%time: =0%"
COPY /B /V /Y prefs.js "prefs-backup-%date:/=-%_%_time::=.%.js"
CALL :message "Cleaning prefs.js..."
CALL :cleanup
CALL :message "All done!"
TIMEOUT 5 >nul
ENDLOCAL
EXIT /B
:abort
CALL :message %1
TIMEOUT %~2 >nul
EXIT
:message
ECHO:
ECHO:  %~1
ECHO:
GOTO :EOF
:ProcessСheck
TASKLIST /FI "IMAGENAME eq firefox.exe" 2>NUL | FIND /I /N "firefox.exe">NUL
TASKLIST /FI "IMAGENAME eq palemoon.exe" 2>NUL | FIND /I /N "palemoon.exe">NUL
TASKLIST /FI "IMAGENAME eq waterfox.exe" 2>NUL | FIND /I /N "waterfox.exe">NUL
TASKLIST /FI "IMAGENAME eq thunderbird.exe" 2>NUL | FIND /I /N "thunderbird.exe">NUL
IF NOT ERRORLEVEL 1 (
	CLS
	CALL :message "This profile is used. Close your browser or email program and try again."
	ECHO:
	PAUSE
	CLS
	CALL :message "Resuming..."
	TIMEOUT 5 /nobreak >nul
)
GOTO :EOF
:cleanup
FOR /F tokens^=2^ delims^=^'^" %%G IN ('FINDSTR /R /C:"^[^\"']*user_pref[ 	]*\([ 	]*[\"'][^\"']*[\"'][ 	]*," user.js') DO (
	IF NOT ""=="%%G" (SET "[%%G]=1")
)
(
	FOR /F "tokens=1,* delims=:" %%G IN ('FINDSTR /N "^" prefs.js') DO (
		IF ""=="%%H" (
			ECHO:
		) ELSE (
			FOR /F tokens^=1^,2^ delims^=^"^' %%I IN ("%%H") DO (
				IF NOT DEFINED [%%J] (ECHO:%%H)
			)
		)
	)
)>tempcleanedprefs
MOVE /Y tempcleanedprefs prefs.js
GOTO :EOF
:showhelp
MODE 80,34
CLS
CALL :message "This script creates a backup of your prefs.js file before doing anything."
ECHO   This should go safely, but you can follow these steps if something goes wrong:
ECHO:
CALL :message "  1. Make sure the program is closed."
ECHO     2. Delete prefs.js in your profile folder.
CALL :message "  3. Delete Invalidprefs.js if you have one in the same folder."
ECHO     4. Rename or copy your latest backup to prefs.js.
CALL :message "  5. Run the program and check them out."
ECHO     6. If you do notice something wrong, especially with your extensions,
CALL :message "     and/or with the UI, go to about:support, and restart your program with"
ECHO        add-ons disabled. Then restart the program again and see if the
CALL :message "     the problems are resolved."
ECHO:
CALL :message "If you cannot determine the cause of your problems, please raise this problem"
ECHO    on GitHub.
ECHO:
ECHO:
PAUSE
CLS
GOTO :begin