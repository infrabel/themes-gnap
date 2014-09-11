(function () {
    angular
        .module('gnap-app')
        .controller('ExamplesController', ['sidebarService', 'breadcrumbsService', ExamplesController]);

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