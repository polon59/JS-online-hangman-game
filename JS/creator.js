
var password;
var category;
var hiddenPassword = new Array;
var lettersToGuess;
var lives;

var alphabet = new Alphabet();

start();

function start() {
    lettersToGuess = 0;
    lives = 9;

    alphabet.displayAlphabet();


    initializePassword();
    hidePassword();
    displayPasswordAndCategory();
}




function initializePassword() {
    var passwords = new Array;

    passwords.push({value:"THIS IS A PASSWORD", category:"Other"});
    passwords.push({value:"ANOTHER PASSWORD", category:"Fruits"});
    passwords.push({value:"AND ANOTHER PASSWORD", category:"Animals"});

    var selectedPassword = passwords[Math.floor(Math.random() * passwords.length)];
    password = selectedPassword.value;
    category = selectedPassword.category;
}


function hidePassword() {
    
    for (let i = 0; i < password.length; i++) {
        if (password.charAt(i) == " ") {
            hiddenPassword.push(" ");
        }
        else{
            hiddenPassword.push("_");
            lettersToGuess ++;
        }
    }
}


function displayPasswordAndCategory() {
    let hiddenPasswordValue = "";

    hiddenPassword.forEach(element => {
        hiddenPasswordValue += element;
    });

    document.getElementById("password").innerHTML = hiddenPasswordValue;
    document.getElementById("category").innerHTML = `Category: ${category}`;   
}


function checkIfLetterInPassword(e) {
    let letter = e.target.textContent;
    let guessed = false;

    e.target.style.visibility = "hidden";

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

function subtractLives() {
    lives --;

    if (lives == 0){
        alert("GAME OVER");
    }
    else{
        document.getElementById("hangmanImageContainer").style.backgroundImage = `url("Resources/h${lives}.jpg")`
    }
}




