'use strict';

/**
 * @desc A directive containing a message for a specified validation rule. Implementation based on ngMessages: https://docs.angularjs.org/api/ngMessages/directive/ngMessages.
 * @file validation-message.directive.js
 * @example <div gnap-validation-message when="required">Please enter a name.</div>
 */
(function () {
    angular
        .module('gnap')
        .directive('gnapValidationMessage', gnapValidationMessage);

    gnapValidationMessage.$inject = ['$animate'];

    function gnapValidationMessage($animate) {
        return {
            require: '^gnapValidationMessages',
            transclude: 'element',
            terminal: true,
            restrict: 'A',
            link: link
        };

        function link($scope, $element, $attrs, gnapValidationMessages, $transclude) {
            var index, element;

            var commentNode = $element[0];
            var parentNode = commentNode.parentNode;
            for (var i = 0, j = 0; i < parentNode.childNodes.length; i++) {
                var node = parentNode.childNodes[i];
                if (node.nodeType === 8 /* COMMENT_NODE */ && node.nodeValue.indexOf('gnapValidationMessage') >= 0) {
                    if (node === commentNode) {
                        index = j;
                        break;
                    }
                    j++;
                }
            }

            gnapValidationMessages.registerMessage(index, {
                type: $attrs.gnapValidationMessage || $attrs.when,
                attach: function () {
                    if (!element) {
                        $transclude($scope, function (clone) {
                            $animate.enter(clone, null, $element);
                            element = clone;
                            element.addClass('label');
                            element.addClass('label-danger');
                        });
                    }
                },
                detach: function () {
                    if (element) {
                        $animate.leave(element);
                        element = null;
                    }
                }
            });
        }
    }
})();
