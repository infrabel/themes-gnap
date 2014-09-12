(function () {
    angular
        .module('gnap-example-app')
        .controller('MainController', MainController);

    MainController.$inject = ['$scope', 'sidebarService'];

    function MainController($scope, sidebarService) {

        $scope.search = function () {
            alert('Searching for ' + $scope.keywords);
        }

        // configure shortcuts
        sidebarService.settings.shortcuts = [
            {
                title: 'Statistics',
                buttonClass: 'btn btn-success',
                icon: 'icon-signal',
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
        ];

        // configure menu items
        sidebarService.settings.items = [
            {
                key: 'about',
                title: 'About',
                icon: 'icon-lightbulb',
                state: 'main.about'
            },
            {
                key: 'examples',
                title: 'Examples',
                icon: 'icon-heart',
                active: true,
                state: 'main.examples'
            },
            {
                key: 'typography',
                title: 'Typography',
                icon: 'icon-text-width',
                state: 'main.typography'
            },
            {
                key: 'error-404',
                title: 'Error 404',
                icon: 'icon-circle',
                state: 'main.error-404'
            },
            {
                key: 'error-500',
                title: 'Error 500',
                icon: 'icon-circle-blank',
                state: 'main.error-500'
            },
            {
                key: 'login',
                title: 'Login',
                icon: 'icon-user',
                click: function () {
                    alert('Going to the Login page ...');
                    sidebarService.setActive('login');
                }
            },
            {
                key: 'multi-level-menu',
                title: 'Multi Level Menu',
                icon: 'icon-globe',
                items: [
                    {
                        key: 'level-2',
                        title: 'Level 2',
                        icon: 'icon-leaf',
                        click: function () {
                            alert('Going to the level2 page ...');
                            sidebarService.setActive('multi-level-menu/level-2');
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
                                    sidebarService.setActive('multi-level-menu/level-2-with-sub/level-3');
                                }
                            },
                            {
                                key: 'next-level-3',
                                title: 'Next Level 3',
                                icon: 'icon-eye-open',
                                click: function () {
                                    alert('Going to the Next Level 3 page ...');
                                    sidebarService.setActive('multi-level-menu/level-2-with-sub/next-level-3');
                                }
                            }
                        ]
                    }
                ]
            }
        ];
    };
})();