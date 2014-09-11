(function () {
    angular
        .module('gnap-app')
        .controller('gnap-choice-toggle', ['$scope', GnapChoiceToggleController]);

    function GnapChoiceToggleController($scope) {
        $scope.value = true;
    };
})();