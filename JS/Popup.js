class Popup{

    constructor(){
        this.popupShadowDiv = document.getElementById("popupShadow");
        this.popupHeader = "";
        this.highscoreInfo = "";
        this.timeInfo = "";
        this.buttonContent = "";
        this.buttonFunction = "";

    }


    displayNextLevelPopup(){
        let roundTime = document.getElementById("roundTime").innerHTML;
        this.popupHeader = "LEVEL COMPLETE!";
        this.highscoreInfo = "";
        this.timeInfo = ` ${roundTime}`;
        this.buttonContent = "NEXT LEVEL";
        this.buttonFunction = "startNewLevel()"

        this.writeNewContent();
    }


    displayGameOverPopup(isResultInHighscore){
        let gameTime = document.getElementById("totalTime").innerHTML;
        this.popupHeader = "GAME OVER!";
        this.highscoreInfo = "";
        this.timeInfo = `${gameTime}`;
        this.buttonContent = "RESTART";
        this.buttonFunction = "restartGame()"

        if (isResultInHighscore) {
            this.highscoreInfo = "NEW HIGH SCORE!";
        }
        
        this.writeNewContent();
    }


    writeNewContent(){
        let newContent = `
        <div id="popup">
        <div id="headImage"></div>
            <h3 id="popupHeader">${this.popupHeader}</h3>
            <h3 id="popupHighScore">${this.highscoreInfo}</h3>
            <h4 id="time">${this.timeInfo}</h4>
            <br>
            <h4 id="popupButton" onclick="Popup.hidePopup() ; ${this.buttonFunction}">${this.buttonContent}</h4>
        </div>
        </div>`

        this.popupShadowDiv.innerHTML = newContent;
        this.popupShadowDiv.style.display = "block";
    }


    static hidePopup(){
        document.getElementById("popupShadow").style.display = "none";
    }
}