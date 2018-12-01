class Input{

    constructor(){
        document.onkeydown = this.checkKey;
    }

    
    
    checkKey(e) {
        e = e || window.event;
        let pressedKeyCode = e.keyCode;
        
        
        if (pressedKeyCode === 13) {
            document.getElementById("popupButton").click();
        } else {

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

        
    }



    // checkKey(e) {
    //     e = e || window.event;
    //     let pressedKeyCode = e.keyCode;
        
        
    //     if (pressedKeyCode === 13) {
    //         this.pressButtonOnPopupWithEnterKey();
    //     } else {
    //         this.pressButtonWithLetter();
    //     }

        
    // }


    // pressButtonWithLetter(){
    //     let pressedKeyValue = String.fromCharCode(pressedKeyCode);
    //     let letterButton;

    //     try {
    //         letterButton = document.getElementById(pressedKeyValue);

    //         if (!(letterButton.style.visibility == "hidden")) {
    //             letterButton.click();
    //         }
            
    //     } catch (err) {
    //         console.log("ERROR");
    //     }
    // }


    // pressButtonOnPopupWithEnterKey(){
    //     document.getElementById("popupButton").click();
    // }
}