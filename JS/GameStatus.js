class GameStatus{

    constructor(){
        this.gameStatusImageDiv = document.getElementById("hangmanImageContainer");
        this.scoreImageDiv = document.getElementById("score");
        this.lives = 9;
        this.score = 0;
        this.scoreEarnedOnLevel = 0;
        this.popup = new Popup();
        this.roundTimer = new Timer("roundTime");
        this.gameTimer = new Timer("totalTime");
    }


    addScore(value){
        this.score+=value;
        this.scoreEarnedOnLevel += value;
        this.displayScore();

        
    }


    displayScore(){
        this.scoreImageDiv.innerHTML = `SCORE : ${this.score}`;
    }

    

    displayGameStatusImage(){
        this.gameStatusImageDiv.style.backgroundImage = `url("Resources/h${this.lives}.jpg")`;
    }



    subtractLives(){
        this.lives --;
        this.displayGameStatusImage();
    
        if (this.lives == 0) {
            // GAME OVER
            this.endGame();
        }
    }


    endGame() {
        this.stopTimers();
        this.popup.displayGameOverPopup(false, this.score);
    }



    endLevel(){
        this.stopTimers();
        this.popup.displayNextLevelPopup(this.scoreEarnedOnLevel);
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
        this.lives = 9;
        this.score = 0;
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





    
}