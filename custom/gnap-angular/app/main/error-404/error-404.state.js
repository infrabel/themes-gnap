(function () {
    angular
        .module('gnap-example-app')
        .config(stateConfiguration);

    var stateSettings = {
        name: 'main.error-404',
        state: {
            url: '/error-404',
            templateUrl: 'app/main/error-404/error-404.html',
            controller: 'Error404Controller as vm'
        },
        breadcrumb: {
            title: 'Error 404'
        },
        sidebarKey: 'error-404'
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
