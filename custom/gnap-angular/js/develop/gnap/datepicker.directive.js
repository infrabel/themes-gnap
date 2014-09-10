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
        .run(['$templateCache', gnapDatepickerTemplate]);

    function gnapDatepicker() {

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
        };

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
    };

    function gnapDatepickerTemplate($templateCache) {

        $templateCache.put('template/datepicker/day.html',
            '<table class="datepicker" role="grid" aria-labelledby="{{uniqueId}}-title" aria-activedescendant="{{activeDateId}}">\n' +
            '  <thead>\n' +
            '    <tr>\n' +
            '      <th><button type="button" class="datepicker-day" ng-click="move(-1)" tabindex="-1"><i class="icon-arrow-left"></i></button></th>\n' +
            '      <th colspan="{{5 + showWeeks}}"><button id="{{uniqueId}}-title" role="heading" aria-live="assertive" aria-atomic="true" type="button" class="datepicker-day" ng-click="toggleMode()" tabindex="-1" style="width:100%;"><strong>{{title}}</strong></button></th>\n' +
            '      <th><button type="button" class="datepicker-day" ng-click="move(1)" tabindex="-1"><i class="icon-arrow-right"></i></button></th>\n' +
            '    </tr>\n' +
            '    <tr>\n' +
            '      <th ng-show="showWeeks" class="text-center"></th>\n' +
            '      <th ng-repeat="label in labels track by $index" class="text-center"><small aria-label="{{label.full}}">{{label.abbr}}</small></th>\n' +
            '    </tr>\n' +
            '  </thead>\n' +
            '  <tbody>\n' +
            '    <tr ng-repeat="row in rows track by $index">\n' +
            '      <td ng-show="showWeeks" class="text-center h6"><em>{{ weekNumbers[$index] }}</em></td>\n' +
            '      <td ng-repeat="dt in row track by dt.date" class="text-center datepicker-cell" ng-class="{active: isActive(dt)}" role="gridcell" id="{{dt.uid}}" aria-disabled="{{!!dt.disabled}}">\n' +
            '        <button type="button" style="width:100%;" class="datepicker-day" ng-class="{\'btn-info\': dt.selected, active: isActive(dt)}" ng-click="select(dt.date)" ng-disabled="dt.disabled" tabindex="-1"><span ng-class="{\'text-muted\': dt.secondary, \'text-info\': dt.current}">{{dt.label}}</span></button>\n' +
            '      </td>\n' +
            '    </tr>\n' +
            '  </tbody>\n' +
            '</table>');
    };
})();
