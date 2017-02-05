angular.module('mlb')

.controller('TypesCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get('/types').success(function(data) {
    $scope.types = data;
  });
}]);
