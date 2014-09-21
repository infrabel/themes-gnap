(function () {
    angular
        .module('gnap-example-app')
        .controller('gnap-standard-table', GnapStandardTableController);

    GnapStandardTableController.$inject = ['Domain'];

    function GnapStandardTableController(Domain) {
        var vm = this;

        Domain.query(function (domains) {
            vm.domains = domains;
        });

        vm.view = function (domain) {
            alert('Going to the view \'' + domain.domain + '\' page ...');
        };
    };
})();