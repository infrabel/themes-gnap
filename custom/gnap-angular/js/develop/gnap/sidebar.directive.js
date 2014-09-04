/**
 * @desc displays a sidebar
 * @file sidebar.directive.js
 * @example <div gnap-sidebar></div>
 */
(function () {
    angular
        .module('gnap')
        .directive('gnapSidebar', ['sidebarService', gnapSidebar]);

    function gnapSidebar(sidebarService) {
        return {
            restrict: 'A',
            templateUrl: 'js/gnap/sidebar.html',
            link: function (scope, element, attrs) {
                scope.shortcuts = sidebarService.getShortcuts();
                scope.items = sidebarService.getItems();
                //ace.handle_side_menu(jQuery);
            },
            controller: function ($scope) {
                $scope.select = function (item) {
                    if (item.items) {
                        item.open = !item.open;
                    }

                    if (item.click) {
                        item.click();
                    }
                }
            }
        };
    }
})();