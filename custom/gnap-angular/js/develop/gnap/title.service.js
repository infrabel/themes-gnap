/**
 * @desc service that keeps track of the current title
 * @file title.service.js
 */
(function () {
    angular
        .module('gnap')
        .factory('titleService', titleService);

    titleService.$inject = [];

    function titleService() {
        var title = {
            parts: [] // TODO: Get default from config
        };

        return {
            title: title,
            setTitle: setTitle,
            clearTitle: clearTitle,
            appendTitle: appendTitle,
            removeLastTitle: removeLastTitle
        };

        function setTitle(value) {
            // TODO: Support translated values
            title.parts = [value];
        };

        function appendTitle(value) {
            title.parts.push(value);
        };

        function removeLastTitle() {
            title.parts.pop();
        };

        function clearTitle() {
            setTitle(''); // TODO: Get default from config
        }
    };
})();