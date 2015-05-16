var directiveTutorial = angular.module('directiveTutorial', []);

directiveTutorial.controller('mainCtrl', ['$scope', function($scope){
	$scope.fbUserName = "luthra.sunny";
}]);

directiveTutorial.directive('fbProfileCard', ['$http', function($http){
	var graphUrl = "https://graph.facebook.com";
	return {
		scope: {
			fbUserName: "@"
		},
		templateUrl: 'fbProfileCard.html',
		link: function(scope){
			scope.isLoaded = false;
			$http.get(graphUrl + '/' + scope.fbUserName)
			.success(function(data, status){
				if(status === 200){
					scope.isLoaded = true;
					scope.user = data;
				}
			});
		}
	};
}]);