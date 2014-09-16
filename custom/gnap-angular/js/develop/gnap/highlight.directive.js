/**
 * @desc applies code syntax coloring
 * @file highlight.directive.js
 * @example <code gnap-highlight class="html">html code here</code>
 */
(function () {
    angular
        .module('gnap')
        .directive('gnapHighlight', gnapHighlight);

    gnapHighlight.$inject = ['$timeout'];

    function gnapHighlight($timeout) {

        return {
            restrict: 'A',
            link: link
        };

        function link(scope, element, attrs) {
            var language = attrs['gnapHighlight'];
            var snippet = element.text();

            $timeout(function () {
                element.html((language)
                    ? hljs.highlight(language, snippet).value
                    : hljs.highlightAuto(snippet).value);
            }, 0);
        };
    };
})();