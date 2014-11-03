/**
 * @desc handles unhandled global errors
 * @file gloabl-error-handler.directive.js
 */
(function () {
    angular
        .module('gnap')
        .directive('gnapGlobalErrorHandler', globalErrorHandler);

    globalErrorHandler.$inject = ['$window', 'unhandledErrorChannel'];

    function globalErrorHandler($window, unhandledErrorChannel) {
        return {
            restrict: 'A',
            link: link
        };

        function link() {
            var oldOnErrorHandler = $window.onerror;

            $window.onerror = function(errorMessage, url, lineNumber) {
                unhandledErrorChannel.errorOccurred(errorMessage);

                if (oldOnErrorHandler) {
                    return oldOnErrorHandler(errorMessage, url, lineNumber);
                }

                return true;
            };
        }
    }
})();