class Alphabet{
    
        constructor(){
            this.alphabetDiv = document.getElementById("alphabet");
            this.letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","R","S","T","U", "Q","V","W","X","Y","Z"];
    
        }
    
    
    displayAlphabet() { 
        var alphabetDivNewContent = "";
    
        this.letters.forEach(letter => {
            alphabetDivNewContent += `<div id="${letter}" class="letter" onclick="performMove(event)">${letter}</div>`
        });
    
        this.alphabetDiv.innerHTML = alphabetDivNewContent;
    }


    hideUsedLetter(usedLetter){
        usedLetter.target.style.color = "rgb(51, 23, 23)";
        usedLetter.target.style.border = "1px solid rgb(51, 23, 23)";
        usedLetter.target.onclick = "";
        usedLetter.target.style.visibility = "hidden";
        
    }
}