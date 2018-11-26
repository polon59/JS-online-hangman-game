var alphabet = new Alphabet();
var password = new Password();
var gameStatus = new GameStatus();

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


function checkIfPasswordIsComplete() {
    let lettersToGuess = password.getLettersToGuess();

    if (lettersToGuess == 0) {
        alert("WIN");
    }
}


function changeLivesNumber(guessed){
    if (guessed) {
        console.log("Haraszo");
    } else {
        gameStatus.subtractLives();
    }  
}



