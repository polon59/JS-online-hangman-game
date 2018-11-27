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

    }


    displayGameOverPopup(){
        popupHeaderDiv.innerHTML = "GAME OVER";
    }


    hidePopup(){
        popupShadowDiv.style.display = "none";
    }
}