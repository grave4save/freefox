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
## Author: claustromaniac <https://github.com/claustromaniac>, Bogachenko Vyacheslav <https://github.com/bogachenko>
## Email: bogachenkove@gmail.com
## Github: https://github.com/bogachenko/libertyfox/
## Last modified: January 12, 2019
## License: MIT <https://github.com/bogachenko/libertyfox/blob/master/LICENSE.md>
## Problem reports: https://github.com/bogachenko/libertyfox/issues
## Title: Compare-PrefJSnUserJS.ps1
## URL: https://raw.githubusercontent.com/bogachenko/libertyfox/master/scripts/Compare-PrefJSnUserJS.ps1
## Version: 0.0.2
##
## Download the entire Liberty fox project at https://github.com/bogachenko/libertyfox/archive/master.zip

[CmdletBinding()]
PARAM (
	[Parameter(Mandatory=$true,HelpMessage='Insert the path to the first file to be compared.')]
	[ValidateNotNullOrEmpty()]
	[string]$filepath_A,
	[Parameter(Mandatory=$true,HelpMessage='Insert the path to the second file to be compared.')]
	[ValidateNotNullOrEmpty()]
	[string]$filepath_B,
	[ValidateNotNullOrEmpty()]
	[string]$outputFile = 'Compare-PrefJSnUserJS.log',
	[switch]$append = $false,
	[switch]$noCommentsA = $false,
	[switch]$noCommentsB = $false,
	[uint32]$hideMask = 0,
	[switch]$inJS = $false
)
$myPath = Split-Path -parent $MyInvocation.MyCommand.Definition
Set-Location -path $myPath
if ($Env:OS) {$nl = "`r`n"} else {$nl = "`n"}
$prefsA = @{}; $prefsB = @{}
$fileNameA = (Split-Path -path $filepath_A -leaf)
$fileNameB = (Split-Path -path $filepath_B -leaf)
if ($fileNameA -ceq $fileNameB) { $fileNameA, $fileNameB = $filepath_A, $filepath_B }
[regex] $rx_p = 'ref(?<=\b(?:user_p|p|sticky_p|lockP|defaultP)ref)'
[regex] $rx_c = '(?!(?:(?:[^"\n]|(?<=[^\\]\\(?:\\\\)*)")*"|(?:[^''\n]|(?<=[^\\]\\(?:\\\\)*)'')*'')\s*\)\s*;)'
[regex] $rx_s = '(?:"(?:[^"\n]|(?<=[^\\]\\(?:\\\\)*)")*")|(?:''(?:[^''\n]|(?<=[^\\]\\(?:\\\\)*)'')*'')'
if ($inJS) {
	if ($outputFile -ceq 'Compare-PrefJSnUserJS.log') {$outputFile = 'Compare-PrefJSnUserJS.js'}
	$inactive_flag = '//'
} else { $inactive_flag = '[i]' }
$mlc_mark = $false
function JSCom {
	param($multi = $false)
	if ($script:inJS) {
		if ($multi) {
			if ($script:mlc_mark) {'*/'} else {'/*'}
			$script:mlc_mark = !$script:mlc_mark
		} else {'//'}
	}
}
function Get-UserJSPrefs {
	param($prefs_ht, $fileStr, [string]$inactive_flag = $script:inactive_flag)
	$fileStr = $fileStr -creplace "(?s).*?$rx_p\s*\(\s*($rx_s)\s*,\s*([^\n]+?)\s*\)\s*;\s*|.*", "`$1`n`$2`n"

	$pn = $false
	forEach ($line in $fileStr.Split("`n")) {
		if ($pn) {
			[hashtable[]] $prefs_ht.$pn += @{
				inactive=$inactive_flag
				broken=!($line -cmatch "(?:true|false|-?[0-9]+)|$rx_s")
				value=$line
			}
			$pn = $false
		} else {
			$pn = $line -creplace '^["''](.*)["'']$', '$1'
		}
	}
}
function Read-InactivePrefs {
	param([hashtable]$prefs_ht, [string]$fileStr, [bool]$noComments = $false)

	if ($noComments) {
		Write-Host 'Comments in this file will not be parsed as such.'
		return
	}
	$fileStr = $fileStr -creplace "(?s)(?>(?:[^/]|/(?![/*]$rx_c))*)(?:/(/[^\n]*\n|\*(?:[^*]|\*(?!/$rx_c))*(?:\*/)?))?", '$1'

	Get-UserJSPrefs $prefs_ht $fileStr
}
function Read-ActivePrefs {
	param([hashtable]$prefs_ht, [string]$fileStr, [bool]$noComments = $false)

	if (!$noComments) {
		$fileStr = $fileStr -creplace "(?s)/\*$rx_c(?:[^*]|\*(?!/$rx_c))*(?:\*/)?", ''
		$fileStr = $fileStr -creplace "//$rx_c.*", ''
	}

	Get-UserJSPrefs $prefs_ht $fileStr ''
}
function Write-Report {
	param()
	$matching_prefs = New-Object System.Collections.Generic.Hashset[string]
	$differences = New-Object System.Collections.Generic.Hashset[string]
	$missing_in_A = New-Object System.Collections.Generic.Hashset[string]
	$missing_in_B = New-Object System.Collections.Generic.Hashset[string]
	$inactive_in_A = New-Object System.Collections.Generic.Hashset[string]
	$inactive_in_B = New-Object System.Collections.Generic.Hashset[string]
	$fully_mismatching = New-Object System.Collections.Generic.Hashset[string]
	$bad_syntax_A = New-Object System.Collections.ArrayList
	$bad_syntax_B = New-Object System.Collections.ArrayList
	$dups_in_A = New-Object System.Collections.ArrayList
	$dups_in_B = New-Object System.Collections.ArrayList
	$dups_A_count = $dups_B_count = 0
	$unique_prefs = $prefsA.keys + $prefsB.keys | Sort-Object | Get-Unique
	forEach ($prefname in $unique_prefs) {if ($pn_pad -lt $prefname.length) { $pn_pad = $prefname.length }}
	if ($script:fileNameA.length -ge $script:fileNameB.length) { $fn_pad = $script:fileNameA.length }
	else {$fn_pad = $script:fileNameB.length}
	$summary_format = '{0, 5} {1, -1}'
	if ($script:inJS) {
		$list_format = '{0, -3} pref("{1, -1}", {2, -1});'
		$dlist_format = "/* {0, $(-$fn_pad)} */ {1, -3} pref(""{2, -1}"", {3, -1});$nl"
	} else {
		$list_format = "{0, -3} {1, $(-$pn_pad)}  {2, 1}"
		$dlist_format = "{0, -7} {1, $(-($fn_pad+3))}  {2, 1}$nl"
	}
	"$(JSCom 1)Compare PrefJS'n'UserJS"
	Get-Date
	"$nl`Summary:"
	$summary_format -f $prefsA.count, "unique prefs in $fileNameA"
	$summary_format -f $prefsB.count, "unique prefs in $fileNameB$nl"
	forEach ($prefname in $unique_prefs) {
		if ($prefsA.$prefname) { $entriesA = $prefsA.$prefname } else { $entriesA = @() }
		if ($prefsB.$prefname) { $entriesB = $prefsB.$prefname } else { $entriesB = @() }
		$format_arA = @( $entriesA[-1].inactive, $prefname, [string]$entriesA[-1].value )
		$format_arB = @( $entriesB[-1].inactive, $prefname, [string]$entriesB[-1].value )
		if ($entriesA -and $entriesB) {
			if ($entriesA[-1].inactive -ne $entriesB[-1].inactive) {
				if ($entriesA[-1].value -ceq $entriesB[-1].value) {
					if ($entriesA[-1].inactive) {
						[void] $inactive_in_A.Add($list_format -f $format_arB)
					} else {
						[void] $inactive_in_B.Add($list_format -f $format_arA)
					}
				} else {
					if ($script:inJS) {
						[void] $fully_mismatching.Add(
							($dlist_format -f $fileNameA, $entriesA[-1].inactive, $prefname, $entriesA[-1].value) +
							($dlist_format -f $fileNameB, $entriesB[-1].inactive, $prefname, $entriesB[-1].value)
						)
					} else {
						[void] $fully_mismatching.Add(
							"    $prefname$nl" +
							($dlist_format -f $entriesA[-1].inactive, $fileNameA, $entriesA[-1].value) +
							($dlist_format -f $entriesB[-1].inactive, $fileNameB, $entriesB[-1].value)
						)
					}
				}
			} elseif ($entriesA[-1].value -ceq $entriesB[-1].value) {
				[void] $matching_prefs.Add($list_format -f $format_arA)
			} else {
				if ($script:inJS) {
					[void] $differences.Add((
						($dlist_format -f $fileNameA, $entriesA[-1].inactive, $prefname, $entriesA[-1].value) +
						($dlist_format -f $fileNameB, $entriesB[-1].inactive, $prefname, $entriesB[-1].value)
					))
				} else {
					[void] $differences.Add((
						("{0, -3} {1, -1}$nl" -f $entriesA[-1].inactive, $prefname) +
						($dlist_format -f '', $fileNameA, $entriesA[-1].value) +
						($dlist_format -f '', $fileNameB, $entriesB[-1].value)
					))
				}
			}
		} elseif ($entriesA) {
			[void] $missing_in_B.Add($list_format -f $format_arA)
		} else {
			[void] $missing_in_A.Add($list_format -f $format_arB)
		}
		if ($entriesA[-1].broken) {
			[void] $bad_syntax_A.Add($list_format -f $format_arA)
		}
		if ($entriesB[-1].broken) {
			[void] $bad_syntax_B.Add($list_format -f $format_arB)
		}
		if ($entriesA.count -gt 1) {
			if ($dups_A_count++) { [void] $dups_in_A.Add('') }
			forEach ($entry in $entriesA) {
				[void] $dups_in_A.Add(($list_format -f $entry.inactive, $prefname, [string]$entry.value))
			}
		}
		if ($entriesB.count -gt 1) {
			if ($dups_B_count++) { [void] $dups_in_B.Add('') }
			forEach ($entry in $entriesB) {
				[void] $dups_in_B.Add(($list_format -f $entry.inactive, $prefname, [string]$entry.value))
			}
		}
	}
	if ($matching_prefs.count) {
		$summary_format -f $matching_prefs.count, 'matching prefs, both value and state (active/inactive)'
	}
	if ($differences.count) {
		$summary_format -f $differences.count, 'prefs with different values but matching state'
	}
	if ($missing_in_A.count) {
		$summary_format -f $missing_in_A.count, "prefs not declared in $fileNameA"
	}
	if ($missing_in_B.count) {
		$summary_format -f $missing_in_B.count, "prefs not declared in $fileNameB"
	}
	if ($inactive_in_A.count) {
		$summary_format -f $inactive_in_A.count, "prefs with matching values but inactive in $fileNameA"
	}
	if ($inactive_in_B.count) {
		$summary_format -f $inactive_in_B.count, "prefs with matching values but inactive in $fileNameB"
	}
	if ($fully_mismatching.count) {
		$summary_format -f $fully_mismatching.count, 'prefs with both mismatching values and states'
	}
	$summary_format -f $unique_prefs.count, 'combined unique prefs'

	if ($bad_syntax_A.count -or $bad_syntax_B.count) {"$nl  Warning:$nl" }
	if ($bad_syntax_A.count) {
		$summary_format -f $bad_syntax_A.count, "prefs in $fileNameA seem to have broken values"
	}
	if ($bad_syntax_B.count) {
		$summary_format -f $bad_syntax_B.count, "prefs in $fileNameB seem to have broken values"
	}
	if ($dups_A_count -or $dups_B_count) {
		''
		if ($dups_A_count) {
			$summary_format -f $dups_A_count, "duplicated prefs in $fileNameA"
		}
		if ($dups_B_count) {
			$summary_format -f $dups_B_count, "duplicated prefs in $fileNameB"
		}
	}
	if (!$script:inJS) { "$nl Reference:  [i] inactive pref (commented-out)$nl" }
	JSCom 1
	if ($matching_prefs.count -and !($script:hideMask -band 1)) {
		"$sep The following $([string]$matching_prefs.count) prefs match in both values and states:$nl$nl$($matching_prefs -join $nl)$nl"
	}
	if ($differences.count -and !($script:hideMask -band 2)) {
		"$sep The following $([string]$differences.count) prefs have different values, but matching states:$nl$nl$($differences -join $nl)$nl"
	}
	if ($missing_in_A.count -and !($script:hideMask -band 4)) {
		"$sep The following $([string]$missing_in_A.count) prefs are not declared in $fileNameA`:$nl$nl$($missing_in_A -join $nl)$nl"
	}
	if ($missing_in_B.count -and !($script:hideMask -band 8)) {
		"$sep The following $([string]$missing_in_B.count) prefs are not declared in $fileNameB`:$nl$nl$($missing_in_B -join $nl)$nl"
	}
	if ($inactive_in_A.count -and !($script:hideMask -band 16)) {
		"$sep The following $([string]$inactive_in_A.count) prefs match but are inactive in $fileNameA`:$nl$nl$($inactive_in_A -join $nl)$nl"
	}
	if ($inactive_in_B.count -and !($script:hideMask -band 32)) {
		"$sep The following $([string]$inactive_in_B.count) prefs match but are inactive in $fileNameB`:$nl$nl$($inactive_in_B -join $nl)$nl"
	}
	if ($fully_mismatching.count -and !($script:hideMask -band 64)) {
		"$sep The following $([string]$fully_mismatching.count) prefs have both mismatching values and states:$nl$nl$($fully_mismatching -join $nl)$nl"
	}
	if ($bad_syntax_A.count -and !($script:hideMask -band 128)) {
		"$sep $([string]$bad_syntax_A.count) possible syntax errors detected in $fileNameA`:$nl$nl$($bad_syntax_A -join $nl)$nl"
	}
	if ($bad_syntax_B.count -and !($script:hideMask -band 128)) {
		"$sep $([string]$bad_syntax_B.count) possible syntax errors detected in $fileNameB`:$nl$nl$($bad_syntax_B -join $nl)$nl"
	}
	if ($dups_A_count -and !($script:hideMask -band 256)) {
		"$sep The following $dups_A_count prefs have duplicate entries in $fileNameA`:$nl$nl$($dups_in_A -join $nl)$nl"
	}
	if ($dups_B_count -and !($script:hideMask -band 256)) {
		"$sep The following $dups_B_count prefs have duplicate entries in $fileNameB`:$nl$nl$($dups_in_B -join $nl)$nl"
	}
}
Write-Host "Loading $fileNameA ..."
$fileA = ([System.IO.File]::ReadAllText($filepath_A)) -creplace '\r', ''
Write-Host "Loading $fileNameB ..."
$fileB = ([System.IO.File]::ReadAllText($filepath_B)) -creplace '\r', ''
Write-Host "Parsing $fileNameA ..."
Read-InactivePrefs $prefsA $fileA $noCommentsA
Read-ActivePrefs $prefsA $fileA $noCommentsA
Write-Host "Parsing $fileNameB ..."
Read-InactivePrefs $prefsB $fileB $noCommentsB
Read-ActivePrefs $prefsB $fileB $noCommentsB
Write-Host "Generating and writing report to $outputFile ...`nDon't close the console/terminal!"
$outstream = New-Object System.IO.StreamWriter $outputFile, $append
try { forEach ( $line in Write-Report ) { $outstream.WriteLine($line) } }
finally { $outstream.Close() }
$prompt = Read-Host 'All done. Would you like to open the log file with the default editor? (y/n)'
if ($prompt -eq 'y') {Invoke-Item -path $outputFile}