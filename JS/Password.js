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

    getLettersToGuess(){
        return this.lettersToGuess;
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
        this.categoryDiv.innerHTML = `Category: ${this.passwordCategory}`;   
    }


    checkIfLetterInPassword(e) {
        let letter = e.target.textContent;
        let guessed = false;
    
        for (let index = 0; index < this.passwordValue.length; index++) {
    
            if (this.passwordValue.charAt(index) == letter) {
                this.hiddenPasswordValue[index] = letter;
                this.lettersToGuess --;
                guessed = true;
            }     
        }

        return guessed;
    }



}