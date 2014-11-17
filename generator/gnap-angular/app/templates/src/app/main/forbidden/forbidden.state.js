'use strict';

(function () {
    angular
        .module('<%= appName %>')
        .config(stateConfiguration);

    var stateSettings = {
        name: 'main.forbidden',
        state: {
            url: '/forbidden',
            templateUrl: 'app/main/forbidden/forbidden.html',
            controller: 'MainForbiddenController as vm'
        },
        title: {
            textTranslationId: 'main.forbidden.title'
        },
        breadcrumb: {
            titleTranslationId: 'main.forbidden.breadcrumb'
        },
        translations: 'app/main/forbidden'
    };

    stateSettings.state.onEnter = onEnter;
    stateSettings.state.onExit = onExit;

    stateConfiguration.$inject = ['$stateProvider'];

    function stateConfiguration($stateProvider) {
        $stateProvider.state(stateSettings.name, stateSettings.state);
    }

    onEnter.$inject = ['titleService', 'breadcrumbsService'];

    function onEnter(titleService, breadcrumbsService) {
        titleService.appendTitle(stateSettings.title);

        breadcrumbsService.addBreadcrumb(stateSettings.breadcrumb);
    }

    onExit.$inject = ['titleService', 'breadcrumbsService'];

    function onExit(titleService, breadcrumbsService) {
        titleService.removeLastTitle();

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
})();
