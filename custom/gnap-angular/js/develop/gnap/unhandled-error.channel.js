/**
 * @desc Channel service that lets consumers subscribe and publish for unhandled error events
 * @file error.channel.js
 */
(function () {
    angular
        .module('gnap')
        .factory('unhandledErrorChannel', unhandledErrorChannel);

    unhandledErrorChannel.$inject = ['$rootScope'];

    function unhandledErrorChannel($rootScope) {

        var UNHANDLED_ERROR_OCCURRED_MESSAGE = 'ERROR_OCCURRED_MESSAGE';

        var errorOccurred = function (error) {
            $rootScope.$broadcast(UNHANDLED_ERROR_OCCURRED_MESSAGE,
                {
                    error: error
                });
        };

        var onErrorOccurred = function ($scope, handler) {
            $scope.$on(UNHANDLED_ERROR_OCCURRED_MESSAGE, function (event, message) {
                handler(message.error);
            });
        };
        
        return {
            errorOccurred: errorOccurred,
            onErrorOccurred: onErrorOccurred
        };
    }
})();