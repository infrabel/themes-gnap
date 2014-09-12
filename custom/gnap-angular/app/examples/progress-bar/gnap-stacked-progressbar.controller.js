(function () {
    angular
        .module('gnap-example-app')
        .controller('gnap-stacked-progressbar', GnapStackedProgressbarController);

    GnapStackedProgressbarController.$inject = ['$scope'];

    function GnapStackedProgressbarController($scope) {
        $scope.collection = [];

        $scope.collection.push({
            value: 20,
            type: 'success'
        });

        $scope.collection.push({
            value: 15,
            type: 'warning'
        });

        $scope.collection.push({
            value: 25,
            type: 'error'
        });
    };
})();