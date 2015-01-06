'use strict';

(function () {
    angular
        .module('gnap-example-app')
        .controller('gnap-standard-table', GnapStandardTableController);

    GnapStandardTableController.$inject = ['$window', 'Domain'];

    function GnapStandardTableController($window, Domain) {
        var vm = this;

        Domain.query(function (domains) {
            vm.domains = domains;
        });

        vm.view = function (domain) {
            $window.alert('Going to the view \'' + domain.domain + '\' page ...');
        };
    }
})();
