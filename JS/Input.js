class Input{

    constructor(){
        document.onkeydown = this.checkKey;
    }

    
    
    checkKey(e) {
        e = e || window.event;
        let pressedKeyCode = e.keyCode;
        let pressedKeyValue = String.fromCharCode(pressedKeyCode);
        let letterButton;
        
        try {
            letterButton = document.getElementById(pressedKeyValue);

            if (!(letterButton.style.visibility == "hidden")) {
                letterButton.click();
            }
            
        } catch (err) {
            console.log("ERROR");
        }

        

    
    }


    // isButtonAvailable(){
    //     console.log("check");
    //     if (this.letterButton.style.display == "none") {
    //         console.log("USED");
    //         return false;
    //     }

    //     return true;
    // }
}