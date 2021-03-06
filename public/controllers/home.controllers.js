angular.module('mlb')

.controller('HomeCtrl', ['$scope', '$http', '$resource', function($scope, $http, $resource) {
  $http.get('/articles').success(function(data) {
    $scope.articles = data;
  });

  $http.get('/authors').success(function(data) {
    $scope.authors = data;
  });

  $http.get('/tags').success(function(data) {
    $scope.tags = data;
  });

  $scope.success = false;
  $scope.error = false;

  $scope.sendMessage = function( input ) {
    $http({
        method: 'POST',
        url: 'contact.php',
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

  $(window).load(function()
  {
     var phones = [{ "mask": "(###) ###-####"}, { "mask": "(###) ###-##############"}];
      $('#phonenumber').inputmask({
          mask: phones,
          greedy: false,
          definitions: { '#': { validator: "[0-9]", cardinality: 1}} });
  });

  //$http.get('https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=hoopsrevolution').success(function() {
  	//$scope.twitter = data;
  	//console.log(data);
  //});

	//$scope.twitter = $resource('https://api.twitter.com/1.1/search/tweets.json/:action',
		//{action: '?', screen_name: 'hoopsrevolution'},
		//{get: {method: 'JSONP'}});
	//$scope.twitter.get();

}]);
