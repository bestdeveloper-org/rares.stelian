(function () {

	var person={
			name : "Andrei",
			age : 18,
			friends:{	
				friend1: "Alin",
				friend2:{
					name : "Lucian",
					age : 20
				} 	
			},
			modif: function(){
				// document.getElementById("1").innerHTML=newArray;
				console.log(newArray);
			}
		}

	var newArray=[];
		newArray.push(person);
		newArray.push(person);

	person.modif();	

})();

