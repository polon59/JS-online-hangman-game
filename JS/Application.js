var alphabet = new Alphabet();
var password = new Password();
var gameStatus = new GameStatus();
// var display = new Display();

initialize();

function initialize() {
    alphabet.displayAlphabet();
    password.hidePassword();
    password.displayPasswordAndCategory();
}

function performMove(e) {
    alphabet.hideUsedLetter(e);
    let guessed = password.checkIfLetterInPassword(e);
    password.displayPasswordAndCategory();
    changeLivesNumber(guessed);
    checkIfPasswordIsComplete();
    
}


 function generateNewPassword() {
    password = new Password();
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





