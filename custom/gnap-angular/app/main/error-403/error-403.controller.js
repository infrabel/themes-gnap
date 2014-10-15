(function () {
    angular
        .module('gnap-example-app')
        .controller('Error403Controller', Error404Controller);

    Error404Controller.$inject = [];

    function Error404Controller() {
    };
})();