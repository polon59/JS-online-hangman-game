class Alphabet{
    
        constructor(){
            this.alphabetDiv = document.getElementById("alphabet");
            this.letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","R","S","T","U","V","W","X","Y","Z"];
    
        }
    
    
    displayAlphabet() { 
        var alphabetDivNewContent = "";
    
        this.letters.forEach(letter => {
            alphabetDivNewContent += `<div class="letter" onclick="checkIfLetterInPassword(event)">${letter}</div>`
        });
    
        this.alphabetDiv.innerHTML = alphabetDivNewContent;
    }


    hideUsedLetter(usedLetter){
        usedLetter.target.style.visibility = "hidden";
    }
}