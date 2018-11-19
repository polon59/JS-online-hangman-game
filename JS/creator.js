displayAlphabet();

function displayAlphabet() {
    var alphabetDiv = document.getElementById("alphabet");
    var letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","R","S","T","U","V","W","X","Y","Z"];
    var alphabetDivNewContent = "";

    letters.forEach(letter => {
        alphabetDivNewContent += `<div class="letter">${letter}</div>`
    });

    alphabetDiv.innerHTML = alphabetDivNewContent;
}


function selectPassword() {
    var passwords = 
}