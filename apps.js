let numberDisplay = document.getElementById("numberDisplay")
let value = ""
let valueList = []
// let answer = parseInt(prompt("Please enter the number you would like to FizzBuzz up to: "));

function appendNextValue(){
    value++
    console.log(value)
    valueList.push(value)
    console.log(valueList)

    for (let i = 1; i <=valueList; i ++){
        if(i = 3){
            
        }
        //     console.log(i)
        }
    }
    // for (let value = 1; value <= value; value++) {
    //     console.log(value)
    //     if (value % 3 === 0) {
    //       console.log("fizz");
    //     } else {
    //       console.log(value);
    //     }
    //   }
    // console.log(value)
    // for (value % == 3){
    //     console.log("fizz")
    // }
    
    // for (let i = 1; i <=value; i ++){
    //     console.log(i)
    // }
    // value++
    // console.log(value)
    // if(value % === 3){
    // console.log("fizz")
    
    


document.getElementById("+").addEventListener("click", appendNextValue)
