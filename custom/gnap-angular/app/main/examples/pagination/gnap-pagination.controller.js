(function () {
    angular
        .module('gnap-example-app')
        .controller('gnap-pagination', GnapPaginationController);

    GnapPaginationController.$inject = ['$scope'];

    function GnapPaginationController($scope) {
        $scope.totalItems = 164;
        $scope.currentPage = 4;
    };
})();