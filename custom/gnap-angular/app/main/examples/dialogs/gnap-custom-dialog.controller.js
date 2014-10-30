'use strict';

(function () {
    angular
        .module('gnap-example-app')
        .controller('gnap-custom-dialog', GnapCustomDialogController)
        .controller('gnap-custom-dialog-instance', GnapCustomDialogInstanceController);

    GnapCustomDialogController.$inject = ['$window', '$modal'];
    GnapCustomDialogInstanceController.$inject = ['$modalInstance', 'items'];

    function GnapCustomDialogController($window, $modal) {
        var vm = this;

        vm.items = ['item1', 'item2', 'item3'];

        vm.open = function (size) {
            var modalInstance = $modal.open({
                templateUrl: 'myModalContent.html',
                controller: 'gnap-custom-dialog-instance as vm',
                resolve: {
                    items: function () {
                        return vm.items;
                    }
                }
            });

            modalInstance.result.then(function (result) {
                $window.alert('You selected: ' + result);
            }, function () {
                $window.alert('You dismissed the dialog!');
            });
        };
    }

    function GnapCustomDialogInstanceController($modalInstance, items) {
        var vm = this;

        vm.items = items;

        vm.selected = {
            item: vm.items[0]
        };

        vm.ok = function () {
            $modalInstance.close(vm.selected.item);
        };

        vm.cancel = function () {
            $modalInstance.dismiss('cancel');
        };
    }
})();
