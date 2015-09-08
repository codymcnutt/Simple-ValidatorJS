var SSN = prompt("Enter your Social Security Number:" ,'XXX-XX-XXXX')
if(SSN[3] === "-" && SSN[6] === "-" && SSN.length === 11){
	alert('Thanks Sucker')
	var Birth = prompt("Enter your birth date:" , 'MM/DD/YYYY')
}

else{
	var Mexico = prompt("Are you from Mexico")
		if(Mexico === "yes" || Mexico === "Yes"){
			alert("Bienvenidos a Estados Unidos \n ¿Necesita usted un trabajo?")
	}
		else { 
			alert("Why you no enter your Security Number?")
		}
}