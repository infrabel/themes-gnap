'use strict';
/* global hljs */

/**
 * @desc applies code syntax coloring
 * @file highlight.directive.js
 * @example <code gnap-highlight class="html">html code here</code>
 */

// in case of IE 8, highlightJS is not loaded, so check here on hljs === undefined
if (typeof hljs !== 'undefined') {
    (function (hljs) {
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

                if (hljs) {
                    var language = attrs['gnapHighlight'];
                    var snippet = element.text();

                    $timeout(function () {
                        element.html((language) ? hljs.highlight(language, snippet).value : hljs.highlightAuto(snippet).value);
                    }, 0);
                }
            }
        }
    })(hljs);
}