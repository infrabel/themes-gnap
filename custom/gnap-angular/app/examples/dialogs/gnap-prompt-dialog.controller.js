(function () {
    angular
        .module('gnap-example-app')
        .controller('gnap-prompt-dialog', GnapPromptDialogController);

    GnapPromptDialogController.$inject = ['$scope'];

    function GnapPromptDialogController($scope) {
        $scope.accept = function (name) {
            alert('Hello ' + name);
        };

        $scope.cancel = function () {
            alert('You cancelled!');
        };
    };
})();