'use strict';

(function () {
    angular
        .module('<%= appName %>')
        .config(stateConfiguration);

    var stateSettings = {
        name: 'main',
        state: {
            abstract: true,
            templateUrl: 'app/main/main.html',
            controller: 'MainController as vm'
        },
        breadcrumb: {
            titleTranslationId: 'main.breadcrumb',
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
        titleService.clearTitle();

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
                key: 'main.getting-started',
                titleTranslationId: 'sidebar.items.main.getting-started',
                icon: 'icon-fire',
                state: 'main.getting-started'
            }// ======= yeoman sidebar hook =======
             // Note: Do not remove the above hook if you wish the sidebar to remain working
        ]);
    }
})();
