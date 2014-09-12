(function () {
    angular
        .module('gnap-example-app')
        .controller('AboutController', AboutController);

    AboutController.$inject = ['sidebarService', 'breadcrumbsService'];

    function AboutController(sidebarService, breadcrumbsService) {

        // configure breadcrumbs
        breadcrumbsService.setBreadcrumbs([
            {
                title: 'Home',
                url: '/'
            },
            {
                title: 'About'
            }
        ]);

        sidebarService.setActive('about');
    };
})();