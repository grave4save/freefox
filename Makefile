SHELL=/bin/bash

.PHONY: all
all: tests

# To decrease tests verbosity, comment out unneeded targets
.PHONY: tests
tests: sourceprefs.js checkdeprecated stats acorn

.PHONY: acorn
acorn:
	acorn --silent user.js

locked_user.js: user.js
	sed 's/^user_pref/lockPref/' $< >| $@

policies.json:
	jq -n -M "{\"policies\": {\"OfferToSaveLogins\": false, \"DisableBuiltinPDFViewer\": true, \"DisablePocket\": true, \"DisableFormHistory\": true, \"SanitizeOnShutdown\": true, \"SearchBar\": \"separate\", \"DisableTelemetry\": true, \"Cookies\": {\"AcceptThirdParty\": \"never\", \"ExpireAtSessionEnd\": true}, \"EnableTrackingProtection\": {\"Value\": true}, \"PopupBlocking\": {\"Default\": true}, \"FlashPlugin\": {\"Default\": false}, \"DisableFirefoxStudies\": true}}" >| $@

# download and sort all known preferences files from Firefox (mozilla-central) source
# specify wanted Firefox version/revision below (eg. "tip", "FIREFOX_AURORA_45_BASE", "9577ddeaafd85554c2a855f385a87472a089d5c0"). See https://hg.mozilla.org/mozilla-central/tags
FIREFOX_SOURCE_PREFS= \
	https://hg.mozilla.org/mozilla-central/raw-file/tip/devtools/client/preferences/debugger.js \
	https://hg.mozilla.org/mozilla-central/raw-file/tip/devtools/client/preferences/devtools-client.js \
	https://hg.mozilla.org/mozilla-central/raw-file/tip/browser/branding/unofficial/pref/firefox-branding.js \
	https://hg.mozilla.org/mozilla-central/raw-file/tip/browser/branding/official/pref/firefox-branding.js \
	https://hg.mozilla.org/mozilla-central/raw-file/tip/browser/branding/nightly/pref/firefox-branding.js \
	https://hg.mozilla.org/mozilla-central/raw-file/tip/browser/branding/aurora/pref/firefox-branding.js \
	https://hg.mozilla.org/mozilla-central/raw-file/tip/browser/locales/en-US/firefox-l10n.js \
	https://hg.mozilla.org/mozilla-central/raw-file/tip/devtools/client/webide/preferences/webide.js \
	https://hg.mozilla.org/mozilla-central/raw-file/tip/browser/app/profile/channel-prefs.js
sourceprefs.js:
	@for SOURCEFILE in $(FIREFOX_SOURCE_PREFS); do wget -nv "$$SOURCEFILE" -O - ; done | egrep "(^pref|^user_pref)" | sort --unique >| $@

.PHONY: checkdeprecated
checkdeprecated: sourceprefs.js
	@# check for preferences in hardened user.js that are no longer present in firefox source
	@HARDENED_PREFS=$$(egrep "^user_pref" user.js | cut -d'"' -f2); \
	for HARDENED_PREF in $$HARDENED_PREFS; do \
	grep "\"$$HARDENED_PREF\"" $< >/dev/null || echo "Deprecated : $$HARDENED_PREF"; \
	done | sort --unique
