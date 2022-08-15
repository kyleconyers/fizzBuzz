let numberDisplay = document.getElementById("numberDisplay")
let value = 0 

function nextValue(){

	if (value % 3 === 0 && value % 5 > 0){
		console.log("fizz")
		//value++
	}
	else if (value % 5 === 0 && value % 3 > 0){
		console.log("buzz")
	}
	else if (value % 5 === 0 && value % 3 === 0){
		console.log("fizzbuzz")
		//value++
	}
	else{
		console.log(value)
		//value++
	}
	value++ 
}

document.getElementById("+").addEventListener("click", nextValue)





