'use strict';

(function () {
    angular
        .module('gnap-example-app')
        .config(stateConfiguration);

    var stateSettings = {
        name: 'main',
        state: {
            abstract: true,
            templateUrl: 'app/main/main.html',
            controller: 'MainController as main'
        },
        title: {
            text: 'Home'
        },
        breadcrumb: {
            title: 'Home',
            url: '/'
        },
        translations: 'app/main'
    };

    stateSettings.state.onEnter = onEnter;
    stateSettings.state.onExit = onExit;

    stateConfiguration.$inject = ['$stateProvider'];

    function stateConfiguration($stateProvider) {
        $stateProvider.state(stateSettings.name, stateSettings.state);
    }

    onEnter.$inject = ['titleService', 'breadcrumbsService', 'sidebarService'];

    function onEnter(titleService, breadcrumbsService, sidebarService) {
        titleService.setTitle(stateSettings.title);

        setupSidebarShortcuts(sidebarService);
        setupSidebarItems(sidebarService);

        breadcrumbsService.addBreadcrumb(stateSettings.breadcrumb);
    }

    onExit.$inject = ['titleService', 'breadcrumbsService', 'sidebarService'];

    function onExit(titleService, breadcrumbsService, sidebarService) {
        titleService.clearTitle();

        sidebarService.clearShortcuts();
        sidebarService.clearItems();

        breadcrumbsService.removeLastBreadcrumb();
    }

    if (stateSettings.translations) {
        stateSettings.state.resolve = stateSettings.state.resolve || {};
        stateSettings.state.resolve.translations = refreshTranslations;
    }

    refreshTranslations.$inject = ['$translatePartialLoader', '$translate'];

    function refreshTranslations($translatePartialLoader, $translate) {
        $translatePartialLoader.addPart(stateSettings.translations);
        return $translate.refresh();
    }

    function setupSidebarShortcuts(sidebarService) {
        sidebarService.setShortcuts([
            {
                titleTranslationId: 'sidebar.shortcuts.statistics',
                buttonClass: 'btn btn-success',
                icon: 'icon-signal',
                click: function () {
                    window.alert('Going to the statistics page ...');
                }
            },
            {
                titleTranslationId: 'sidebar.shortcuts.edit',
                buttonClass: 'btn btn-info',
                icon: 'icon-pencil',
                click: function () {
                    window.alert('Going to the edit page ...');
                }
            },
            {
                titleTranslationId: 'sidebar.shortcuts.profile',
                buttonClass: 'btn btn-warning',
                icon: 'icon-group',
                click: function () {
                    window.alert('Going to the profile page ...');
                }
            },
            {
                titleTranslationId: 'sidebar.shortcuts.administration',
                buttonClass: 'btn btn-danger',
                icon: 'icon-cogs',
                click: function () {
                    window.alert('Going to the administration page ...');
                }
            }
        ]);
    }

    function setupSidebarItems(sidebarService) {
        sidebarService.setItems([
            {
                key: 'about',
                titleTranslationId: 'sidebar.items.about',
                icon: 'icon-lightbulb',
                state: 'main.about'
            },
            {
                key: 'getting-started',
                titleTranslationId: 'sidebar.items.getting-started',
                icon: 'icon-fire',
                state: 'main.getting-started'
            },
            {
                key: 'examples',
                titleTranslationId: 'sidebar.items.examples',
                icon: 'icon-heart',
                state: 'main.examples'
            },
            {
                key: 'typography',
                titleTranslationId: 'sidebar.items.typography',
                icon: 'icon-text-width',
                state: 'main.typography'
            },
            {
                key: 'error-404',
                titleTranslationId: 'sidebar.items.error-404',
                icon: 'icon-circle',
                state: 'main.error-404'
            },
            {
                key: 'error-500',
                titleTranslationId: 'sidebar.items.error-500',
                icon: 'icon-circle-blank',
                state: 'main.error-500'
            },
            {
                key: 'secure',
                titleTranslationId: 'sidebar.items.secure',
                icon: 'icon-lock',
                state: 'main.secure'
            },
            {
                key: 'unauthorized',
                titleTranslationId: 'sidebar.items.unauthorized',
                icon: 'icon-ban-circle',
                state: 'main.unauthorized'
            },
            {
                key: 'multi-level-menu',
                titleTranslationId: 'sidebar.items.multi-level-menu',
                icon: 'icon-globe',
                items: [
                    {
                        key: 'level-2',
                        titleTranslationId: 'sidebar.items.level-2',
                        icon: 'icon-leaf',
                        click: function () {
                            window.alert('Going to the level2 page ...');
                            sidebarService.setSelected('multi-level-menu/level-2');
                        }
                    },
                    {
                        key: 'level-2-with-sub',
                        titleTranslationId: 'sidebar.items.level-2-with-sub',
                        icon: 'icon-pencil',
                        items: [
                            {
                                key: 'level-3',
                                titleTranslationId: 'sidebar.items.level-3',
                                icon: 'icon-plus',
                                click: function () {
                                    window.alert('Going to the Level 3 page ...');
                                    sidebarService.setSelected('multi-level-menu/level-2-with-sub/level-3');
                                }
                            },
                            {
                                key: 'next-level-3',
                                titleTranslationId: 'sidebar.items.next-level-3',
                                icon: 'icon-eye-open',
                                click: function () {
                                    window.alert('Going to the Next Level 3 page ...');
                                    sidebarService.setSelected('multi-level-menu/level-2-with-sub/next-level-3');
                                }
                            }
                        ]
                    }
                ]
            }
        ]);
    }
})();
