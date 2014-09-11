(function () {
    angular
        .module('gnap-app')
        .controller('gnap-progressbar', ['$scope', GnapProgressbarController]);

    function GnapProgressbarController($scope) {
        $scope.progress = 40;
        $scope.$watch('progress', function (progress) { $scope.workLeft = 100 - progress; });
    };
})();