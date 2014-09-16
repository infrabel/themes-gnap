/**
 * @desc locale selector
 * @file locale-selector.directive.js
 */
(function () {
    angular.module('gnap')
        .directive('gnapLocaleSelector', gnapLocaleSelector);

    gnapLocaleSelector.$inject = ['localeService'];

    function gnapLocaleSelector(localeService) {
        return {
            restrict: 'A',
            scope: { },
            templateUrl: 'js/gnap//locale-selector.html', 
            link: link
        };

        function link(scope) {
            scope.currentLocale = localeService.getCurrentLocale();
            scope.locales = localeService.getLocales();

            scope.setLocale = function(locale) {
                localeService.setCurrentLocale(locale);
            };
        }
    };
})();