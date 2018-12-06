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
        $("#menuLeftContent").animate({width: "toggle"});
        });
}


function findPasswordinGoogle(){
    console.log("click");
    let passwordValue = password.getPasswordValue().toLowerCase();
    window.open(`https://www.google.pl/search?q=${passwordValue}&oq=${passwordValue}&aqs=chrome..69i57j0l5.2693j0j7&sourceid=chrome&ie=UTF-8`);

}








