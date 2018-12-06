class Password{

    constructor(){
        this.passwordGenerator = new PasswordGenerator();
        this.password;
        this.hiddenPasswordValue;
        this.passwordValue;
        this.passwordCategory;
        this.lettersToGuess;
    }


    initializePassword(){
        this.password = this.passwordGenerator.generatePassword();
        this.hiddenPasswordValue = new Array;
        this.passwordValue = this.password.value;
        this.passwordCategory = this.password.category;
        this.lettersToGuess = 0;
        this.hidePassword();
        this.displayPasswordAndCategory();

    }

    getPasswordValue(){
        return this.passwordValue;
    }


    getPasswordCategory(){
        return this.passwordCategory;
    }

    getLettersToGuess(){
        return this.lettersToGuess;
    }


    hidePassword() {
        
        for (let i = 0; i < this.passwordValue.length; i++) {
            if (this.passwordValue.charAt(i) == " ") {
                this.hiddenPasswordValue.push(" ");
            }
            else if (this.passwordValue.charAt(i) == "-") {
                this.hiddenPasswordValue.push("-");
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
    
        $("#password").html(valueToWrite);
        $("#category").html(`Capital: ${this.passwordCategory}`);   
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