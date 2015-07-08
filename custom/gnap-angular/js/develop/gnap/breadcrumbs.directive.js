'use strict';

/**
 * @desc shows breadcrumbs
 * @file breadcrumbs.directive.js
 * @example <div gnap-breadcrumbs />
 */
(function () {
    angular
        .module('gnap')
        .directive('gnapBreadcrumbs', gnapBreadcrumbs);

    angular
        .module('template/gnap/breadcrumbs/breadcrumbs.html', [])
        .run(gnapBreadcrumbsTemplate);

    gnapBreadcrumbs.$inject = ['$window', '$location', '$state', 'breadcrumbsService'];
    gnapBreadcrumbsTemplate.$inject = ['$templateCache'];

    function gnapBreadcrumbs($window, $location, $state, breadcrumbsService) {

        return {
            restrict: 'A',
            scope: {
                showBackButton: '='
            },
            templateUrl: 'template/gnap/breadcrumbs/breadcrumbs.html',
            link: link
        };

        function link(scope) {
            // get the current breadcrumbs and link them to the scope
            scope.breadcrumbs = breadcrumbsService.breadcrumbs;

            scope.back = function () {
                $window.history.back();
            };

            scope.select = function (breadcrumb) {
                if (breadcrumb.click) {
                    breadcrumb.click();
                }

                if (breadcrumb.url) {
                    $location.path(breadcrumb.url);
                }

                if (breadcrumb.state) {
                    $state.go(breadcrumb.state);
                }
            };
        }
    }

    function gnapBreadcrumbsTemplate($templateCache) {

        /* jshint ignore:start */
        $templateCache.put("template/gnap/breadcrumbs/breadcrumbs.html",
            "<div class=\"breadcrumbs\" id=\"breadcrumbs\">\n" +
            "    <ul class=\"breadcrumb\">\n" +
            "        <li ng-if=\"showBackButton\" class=\"breadcrumb-back\">\n" +
            "            <a ng-click=\"back()\"><i class=\"icon-circle-arrow-left\"><\/i><\/a>\n" +
            "        <\/li>\n" +
            "        <li ng-repeat=\"crumb in breadcrumbs.crumbs\" ng-class=\"{ active: $last }\">\n" +
            "            <i class=\"icon-home home-icon\" ng-show=\"$first\"><\/i>\n" +
            "            <a ng-click=\"select(crumb)\" ng-hide=\"$last\">{{ crumb._title }}<\/a>\n" +
            "            <span ng-show=\"$last\">{{ crumb._title }}<\/span>\n" +
            "        <\/li>\n" +
            "    <\/ul>\n" +
            "<\/div>\n" +
            "");
        /* jshint ignore:end */
    }
})();
