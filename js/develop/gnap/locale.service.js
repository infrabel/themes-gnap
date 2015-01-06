'use strict';

/**
 * @desc service that handles i18n
 * @file locale.service.js
 */
(function () {
    angular
        .module('gnap')
        .factory('localeService', localeService);

    localeService.$inject = ['$window', '$translate', 'languageNegotiationService', 'tmhDynamicLocale', 'localStorageService'];

    function localeService($window, $translate, languageNegotiationService, tmhDynamicLocale, localStorageService) {

        var locales = [
            { name: 'nl', title: 'Nederlands' },
            { name: 'fr', title: 'Français' },
            { name: 'en', title: 'English', 'default': true }
        ];

        return {
            initialize: initialize,
            getLocales: getLocales,
            setCurrentLocale: setCurrentLocale,
            getCurrentLocale: getCurrentLocale
        };

        function initialize(value) {
            // store locales
            if (value) {
                locales = value;
            }

            // get the current locale
            var currentLocale = getCurrentLocale();

            // set current language for translation
            $translate.use(currentLocale.name);

            // set current locale (ngLocale)
            tmhDynamicLocale.set(currentLocale.name);
        }

        function getLocales() {
            return locales;
        }

        function setCurrentLocale(value) {
            // store locale
            localStorageService.set('locale', value);
            $window.location.reload();
        }

        function getCurrentLocale() {
            // read locale from local storage or detect it
            var locale = localStorageService.get('locale') || languageNegotiationService.getPreferredLanguage(locales.map(function (l) { return l.name; }));

            if (locale) {
                return findLocale(function (l) { return l.name === locale; });
            }

            // return default
            return getDefaultLocale();
        }

        function getDefaultLocale() {
            return findLocale(function (locale) { return locale['default']; });
        }

        function findLocale(predicate) {
            for (var localeIndex = 0; localeIndex < locales.length; localeIndex++) {
                var locale = locales[localeIndex];
                if (predicate(locale)) {
                    return locale;
                }
            }
            return null;
        }
    }
})();
