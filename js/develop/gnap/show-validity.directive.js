'use strict';

/**
 * @desc Directive that adds the 'has-error' class if the associated input field is invalid.
 * @file show-validity.directive.js
 * @example <div gnap-show-validity for="firstName"></div>
 */
(function () {
    angular
        .module('gnap')
        .directive('gnapShowValidity', gnapShowValidity);

    function gnapShowValidity() {

        function link($scope, element, attrs, ctrl) {
            var form = ctrl; // controller is form

            // watch for invalid state changes
            $scope.$watch(function () { return form[attrs.for].$invalid; }, updateHasErrorClass);

            // watch for the submit status to change
            $scope.$watch(function () { return form.$submitted; }, updateHasErrorClass);

            function updateHasErrorClass() {
                if (form[attrs.for].$invalid && (form[attrs.for].$dirty || form.$submitted)) {
                    element.addClass('has-error');
                } else {
                    element.removeClass('has-error');
                }
            }
        }

        return {
            restrict: 'A',
            require: '^form',
            link: link
        };
    }
})();
