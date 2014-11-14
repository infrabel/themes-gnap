'use strict';

/**
 * @desc  A custom validation directive. The handling function can retrieve a key-value pair in the form of a JSON object 
         for which the values can either be a boolean or a promise if server validation is needed
 * @file validate.directive.js
 * @example <input type="text" id="name" ng-model="vm.name" gnap-validate="validateName()">
 */
(function () {
    angular
        .module('gnap')
        .directive('gnapValidate', gnapValidate);

    gnapValidate.$inject = ['$parse'];

    function gnapValidate($parse) {
        return {
            require: ['ngModel', '^form'],
            link: link
        };

        function link($scope, element, $attrs, controllers) {
            var model = controllers[0];
            var form = controllers[1];

            $scope.$watch($attrs.ngModel, function() {
                // get a hold of the function that handles the custom validation
                var fn = $parse($attrs.gnapValidate);

                var validationResult = fn($scope, { $event: event });

                for (var validationKey in validationResult) {
                    if (validationResult.hasOwnProperty(validationKey)) {
                        var value = validationResult[validationKey];

                        if (value.then) {
                            handleDeferredValidation(element, model, form, validationKey, value);

                        } else {
                            model.$setValidity(validationKey, value);
                        }
                    }
                }

            });
        }

        function handleDeferredValidation(element, model, form, validationKey, promise) {
            // increase resolve count
            element.data('validator-resolve-count', (element.data('validator-resolve-count') || 0) + 1);

            // mark the form as being validating
            form.$validatorResolveCount = (form.$validatorResolveCount || 0) + 1;
            form.$validating = true;

            element.addClass('validating');

            promise.then(function (resolvedValue) {

                // set validity
                model.$setValidity(validationKey, resolvedValue);

                // decrease resolve count
                form.$validatorResolveCount = form.$validatorResolveCount - 1;
                element.data('validator-resolve-count', element.data('validator-resolve-count') - 1);

                // if all validator promises are resolved then remove the validating class
                if (element.data('validator-resolve-count') === 0) {
                    element.removeClass('validating');
                }

                // if all validator promisses on the form level have resolved then remove the validating mark
                if (form.$validatorResolveCount === 0) {
                    form.$validating = false;
                }
            });
        }
    }
})();
