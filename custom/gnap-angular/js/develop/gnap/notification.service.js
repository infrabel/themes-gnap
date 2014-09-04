/**
 * @desc displays a notification
 * @file notification.service.js
 */
(function () {
    angular
        .module('gnap')
        .factory('notification', notification);

    function notification() {

        return {
            show: show,
            removeAll: removeAll
        }

        function show(options) {
            $.gritter.add({
                title: options.title,
                text: options.text,
                class_name: 'gritter-' + (options.type || 'default')
            });
        };

        function removeAll() {
            $.gritter.removeAll();
        };
    }
})();