class GameStatus{

    constructor(){
        this.gameStatusImageDiv = document.getElementById("hangmanImageContainer");
        this.scoreImageDiv = document.getElementById("score");
        this.lives = 9;
        this.score = 0;
        this.popup = new Popup();
        this.roundTimer = new Timer("roundTime");
        this.gameTimer = new Timer("totalTime");
    }


    addScore(value){
        this.score+=value;
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
        this.popup.displayGameOverPopup();
    }



    startNewLevel(){
        //NEXT LEVEL
        this.popup.displayNextLevelPopup();
        generateNewPassword();
        this.roundTimer.resetTime();
        //Round time = 0;
    }


    stopTimers(){
        this.roundTimer.pause();
        this.gameTimer.pause();
    }

    
    startTimers(){
        this.roundTimer.resetTime();
        this.gameTimer.resetTime();
    }


    restartGame(){
        this.lives = 9;
        this.score = 0;
        this.displayScore();
        this.displayGameStatusImage();
        this.startTimers();
        generateNewPassword();
        
        //Full time = 0;
        //Round time = 0;
    }



    
}