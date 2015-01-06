'use strict';

(function () {
    angular
        .module('gnap-example-app')
        .controller('gnap-progressbar', GnapProgressbarController);

    GnapProgressbarController.$inject = ['$scope'];

    function GnapProgressbarController($scope) {
        var vm = this;

        vm.progress = 40;

        $scope.$watch('vm.progress', function (progress) { vm.workLeft = 100 - progress; });
    }
})();
