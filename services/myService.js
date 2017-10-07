crudApp.service('myService',function(){
	this.editDelArr = [];
	this.studentList = [{ name: "Machindra",  email: "mlhake888@gmail.com",
							dob:'04/18/1989',dumyDt:'04/18/1989',gender: "Male" },
						{ name: "Vishnu",  email: "t20@gmail.com",
							dob:'03/18/1989',dumyDt:'03/18/1989',gender: "Male" },
						{ name: "Rupali",  email: "rupali@gmail.com",
							dob:'10/01/1989',dumyDt:'10/01/1989',gender: "Female" },
						{ name: "Vishnu",  email: "vishu@gmail.com",
							dob:'03/18/1988',dumyDt:'03/18/1988',gender: "Male" }];
	
		this.editIndex = null;
		this.colname = ""
		 this.setStudent = function(objstud){
		 this.studentList.push(objstud);
		 }

	this.getStudent = function(){
		return this.studentList;
	}
});