'use strict';

/**
 * @desc service that keeps track of the current title
 * @file title.service.js
 */
(function () {
    angular
        .module('gnap')
        .provider('titleService', titleServiceProvider);

    titleServiceProvider.$inject = [];

    function titleServiceProvider() {
        var defaultTitle = { text: '' };
        var separator = '-';
        var prefix = { text: '' };
        var suffix = { text: '' };
        
        createTitleService.$inject = ['$translate'];

        return {
            setDefaultTitle: setDefaultTitle,
            setSeparator: setSeparator,
            setPrefix: setPrefix,
            setSuffix: setSuffix,
            $get: createTitleService
        };

        function setDefaultTitle(value) {
            defaultTitle = value;
        }

        function setSeparator(value) {
            separator = value;
        }

        function setPrefix(value) {
            prefix = value;
        }

        function setSuffix(value) {
            suffix = value;
        }

        function createTitleService($translate) {
            /* jshint newcap:false */
            return new titleService($translate, defaultTitle, separator, prefix, suffix);
        }
    }

    function titleService($translate, defaultTitle, separator, prefix, suffix) {
        var title = {
            parts: []
        };

        resolveTranslation(prefix);
        resolveTranslation(suffix);
        clearTitle();

        return {
            title: title,
            separator: separator,
            prefix: prefix,
            suffix: suffix,

            setTitle: setTitle,
            clearTitle: clearTitle,
            appendTitle: appendTitle,
            removeLastTitle: removeLastTitle
        };

        function setTitle(value) {
            resolveTranslation(value);

            title.parts = value ? [value] : [];
        }

        function appendTitle(value) {
            resolveTranslation(value);

            title.parts.push(value);
        }

        function removeLastTitle() {
            title.parts.pop();
        }

        function clearTitle() {
            setTitle(defaultTitle);
        }

        function resolveTranslation(value) {
            // resolve _text: if a textTranslationId is given then the translation will be loaded async,
            // otherwise the value of text is copied into _text
            if (value.textTranslationId) {
                $translate(value.textTranslationId).then(function (translation) {
                    value._text = translation;
                });
            } else {
                value._text = value.text;
            }

            return value;
        }
    }
})();
