(function () {
    angular
        .module('gnap-app')
        .controller('gnap-custom-dialog', ['$scope', '$modal', GnapCustomDialogController]);

    angular
        .module('gnap-app')
        .controller('gnap-custom-dialog-instance', ['$scope', '$modalInstance', 'items', GnapCustomDialogInstanceController]);

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