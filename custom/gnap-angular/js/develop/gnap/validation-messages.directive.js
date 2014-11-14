'use strict';

/**
 * @desc Container for the validation message directives. Implementation based on ngMessages: https://docs.angularjs.org/api/ngMessages/directive/ngMessages.
 * @file validation-messages.directive.js
 * @example <div gnap-validation-messages for="form.name"></div>
 */
(function () {
    angular
        .module('gnap')
        .directive('gnapValidationMessages', gnapValidationMessages);

    gnapValidationMessages.$inject = ['$compile', '$animate'];

    function gnapValidationMessages($compile, $animate) {
        return {
            restrict: 'E',
            controller: controller,
            require: 'gnapValidationMessages',
            link: link
        };

        function controller() {
            var messages = [];

            function registerMessage(index, message) {
                for (var i = 0; i < messages.length; i++) {
                    if (messages[i].type === message.type) {
                        if (index !== i) {
                            var temp = messages[index];
                            messages[index] = messages[i];
                            if (index < messages.length) {
                                messages[i] = temp;
                            } else {
                                messages.splice(0, i); //remove the old one (and shift left)
                            }
                        }
                        return;
                    }
                }
                messages.splice(index, 0, message); //add the new one (and shift right)
            }

            function renderMessages(values, multiple) {
                values = values || {};

                var found;
                angular.forEach(messages, function (message) {
                    if ((!found || multiple) && truthyVal(values[message.type])) {
                        message.attach();
                        found = true;
                    } else {
                        message.detach();
                    }
                });

                //todo: fix this
                //renderElementClasses(found);
                
                function truthyVal(value) {
                    return value !== null && value !== false && value;
                }
            }

            return {
                registerMessage: registerMessage,
                renderMessages: renderMessages
            };
        }

        function link($scope, element, $attrs, ctrl) {
            ctrl.renderElementClasses = function (bool) {
                if (bool) {
                    $animate.setClass(element, 'ng-active', 'ng-inactive');
                } else {
                    $animate.setClass(element, 'ng-inactive', 'ng-active');
                }
            };

            //JavaScript treats empty strings as false, but ng-message-multiple by itself is an empty string
            var multiple = angular.isString($attrs.gnapValidationMessagesMultiple) ||
                           angular.isString($attrs.multiple);

            var cachedValues, watchAttr = $attrs.gnapValidationMessages || $attrs['for']; //for is a reserved keyword

            $scope.$watch('form.$submitted', function (submitted) {
                if (submitted) {
                    var values = $scope.$eval(watchAttr + '.$error');
                    ctrl.renderMessages(values, multiple);
                }
            });

            $scope.$watchCollection(watchAttr + '.$error', function (values) {

                cachedValues = values;

                if ($scope.$eval(watchAttr + '.$dirty')) {
                    ctrl.renderMessages(values, multiple);
                }
            });
        }
    }
})();
