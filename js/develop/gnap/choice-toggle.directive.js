'use strict';

/**
 * @desc A choice toggle implementation
 * @file choice-toggle.directive.js
 * @example <span gnap-choice-toggle choice="value"></span>
 */
(function () {
    angular
        .module('gnap')
        .directive('gnapChoiceToggle', gnapChoiceToggle);

    function gnapChoiceToggle() {

        return {
            restrict: 'AE',
            scope: {
                choice: '=',
                lang: '@'
            },
            template: '<label><input class="ace ace-switch" type="checkbox" ng-model="choice" /><span class="lbl"></span></label>',
            link: link
        };

        function link(scope, element) {
            var labelNode = angular.element(element[0].childNodes[0].childNodes[1]);
            var inputNode = angular.element(element[0].childNodes[0].childNodes[0]);

            if (scope.lang === 'nl' || scope.lang === 'fr' || scope.lang === 'en') {
                labelNode.addClass(scope.lang);
                inputNode.addClass('ace-switch-7');
            } else {
                inputNode.addClass('ace-switch-6');
            }

            if (scope.choice === true) {
                inputNode.attr('checked', 'checked');
            } else {
                inputNode.removeAttr('checked');
            }
        }
    }
})();
