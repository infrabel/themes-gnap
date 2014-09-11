(function () {
    angular
        .module('gnap-app')
        .controller('gnap-success-notification', ['$scope', 'notification', GnapSuccessNotificationController]);

    function GnapSuccessNotificationController($scope, notification) {
        $scope.notify = function () {
            notification.show({
                type: 'success',
                title: 'This is a success notification',
                text: 'This will fade out after a certain amount of time. Vivamus eget tincidunt velit. Cum sociis natoque penatibus et, nascetur ridiculus mus.'
            });
        };

        $scope.remove = function () {
            notification.removeAll();
        };
    };
})();