(function () {
    angular
        .module('gnap-example-app')
        .controller('gnap-buttons', GnapButtonsController);

    GnapButtonsController.$inject = [];

    function GnapButtonsController() {
        var vm = this;

        vm.status = {
            isopen: false
        };

        vm.primary = function () {
            alert('You clicked a primary button');
        };

        vm.save = function () {
            alert('You clicked a save button');
        };

        vm.cancel = function () {
            alert('You clicked a cancel button');
        };

        vm.action1 = function () {
            // do something here
            vm.status.isopen = false;
        };

        vm.action2 = function () {
            // do something here
            vm.status.isopen = false;
        };

        vm.action3 = function () {
            // do something here
            vm.status.isopen = false;
        };
    };
})();