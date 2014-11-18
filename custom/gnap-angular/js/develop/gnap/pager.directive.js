'use strict';

/**
 * @desc allows for lists to be paged
 * @file pager.directive.js
 * @example <div gnap-pager max-size="5" total-items="totalItems" current-page="currentPage"></div>
 */
(function () {
    angular
        .module('gnap')
        .directive('gnapPager', gnapPager);

    angular
        .module('template/pagination/pager.html')
        .run(gnapPagerTemplate);

    angular
        .module('template/pagination/pagination.html')
        .run(gnapPaginationTemplate);

    gnapPagerTemplate.$inject = ['$templateCache'];
    gnapPaginationTemplate.$inject = ['$templateCache'];

    function gnapPager() {
        return {
            restrict: 'AE',
            scope: {
                totalItems: '=',
                currentPage: '=',
                maxSize: '=',
                itemsPerPage: '='
            },
            template: '<div pagination max-size="maxSize" items-per-page="itemsPerPage" boundary-links="true" previous-text="&lt;i class=&quot;icon-angle-left&quot;&gt;&lt;/i&gt;" ng-model="currentPage" total-items="totalItems" next-text="&lt;i class=&quot;icon-angle-right&quot;&gt;&lt;/i&gt;" first-text="&lt;i class=&quot;icon-double-angle-left&quot;&gt;&lt;/i&gt;" last-text="&lt;i class=&quot;icon-double-angle-right&quot;&gt;&lt;/i&gt;"></div>' /* jshint ignore:line */
        };
    }

    function gnapPagerTemplate($templateCache) {

        /* jshint ignore:start */
        $templateCache.put("template/pagination/pager.html",
            "<ul class=\"pager\">\n" +
            "  <li ng-class=\"{disabled: noPrevious(), previous: align}\"><a href ng-click=\"selectPage(page - 1)\"><span ng-bind-html=\"getText('previous')\"></span></a></li>\n" +
            "  <li ng-class=\"{disabled: noNext(), next: align}\"><a href ng-click=\"selectPage(page + 1)\"><span ng-bind-html=\"getText('next')\"></span></a></li>\n" +
            "</ul>");
        /* jshint ignore:end */
    }

    function gnapPaginationTemplate($templateCache) {

        /* jshint ignore:start */
        $templateCache.put("template/pagination/pagination.html",
            "<ul class=\"pagination\">\n" +
            "  <li ng-if=\"boundaryLinks\" ng-class=\"{disabled: noPrevious()}\"><a href ng-click=\"selectPage(1)\"><span ng-bind-html=\"getText('first')\"></span></a></li>\n" +
            "  <li ng-if=\"directionLinks\" ng-class=\"{disabled: noPrevious()}\"><a href ng-click=\"selectPage(page - 1)\"><span ng-bind-html=\"getText('previous')\"></span></a></li>\n" +
            "  <li ng-repeat=\"page in pages track by $index\" ng-class=\"{active: page.active}\"><a href ng-click=\"selectPage(page.number)\">{{page.text}}</a></li>\n" +
            "  <li ng-if=\"directionLinks\" ng-class=\"{disabled: noNext()}\"><a href ng-click=\"selectPage(page + 1)\"><span ng-bind-html=\"getText('next')\"></span></a></li>\n" +
            "  <li ng-if=\"boundaryLinks\" ng-class=\"{disabled: noNext()}\"><a href ng-click=\"selectPage(totalPages)\"><span ng-bind-html=\"getText('last')\"></span></a></li>\n" +
            "</ul>");
        /* jshint ignore:end */
    }
})();
