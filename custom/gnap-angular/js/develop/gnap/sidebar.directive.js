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
        function link(scope, element, attrs) {
            scope.settings = sidebarService.settings;
            
            // handles sidebar item selection
            scope.select = function (item) {
                if (item.items) {
                    item.open = !item.open;
                }
                if (item.click) {
                    item.click();
                }
            };

            // handles collapsed state of the sidebar
            scope.toggleCollapsed = function() {
                sidebarService.toggleCollapsed();
            };
        };

        return {
            restrict: 'A',
            replace: true,
            templateUrl: 'js/gnap/sidebar.html',
            link: link
        };
    };

    // custom animation for ng-hide (slide-up/slide-down)
    angular.module('gnap').animation('.submenu', function() {
        return {
            beforeAddClass: function(element, className, done) {
                if (className === 'ng-hide') {
                    element.slideUp(done);
                    return function(cancel) {
                        if (cancel) {
                            return element.stop();
                        }
                    };
                } else {
                    return done();
                }
            },
            removeClass: function(element, className, done) {
                if (className === 'ng-hide') {
                    element.hide();
                    element.slideDown(done);
                    return function(cancel) {
                        if (cancel) {
                            return element.stop();
                        }
                    };
                } else {
                    return done();
                }
            }
        }
    });


})();