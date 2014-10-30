'use strict';

/**
 * @desc displays a sidebar toggle button
 * @file sidebar-toggler.directive.js
 * @example <div gnap-sidebar-toggler></div>
 */
(function () {
    angular
        .module('gnap')
        .directive('gnapSidebarToggler', gnapSidebarToggler);

    angular
        .module('template/gnap/sidebar/sidebar-toggler.html', [])
        .run(gnapSidebarTogglerTemplate);

    gnapSidebarToggler.$inject = ['sidebarService'];
    gnapSidebarTogglerTemplate.$inject = ['$templateCache'];

    function gnapSidebarToggler(sidebarService) {

        return {
            restrict: 'A',
            templateUrl: 'template/gnap/sidebar/sidebar-toggler.html',
            link: link
        };

        function link(scope, element, attrs) {
            scope.settings = sidebarService.settings;

            // handles the toggling of the menu visibility (responsive)
            scope.toggleMenu = function () {
                sidebarService.toggleMenu();
            };
        }
    }

    function gnapSidebarTogglerTemplate($templateCache) {

        /* jshint ignore:start */
        $templateCache.put("template/gnap/sidebar/sidebar-toggler.html",
            "<a class=\"menu-toggler\" ng-class=\"{display: settings.visible}\" ng-click=\"toggleMenu()\">\n" +
            "    <span class=\"menu-text\"><\/span>\n" +
            "<\/a>\n" +
            "");
        /* jshint ignore:end */
    }
})();
