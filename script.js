function getComputerChoice(){
    //console.log("Computer Rolls:")
    let computerChoiceArray = ["Rock", "Paper", "Scissors"]
    randomChoice = computerChoiceArray[Math.floor(Math.random()*computerChoiceArray.length)] // maths.floor makes it a whole number -> maths.random * array length 0,1,2 (uses the array)
    //console.log(randomChoice)
    return //want to return the result of random choice whenever uses function
}

getComputerChoice()