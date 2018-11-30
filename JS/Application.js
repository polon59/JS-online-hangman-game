var alphabet = new Alphabet();
var password = new Password();
var gameStatus = new GameStatus();
var input = new Input();

initialize();

function initialize() {
    alphabet.displayAlphabet();
    password.initializePassword();
}

function performMove(e) {
    alphabet.hideUsedLetter(e);
    let guessed = password.checkIfLetterInPassword(e);
    password.displayPasswordAndCategory();
    changeLivesNumber(guessed);
    checkIfPasswordIsComplete();
    
}


 function generateNewPassword() {
    initialize();
 }


function checkIfPasswordIsComplete() {
    let lettersToGuess = password.getLettersToGuess();

    if (lettersToGuess == 0) {
        gameStatus.addScore(10);
        gameStatus.endLevel();
    }
}


function changeLivesNumber(guessed){
    if (guessed) {
        gameStatus.addScore(1);
    } else {
        gameStatus.subtractLives();
    }  
}


function restartGame() {
    gameStatus.restartGame();
}


function startNewLevel(){
    gameStatus.startNewLevel();
}





