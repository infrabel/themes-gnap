(function () {
    angular
        .module('gnap-app')
        .controller('gnap-collapse', ['$scope', GnapCollapseController]);

    function GnapCollapseController($scope) {
        $scope.isCollapsed = false;
    };
})();