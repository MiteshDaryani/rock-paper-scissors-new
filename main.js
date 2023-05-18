function getComputerChoice(){
    
    let result = ['rock', 'paper', 'scissors'][Math.floor(Math.random() * 3)];

    return result;   
}

function playRound(playerSelection, computerSelection) {

  if(playerSelection == computerSelection){

    return "It's a tie"
 }

 else if(playerSelection == 'rock'){
     if(computerSelection == 'scissors'){
         return `You Win! ${playerSelection} beats ${computerSelection}`;
     }

     else{
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
     }
 }

 else if(playerSelection == 'paper'){
     if(computerSelection == 'rock'){
        return `You Win! ${playerSelection} beats ${computerSelection}`;
     }

     else{

         return `You Lose! ${computerSelection} beats ${playerSelection}`
     }
 }

 else if(playerSelection == 'scissors'){
     if(computerSelection == 'paper'){
        return `You Win! ${playerSelection} beats ${computerSelection}`;
     }

     else{
        return `You Lose! ${computerSelection} beats ${playerSelection}`
     }
 }
 
}
 
const playerSelection = 'rock';
const computerSelection = getComputerChoice();
console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));