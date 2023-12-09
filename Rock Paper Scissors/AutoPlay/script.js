let gameScore = JSON.parse(localStorage.getItem('score')) || {
    wins : 0,
    lose : 0, 
    tie : 0
};

updateScoreElement();

const emojis = {
    rock : '✊',
    paper : '✋',
    scissor : '✌'
}


let isAutoPlaying = false;
let intervalId;

function autoPlay(){
    if(!isAutoPlaying){
        intervalId = setInterval(function(){
            const playerMove = pickComputerMove();
            playGame(playerMove);
        }, 1000);
        isAutoPlaying = true;
    } else {
        clearInterval(intervalId);
        isAutoPlaying = false;
    }


}


function playGame(playerMove) {
    const computerMove = pickComputerMove();
    let result = '';

    if (playerMove === emojis.scissor){
        if (computerMove === emojis.rock){
            result = 'You Lose!';
        }else if(computerMove === emojis.paper){
            result = 'You Win!';
        }else {
            result = 'Tie.'
        }

    } else if (playerMove === emojis.paper) {
        if (computerMove === emojis.rock){
            result = 'You Win!';
        }else if(computerMove === emojis.paper){
            result = 'Tie.';
        }else {
            result = 'You Lose!';
        }   

    } else if (playerMove === emojis.rock) {
        if (computerMove === emojis.rock){
            result = 'Tie.';
        }else if(computerMove === emojis.paper){
            result = 'You Lose!';
        }else {
            result = 'You Win!';
        }
    }

    if (result === 'You Win!') {
        gameScore.wins++;
    } else if (result === 'You Lose!'){
        gameScore.lose++;
    } else {
        gameScore.tie++;
    }

    localStorage.setItem('score', JSON.stringify(gameScore));
    
    document.querySelector('.js-choice')
        .innerHTML = `You picked: ${playerMove}.<br>Computer picked: ${computerMove}.<br>${result}`;


    updateScoreElement();

    

}
function updateScoreElement(){
    document.querySelector('.js-score')
   .innerHTML = `Win: ${gameScore.wins} Lose: ${gameScore.lose} Tie: ${gameScore.tie}`;
}

function pickComputerMove(){
    const randomNumber = Math.random();
    
    let computerMove = '';

    if(randomNumber >= 0 && randomNumber < 1 / 3){
        computerMove = emojis.rock;
    }else if(randomNumber >= 1/3 && randomNumber < 2/3){
        computerMove = emojis.paper;
    }else {
        computerMove = emojis.scissor;
    }
    return computerMove;

}