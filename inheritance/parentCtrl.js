crudApp.controller('parentCtrl', function($scope){
	//$scope.pageName = "parentCtrl";
	$scope.page = {
		name: 'parentCtrl'
	};
	$scope.employee = {};
	//$scope.user = {};

	$scope.$on('updateUser', function(event, args){
		console.log(args);
		$scope.employee = angular.copy(args);
	});

	$scope.sendDataToChild = function() {
		$scope.$broadcast('sendToChild', $scope.employee);
	};

});