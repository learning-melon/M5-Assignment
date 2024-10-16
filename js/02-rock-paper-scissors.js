let userChoice = prompt("Enter rock, paper, or scissors")
while(userChoice != "rock" && userChoice != "paper" && userChoice != "scissors")
    userChoice = prompt("Enter rock, paper, or scissors")

let options = ["rock","paper","scissors"]
let compChoice = options[Math.round(Math.random()*100,2)%3]

let result = {"rock":{"rock":"tie","paper":"lose","scissors":"win"},"paper":{"rock":"win","paper":"tie","scissors":"lose"},"scissors":{"rock":"lose","paper":"win","scissors":"tie"}}

if(result[userChoice][compChoice] != "tie") alert("You "+result[userChoice][compChoice]+"!")
else alert("It's a tie!")