let numberDisplay = document.getElementById("numberDisplay")
let value = 0 

function nextValue(){

	if (value % 3 === 0 && value % 5 > 0){
		console.log("fizz")
	}
	else if (value % 5 === 0 && value % 3 > 0){
		console.log("buzz")
	}
	else if (value % 5 === 0 && value % 3 === 0){
		console.log("fizzbuzz")
	}
	else{
		console.log(value)
	}
	value++ 
}

document.getElementById("+").addEventListener("click", nextValue)





