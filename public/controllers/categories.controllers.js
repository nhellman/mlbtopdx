angular.module('mlb')

.controller('CategoriesCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get('/categories').success(function(data) {
    $scope.categories = data;
  });
}]);
