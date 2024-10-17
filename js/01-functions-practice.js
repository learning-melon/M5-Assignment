//STEP 1
const halfNumber = num=>{
    let strResult = "Half of " + num + " is " + num/2 +"."
    return strResult
}

//STEP 2
const squareNumber = num => {
    let strResult = "The result of squaring the number " + num + " is " + num*num + "."
    return strResult
}

//STEP 3
const percentOf = (num1,num2)=>{
    let strResult = num1 + " is " + Math.round((num1/num2*100),2) + "% of " + num2
    return strResult
} 

//STEP 4
const findModulus = (num1,num2)=>{
    let strResult = num2%num1 + " is the modulus of " + num1 + " and " + num2
    return strResult
}

//STEP 5
console.log(halfNumber(5))
console.log(squareNumber(5))
console.log(percentOf(5,10))
console.log(findModulus(5,10))