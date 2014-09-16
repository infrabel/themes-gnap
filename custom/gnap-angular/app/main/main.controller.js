(function () {
    angular
        .module('gnap-example-app')
        .controller('MainController', MainController);

    MainController.$inject = ['$scope'];

    function MainController($scope) {
        $scope.search = function () {
            alert('Searching for ' + $scope.keywords);
        }
    };
})();