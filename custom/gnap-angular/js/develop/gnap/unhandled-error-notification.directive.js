/**
 * @desc Shows a notification if an unhandled error occurs
 * @file unhandled-error-notification.directive.js
 */
(function () {
    angular
        .module('gnap')
        .directive('gnapUnhandledErrorNotification', gnapUnhandledErrorNotification);

    gnapUnhandledErrorNotification.$inject = ['$translate', '$translatePartialLoader', 'unhandledErrorChannel', 'notification'];

    function gnapUnhandledErrorNotification($translate, $translatePartialLoader, unhandledErrorChannel, notification) {

        function link(scope) {
            unhandledErrorChannel.onErrorOccurred(scope, onErrorOccurred);
        }

        function onErrorOccurred(error) {
            $translate(['gnap.error-notification-title', 'gnap.error-notification-text']).then(function (translations) {
                console.log(translations);
                notification.show({
                    type: 'error',
                    title: translations['gnap.error-notification-title'],
                    text: translations['gnap.error-notification-text']
                });
            });
        }

        return {
            restrict: 'A',
            link: link
        };
    }
})();