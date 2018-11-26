class Password{

    constructor(){
        //this.passwordGenerator = new PasswordGenerator();
        //this.password = passwordGenerator.generatePassword();
        // this.passwordValue = this.password.value;
        // this.passwordCategory = this.passwordCategory.category;
        this.hiddenPasswordValue = hiddenPassword = new Array;
        this.passwordDiv = document.getElementById("password");
        this.categoryDiv = document.getElementById("category");

        this.password = {value:"THIS IS A PASSWORD", category:"Animals in Uganda"};
        this.passwordValue = this.password.value;
        this.passwordCategory = this.passwordCategory.category;
        hidePassword();

    }


    hidePassword() {
        
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



}