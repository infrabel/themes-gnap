(function () {
    angular
        .module('gnap-example-app')
        .controller('gnap-confirm-dialog', GnapConfirmDialogController);

    GnapConfirmDialogController.$inject = [];

    function GnapConfirmDialogController() {
        var vm = this;

        vm.confirm = function () {
            alert('You were sure!');
        };

        vm.cancel = function () {
            alert('You weren\'t sure!');
        };
    };
})();