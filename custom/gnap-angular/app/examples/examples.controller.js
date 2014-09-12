(function () {
    angular
        .module('gnap-example-app')
        .controller('ExamplesController', ExamplesController);

    ExamplesController.$inject = ['sidebarService', 'breadcrumbsService'];

    function ExamplesController(sidebarService, breadcrumbsService) {

        // configure breadcrumbs
        breadcrumbsService.setBreadcrumbs([
            {
                title: 'Home',
                url: '/'
            },
            {
                title: 'Examples'
            }
        ]);

        sidebarService.setActive('examples');
    };
})();