(function () {
    angular
        .module('gnap-example-app')
        .config(stateConfig);

    var stateSettings = {
        name: 'main.examples',
        state: {
            url: '/examples',
            templateUrl: 'app/examples/examples.html',
            controller: 'ExamplesController'
        },
        breadcrumb: {
            title: 'Examples'
        },
        sidebarKey: 'examples'
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
})();
