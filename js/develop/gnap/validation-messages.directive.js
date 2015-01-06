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

    gnapValidationMessages.$inject = [];

    function gnapValidationMessages() {
        return {
            restrict: 'A',
            controller: controller,
            require: ['^form', 'gnapValidationMessages'],
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

                function truthyVal(value) {
                    return value !== null && value !== false && value;
                }
            }

            return {
                registerMessage: registerMessage,
                renderMessages: renderMessages
            };
        }

        function link($scope, element, $attrs, ctrls) {
            var form = ctrls[0];
            var ctrl = ctrls[1];
            
            //JavaScript treats empty strings as false, but ng-message-multiple by itself is an empty string
            var multiple = angular.isString($attrs.gnapValidationMessagesMultiple) ||
                           angular.isString($attrs.multiple);

            var watchAttr = $attrs.gnapValidationMessages || $attrs['for']; //for is a reserved keyword

            $scope.$watch(function () {
                return form.$submitted;
            }, function (submitted) {
                if (submitted) {
                    ctrl.renderMessages(form[watchAttr].$error, multiple);
                }
            });

            $scope.$watch(function () {
                return form[watchAttr].$invalid;
            }, function () {
                if (form[watchAttr].$dirty) {
                    ctrl.renderMessages(form[watchAttr].$error, multiple);
                }
            });
        }
    }
})();
