(function () {
    angular
        .module('gnap-app')
        .controller('gnap-stacked-progressbar', ['$scope', GnapStackedProgressbarController]);

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