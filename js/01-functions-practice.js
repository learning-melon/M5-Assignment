//STEP 1
function halfNumber(num){
    let strResult = "Half of " + num + " is " + num/2 +"."
    console.log(strResult)
    return strResult
}

//STEP 2
function squareNumber(num){
    let strResult = "The result of squaring the number " + num + " is " + num*num + "."
    console.log(strResult)
    return strResult
}

//STEP 3
function percentOf(num1,num2){
    let strResult = num1 + " is " + 100*(Math.round(num1/num2),2) + "% of " + num2
    console.log(strResult)
    return strResult
} 

//STEP 4
function findModulus(num1,num2){
    let strResult = num2%num1 + " is the modulus of " + num1 + " and " + num2
    console.log(strResult)
    return strResult
}

//STEP 5