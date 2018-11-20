
var password;
var category;
var hiddenPassword = new Array;
var lettersToGuess = 0;

start();

function start() {
    displayAlphabet();
    initializePassword();
    hidePassword();
    displayPasswordAndCategory();
}

function displayAlphabet() {
    var alphabetDiv = document.getElementById("alphabet");
    var letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","R","S","T","U","V","W","X","Y","Z"];
    var alphabetDivNewContent = "";

    letters.forEach(letter => {
        alphabetDivNewContent += `<div class="letter" onclick="checkIfLetterInPassword(event)">${letter}</div>`
    });

    alphabetDiv.innerHTML = alphabetDivNewContent;
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

    for (let index = 0; index < password.length; index++) {

        if (password.charAt(index) == letter) {
            hiddenPassword[index] = letter;
            displayPasswordAndCategory();
            // lettersToGuess --;
            guessed = true;
        }     
    }

    if (!guessed){
        alert("hangman");
        // to add : changing image
    }

    // if (lettersToGuess == 0) {
    //     alert("WIN");
    // }
}


