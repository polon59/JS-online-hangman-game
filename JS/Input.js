class Input{

    constructor(){
        document.onkeydown = this.checkKey;
    }

    
    
    checkKey(e) {
        e = e || window.event;
        let pressedKeyCode = e.keyCode;
        let pressedKeyValue = String.fromCharCode(pressedKeyCode);
        
        try {
            document.getElementById(pressedKeyValue).click();
        } catch (err) {
            console.log("ERROR");
        }
        
    
    }
}