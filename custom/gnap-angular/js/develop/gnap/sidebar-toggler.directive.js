/**
 * @desc displays a sidebar toggle button
 * @file sidebar-toggler.directive.js
 * @example <div gnap-sidebar-toggler></div>
 */
(function () {
    angular
        .module('gnap')
        .directive('gnapSidebarToggler', gnapSidebarToggler);

    gnapSidebarToggler.$inject = ['sidebarService'];

    function gnapSidebarToggler(sidebarService) {
        function link(scope, element, attrs) {
            scope.settings = sidebarService.settings;

            // handles the toggling of the menu visibility (responsive)
            scope.toggleMenu = function () {
                sidebarService.toggleMenu();
            };
        };

        return {
            restrict: 'A',
            templateUrl: 'js/gnap/sidebar-toggler.html',
            link: link
        };
    }
})();