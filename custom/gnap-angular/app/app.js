angular
    .module('gnap-app', ['gnap',
                         'ui.bootstrap',
                         'ngBootbox',
                         'localytics.directives',
                         'datatables',
                         'ngSanitize',
                         'ui.router'])

    .config(['$tooltipProvider', function ($tooltipProvider) {
        $tooltipProvider.options({
            appendToBody: true
        });
    }])

    .config(['$urlRouterProvider', function ($urlRouterProvider) {
        $urlRouterProvider
            .otherwise("/about");
    }])

    .controller('main', ['$scope',
                         'sidebarService',
                         'breadcrumbsService',
                         function ($scope, sidebarService, breadcrumbsService) {

            $scope.search = function () {
                alert('Searching for ' + $scope.keywords);
            }
        }
    ])
    .controller('gnap-default-notification', function ($scope, notification) {
        $scope.notify = function () {
            notification.show({
                title: 'This is a default notification',
                text: 'This will fade out after a certain amount of time. Vivamus eget tincidunt velit. Cum sociis natoque penatibus et, nascetur ridiculus mus.'
            });
        };

        $scope.remove = function () {
            notification.removeAll();
        };
    })
    .controller('gnap-progressbar', function ($scope) {
        $scope.progress = 40;
        $scope.$watch('progress', function (progress) { $scope.workLeft = 100 - progress; });
    })
    .controller('gnap-stacked-progressbar', function ($scope) {
        $scope.collection = [];

        $scope.collection.push({
            value: 20,
            type: 'success'
        });

        $scope.collection.push({
            value: 15,
            type: 'warning'
        });

        $scope.collection.push({
            value: 25,
            type: 'error'
        });
    })
    .controller('gnap-confirm-dialog', function ($scope) {
        $scope.confirm = function () {
            alert('You were sure!');
        };

        $scope.cancel = function () {
            alert('You weren\'t sure!');
        };
    })
    .controller('gnap-prompt-dialog', function ($scope) {
        $scope.accept = function (name) {
            alert('Hello ' + name);
        };

        $scope.cancel = function () {
            alert('You cancelled!');
        };
    })
    .controller('gnap-custom-dialog', function ($scope, $modal) {
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

    })
    .controller('gnap-custom-dialog-instance', function ($scope, $modalInstance, items) {
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
    })
    .controller('gnap-alerts', function ($scope, $sce) {
        $scope.alerts = [
            { type: 'danger', msg: $sce.trustAsHtml('<b>Oh snap!</b> Change a few things up and try submitting again.') },
            { type: 'success', msg: $sce.trustAsHtml('<b>Well done!</b> You successfully read this important alert message.') },
            { type: 'warning', msg: $sce.trustAsHtml('<b>Warning!</b> Best check your self, you\'re not looking too good.') },
            { type: 'info', msg: $sce.trustAsHtml('<b>Heads up!</b> This alert needs your attention, but it\'s not super important.') }
        ];

        $scope.closeAlert = function (index) {
            $scope.alerts.splice(index, 1);
        };
    })
    .controller('gnap-pagination', function ($scope) {
        $scope.totalItems = 164;
        $scope.currentPage = 4;
    })
    .controller('gnap-collapse', function ($scope) {
        $scope.isCollapsed = false;
    })
    .controller('gnap-default-notification', function ($scope, notification) {
        $scope.notify = function () {
            notification.show({
                title: 'This is a default notification',
                text: 'This will fade out after a certain amount of time. Vivamus eget tincidunt velit. Cum sociis natoque penatibus et, nascetur ridiculus mus.'
            });
        };

        $scope.remove = function () {
            notification.removeAll();
        };
    })
    .controller('gnap-success-notification', function ($scope, notification) {
        $scope.notify = function () {
            notification.show({
                type: 'success',
                title: 'This is a success notification',
                text: 'This will fade out after a certain amount of time. Vivamus eget tincidunt velit. Cum sociis natoque penatibus et, nascetur ridiculus mus.'
            });
        };

        $scope.remove = function () {
            notification.removeAll();
        };
    })
    .controller('gnap-error-notification', function ($scope, notification) {
        $scope.notify = function () {
            notification.show({
                type: 'error',
                title: 'This is an error notification',
                text: 'This will fade out after a certain amount of time. Vivamus eget tincidunt velit. Cum sociis natoque penatibus et, nascetur ridiculus mus.'
            });
        };

        $scope.remove = function () {
            notification.removeAll();
        };
    })
    .controller('gnap-date-picker', function ($scope) {
        $scope.date = new Date();
    })
    .controller('gnap-date-range-picker', [
        '$scope', function ($scope) {
            $scope.range = {
                dateStart: new Date(2014, 0, 7),
                dateEnd: new Date(2014, 7, 14)
            };

            $scope.iconPosition = "left";
        }
    ])
    .controller('gnap-time-picker', function ($scope) {
        $scope.sometime = new Date(2014, 1, 1, 10, 30, 0);
    })
    .controller('gnap-choice-toggle', function ($scope) {
        $scope.value = true;
    })
    .directive('exampleLink', function () {
        return {
            restrict: 'A',
            link: function (scope, element, attrs) {
                element.addClass("label");
                element.addClass("label-default");
                element.attr('target', '_blank');
                element.prepend('<i class="icon-external-link"></i>&nbsp; View on ' + attrs['source']);

                if (!attrs['href']) {
                    var url = '#';
                    switch (attrs['source']) {
                        case 'ui-bootstrap':
                            {
                                url = 'http://angular-ui.github.io/bootstrap';
                                break;
                            }
                        case 'ngBootbox':
                            {
                                url = 'https://github.com/eriktufvesson/ngbootbox';
                                break;
                            }
                        case 'gnap-theme':
                            {
                                url = 'https://github.com/infrabel/GNaP.Web.Themes';
                                break;
                            }
                        case 'gnap-theme-angular':
                            {
                                url = 'https://github.com/infrabel/GNaP.Web.Themes';
                                break;
                            }
                    }
                    element.attr('href', url);
                }
            }
        };
    });