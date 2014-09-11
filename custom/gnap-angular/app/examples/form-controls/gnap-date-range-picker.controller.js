(function () {
    angular
        .module('gnap-example-app')
        .controller('gnap-date-range-picker', GnapDaterangepickerController);

    GnapDaterangepickerController.$inject = ['$scope'];

    function GnapDaterangepickerController($scope) {
        $scope.range = {
            dateStart: new Date(2014, 0, 7),
            dateEnd: new Date(2014, 7, 14)
        };

        $scope.iconPosition = 'left';
    };
})();