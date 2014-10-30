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
            controller: 'ForbiddenController as vm'
        },
        title: {
            text: 'Forbidden'
        },
        breadcrumb: {
            title: 'Forbidden'
        }
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
})();
