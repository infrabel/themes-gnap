(function () {
    angular
        .module('gnap-example-app')
        .controller('Error404Controller', Error404Controller);

    Error404Controller.$inject = ['sidebarService', 'breadcrumbsService'];

    function Error404Controller(sidebarService, breadcrumbsService) {

        // configure breadcrumbs
        breadcrumbsService.setBreadcrumbs([
            {
                title: 'Home',
                state: 'main'
            },
            {
                title: 'Error 404'
            }
        ]);

        sidebarService.setActive('error-404');
    };
})();