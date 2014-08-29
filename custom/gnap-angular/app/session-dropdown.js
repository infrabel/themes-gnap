angular
  .module('gnap-app')
  .directive('sessionDropdown', function () {
    return {
      restrict: 'A',
      templateUrl: 'app/session-dropdown.html'
    };
  });
  