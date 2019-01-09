class Input{

    constructor(){
        document.onkeydown = this.checkKey;
    }

    
    
    checkKey(e) {
        e = e || window.event;
        let pressedKeyCode = e.keyCode;
        
        
        if (pressedKeyCode === 13 && document.getElementById("popupShadow").style.display == "block") {
            document.getElementById("popupButton").click();
        } 
        else if(pressedKeyCode === 27){
            $("#menuLeftButton").click();
        }
        else {

            let pressedKeyValue = String.fromCharCode(pressedKeyCode);
            let letterButton;
    
            try {
                letterButton = document.getElementById(pressedKeyValue);
    
                if (!(letterButton.style.visibility == "hidden")) {
                    letterButton.click();
                }
                
            } catch (err) {
                console.log("Invalid key");
            }
        }
    }
}