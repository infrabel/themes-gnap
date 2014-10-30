'use strict';

(function () {
    angular
        .module('gnap-example-app')
        .controller('gnap-success-notification', GnapSuccessNotificationController);

    GnapSuccessNotificationController.$inject = ['notification'];

    function GnapSuccessNotificationController(notification) {
        var vm = this;

        vm.notify = function () {
            notification.show({
                type: 'success',
                title: 'This is a success notification',
                text: 'This will fade out after a certain amount of time. Vivamus eget tincidunt velit. Cum sociis natoque penatibus et, nascetur ridiculus mus.'
            });
        };

        vm.remove = function () {
            notification.removeAll();
        };
    }
})();
