class Popup{

    constructor(){
        this.popupShadowDiv = document.getElementById("popupShadow");
        this.popupHeader = "";
        this.scoreInfo = "";
        this.timeInfo = "";
        this.buttonContent = "";
        this.buttonFunction = "";

    }


    displayNextLevelPopup(scoreEarnedOnLevel){
        let roundTime = document.getElementById("roundTime").innerHTML;
        this.popupHeader = "LEVEL COMPLETE!";
        this.scoreInfo = `ON THIS LEVEL EARNED ${scoreEarnedOnLevel} SCORE`;
        this.timeInfo = ` ${roundTime}`;
        this.buttonContent = "NEXT LEVEL";
        this.buttonFunction = "startNewLevel()"

        this.writeNewContent();
    }


    displayGameOverPopup(isResultInHighscore, scoreEarnedInGame){
        let gameTime = document.getElementById("totalTime").innerHTML;
        this.popupHeader = "GAME OVER!";
        this.scoreInfo = `YOUR SCORE: ${scoreEarnedInGame}`;
        this.timeInfo = `${gameTime}`;
        this.buttonContent = "RESTART";
        this.buttonFunction = "restartGame()"

        if (isResultInHighscore) {
            this.scoreInfo = `NEW HIGHSCORE: ${scoreEarnedInGame}`;
        }
        
        this.writeNewContent();
    }


    writeNewContent(){
        let newContent = `
        <div id="popup">
        <div id="headImage"></div>
            <h3 id="popupHeader">${this.popupHeader}</h3>
            <h3 id="popupHighScore">${this.scoreInfo}</h3>
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