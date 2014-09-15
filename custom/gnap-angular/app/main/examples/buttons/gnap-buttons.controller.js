(function () {
    angular
        .module('gnap-example-app')
        .controller('gnap-buttons', GnapButtonsController);

    GnapButtonsController.$inject = ['$scope'];

    function GnapButtonsController($scope) {
        $scope.status = {
            isopen: false
        };

        $scope.primary = function () {
            alert('You clicked a primary button');
        };

        $scope.save = function () {
            alert('You clicked a save button');
        };

        $scope.cancel = function () {
            alert('You clicked a cancel button');
        };

        $scope.action1 = function () {
            // do something here
            $scope.status.isopen = false;
        };

        $scope.action2 = function () {
            // do something here
            $scope.status.isopen = false;
        };

        $scope.action3 = function () {
            // do something here
            $scope.status.isopen = false;
        };
    };
})();