class Password{

    constructor(){
        //this.passwordGenerator = new PasswordGenerator();
        //this.password = passwordGenerator.generatePassword();

        this.password = {value:"THIS IS A PASSWORD", category:"Animals in Uganda"};

        this.hiddenPasswordValue = new Array;
        this.passwordDiv = document.getElementById("password");
        this.categoryDiv = document.getElementById("category");
        this.passwordValue = this.password.value;
        this.passwordCategory = this.password.category;
        this.lettersToGuess = 0;
        

    }


    hidePassword() {
        
        for (let i = 0; i < this.passwordValue.length; i++) {
            if (this.passwordValue.charAt(i) == " ") {
                this.hiddenPasswordValue.push(" ");
            }
            else{
                this.hiddenPasswordValue.push("_");
                this.lettersToGuess ++;
            }
        }
    }


    displayPasswordAndCategory() {
        let valueToWrite = "";
    
        this.hiddenPasswordValue.forEach(element => {
            valueToWrite += element;
        });
    
        this.passwordDiv.innerHTML = valueToWrite;
        this.categoryDiv.innerHTML = `Category: ${this.category}`;   
    }


    // checkIfLetterInPassword(e) {
    //     let letter = e.target.textContent;
    //     let guessed = false;
    
    //     alphabet.hideUsedLetter(e);
    
    //     for (let index = 0; index < password.length; index++) {
    
    //         if (password.charAt(index) == letter) {
    //             hiddenPassword[index] = letter;
    //             displayPasswordAndCategory();
    //             lettersToGuess --;
    //             guessed = true;
    //         }     
    //     }
    
    //     if (!guessed){
    //         subtractLives();
    //     }
    
    //     if (lettersToGuess == 0) {
    //         alert("WIN");
    //     }
    // }



}