'use strict';

/**
 * @desc Directive that wraps elements in a Bootstrap 3 form group while adding validation class handling.
 * @file form-group.directive.js
 * @example <div gnap-form-group>f</div>
 */
(function () {
    angular
        .module('gnap')
        .directive('gnapFormGroup', gnapFormGroup);

    function gnapFormGroup() {
        return {
            restrict: 'A',
            transclude: true,
            scope: {
                'for': '=for'
            },
            template: '<div class="form-group" ng-class="{\'has-error\':for.$invalid && ($parent.form.$submitted || for.$dirty)}">' +
                        '<div ng-transclude></div>' +
                      '</div>'
        };
    }
})();
