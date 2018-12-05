class Popup{

    constructor(){
        this.popupShadowDiv = document.getElementById("popupShadow");
        this.popupHeader = "";
        this.scoreInfo = "";
        this.timeInfo = "";
        this.buttonContent = "";
        this.buttonFunction = "";
        this.guessedWords = "";

    }


    displayNextLevelPopup(scoreEarnedOnLevel, guessedWordsNumber){
        let roundTime = document.getElementById("roundTime").innerHTML;
        this.popupHeader = "LEVEL COMPLETE!";
        this.scoreInfo = `ON THIS LEVEL EARNED ${scoreEarnedOnLevel} SCORE`;
        this.timeInfo = `${roundTime}`;
        this.buttonContent = "NEXT LEVEL";
        this.buttonFunction = "startNewLevel()"
        this.guessedWords = `NEXT LEVEL: ${guessedWordsNumber}`;

        this.writeNewContent();
    }


    displayGameOverPopup(isResultInHighscore, scoreEarnedInGame, guessedWordsNumber){
        let gameTime = document.getElementById("totalTime").innerHTML;
        this.popupHeader = "GAME OVER!";
        this.scoreInfo = `YOUR SCORE: ${scoreEarnedInGame}`;
        this.timeInfo = `${gameTime}`;
        this.buttonContent = "RESTART";
        this.buttonFunction = "restartGame()"
        this.guessedWords = `GUESSED WORDS: ${guessedWordsNumber}`;

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
            <h4 id="guessedWordsResult"> ${this.guessedWords}</h4>
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