(function () {
    angular
        .module('gnap-example-app')
        .controller('gnap-standard-table', GnapStandardTableController);

    GnapStandardTableController.$inject = ['$scope', 'Domain'];

    function GnapStandardTableController($scope, Domain) {
        Domain.query(function (domains) {
            $scope.domains = domains;
        });
    };
})();