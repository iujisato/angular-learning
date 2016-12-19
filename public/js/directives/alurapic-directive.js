angular.module('alurapicDirective', [])
  .directive('photoPanel', function() {
    var ddo = {};

    ddo.restrict = 'AE';
    ddo.transclude = true;

    ddo.scope = {
      title: "@"
    };
debugger;
    ddo.templateUrl = 'js/directives/photo-panel.html'

    return ddo;
  });
