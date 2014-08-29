/**
 * @desc tooltip directive to
 * @file gnap-tooltip-info.directive.js
 * @example <button gnap-tooltip-info></button>
 */
 (function () {
    angular
        .module('gnap')
        .directive('gnapTooltipInfo', gnapTooltipInfo);

    function gnapTooltipInfo () {
        var directive = {
            compile: compile,
            restrict: 'A'
        };

        return directive;

        function compile(element) {
          element.addClass('tooltip-info');
        }
    }
})();
