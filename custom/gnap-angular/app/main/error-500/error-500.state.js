(function () {
    angular
        .module('gnap-example-app')
        .config(stateConfiguration);

    var stateSettings = {
        name: 'main.error-500',
        state: {
            url: '/error-500',
            templateUrl: 'app/main/error-500/error-500.html',
            controller: 'Error500Controller'
        },
        breadcrumb: {
            title: 'Error 500'
        },
        sidebarKey: 'error-500'
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
})();
