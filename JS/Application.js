var alphabet = new Alphabet();
var password = new Password();

initialize();

function initialize() {
    alphabet.displayAlphabet();
    password.hidePassword();
    password.displayPasswordAndCategory();
}

function performMove(e) {
    
}


function checkIfLetterInPassword(e) {
    let letter = e.target.textContent;
    let guessed = false;

    alphabet.hideUsedLetter(e);

    for (let index = 0; index < password.length; index++) {

        if (password.charAt(index) == letter) {
            hiddenPassword[index] = letter;
            displayPasswordAndCategory();
            lettersToGuess --;
            guessed = true;
        }     
    }

    if (!guessed){
        subtractLives();
    }

    if (lettersToGuess == 0) {
        alert("WIN");
    }
}