angular.module('mlb')

.controller("ContactCtrl", ['$scope', '$http', function($scope, $http) {
    $scope.success = false;
    $scope.error = false;

    $scope.sendMessage = function( input ) {
      $http({
          method: 'POST',
          url: '/php/contact.php',
          data: input,
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
      })
      .success( function(data) {
        if ( data.success ) {
          $scope.success = true;
        } else {
          $scope.error = true;
        }
      } );
    }
  }]);
