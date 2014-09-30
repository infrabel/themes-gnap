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
        var defaultTitle = '';
        var separator = '-';
        var prefix = '';
        var suffix = '';
        

        return {
            setDefaultTitle: setDefaultTitle,
            setSeparator: setSeparator,
            setPrefix: setPrefix,
            setSuffix: setSuffix,
            $get: createTitleService
        };

        function setDefaultTitle(value) {
            defaultTitle = value;
        };

        function setSeparator(value) {
            separator = value;
        };

        function setPrefix(value) {
            prefix = value;
        };

        function setSuffix(value) {
            suffix = value;
        };

        function createTitleService() {
            return new titleService(defaultTitle, separator, prefix, suffix);
        };
    };

    function titleService(defaultTitle, separator, prefix, suffix) {
        var title = {
            parts: defaultTitle ? [defaultTitle] : []
        };      

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
            // TODO: Support translated values
            title.parts = value ? [value] : [];
        };

        function appendTitle(value) {
            title.parts.push(value);
        };

        function removeLastTitle() {
            title.parts.pop();
        };

        function clearTitle() {
            setTitle(defaultTitle);
        };
    };
})();