'use strict';

/**
 * @desc Directive that wraps elements in a Bootstrap 3 form group while adding validation class handling.
 * @file form-group.directive.js
 * @example <div gnap-form-group>f</div>
 */
(function () {
    angular
        .module('gnap')
        .directive('showValidityFor', showValidityFor);

    function showValidityFor() {

        function link($scope, element, attrs, ctrl) {
            var form = ctrl; // controller is form

            // watch for invalid state changes
            $scope.$watch(function () { return form[attrs.showValidityFor].$invalid; }, updateHasErrorClass);

            // watch for the submit status to change
            $scope.$watch(function () { return form.$submitted; }, updateHasErrorClass);

            function updateHasErrorClass() {
                if (form[attrs.showValidityFor].$invalid && (form[attrs.showValidityFor].$dirty || form.$submitted)) {
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
