'use strict';

(function () {
    angular
        .module('gnap-example-app')
        .config(stateConfiguration);

    var stateSettings = {
        name: 'main.typography',
        state: {
            url: '/typography',
            templateUrl: 'app/main/typography/typography.html',
            controller: 'TypographyController as vm'
        },
        title: {
            text: 'Typography'
        },
        breadcrumb: {
            title: 'Typography'
        },
        sidebarKey: 'typography'
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
})();
