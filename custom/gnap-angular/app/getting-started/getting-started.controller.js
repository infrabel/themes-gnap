(function () {
    angular
        .module('gnap-example-app')
        .controller('GettingStartedController', GettingStartedController);

    GettingStartedController.$inject = ['sidebarService', 'breadcrumbsService'];

    function GettingStartedController(sidebarService, breadcrumbsService) {

        // configure breadcrumbs
        breadcrumbsService.setBreadcrumbs([
            {
                title: 'Home',
                url: '/'
            },
            {
                title: 'Getting Started'
            }
        ]);

        sidebarService.setActive('getting-started');
    };
})();