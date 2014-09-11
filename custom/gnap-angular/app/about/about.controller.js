(function () {
    angular
        .module('gnap-app')
        .controller('AboutController', ['sidebarService', 'breadcrumbsService', AboutController]);

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