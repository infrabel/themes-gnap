(function () {
    angular
        .module('gnap-example-app')
        .controller('TypographyController', TypographyController);

    TypographyController.$inject = ['$scope'];

    function TypographyController($scope) {
        $scope.isHorizontalList = false;
    };
})();