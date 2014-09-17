(function () {
    angular
        .module('gnap-example-app')
        .controller('gnap-full-table', GnapFullTableController);

    GnapFullTableController.$inject = ['$scope', 'Domain'];

    function GnapFullTableController($scope, Domain) {
        Domain.query(function (domains) {
            $scope.domains = domains;
        });

        $scope.view = function (domain) {
            alert('Going to the view \'' + domain.domain + '\' page ...');
        };

        $scope.edit = function (domain) {
            alert('Going to the edit \'' + domain.domain + '\' page ...');
        };

        $scope.delete = function (domain) {
            alert('Logic to delete \'' + domain.domain + '\' should be executed now ...');
        }
    };
})();