angular
  .module('gnap', [])
    .factory('gritter', function(){
      return {
        show: function(options){
          $.gritter.add({
            title: options.title,
            text: options.text,
            class_name: 'gritter-' + (options.type || 'default')
            });
        },
        removeAll: function () {
          $.gritter.removeAll();
        }
      }
    })
    .directive('gnapPaginationPager', function () {
      return {
        restrict: 'AE',
        scope: {
          totalItems: '=',
          currentPage: '='
        },
        template: '<div pagination max-size="0" boundary-links="true" previous-text="&lsaquo;" ng-model="currentPage" total-items="totalItems" next-text="&rsaquo;" first-text="&laquo;" last-text="&raquo;"></div>'
      };
    })
    .directive('gnapPaginationConcise', function () {
      return {
        restrict: 'AE',
        scope: {
          totalItems: '=',
          currentPage: '='
        },
        template: '<div pagination max-size="5" boundary-links="true" total-items="totalItems" ng-model="currentPage" previous-text="&lsaquo;" next-text="&rsaquo;" first-text="&laquo;" last-text="&raquo;"></div>'
      };
    })
    .directive('gnapInputLimiter', function () {
      return {
        restrict: 'A',
        link: function (scope, element, attrs) {
          element.attr('maxlength', attrs['gnapInputLimiter']);

          // create a limiter box
          var limiterBox = $('<span class="limiter-box"></span>');

          // generate and assign a unique ID for the limiter box
          var limiterBoxId = 'limiter-box-' + $('span.limiter-box').length + 1;
          limiterBox.attr('id', limiterBoxId);

          $(element).before(limiterBox);

          $(element).inputlimiter({
                boxId: limiterBoxId,
                boxAttach: false,
                remTextHideOnBlur: false,
                remText: '%n',
                limitTextShow: false
            });
        }
      };
    })
    .directive('gnapMaskedInput', function () {
      return {
        restrict: 'A',
        link: function (scope, element, attrs) {
          element.mask(attrs['gnapMaskedInput']);
        }
      };
    })
    .directive('gnapWysiwyg', function () {
      return {
        restrict: 'A',
        link: function (scope, element, attrs) {

          element.addClass('wysiwyg-editor');
          
            function showErrorAlert (reason, detail) {
              var msg='';
              if (reason==='unsupported-file-type') { msg = "Unsupported format " +detail; }
              else {
                  console.log("error uploading file", reason, detail);
              }
              $('<div class="alert"> <button type="button" class="close" data-dismiss="alert">&times;</button>'+ 
               '<strong>File upload error</strong> '+msg+' </div>').prependTo('#alerts');
          }
      
          function supportsContentEditable() {
              //"contentEditable" in document.documentElement returns true in android 2
              var hasContentEditable = ("contentEditable" in document.documentElement);
              if (hasContentEditable) {
                  var ua = navigator.userAgent;
                  var match = ua.match(/Android\s([0-9\.]*)/);
                  if (!match) return true;
                  if (parseInt(match[1], 10) < 4)
                      return false;
                  return true;
              }
              return false;
          };
      
          if (supportsContentEditable()) {
              element.ace_wysiwyg(
              {
                  'wysiwyg': { fileUploadError: showErrorAlert }
              }).prev().addClass('wysiwyg-style1');
          } else {
              element.text("WSYWIG Feature not supported");
          }


        }
      };
    })
    .directive('gnapTooltipError', function () {
      return {
        restrict: 'A',
        compile: function (element) {
          element.addClass('tooltip-error');
        }
      };
    }).directive('gnapTooltipWarning', function () {
      return {
        restrict: 'A',
        compile: function (element) {
          element.addClass('tooltip-warning');
        }
      };
    }).directive('gnapTooltipSuccess', function () {
      return {
        restrict: 'A',
        compile: function (element) {
          element.addClass('tooltip-success');
        }
      };
    }).directive('gnapTooltipInfo', function () {
      return {
        restrict: 'A',
        compile: function (element) {
          element.addClass('tooltip-info');
        }
      };
    })
    .directive('gnapChoiceToggle', function () {
    return {
      restrict: 'AE',
      scope: {
        choice: '=',
        lang: '@'
      },
      template:   '<label><input name="switch-field-2" class="ace ace-switch" type="checkbox" ng-model="choice" ng-change="toggle()" /><span class="lbl"></span></label>',
      link: function(scope, element, attrs) {
        var labelNode = angular.element(element[0].childNodes[0].childNodes[1]);
        var inputNode = angular.element(element[0].childNodes[0].childNodes[0]);
        
        if (scope.lang == 'nl' || scope.lang == 'fr' || scope.lang == 'en') {
          labelNode.addClass(scope.lang);
          inputNode.addClass("ace-switch-7");
        } else {
          inputNode.addClass("ace-switch-6");
        }
        
        if (scope.choice == true) {
          inputNode.attr('checked', 'checked');
        } else {
          inputNode.removeAttr('checked');
        }
        
        scope.toggle = function () {
          scope.choice != scope.choice;
        };
      }
    };
  })
  .directive('gnapDatepicker', function () {
      return {
        restrict: 'AE',
        scope: {
          date: '=',
          iconPosition: '@',
          dateOptions: '@'
        },
        template: 
        '<p class="input-group">' +
          '<span ng-show="iconPosition==\'left\'" class="input-group-addon" ng-click="toggle($event)">' +
            '<i class="icon-calendar bigger-110"></i>' +
          '</span>' +
          '<input type="text" class="form-control" datepicker-popup="dd-MM-yyyy" ng-model="date" is-open="opened" datepicker-options="dateOptions" ng-required="true" ng-click="open($event)" close-text="Close" show-button-bar="false" />' +
          '<span ng-show="iconPosition==\'right\'" class="input-group-addon" ng-click="toggle($event)">' +
            '<i class="icon-calendar bigger-110"></i>' +
          '</span>' +
        '</p>',
        link: function(scope, element, attrs) {
          scope.opened = false;
                  
          scope.open = function ($event) {
            $event.preventDefault();
            $event.stopPropagation();
            scope.opened = true;
          };
          
          scope.toggle = function($event) {
            $event.preventDefault();
            $event.stopPropagation();
            scope.opened = !scope.opened; 
          };
        }
      };
    })
    .directive('gnapDateRange', [function () {
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
      link: function($scope, element, attrs) {    
        $scope.formatDate = function(date) {
          if (date == undefined)
            return;

          var yy = date.getFullYear();
          var mm = date.getMonth() + 1;
          var dd = date.getDate();
          
          if (mm < 10){
            mm = '0' + mm;
          }
          if (dd < 10){
            dd = '0' + dd;
          }
          
          return dd+"/"+mm+"/"+yy;
        };
        
        $scope.onDateBeginChanged = function (date) {
          if (date > $scope.dateEnd || $scope.displayDateEnd == undefined) {
            $scope.dateEnd = date;
            $scope.displayDateEnd = $scope.formatDate($scope.dateEnd);
          }
        
          $scope.displayDateStart = $scope.formatDate(date); 
          
          if ($scope.displayDateEnd == undefined)
            $scope.displayDateEnd = '';
          
          $scope.displayRange = $scope.displayDateStart + ' - ' + $scope.displayDateEnd;
        };

        $scope.onDateEndChanged = function (date) {
          if (date < $scope.dateBegin || $scope.displayDateStart == undefined) {
            $scope.dateBegin = date;
            $scope.displayDateStart = $scope.formatDate($scope.dateBegin);
          }
        
          $scope.displayDateEnd = $scope.formatDate(date); 
          
          if ($scope.displayDateStart == undefined)
            $scope.displayDateStart = '';
          
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
        
        $scope.toggle = function($event) {
          $event.preventDefault();
          $event.stopPropagation();
          $scope.status.isopen = !$scope.status.isopen;
        };
        
        $scope.oldStartDate = $scope.dateBegin;
        $scope.oldEndDate = $scope.dateEnd;
        
        $scope.cancel = function($event) {
          $scope.dateBegin = $scope.oldStartDate;
          $scope.dateEnd = $scope.oldEndDate;
        };
      }
    };
  }])
  .directive('gnapTimepicker', function () {
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
        link: function(scope, element, attrs) {     
          scope.getDisplayTime = function(time) { 
            var hh = time.getHours();
            var mm = time.getMinutes();
          
            if (hh < 10) {hh = "0"+hh;}
            if (mm < 10) {mm = "0"+mm;}
            
            return hh+":"+mm;
          };
          
          scope.$watch('time', function(time) { scope.displayTime = scope.getDisplayTime(time); });
                      
          scope.inputChanged = function () {
            var parseableTime = "Thu, 01 Jan 1970 " + scope.displayTime + ":00";

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
      };
    })
    .directive('sidebar', ['sidebarService', function (sidebarService) {
      return {
        restrict: 'A',
        templateUrl: 'js/gnap/sidebar.html',
        link: function(scope, element, attrs) {
          scope.shortcuts = sidebarService.getShortcuts();
          scope.items = sidebarService.getItems();
          ace.handle_side_menu(jQuery);
        }
      };
    }])
    .factory('sidebarService', function(){

      var shortcuts = [];
      var items = [];

      return {

        setShortcuts: function(value) {
          shortcuts = value;
        },

        getShortcuts: function() {
          return shortcuts;
        },

        setItems: function(value) {
          items = value;
        },
        
        getItems: function() {
          return items;
        },

        setActive: function(path) {

        }
      }
    })
    .directive('breadcrumbs', ['breadcrumbService', function (breadcrumbService) {
      return {
        restrict: 'A',
        templateUrl: 'js/gnap/breadcrumbs.html',
        link: function(scope, element, attrs) {
          scope.breadcrumbs = breadcrumbService.getBreadcrumbs();
        }
      };
    }])
    .factory('breadcrumbService', function(){

      var breadcrumbs = [];

      return {

        setBreadcrumbs: function(value) {
          breadcrumbs = value;
        },

        getBreadcrumbs: function() {
          return breadcrumbs;
        },
      }
    })
    .directive('search', function () {
      return {
        restrict: 'A',
        scope: {
          handler: '&'
        },
        templateUrl: 'js/gnap/search.html',
        controller: function($scope) {
          $scope.keywords = '';
        }
      };
    });


// override template for datepicker:
angular.module("template/datepicker/day.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/datepicker/day.html",
    "<table class=\"datepicker\" role=\"grid\" aria-labelledby=\"{{uniqueId}}-title\" aria-activedescendant=\"{{activeDateId}}\">\n" +
    "  <thead>\n" +
    "    <tr>\n" +
    "      <th><button type=\"button\" class=\"datepicker-day pull-left\" ng-click=\"move(-1)\" tabindex=\"-1\"><i class=\"icon-chevron-left\"></i></button></th>\n" +
    "      <th colspan=\"{{5 + showWeeks}}\"><button id=\"{{uniqueId}}-title\" role=\"heading\" aria-live=\"assertive\" aria-atomic=\"true\" type=\"button\" class=\"datepicker-day\" ng-click=\"toggleMode()\" tabindex=\"-1\" style=\"width:100%;\"><strong>{{title}}</strong></button></th>\n" +
    "      <th><button type=\"button\" class=\"datepicker-day pull-right\" ng-click=\"move(1)\" tabindex=\"-1\"><i class=\"icon-chevron-right\"></i></button></th>\n" +
    "    </tr>\n" +
    "    <tr>\n" +
    "      <th ng-show=\"showWeeks\" class=\"text-center\"></th>\n" +
    "      <th ng-repeat=\"label in labels track by $index\" class=\"text-center\"><small aria-label=\"{{label.full}}\">{{label.abbr}}</small></th>\n" +
    "    </tr>\n" +
    "  </thead>\n" +
    "  <tbody>\n" +
    "    <tr ng-repeat=\"row in rows track by $index\">\n" +
    "      <td ng-show=\"showWeeks\" class=\"text-center h6\"><em>{{ weekNumbers[$index] }}</em></td>\n" +
    "      <td ng-repeat=\"dt in row track by dt.date\" class=\"text-center datepicker-cell\" ng-class=\"{active: isActive(dt)}\" role=\"gridcell\" id=\"{{dt.uid}}\" aria-disabled=\"{{!!dt.disabled}}\">\n" +
    "        <button type=\"button\" style=\"width:100%;\" class=\"datepicker-day\" ng-class=\"{'btn-info': dt.selected, active: isActive(dt)}\" ng-click=\"select(dt.date)\" ng-disabled=\"dt.disabled\" tabindex=\"-1\"><span ng-class=\"{'text-muted': dt.secondary, 'text-info': dt.current}\">{{dt.label}}</span></button>\n" +
    "      </td>\n" +
    "    </tr>\n" +
    "  </tbody>\n" +
    "</table>\n" +
    "");
}]); 

//override template for timepicker
angular.module("template/timepicker/timepicker.html", []).run(["$templateCache", function($templateCache) {
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
    "</table>\n" +
    "");
}]);
