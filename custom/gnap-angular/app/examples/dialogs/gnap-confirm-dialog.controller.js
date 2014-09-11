(function () {
    angular
        .module('gnap-app')
        .controller('gnap-confirm-dialog', ['$scope', GnapConfirmDialogController]);

    function GnapConfirmDialogController($scope) {
        $scope.confirm = function () {
            alert('You were sure!');
        };

        $scope.cancel = function () {
            alert('You weren\'t sure!');
        };
    };
})();