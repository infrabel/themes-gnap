(function () {
    angular
        .module('gnap-example-app')
        .controller('gnap-choice-toggle', GnapChoiceToggleController);

    GnapChoiceToggleController.$inject = ['$scope'];

    function GnapChoiceToggleController($scope) {
        $scope.value = true;
    };
})();