'use strict';

(function () {
    angular
        .module('gnap-example-app')
        .controller('gnap-default-notification', GnapDefaultNotificationController);

    GnapDefaultNotificationController.$inject = ['notification'];

    function GnapDefaultNotificationController(notification) {
        var vm = this;

        vm.notify = function () {
            notification.show({
                title: 'This is a default notification',
                text: 'This will fade out after a certain amount of time. Vivamus eget tincidunt velit. Cum sociis natoque penatibus et, nascetur ridiculus mus.'
            });
        };

        vm.remove = function () {
            notification.removeAll();
        };
    }
})();
