/**
 * @desc displays a search box
 * @file search.directive.js
 * @example <div gnap-search keywords="keywords" handler='search()'></div>
 */
(function () {
    angular
        .module('gnap')
        .directive('gnapSearch', gnapSearch);

    function gnapSearch() {
        return {
            restrict: 'A',
            scope: {
                keywords: '=',
                handler: "&"
            },
            templateUrl: 'js/gnap/search.html'
        };
    };
})();