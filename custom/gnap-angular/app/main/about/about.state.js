(function () {
    angular
        .module('gnap-example-app')
        .config(stateConfiguration);

    var stateSettings = {
        name: 'main.about',
        state: {
            url: '/about',
            templateUrl: 'app/main/about/about.html',
            controller: 'AboutController as vm'
        },
        breadcrumb: {
            titleTranslationId: 'about'
        },
        sidebarKey: 'about',
        translations: 'app/main/about'
    };

    stateSettings.state.onEnter = onEnter;
    stateSettings.state.onExit = onExit;

    stateConfiguration.$inject = ['$stateProvider'];

    function stateConfiguration($stateProvider) {
        $stateProvider.state(stateSettings.name, stateSettings.state);
    };

    onEnter.$inject = ['breadcrumbsService', 'sidebarService'];

    function onEnter(breadcrumbsService, sidebarService) {
        breadcrumbsService.addBreadcrumb(stateSettings.breadcrumb);
        sidebarService.setSelected(stateSettings.sidebarKey);
    };

    onExit.$inject = ['breadcrumbsService', 'sidebarService'];

    function onExit(breadcrumbsService, sidebarService) {
        breadcrumbsService.removeLastBreadcrumb();
        sidebarService.clearSelected();
    };

    if (stateSettings.translations) {
        stateSettings.state.resolve = stateSettings.state.resolve || {};
        stateSettings.state.resolve.translations = function ($translatePartialLoader, $translate) {
            $translatePartialLoader.addPart(stateSettings.translations);
            return $translate.refresh();
        };
    };
})();
