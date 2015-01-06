'use strict';

/**
 * @desc locale selector
 * @file locale-selector.directive.js
 */
(function () {
    angular
        .module('gnap')
        .directive('gnapLocaleSelector', gnapLocaleSelector);

    angular
        .module('template/gnap/locale-selector/locale-selector.html', [])
        .run(gnapLocaleSelectorTemplate);

    gnapLocaleSelector.$inject = ['localeService'];
    gnapLocaleSelectorTemplate.$inject = ['$templateCache'];

    function gnapLocaleSelector(localeService) {
        return {
            restrict: 'A',
            scope: {},
            templateUrl: 'template/gnap/locale-selector/locale-selector.html',
            link: link
        };

        function link(scope) {
            scope.currentLocale = localeService.getCurrentLocale();
            scope.locales = localeService.getLocales();

            scope.setLocale = function (locale) {
                localeService.setCurrentLocale(locale);
            };
        }
    }

    function gnapLocaleSelectorTemplate($templateCache) {

        /* jshint ignore:start */
        $templateCache.put("template/gnap/locale-selector/locale-selector.html",
            "<a data-toggle=\"dropdown\" class=\"dropdown-toggle\">\n" +
            "    <span>\n" +
            "        {{currentLocale.title}}\n" +
            "    <\/span>\n" +
            "    <i class=\"icon-caret-down\"><\/i>\n" +
            "<\/a>\n" +
            "\n" +
            "<ul class=\"user-menu pull-right dropdown-menu dropdown-default dropdown-caret dropdown-close\">\n" +
            "    <li ng-repeat=\"locale in locales\">\n" +
            "        <a ng-click=\"setLocale(locale.name)\">\n" +
            "            {{locale.title}}\n" +
            "        <\/a>\n" +
            "    <\/li>\n" +
            "<\/ul>\n" +
            "");
        /* jshint ignore:end */
    }
})();
