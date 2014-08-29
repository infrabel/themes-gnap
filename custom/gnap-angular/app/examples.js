angular
    .module('gnap-app', ['gnap', 'ui.bootstrap', 'ngBootbox', 'localytics.directives', 'datatables'])
    .config([
        '$tooltipProvider', function ($tooltipProvider) {
            $tooltipProvider.options({
                appendToBody: true
            });
        }
    ])
    .controller('main', [
        '$scope', 'sidebarService', 'breadcrumbService', function ($scope, sidebarService, breadcrumbService) {

            $scope.search = function (keywords) {
                alert('Searching for ' + keywords);
            }

            // configure breadcrumbs
            breadcrumbService.setBreadcrumbs([
                {
                    title: 'Home',
                    click: function () {
                        alert('Going to the home page ...');
                    }
                },
                {
                    title: 'Examples',
                    click: function () {
                        alert('Going to the examples page ...');
                    }
                }
            ]);

            // configure shortcuts
            sidebarService.setShortcuts([
                {
                    title: 'Statistics',
                    buttonClass: 'btn btn-success',
                    icon: 'icon-lightbulb',
                    click: function () {
                        alert('Going to the statistics page ...');
                    }
                },
                {
                    title: 'Edit',
                    buttonClass: 'btn btn-info',
                    icon: 'icon-pencil',
                    click: function () {
                        alert('Going to the edit page ...');
                    }
                },
                {
                    title: 'Profile',
                    buttonClass: 'btn btn-warning',
                    icon: 'icon-group',
                    click: function () {
                        alert('Going to the profile page ...');
                    }
                },
                {
                    title: 'Administration',
                    buttonClass: 'btn btn-danger',
                    icon: 'icon-cogs',
                    click: function () {
                        alert('Going to the administration page ...');
                    }
                }
            ]);

            // configure menu items
            sidebarService.setItems([
                {
                    key: 'about',
                    title: 'About',
                    icon: 'icon-lightbulb',
                    click: function () {
                        alert('Going to the about page ...');
                    }
                },
                {
                    key: 'examples',
                    title: 'Examples',
                    icon: 'icon-heart',
                    active: true,
                    click: function () {
                        alert('Going to the examples page ...');
                    }
                },
                {
                    key: 'typography',
                    title: 'Typography',
                    icon: 'icon-text-width',
                    click: function () {
                        alert('Going to the typography page ...');
                    }
                },
                {
                    key: 'error-404',
                    title: 'Error 404',
                    icon: 'icon-circle',
                    click: function () {
                        alert('Going to the error 404 page ...');
                    }
                },
                {
                    key: 'error-500',
                    title: 'Error 500',
                    icon: 'icon-circle-blank',
                    click: function () {
                        alert('Going to the error 500 page ...');
                    }
                },
                {
                    key: 'login',
                    title: 'Login',
                    icon: 'icon-user',
                    click: function () {
                        alert('Going to the Login page ...');
                    }
                },
                {
                    key: 'multi-level-menu',
                    title: 'Multi Level Menu',
                    icon: 'icon-globe',
                    items: [
                        {
                            key: 'level2',
                            title: 'Level 2',
                            icon: 'icon-leaf',
                            click: function () {
                                alert('Going to the level2 page ...');
                            }
                        },
                        {
                            key: 'level-2-with-sub',
                            title: 'Level 2 with Sub',
                            icon: 'icon-pencil',
                            items: [
                                {
                                    key: 'level-3',
                                    title: 'Level 3',
                                    icon: 'icon-plus',
                                    click: function () {
                                        alert('Going to the Level 3 page ...');
                                    }
                                },
                                {
                                    key: 'next-level-3',
                                    title: 'Next Level 3',
                                    icon: 'icon-eye-open',
                                    click: function () {
                                        alert('Going to the Next Level 3 page ...');
                                    }
                                }
                            ]
                        }
                    ]
                }
            ]);
            sidebarService.setActive('about/child1');
        }
    ])
    .controller('gnap-default-notification', function ($scope, gritter) {
        $scope.notify = function () {
            gritter.show({
                title: 'This is a default notification',
                text: 'This will fade out after a certain amount of time. Vivamus eget tincidunt velit. Cum sociis natoque penatibus et, nascetur ridiculus mus.'
            });
        };
        $scope.remove = function () {
            gritter.removeAll();
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
    .controller('gnap-alerts', function ($scope) {
        $scope.alerts = [
            { type: 'danger', msg: 'Oh snap! Change a few things up and try submitting again.' },
            { type: 'success', msg: 'Well done! You successfully read this important alert message.' },
            { type: 'warning', msg: 'Warning! Best check your self, you\'re not looking too good.' },
            { type: 'info', msg: 'Heads up! This alert needs your attention, but it\'s not super important.' }
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
    .controller('gnap-default-notification', function ($scope, gritter) {
        $scope.notify = function () {
            gritter.show({
                title: 'This is a default notification',
                text: 'This will fade out after a certain amount of time. Vivamus eget tincidunt velit. Cum sociis natoque penatibus et, nascetur ridiculus mus.'
            });
        };
        $scope.remove = function () {
            gritter.removeAll();
        };
    })
    .controller('gnap-success-notification', function ($scope, gritter) {
        $scope.notify = function () {
            gritter.show({
                type: 'success',
                title: 'This is a success notification',
                text: 'This will fade out after a certain amount of time. Vivamus eget tincidunt velit. Cum sociis natoque penatibus et, nascetur ridiculus mus.'
            });
        };
        $scope.remove = function () {
            gritter.removeAll();
        };
    })
    .controller('gnap-error-notification', function ($scope, gritter) {
        $scope.notify = function () {
            gritter.show({
                type: 'error',
                title: 'This is an error notification',
                text: 'This will fade out after a certain amount of time. Vivamus eget tincidunt velit. Cum sociis natoque penatibus et, nascetur ridiculus mus.'
            });
        };
        $scope.remove = function () {
            gritter.removeAll();
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
    });