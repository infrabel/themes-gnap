'use strict';

/**
 * @desc detects which language should be chosen
 * @file language-negotiation.service.js
 */
(function () {
    angular
        .module('gnap')
        .factory('languageNegotiationService', languageNegotiationService);

    languageNegotiationService.$inject = [];

    function languageNegotiationService() {
        return {
            getPreferredLanguage: getPreferredLanguage
        };

        function getPreferredLanguage(knownLanguages) {
            var detectedLanguage = detectLanguage();

            // find language
            var language = findLanguage(knownLanguages, detectedLanguage);
            if (language) {
                return language;
            }

            // if a language was not found and the detected one is a specific then search again on the parent language
            if (isRegional(detectedLanguage)) {
                language = findLanguage(knownLanguages, getParentLanguage(detectedLanguage));
                if (language) {
                    return language;
                }
            }

            // a preferred language could not be detected
            return null;
        }

        function detectLanguage() {
            var nav = window.navigator;
            return ((
                nav.language ||
                    nav.browserLanguage ||
                    nav.systemLanguage ||
                    nav.userLanguage
            ) || '');
        }

        function isRegional(language) {
            return language.indexOf('-') > 0;
        }

        function findLanguage(knownLanguages, language) {
            //for (var knownLanguageIndex in knownLanguages) {
            for (var knownLanguageIndex = 0; knownLanguageIndex < knownLanguages.length; knownLanguageIndex++) {
                var knownLanguage = knownLanguages[knownLanguageIndex];

                if (knownLanguage === language) {
                    return knownLanguage;
                }
            }
            return null;
        }

        function getParentLanguage(language) {
            if (!isRegional(language)) {
                throw language + ' is not a regional language';
            }

            return language.substring(0, language.indexOf('-'));
        }
    }
})();
