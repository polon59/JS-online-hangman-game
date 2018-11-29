class Popup{

    constructor(){
        this.popupShadowDiv = document.getElementById("popupShadow");
        this.popupHeader = "";
        this.highscoreInfo = "";
        this.timeInfo = "";
        this.buttonContent = "";
        this.buttonFunction = "";

    }


    displayNextLevelPopup(roundTime){
        this.popupHeader = "LEVEL COMPLETE!";
        this.highscoreInfo = "";
        this.timeInfo = `This round time :  ${roundTime}`;
        this.buttonContent = "NEXT LEVEL";
        this.buttonFunction = "startNewLevel()"

        this.writeNewContent();
    }


    displayGameOverPopup(gameTime, isResultInHighscore){
        this.popupHeader = "LEVEL COMPLETE!";
        this.highscoreInfo = "";
        this.timeInfo = `Game time :  ${gameTime}`;
        this.buttonContent = "RESTART";
        this.buttonFunction = "restartGame()"

        if (isResultInHighscore) {
            this.highscoreInfo = "NEW HIGH SCORE!";
        }
        
        this.writeNewContent();
    }


    writeNewContent(){
        let newContent = `<div id="headImage"></div>
            <h3 id="popupHeader">${this.popupHeader}</h3>
            <h3 id="popupHighScore">${highscoreInfo}</h3>
            <h4 id="roundTime">${timeInfo}</h4>
            <br>
            <h4 id="popupButton" onclick="Popup.hidePopup() ; ${this.buttonFunction}">${this.buttonContent}</h4>
        </div>`

        this.popupShadowDiv.innerHTML = newContent;
        this.popupShadowDiv.style.display = "block";
    }


    static hidePopup(){
        document.getElementById("popupShadow").style.display = "none";
    }
}