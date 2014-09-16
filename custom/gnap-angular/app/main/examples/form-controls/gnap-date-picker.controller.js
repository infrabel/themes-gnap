(function () {
    angular
        .module('gnap-example-app')
        .controller('gnap-date-picker', GnapDatepickerController);

    GnapDatepickerController.$inject = ['$scope'];

    function GnapDatepickerController($scope) {
        $scope.date = new Date();
    };
})();