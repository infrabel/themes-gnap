'use strict';

/**
 * @desc shows link to more info about an example
 * @file example-link.directive.js
 * @example <a example-link source="gnap-theme-angular"></a>
 */
(function () {
    angular
        .module('gnap')
        .directive('exampleLink', exampleLink);

    function exampleLink() {

        return {
            restrict: 'A',
            link: link
        };

        function link(scope, element, attrs) {
            element.addClass('label');
            element.addClass('label-default');
            element.attr('target', '_blank');
            element.prepend('<i class="icon-external-link"></i>&nbsp; View on ' + attrs['source']);

            if (!attrs['href']) {
                var url = '#';
                switch (attrs['source']) {
                    case 'ui-bootstrap':
                        {
                            url = 'http://angular-ui.github.io/bootstrap';
                            break;
                        }
                    case 'ngBootbox':
                        {
                            url = 'https://github.com/eriktufvesson/ngbootbox';
                            break;
                        }
                    case 'angular-select2':
                        {
                            url = 'https://github.com/angular-ui/ui-select2';
                            break;
                        }
                    case 'gnap-theme':
                        {
                            url = 'https://github.com/infrabel/themes-gnap';
                            break;
                        }
                    case 'gnap-theme-angular':
                        {
                            url = 'https://github.com/infrabel/themes-gnap';
                            break;
                        }

                    case 'ngprogress-lite':
                        {
                            url = 'https://github.com/voronianski/ngprogress-lite';
                            break;
                        }
                }
                element.attr('href', url);
            }
        }
    }
})();
