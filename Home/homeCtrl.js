crudApp.controller('homeCtrl',function($scope,myService){
	
	$scope.students = myService.getStudent();

	$scope.students.map(function(data,index){
		data.dob = new Date(data.dob);
	});

	$scope.setcol = function(){
		if($scope.colOrder=='-dob'){
			myService.colname = 'dumyDt';
			$scope.search = 'DOB';
			srch.placeholder = 'Search format (mm/dd/yyyy)';
		}else{
				srch.placeholder = 'Search';
			if($scope.colOrder.charAt(0)=='-'){
				 myService.colname = $scope.colOrder.substr(1);
			}else{
				 myService.colname = $scope.colOrder;
			}
		 	$scope.search = myService.colname.toUpperCase();
		  }
	}

	$scope.delRec = function(delIndex){
		if(confirm("Are you sure to delete record of "
			+myService.editDelArr[delIndex]["name"]+"\n with Email : "
			+myService.editDelArr[delIndex]["email"])){
			myService.studentList.map(function(studobj,index){
				if(studobj===myService.editDelArr[delIndex])
					{
						myService.studentList.splice(index,1);
					}
			});
		}
	}

	$scope.editRec = function(edtIndex){
		myService.editIndex = edtIndex;
	}

	$scope.orderToData = {
				name:['+name','-dob','+email'],
				email:['+email','+name','-dob'],
				dob:['-dob','+name','-email']
			};
	$scope.defaultOrder = $scope.orderToData.email;

	$scope.setSort = function(key){
		$scope.colOrder ="";
		$scope.defaultOrder = $scope.orderToData[key];
		
		$scope.orderToData[key].map(function(item,index){
			if(key==item.substr(1)){
				var symbol = item.charAt(0);
				$scope.orderToData[key][index] = (symbol=='+')?'-'+item.substr(1):'+'+item.substr(1);
			}
		});
		$scope.defaultOrder = $scope.orderToData[key];
	};
});

crudApp.filter('colsearch',function(myService){
		return function(collection,value){
			
			var coloumn,returnCollection=[];
				coloumn = myService.colname;
				
			collection.map(function(studobj,index){
				if(value){
					value = value.toUpperCase();
					if(studobj[coloumn].toUpperCase().match(value)==value){
					//if(studobj[coloumn]==value){
						returnCollection.push(studobj);
						}
					}
			});
				
			if(value){
				myService.editDelArr = returnCollection;
				return returnCollection;
			}else{
				myService.editDelArr = collection;
				return collection;
			}
		}	
});

	crudApp.filter('dateFormat',function($filter){
		return function(mydate,value){
			return $filter('date')(new Date(mydate),value);
		}
	});