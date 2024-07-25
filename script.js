let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    //console.log("Computer Rolls:")
    let computerChoiceArray = ["rock", "paper", "scissors"]
    computerChoice = computerChoiceArray[Math.floor(Math.random()*computerChoiceArray.length)] //math.floor() makes it a whole number, math.random() randomises multiplied by array length (its different from string.length) within computerChoiceArray variable array brackets [].
    //console.log(randomChoice)
    return computerChoice //returns the results to the used function
}
/* testing
console.log(getComputerChoice()); //console.log is worded like this to see the result of using the function
console.log(getComputerChoice());
console.log(getComputerChoice());
*/

function getHumanChoice(){
    let humanChoice = prompt("rock, paper, scissors?").toLowerCase() //Opens a window where you write your answer and press ok. + added .lowerCase() to end of prompt to make case insensitive
    return humanChoice //To put the result in a used function
}

//console.log(getHumanChoice()); testing

function playRound(humanChoice, computerChoice){ //parameters go inside brackets ()



}