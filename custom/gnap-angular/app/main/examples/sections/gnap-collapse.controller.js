(function () {
    angular
        .module('gnap-example-app')
        .controller('gnap-collapse', GnapCollapseController);

    GnapCollapseController.$inject = ['$scope'];

    function GnapCollapseController($scope) {
        $scope.isCollapsed = false;
    };
})();