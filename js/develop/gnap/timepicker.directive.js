'use strict';

/**
 * @desc displays a timepicker
 * @file timepicker.directive.js
 * @example <span gnap-timepicker></span>
 */
(function () {
    angular
        .module('gnap')
        .directive('gnapTimepicker', gnapTimepicker);

    angular
        .module('template/timepicker/timepicker.html')
        .run(['$templateCache', gnapTimepickerTemplate]);

    function gnapTimepicker() {

        return {
            restrict: 'AE',
            scope: {
                time: '=',
                iconPosition: '@'
            },
            template:
            '<span>' +
              '<div class="input-group bootstrap-timepicker col-xs-10 col-sm-5 no-padding-left no-padding-right">' +
                '<span ng-show="iconPosition==\'left\'" class="input-group-addon" ng-click="toggle($event)">' +
                  '<i class="icon-time bigger-110"></i>' +
                '</span>' +
                '<input id="timepicker1" type="text" class="form-control input-mask-time" ng-model="displayTime" ng-change="inputChanged(this)" ng-click="open($event)" />' +
                '<span ng-show="iconPosition==\'right\'" class="input-group-addon" ng-click="toggle($event)">' +
                  '<i class="icon-time bigger-110"></i>' +
                '</span>' +
              '</div>' +
              '<div class="dropdown" is-open="status.isopen">' +
                '<ul style="top:32px;" class="dropdown-menu">' +
                  '<li style="margin-left:26px;">' +
                    '<timepicker ng-model="time" hour-step="1" minute-step="1" show-meridian="false"></timepicker>' +
                  '</li>' +
                '</ul>' +
              '</div>' +
            '</span>',
            link: link
        };

        function link(scope) {
            scope.getDisplayTime = function (time) {
                var hh = time.getHours();
                var mm = time.getMinutes();

                if (hh < 10) { hh = '0' + hh; }
                if (mm < 10) { mm = '0' + mm; }

                return hh + ':' + mm;
            };

            scope.$watch('time', function (time) { scope.displayTime = scope.getDisplayTime(time); });

            scope.inputChanged = function () {
                var parseableTime = 'Thu, 01 Jan 1970 ' + scope.displayTime + ':00';

                var parsedTime = Date.parse(parseableTime);
                if (!isNaN(parsedTime)) {
                    scope.time = new Date(parsedTime);
                }
                scope.displayTime = scope.getDisplayTime(scope.time);
            };

            scope.status = {
                isopen: false
            };

            scope.open = function ($event) {
                $event.preventDefault();
                $event.stopPropagation();
                scope.status.isopen = true;
            };

            scope.toggle = function ($event) {
                $event.preventDefault();
                $event.stopPropagation();
                scope.status.isopen = !scope.status.isopen;
            };
        }
    }

    function gnapTimepickerTemplate($templateCache) {

        /* jshint ignore:start */
        $templateCache.put("template/timepicker/timepicker.html",
            "<table>\n" +
            " <tbody>\n" +
            "   <tr class=\"text-center\">\n" +
            "     <td><a ng-click=\"incrementHours()\" class=\"btn btn-link\"><span class=\"icon-chevron-up\"></span></a></td>\n" +
            "     <td>&nbsp;</td>\n" +
            "     <td><a ng-click=\"incrementMinutes()\" class=\"btn btn-link\"><span class=\"icon-chevron-up\"></span></a></td>\n" +
            "     <td ng-show=\"showMeridian\"></td>\n" +
            "   </tr>\n" +
            "   <tr>\n" +
            "     <td style=\"width:50px;\" class=\"form-group\" ng-class=\"{'has-error': invalidHours}\">\n" +
            "       <input type=\"text\" ng-model=\"hours\" ng-change=\"updateHours()\" class=\"form-control text-center\" ng-mousewheel=\"incrementHours()\" ng-readonly=\"readonlyInput\" maxlength=\"2\">\n" +
            "     </td>\n" +
            "     <td>:</td>\n" +
            "     <td style=\"width:50px;\" class=\"form-group\" ng-class=\"{'has-error': invalidMinutes}\">\n" +
            "       <input type=\"text\" ng-model=\"minutes\" ng-change=\"updateMinutes()\" class=\"form-control text-center\" ng-readonly=\"readonlyInput\" maxlength=\"2\">\n" +
            "     </td>\n" +
            "     <td ng-show=\"showMeridian\"><button type=\"button\" class=\"btn btn-default text-center\" ng-click=\"toggleMeridian()\">{{meridian}}</button></td>\n" +
            "   </tr>\n" +
            "   <tr class=\"text-center\">\n" +
            "     <td><a ng-click=\"decrementHours()\" class=\"btn btn-link\"><span class=\"icon-chevron-down\"></span></a></td>\n" +
            "     <td>&nbsp;</td>\n" +
            "     <td><a ng-click=\"decrementMinutes()\" class=\"btn btn-link\"><span class=\"icon-chevron-down\"></span></a></td>\n" +
            "     <td ng-show=\"showMeridian\"></td>\n" +
            "   </tr>\n" +
            " </tbody>\n" +
            "</table>");
        /* jshint ignore:end */
    }
})();
