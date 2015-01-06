'use strict';

(function () {
    angular
        .module('gnap-example-app')
        .controller('gnap-full-table', GnapFullTableController);

    GnapFullTableController.$inject = ['$window', 'Domain'];

    function GnapFullTableController($window, Domain) {
        var vm = this;

        Domain.query(function (domains) {
            vm.domains = domains;
        });

        vm.view = function (domain) {
            $window.alert('Going to the view \'' + domain.domain + '\' page ...');
        };

        vm.edit = function (domain) {
            $window.alert('Going to the edit \'' + domain.domain + '\' page ...');
        };

        vm['delete'] = function (domain) {
            $window.alert('Logic to delete \'' + domain.domain + '\' should be executed now ...');
        };
    }
})();
