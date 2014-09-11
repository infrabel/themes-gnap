/**
 * @desc shows breadcrumbs
 * @file breadcrumbs.directive.js
 * @example <div gnap-breadcrumbs />
 */
(function () {
    angular
        .module('gnap')
        .directive('gnapBreadcrumbs', ['breadcrumbsService', '$location', '$state', gnapBreadcrumbs]);

    function gnapBreadcrumbs(breadcrumbsService, $location, $state) {

        return {
            restrict: 'A',
            scope: {},
            templateUrl: 'js/gnap/breadcrumbs.html',
            link: link
        };

        function link(scope, element, attrs) {
            // get the current breadcrumbs and link them to the scope
            scope.breadcrumbs = breadcrumbsService.breadcrumbs;

            scope.select = function(breadcrumb) {
                if (breadcrumb.click) {
                    breadcrumb.click();
                }

                if (breadcrumb.url) {
                    $location.path(breadcrumb.url);
                }

                if (breadcrumb.state) {
                    $state.go(breadcrumb.state);
                }
            }
        };
    }
})();