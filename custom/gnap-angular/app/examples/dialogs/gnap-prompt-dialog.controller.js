(function () {
    angular
        .module('gnap-app')
        .controller('gnap-prompt-dialog', ['$scope', GnapPromptDialogController]);

    function GnapPromptDialogController($scope) {
        $scope.accept = function (name) {
            alert('Hello ' + name);
        };

        $scope.cancel = function () {
            alert('You cancelled!');
        };
    };
})();