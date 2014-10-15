(function () {
    angular
        .module('gnap-example-app')
        .controller('PublicController', PublicController);

    PublicController.$inject = [];

    function PublicController() {
        var vm = this;
    };
})();