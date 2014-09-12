(function () {
    angular
        .module('gnap-example-app')
        .controller('Error500Controller', Error500Controller);

    Error500Controller.$inject = ['sidebarService', 'breadcrumbsService'];

    function Error500Controller(sidebarService, breadcrumbsService) {

        // configure breadcrumbs
        breadcrumbsService.setBreadcrumbs([
            {
                title: 'Home',
                state: 'main'
            },
            {
                title: 'Error 500'
            }
        ]);

        sidebarService.setActive('error-500');
    };
})();