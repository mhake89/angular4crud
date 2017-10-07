var crudApp = angular.module("crudApp",[]);
		
	crudApp.config(["$routeProvider",function($routeProvider){
			$routeProvider.when('/home',{
							templateUrl : 'Home/home.html',
							controller : 'homeCtrl'
			}).when('/addNew',{
							templateUrl : 'addNew/addNew.html',
							controller : 'addNewCtrl'
			})
			.when('/inheritance',{
				templateUrl : 'inheritance/inheritance.html',
				controller : 'parentCtrl'
			}).otherwise({redirectTo:'/home'});
	}]);