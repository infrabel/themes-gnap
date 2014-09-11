(function () {
    angular
        .module('gnap-app')
        .controller('gnap-error-notification', ['$scope', 'notification', GnapErrorNotificationController]);

    function GnapErrorNotificationController($scope, notification) {
        $scope.notify = function () {
            notification.show({
                type: 'error',
                title: 'This is an error notification',
                text: 'This will fade out after a certain amount of time. Vivamus eget tincidunt velit. Cum sociis natoque penatibus et, nascetur ridiculus mus.'
            });
        };

        $scope.remove = function () {
            notification.removeAll();
        };
    };
})();