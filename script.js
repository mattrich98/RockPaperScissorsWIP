let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    //console.log("Computer Rolls:")
    let computerChoiceArray = ["Rock", "Paper", "Scissors"]
    randomChoice = computerChoiceArray[Math.floor(Math.random()*computerChoiceArray.length)] //math.floor() makes it a whole number, math.random() randomises multiplied by array lenght within computerChoiceArray variable array brackets [].
    //console.log(randomChoice)
    return randomChoice //returns the results to the used function
}
/*
console.log(getComputerChoice()); //console.log is worded like this to see the result of using the function
console.log(getComputerChoice());
console.log(getComputerChoice());
*/

function getHumanChoice(){
    let humanChoiceArray = ["Rock", "Paper", "Scissors"]
    //Hint: Use the prompt method to get the user’s input.
    //Somewhere need to use event listener - on click for buttons maybe
}

console.log(getHumanChoice());