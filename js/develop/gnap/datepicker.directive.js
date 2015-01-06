'use strict';

/**
 * @desc Date picker
 * @file datepicker.directive.js
 * @example <span gnap-datepicker></span>
 */
(function () {
    angular
        .module('gnap')
        .directive('gnapDatepicker', gnapDatepicker);

    angular
        .module('template/datepicker/day.html')
        .run(gnapDatepickerDayTemplate);

    angular
        .module('template/datepicker/month.html')
        .run(gnapDatepickerMonthTemplate);

    angular
        .module('template/datepicker/year.html')
        .run(gnapDatepickerYearTemplate);

    gnapDatepickerDayTemplate.$inject = ['$templateCache'];
    gnapDatepickerMonthTemplate.$inject = ['$templateCache'];
    gnapDatepickerYearTemplate.$inject = ['$templateCache'];

    function gnapDatepicker() {

        // TODO: ng-required and other should be passed in from the outside, not hardcoded
        return {
            restrict: 'AE',
            scope: {
                date: '=',
                iconPosition: '@',
                dateOptions: '@'
            },
            template:
                '<p class="input-group">' +
                '    <span ng-show="iconPosition==\'left\'" class="input-group-addon" ng-click="toggle($event)">' +
                '        <i class="icon-calendar bigger-110"></i>' +
                '    </span>' +
                '    <input type="text" class="form-control" datepicker-popup="dd-MM-yyyy" ng-model="date" is-open="opened" datepicker-options="dateOptions" ng-required="true" ng-click="open($event)" close-text="Close" show-button-bar="false" />' +
                '    <span ng-show="iconPosition==\'right\'" class="input-group-addon" ng-click="toggle($event)">' +
                '        <i class="icon-calendar bigger-110"></i>' +
                '    </span>' +
                '</p>',
            link: link
        };

        function link(scope, element, attrs) {
            scope.opened = false;

            scope.open = function ($event) {
                $event.preventDefault();
                $event.stopPropagation();
                scope.opened = true;
            };

            scope.toggle = function ($event) {
                $event.preventDefault();
                $event.stopPropagation();
                scope.opened = !scope.opened;
            };
        }
    }

    function gnapDatepickerDayTemplate($templateCache) {

        /* jshint ignore:start */
        $templateCache.put("template/datepicker/day.html",
            "<div class=\"datepicker datepicker-days\">\n" +
            "  <table role=\"grid\" aria-labelledby=\"{{uniqueId}}-title\" aria-activedescendant=\"{{activeDateId}}\" class=\"table-condensed\">\n" +
            "    <thead>\n" +
            "      <tr>\n" +
            "        <th ng-click=\"move(-1)\" tabindex=\"-1\"><i class=\"icon-arrow-left\"></i></th>\n" +
            "        <th colspan=\"{{5 + showWeeks}}\" class=\"switch\" id=\"{{uniqueId}}-title\" role=\"heading\" aria-live=\"assertive\" aria-atomic=\"true\" ng-click=\"toggleMode()\" tabindex=\"-1\"><strong>{{title}}</strong></th>\n" +
            "        <th ng-click=\"move(1)\" tabindex=\"-1\"><i class=\"icon-arrow-right\"></i></th>\n" +
            "      </tr>\n" +
            "      <tr>\n" +
            "        <th ng-show=\"showWeeks\" class=\"text-center\"></th>\n" +
            "        <th ng-repeat=\"label in labels track by $index\" class=\"text-center\"><small aria-label=\"{{label.full}}\">{{label.abbr}}</small></th>\n" +
            "      </tr>\n" +
            "    </thead>\n" +
            "    <tbody>\n" +
            "      <tr ng-repeat=\"row in rows track by $index\">\n" +
            "        <td ng-show=\"showWeeks\" class=\"text-center h6\"><em>{{ weekNumbers[$index] }}</em></td>\n" +
            "        <td ng-repeat=\"dt in row track by dt.date\" class=\"text-center day\" role=\"gridcell\" id=\"{{dt.uid}}\" aria-disabled=\"{{!!dt.disabled}}\" ng-class=\"{'active': dt.selected, 'btn-default': isActive(dt), 'text-muted': dt.secondary}\" ng-click=\"select(dt.date)\" ng-disabled=\"dt.disabled\" tabindex=\"-1\">\n" +
            "          {{dt.label}}\n" +
            "        </td>\n" +
            "      </tr>\n" +
            "    </tbody>\n" +
            "  </table>\n" +
            "</div>");
        /* jshint ignore:end */
    }

    function gnapDatepickerMonthTemplate($templateCache) {

        /* jshint ignore:start */
        $templateCache.put("template/datepicker/month.html",
            "<div class=\"datepicker datepicker-months\">\n" +
            "  <table role=\"grid\" aria-labelledby=\"{{uniqueId}}-title\" aria-activedescendant=\"{{activeDateId}}\" class=\"table-condensed\">\n" +
            "    <thead>\n" +
            "      <tr>\n" +
            "        <th ng-click=\"move(-1)\" tabindex=\"-1\"><i class=\"icon-arrow-left\"></i></th>\n" +
            "        <th  id=\"{{uniqueId}}-title\" role=\"heading\" aria-live=\"assertive\" aria-atomic=\"true\" ng-click=\"toggleMode()\" tabindex=\"-1\"><strong>{{title}}</strong></th>\n" +
            "        <th ng-click=\"move(1)\" tabindex=\"-1\"><i class=\"icon-arrow-right\"></i></th>\n" +
            "      </tr>\n" +
            "    </thead>\n" +
            "    <tbody>\n" +
            "      <tr ng-repeat=\"row in rows track by $index\">\n" +
            "        <td ng-repeat=\"dt in row track by dt.date\" class=\"text-center month\" role=\"gridcell\" id=\"{{dt.uid}}\" aria-disabled=\"{{!!dt.disabled}}\" ng-class=\"{'active': dt.selected, 'btn-default': isActive(dt)}\" ng-click=\"select(dt.date)\" ng-disabled=\"dt.disabled\" tabindex=\"-1\">\n" +
            "          {{dt.label}}\n" +
            "        </td>\n" +
            "      </tr>\n" +
            "    </tbody>\n" +
            "  </table>\n" +
            "</div>");
        /* jshint ignore:end */
    }

    function gnapDatepickerYearTemplate($templateCache) {

        /* jshint ignore:start */
        $templateCache.put("template/datepicker/year.html",
            "<div class=\"datepicker datepicker-years\">\n" +
            "  <table role=\"grid\" aria-labelledby=\"{{uniqueId}}-title\" aria-activedescendant=\"{{activeDateId}}\" class=\"table-condensed\">\n" +
            "    <thead>\n" +
            "      <tr>\n" +
            "        <th ng-click=\"move(-1)\" tabindex=\"-1\"><i class=\"icon-arrow-left\"></i></th>\n" +
            "        <th colspan=\"3\" id=\"{{uniqueId}}-title\" role=\"heading\" aria-live=\"assertive\" aria-atomic=\"true\" ng-click=\"toggleMode()\" tabindex=\"-1\"><strong>{{title}}</strong></th>\n" +
            "        <th ng-click=\"move(1)\" tabindex=\"-1\"><i class=\"icon-arrow-right\"></i></th>\n" +
            "      </tr>\n" +
            "    </thead>\n" +
            "    <tbody>\n" +
            "      <tr ng-repeat=\"row in rows track by $index\">\n" +
            "        <td ng-repeat=\"dt in row track by dt.date\" class=\"text-center year\" role=\"gridcell\" id=\"{{dt.uid}}\" aria-disabled=\"{{!!dt.disabled}}\" ng-class=\"{'active': dt.selected, 'btn-default': isActive(dt)}\" ng-click=\"select(dt.date)\" ng-disabled=\"dt.disabled\" tabindex=\"-1\">\n" +
            "          {{dt.label}}\n" +
            "        </td>\n" +
            "      </tr>\n" +
            "    </tbody>\n" +
            "  </table>\n" +
            "</div>");
        /* jshint ignore:end */
    }
})();
