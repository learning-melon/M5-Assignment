// ADD A FUNCTION CALLED CALCULATE 
function calculate(x,y,operation){
    switch(operation){
        case "add":
            return x + y
        case "subtract":
            return x-y
        case "multiply":
            return x*y
        case "divide":
            return x/y
        default:
            return false
    }
}

// COLLECT FIRST NUMBER FROM USER
let num1
let num2
let operation

do{
    num1 = Number(prompt("Please enter a number"))
}while(typeof num1 !=  'number' || isNaN(num1) )

// COLLECT SECOND NUMBER FROM USER
do{
    num2 = Number(prompt("Please enter another number"))
}while(typeof num2 !=  'number' || isNaN(num2) )

// COLLECT OPERATION TO PERFORM (+,-,*,/) FROM USER
do{
    operation = prompt("Please enter a valid operation you'd like to perform (add, subtract, multiply, divide)")
}while(operation != "add" && operation != "subtract" && operation != "multiply" && operation != "divide")

// CALL THE FUNCTION AND RETURN THE RESULT WITHIN AN ALERT
let result = calculate(num1,num2,operation) 
alert("Result is " + result)