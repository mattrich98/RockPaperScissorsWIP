let choiceArray = ["Rock", "Paper", "Scissors"]
randomChoice = choiceArray[Math.floor(Math.random()*choiceArray.length)]
console.log(randomChoice)

function getComputerChoice(){
    console.log("Computer Rolls:")
    return randomChoice;
    
}

getComputerChoice()
