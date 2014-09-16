(function () {
    angular
        .module('gnap-example-app')
        .controller('gnap-custom-dialog', GnapCustomDialogController)
        .controller('gnap-custom-dialog-instance', GnapCustomDialogInstanceController);

    GnapCustomDialogController.$inject = ['$scope', '$modal'];
    GnapCustomDialogInstanceController.$inject = ['$scope', '$modalInstance', 'items'];

    function GnapCustomDialogController($scope, $modal) {
        $scope.items = ['item1', 'item2', 'item3'];

        $scope.open = function (size) {
            var modalInstance = $modal.open({
                templateUrl: 'myModalContent.html',
                controller: 'gnap-custom-dialog-instance',
                resolve: {
                    items: function () {
                        return $scope.items;
                    }
                }
            });

            modalInstance.result.then(function (result) {
                alert('You selected: ' + result);
            }, function () {
                alert('You dismissed the dialog!');
            });
        };
    };

    function GnapCustomDialogInstanceController($scope, $modalInstance, items) {
        $scope.items = items;

        $scope.selected = {
            item: $scope.items[0]
        };

        $scope.ok = function () {
            $modalInstance.close($scope.selected.item);
        };

        $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
        };
    };
})();