crudApp.controller('addNewCtrl',function($scope,$window,myService){
 $scope.student = {};
 	var updateIndex;
 	if(myService.editIndex!=null){
 		myService.studentList.map(function(studobj,index){
				if(studobj===myService.editDelArr[myService.editIndex])
					{
						$scope.student = myService.studentList[index];
						updateIndex = index;
					}
			});	
 	}

	$scope.addNew = function(){
		if(myService.editIndex!=null){
			myService.studentList[updateIndex].dob = $scope.student.dumyDt;
			myService.studentList[updateIndex] = $scope.student;
			alert("Record Updated Successfully!");
			$scope.student = {};
			myService.editIndex = null;
			$window.location.href = '#home';
		}else{
			var date = document.getElementById('datepicker');
			$scope.student.dumyDt = date.value
			$scope.student.dob=$scope.student.dumyDt;
			
			console.log("hello",date);
			console.log("hello",date.value);
			console.log("duummy",$scope.student.dumyDt);
			var key = Object.keys($scope.student);
			if(key.length > 3){
				myService.setStudent($scope.student);
				$scope.student = {};
				if(!confirm("Record Added! do you want one more?")){
					$window.location.href = '#home';
				}
			}else{
				alert("Please Fill all feilds!");
			}
	}
	}
})