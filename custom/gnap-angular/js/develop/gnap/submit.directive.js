'use strict';

/**
 * @desc  A custom submit directive that invokes a given function only if the form is valid on submit.
          Next to this it also marks the form as submitted so that the validation messages directive
          knowns that the validation errors must be displayed even if the attached element is not dirty.
 * @file submit.directive.js
 * @example <form gnap-submit="vm.save()"></form>
 */
(function () {
    angular
        .module('gnap')
        .directive('gnapSubmit', gnapSubmit);

    gnapSubmit.$inject = ['$parse', '$translate', 'notification'];

    function gnapSubmit($parse, $translate, notification) {
        return {
            // we need a form controller to be on the same element as this directive  
            // in other words: this directive can only be used on a <form>  
            require: 'form',
            // one time action per form  
            link: link
        };

        function link($scope, element, $attrs, form) {
            form.$submitted = false;

            element.attr('novalidate', 'novalidate');

            // get a hold of the function that handles submission when form is valid  
            var fn = $parse($attrs.gnapSubmit);

            // register DOM event handler and wire into Angular's lifecycle with scope.$apply  
            element.on('submit', function (event) {
                $scope.$apply(function () {
                    // on submit event, set submitted to true (like the previous trick)  
                    form.$submitted = true;

                    // if form is valid, execute the submission handler function and reset form submission state  
                    if (!form.$validating) {
                        if (form.$valid) {
                            fn($scope, { $event: event });
                            form.$submitted = false;
                        } else {
                            $translate(['gnap.validation-error-notification-title', 'gnap.validation-error-notification-text']).then(function (translations) {
                                notification.show({
                                    type: 'error',
                                    title: translations['gnap.validation-error-notification-title'],
                                    text: translations['gnap.validation-error-notification-text']
                                });
                            });
                        }
                    } // TODO: Possibly show a message, validation still ongoing, to be discussed
                });
            });
        }
    }
})();
