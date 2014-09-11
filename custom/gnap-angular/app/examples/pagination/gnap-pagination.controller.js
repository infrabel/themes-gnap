(function () {
    angular
        .module('gnap-app')
        .controller('gnap-pagination', ['$scope', GnapPaginationController]);

    function GnapPaginationController($scope) {
        $scope.totalItems = 164;
        $scope.currentPage = 4;
    };
})();