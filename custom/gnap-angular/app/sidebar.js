angular
  .module('gnap-app')
  .directive('sidebar', function () {
    return {
      restrict: 'A',
      templateUrl: 'app/sidebar.html'
    };
  });
  