let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    console.log("Computer Rolls:")
    let computerChoiceArray = ["rock", "paper", "scissors"]
    computerChoice = computerChoiceArray[Math.floor(Math.random()*computerChoiceArray.length)] //math.floor() makes it a whole number, math.random() randomises multiplied by array length (its different from string.length) within computerChoiceArray variable array brackets [].
    //console.log(computerChoice)
    return computerChoice //returns the results to the used function
}

function getHumanChoice(){
    let humanChoice = prompt("rock, paper, scissors?").toLowerCase() //Opens a window where you write your answer and press ok. + added .lowerCase() to end of prompt to make case insensitive
    
    if (humanChoice == "rock" && computerChoice == "scissors"){
        humanScore++;
    } else if (humanChoice == "paper" && computerChoice == "rock"){
        humanScore++;
    } else if (humanChoice == "scissors" && computerChoice == "paper"){
        humanScore++;
    }

    return humanChoice //To put the result in a used function
}

//Make if statements for word choices, rock paper scissors, if = 3 then win lose etc




console.log(getComputerChoice());
console.log(getHumanChoice());


console.log((humanScore) , (computerScore));

//-----------------------------------------------------------------------------------------------------

//console.log("test");

//console.log(getHumanChoice()); testing

//console.log(getComputerChoice()); //console.log is worded like this to see the result of using the function
//console.log(getComputerChoice()); //to test if it does other results
//console.log(getComputerChoice()); //to test if it does other results 2


/*function playRound(humanChoice, computerChoice){ //parameters go inside brackets ()



}*/