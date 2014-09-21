(function () {
    angular
        .module('gnap-example-app')
        .controller('gnap-prompt-dialog', GnapPromptDialogController);

    GnapPromptDialogController.$inject = [];

    function GnapPromptDialogController() {
        var vm = this;

        vm.accept = function (name) {
            alert('Hello ' + name);
        };

        vm.cancel = function () {
            alert('You cancelled!');
        };
    };
})();