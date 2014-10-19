'use strict';

/**
 * @desc displays a search box
 * @file search.directive.js
 * @example <div gnap-search keywords="keywords" handler='search()'></div>
 */
(function () {
    angular
        .module('gnap')
        .directive('gnapSearch', gnapSearch);

    angular
        .module('template/gnap/search/search.html', [])
        .run(gnapSearchTemplate);

    gnapSearchTemplate.$inject = ['$templateCache'];

    function gnapSearch() {
        return {
            restrict: 'A',
            scope: {
                text: '=',
                keywords: '=',
                handler: '&'
            },
            templateUrl: 'template/gnap/search/search.html'
        };
    }

    function gnapSearchTemplate($templateCache) {

        /* jshint ignore:start */
        $templateCache.put("template/gnap/search/search.html",
            "<div class=\"nav-search\" id=\"nav-search\">\n" +
            "    <form class=\"form-search\" ng-submit=\'handler()\'>\n" +
            "        <span class=\"input-icon\">\n" +
            "            <input type=\"text\" ng-model=\"keywords\" placeholder=\"{{ text || \'Search ...\' }}\" class=\"nav-search-input\" autocomplete=\"off\" \/>\n" +
            "            <i class=\"icon-search nav-search-icon\"><\/i>\n" +
            "        <\/span>\n" +
            "    <\/form>\n" +
            "<\/div>\n" +
            "");
        /* jshint ignore:end */
    }
})();
