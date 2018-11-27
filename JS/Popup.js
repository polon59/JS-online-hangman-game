class Popup{

    constructor(){
        this.popupShadowDiv = document.getElementById("popupShadow");
        this.headImageDiv = document.getElementById("headImage");
        this.popupHeaderDiv = document.getElementById("popupHeader");
        this.popupHighScoreDiv = document.getElementById("popupHighScore");
        this.popupTimeDiv = document.getElementById("popupTime");
        this.popupButton = document.getElementById("popupButton");
    }


    displayNextLevelPopup(){
        this.popupShadowDiv.style.display = "block";
        this.popupHeaderDiv.innerHTML = "LEVEL COMPLETE!";
        this.popupTimeDiv.innerHTML = "Your time: 5:39";
        this.popupButton.innerHTML = "Next";
    }


    displayGameOverPopup(){
        this.popupShadowDiv.style.display = "block";
        this.popupHeaderDiv.innerHTML = "GAME OVER";
        this.popupHighScoreDiv.innerHTML = "NEW HIGHSCORE!";
        this.popupTimeDiv.innerHTML = "Your time: 15:45";
        this.popupButton.innerHTML = "Restart";
    }


    static hidePopup(){
        document.getElementById("popupShadow").style.display = "none";
    }
}