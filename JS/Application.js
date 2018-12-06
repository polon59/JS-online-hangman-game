var alphabet = new Alphabet();
var password = new Password();
var gameStatus = new GameStatus();
var input = new Input();

$(document).ready(initialize());
initializeMenu();



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


function initializeMenu() {

    $("#menuLeftButton").click(function(){
        $("#menuLeftContent").animate({
          width: "toggle"
        });
      });

}






