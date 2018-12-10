class GameStatus{

    constructor(){
        this.gameStatusImageDiv = document.getElementById("hangmanImageContainer");
        this.scoreImageDiv = document.getElementById("score");
        this.lives = 9;
        this.score = 0;
        this.cheatUsed = false;
        this.guessedWordsNumber = 0;
        this.scoreEarnedOnLevel = 0;
        this.popup = new Popup();
        this.roundTimer = new Timer("roundTime");
        this.gameTimer = new Timer("totalTime");
        this.HighScoresHandler = new HighScoresHandler();
    }

    addScore(value){
        this.score+=value;
        this.scoreEarnedOnLevel += value;
        this.displayScore();
    }

    displayScore(){
        this.scoreImageDiv.innerHTML = `SCORE : ${this.score}`;
    }

    useCheat(){
        this.cheatUsed = true;
    }

    displayGameStatusImage(){
        this.gameStatusImageDiv.style.backgroundImage = `url("Resources/h${this.lives}.jpg")`;
    }

    subtractLives(){
        this.lives --;
        this.displayGameStatusImage();
    
        if (this.lives == 0) {
            this.endGame();
        }
    }

    endGame() {
        this.stopTimers();
        this.popup.displayGameOverPopup(true, this.score, this.guessedWordsNumber);
    }

    endLevel(){
        this.stopTimers();
        this.guessedWordsNumber++;
        this.popup.displayNextLevelPopup(this.scoreEarnedOnLevel, this.guessedWordsNumber);
        this.scoreEarnedOnLevel = 0;
    }

    // on button clicked
    startNewLevel(){
        generateNewPassword();
        this.roundTimer.resetTime();
        this.gameTimer.startTimer();
    }

    // on button clicked
    restartGame(){
        this.HighScoresHandler.addNewrecord(this.score, this.guessedWordsNumber, this.cheatUsed);
        this.lives = 9;
        this.score = 0;
        this.guessedWordsNumber = 0;
        this.cheatUsed = false;
        this.displayScore();
        this.displayGameStatusImage();
        this.resetTimers();
        generateNewPassword();
    }

    stopTimers(){
        this.roundTimer.pause();
        this.gameTimer.pause();
    }

    resetTimers(){
        this.roundTimer.resetTime();
        this.gameTimer.resetTime();
    }

    resetHighScores(){
        this.HighScoresHandler.resetHighScores();
    }
}