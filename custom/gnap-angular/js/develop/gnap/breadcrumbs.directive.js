/**
 * @desc shows breadcrumbs
 * @file breadcrumbs.directive.js
 * @example <div gnap-breadcrumbs />
 */
(function () {
    angular
        .module('gnap')
        .directive('gnapBreadcrumbs', ['breadcrumbsService', gnapBreadcrumbs]);

    function gnapBreadcrumbs(breadcrumbsService) {

        return {
            restrict: 'A',
            templateUrl: 'js/gnap/breadcrumbs.html',
            link: link
        };

        function link(scope, element, attrs) {
            // get the current breadcrumbs and link them to the scope
            scope.breadcrumbs = breadcrumbsService.getBreadcrumbs();
        };
    }
})();