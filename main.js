function getComputerChoice(){
    
    let result = ['rock', 'paper', 'scissors'][Math.floor(Math.random() * 3)];

    return result;   
}

console.log(getComputerChoice());