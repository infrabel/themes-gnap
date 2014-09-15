(function () {
    angular
        .module('gnap-example-app')
        .controller('MainController', MainController);

    MainController.$inject = ['$scope', 'sidebarService'];

    function MainController($scope, sidebarService) {

        $scope.search = function () {
            alert('Searching for ' + $scope.keywords);
        }
    };
})();