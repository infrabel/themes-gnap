(function () {
    angular
        .module('gnap-example-app')
        .controller('gnap-time-picker', GnapTimepickerController);

    GnapTimepickerController.$inject = ['$scope'];

    function GnapTimepickerController($scope) {
        $scope.sometime = new Date(2014, 1, 1, 10, 30, 0);
    };
})();