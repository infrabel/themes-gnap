(function () {
    angular
        .module('gnap-example-app')
        .controller('gnap-progressbar', GnapProgressbarController);

    GnapProgressbarController.$inject = ['$scope'];

    function GnapProgressbarController($scope) {
        $scope.progress = 40;
        $scope.$watch('progress', function (progress) { $scope.workLeft = 100 - progress; });
    };
})();