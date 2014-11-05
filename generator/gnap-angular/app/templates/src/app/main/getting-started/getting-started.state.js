'use strict';

(function () {
    angular
        .module('<%= appName %>')
        .config(stateConfiguration);

    var stateSettings = {
        name: 'main.getting-started',
        state: {
            url: '/getting-started',
            templateUrl: 'app/main/getting-started/getting-started.html',
            controller: 'MainGettingStartedController as vm'
        },
        title: {
            textTranslationId: 'main.getting-started.title'
        },
        breadcrumb: {
            titleTranslationId: 'main.getting-started.breadcrumb'
        },
        sidebarKey: 'main.getting-started',
        translations: 'app/main/getting-started'
    };

    stateSettings.state.onEnter = onEnter;
    stateSettings.state.onExit = onExit;

    stateConfiguration.$inject = ['$stateProvider'];

    function stateConfiguration($stateProvider) {
        $stateProvider.state(stateSettings.name, stateSettings.state);
    }

    onEnter.$inject = ['titleService', 'breadcrumbsService', 'sidebarService'];

    function onEnter(titleService, breadcrumbsService, sidebarService) {
        titleService.appendTitle(stateSettings.title);

        breadcrumbsService.addBreadcrumb(stateSettings.breadcrumb);
        sidebarService.setSelected(stateSettings.sidebarKey);
    }

    onExit.$inject = ['titleService', 'breadcrumbsService', 'sidebarService'];

    function onExit(titleService, breadcrumbsService, sidebarService) {
        titleService.removeLastTitle();

        breadcrumbsService.removeLastBreadcrumb();
        sidebarService.clearSelected();
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
})();
