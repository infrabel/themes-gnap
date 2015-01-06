/**
 * @desc Shows a notification if an unhandled error occurs
 * @file unhandled-error-notification.directive.js
 */
(function () {
    angular
        .module('gnap')
        .directive('gnapUnhandledErrorNotification', gnapUnhandledErrorNotification);

    gnapUnhandledErrorNotification.$inject = ['$window', '$translate', '$translatePartialLoader', 'unhandledErrorChannel', 'notification'];

    function gnapUnhandledErrorNotification($window, $translate, $translatePartialLoader, unhandledErrorChannel, notification) {

        function link(scope) {
            unhandledErrorChannel.onErrorOccurred(scope, onErrorOccurred);
        }

        function onErrorOccurred(error) {
            try {
                $translate(['gnap.error-notification-title', 'gnap.error-notification-text']).then(function (translations) {
                    notification.show({
                        type: 'error',
                        title: translations['gnap.error-notification-title'],
                        text: translations['gnap.error-notification-text']
                    });
                });
            }
            catch (e) {
                $window.alert('An unexpected error has occurred.');
            }
        }

        return {
            restrict: 'A',
            link: link
        };
    }
})();
