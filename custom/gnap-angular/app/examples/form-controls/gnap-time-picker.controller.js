(function () {
    angular
        .module('gnap-app')
        .controller('gnap-time-picker', ['$scope', GnapTimepickerController]);

    function GnapTimepickerController($scope) {
        $scope.sometime = new Date(2014, 1, 1, 10, 30, 0);
    };
})();