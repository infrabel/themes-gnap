(function () {
    angular
        .module('gnap-example-app')
        .controller('gnap-confirm-dialog', GnapConfirmDialogController);

    GnapConfirmDialogController.$inject = ['$scope'];

    function GnapConfirmDialogController($scope) {
        $scope.confirm = function () {
            alert('You were sure!');
        };

        $scope.cancel = function () {
            alert('You weren\'t sure!');
        };
    };
})();