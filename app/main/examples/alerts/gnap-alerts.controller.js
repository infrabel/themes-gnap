'use strict';

(function () {
    angular
        .module('gnap-example-app')
        .controller('gnap-alerts', GnapAlertsController);

    GnapAlertsController.$inject = ['$sce'];

    function GnapAlertsController($sce) {
        var vm = this;

        vm.alerts = [
            { type: 'danger', msg: $sce.trustAsHtml('<b>Oh snap!</b> Change a few things up and try submitting again.') },
            { type: 'success', msg: $sce.trustAsHtml('<b>Well done!</b> You successfully read this important alert message.') },
            { type: 'warning', msg: $sce.trustAsHtml('<b>Warning!</b> Best check your self, you\'re not looking too good.') },
            { type: 'info', msg: $sce.trustAsHtml('<b>Heads up!</b> This alert needs your attention, but it\'s not super important.') }
        ];

        vm.closeAlert = function (index) {
            vm.alerts.splice(index, 1);
        };
    }
})();
