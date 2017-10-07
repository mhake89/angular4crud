crudApp.controller('childACtrl', function($scope){
	$scope.page.name = "childACtrl";
	$scope.user = {};
	//$scope.pageName = "childACtrldfdsfa";
	$scope.sendData = function() {
		$scope.$emit('updateUser', $scope.user);
	};

	$scope.$on('sendToChild', function(event, args){
		console.log(args);
		$scope.user = angular.copy(args);
	});
});