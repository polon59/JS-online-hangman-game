start();

function start() {
    displayAlphabet();
    initializePassword();
}

function displayAlphabet() {
    var alphabetDiv = document.getElementById("alphabet");
    var letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","R","S","T","U","V","W","X","Y","Z"];
    var alphabetDivNewContent = "";

    letters.forEach(letter => {
        alphabetDivNewContent += `<div class="letter">${letter}</div>`
    });

    alphabetDiv.innerHTML = alphabetDivNewContent;
}


function initializePassword() {
    var passwords = new Array;

    passwords.push({value:"THIS IS A PASSWORD", category:"Other"});
    passwords.push({value:"ANOTHER PASSWORD", category:"Fruits"});
    passwords.push({value:"AND ANOTHER PASSWORD", category:"Animals"});

    var selectedPassword = passwords[Math.floor(Math.random() * passwords.length)];

    displayPasswordAndCategory(selectedPassword);
}


function displayPasswordAndCategory(selectedPassword) {
    var password = selectedPassword.value;
    var hiddenPassword = hidePassword(password);

    document.getElementById("password").innerHTML = hiddenPassword;
    document.getElementById("category").innerHTML = `Category: ${selectedPassword.category}`;   
}


function hidePassword(password) {
    var hiddenPassword = "";
    
        for (let i = 0; i < password.length; i++) {
            if (password.charAt(i) == " ") {
                hiddenPassword += " ";
            }
            else{
                hiddenPassword += "_";
            }
        }
    
    return hiddenPassword;
}


