class Input{

    constructor(){
        document.onkeydown = this.checkKey;
    }

    
    
    checkKey(e) {
    
        e = e || window.event;
    
        if (e.keyCode == '38') {
            // up arrow
        }
        else if (e.keyCode == '40') {
            // down arrow
        }
        else if (e.keyCode == '37') {
           // left arrow
        }
        else if (e.keyCode == '39') {
           // right arrow
        }
    
    }
}