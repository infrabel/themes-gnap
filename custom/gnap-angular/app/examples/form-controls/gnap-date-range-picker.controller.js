(function () {
    angular
        .module('gnap-app')
        .controller('gnap-date-range-picker', ['$scope', GnapDaterangepickerController]);

    function GnapDaterangepickerController($scope) {
        $scope.range = {
            dateStart: new Date(2014, 0, 7),
            dateEnd: new Date(2014, 7, 14)
        };

        $scope.iconPosition = 'left';
    };
})();