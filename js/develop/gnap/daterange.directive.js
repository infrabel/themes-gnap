'use strict';

/**
 * @desc Date range
 * @file daterange.directive.js
 * @example <span gnap-daterange></span>
 */
(function () {
    angular
        .module('gnap')
        .directive('gnapDaterange', gnapDaterange);

    function gnapDaterange() {

        function link($scope) {
            $scope.formatDate = function (date) {
                if (date === undefined) {
                    return '';
                }

                var yy = date.getFullYear();
                var mm = date.getMonth() + 1;
                var dd = date.getDate();

                if (mm < 10) {
                    mm = '0' + mm;
                }
                if (dd < 10) {
                    dd = '0' + dd;
                }

                return dd + '/' + mm + '/' + yy;
            };

            $scope.onDateBeginChanged = function (date) {
                if (date > $scope.dateEnd || $scope.displayDateEnd === undefined) {
                    $scope.dateEnd = date;
                    $scope.displayDateEnd = $scope.formatDate($scope.dateEnd);
                }

                $scope.displayDateStart = $scope.formatDate(date);

                if ($scope.displayDateEnd === undefined) {
                    $scope.displayDateEnd = '';
                }

                $scope.displayRange = $scope.displayDateStart + ' - ' + $scope.displayDateEnd;
            };

            $scope.onDateEndChanged = function (date) {
                if (date < $scope.dateBegin || $scope.displayDateStart === undefined) {
                    $scope.dateBegin = date;
                    $scope.displayDateStart = $scope.formatDate($scope.dateBegin);
                }

                $scope.displayDateEnd = $scope.formatDate(date);

                if ($scope.displayDateStart === undefined) {
                    $scope.displayDateStart = '';
                }

                $scope.displayRange = $scope.displayDateStart + ' - ' + $scope.displayDateEnd;
            };

            $scope.displayDateStart = $scope.formatDate($scope.dateBegin);
            $scope.displayDateEnd = $scope.formatDate($scope.dateEnd);

            $scope.status = {
                isopen: false
            };

            $scope.$watch('dateBegin', function (date) { $scope.onDateBeginChanged(date); });

            $scope.$watch('dateEnd', function (date) { $scope.onDateEndChanged(date); });

            $scope.open = function ($event) {
                $event.preventDefault();
                $event.stopPropagation();
                $scope.status.isopen = true;
            };

            $scope.toggle = function ($event) {
                $event.preventDefault();
                $event.stopPropagation();
                $scope.status.isopen = !$scope.status.isopen;
            };

            $scope.oldStartDate = $scope.dateBegin;
            $scope.oldEndDate = $scope.dateEnd;

            $scope.cancel = function ($event) {
                $scope.dateBegin = $scope.oldStartDate;
                $scope.dateEnd = $scope.oldEndDate;
            };
        }

        return {
            restrict: 'AE',
            scope: {
                dateBegin: '=',
                dateEnd: '=',
                iconPosition: '@'
            },
            template:
            '<span>' +
              '<div class="input-group col-xs-10 col-sm-5 no-padding-left no-padding-right">' +
                '<span ng-show="iconPosition==\'left\'" class="input-group-addon" ng-click="toggle($event)">' +
                  '<i class="icon-calendar bigger-110"></i>' +
                '</span>' +
                '<input type="text" class="form-control input-mask-time" ng-model="displayRange" ng-change="inputChanged(this)" ng-click="open($event)" />' +
                '<span ng-show="iconPosition==\'right\'" class="input-group-addon" ng-click="toggle($event)">' +
                  '<i class="icon-calendar bigger-110"></i>' +
                '</span>' +
              '</div>' +
              '<div class="dropdown" is-open="status.isopen">' +
                '<ul style="top:32px;" class="dropdown-menu">' +
                  '<li>' +
                    '<div class="ranges" style="display: inline-block"><div class="range_inputs">' +
                      '<div class="daterangepicker-from-to" style="float:left;">' +
                        '<div style="float:left; margin-right:4px;">' +
                          '<div><label>FROM</label></div>' +
                          '<div><input class="input-small" type="text" ng-model="displayDateStart" disabled="disabled" /></div>' +
                        '</div>' +
                        '<div style="float:left;">' +
                          '<div><label>TO</label></div>' +
                          '<div><input class="input-small" type="text" ng-model="displayDateEnd" disabled="disabled" /></div>' +
                        '</div>' +
                        '<div style="float:clear;">&nbsp;</div>' +
                        '<div>' +
                          '<div>' +
                            '<button class="btn-success applyBtn btn btn-sm">Apply</button>' +
                            '&nbsp;' +
                            '<button class="btn-default cancelBtn btn btn-sm" ng-click="cancel($event)">Cancel</button>' +
                          '</div>' +
                        '</div>' +
                      '</div>' +
                      '<div class="daterangepicker-datepicker" style="float: left;">' +
                        '<div class="calendar-date" datepicker ng-model="dateBegin" show-weeks="false" ng-click="$event.stopPropagation()"></div>' +
                      '</div>' +
                      '<div class="daterangepicker-datepicker" style="float: left;">' +
                        '<div class="calendar-date" datepicker ng-model="dateEnd" show-weeks="false" ng-click="$event.stopPropagation()"></div>' +
                      '</div>' +
                    '</div></div>' +
                  '</li>' +
                '</ul>' +
              '</div>' +
            '</span>',
            link: link
        };
    }
})();
