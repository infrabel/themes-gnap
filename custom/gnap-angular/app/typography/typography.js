angular.module('gnap-app')
    .controller('TypographyController', ['sidebarService', 'breadcrumbsService', TypographyController]);

function TypographyController(sidebarService, breadcrumbsService) {

    // configure breadcrumbs
    breadcrumbsService.setBreadcrumbs([
        {
            title: 'Home',
            url: '/'
        },
        {
            title: 'Typography'
        }
    ]);

    sidebarService.setActive('typography');
};