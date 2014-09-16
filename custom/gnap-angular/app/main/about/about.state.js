(function () {
    angular
        .module('gnap-example-app')
        .config(stateConfig);

    var stateSettings = {
        name: 'main.about',
        state: {
            url: '/about',
            templateUrl: 'app/main/about/about.html',
            controller: 'AboutController'
        },
        breadcrumb: {
            title: 'About'
        },
        sidebarKey: 'about',
        translations: 'app/main/about',
    };

    stateSettings.state.onEnter = onEnter;
    stateSettings.state.onExit = onExit;

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
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
        stateSettings.state.resolve.translations = function($translatePartialLoader, $translate) {
            $translatePartialLoader.addPart(stateSettings.translations);
            return $translate.refresh();
        };
    };
})();
