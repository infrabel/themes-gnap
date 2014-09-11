(function () {
    angular
        .module('gnap-app')
        .controller('gnap-date-picker', ['$scope', GnapDatepickerController]);

    function GnapDatepickerController($scope) {
        $scope.date = new Date();
    };
})();