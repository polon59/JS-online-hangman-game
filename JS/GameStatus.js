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
            this.restartGame();
            this.roundTimer.resetTime();
            this.gameTimer.resetTime();

        }
    }



    startNewLevel(){
        //NEXT LEVEL
        this.popup.displayNextLevelPopup();
        generateNewPassword();
        this.roundTimer.resetTime();
        //Round time = 0;
    }



    restartGame(){
        this.popup.displayGameOverPopup();
        this.lives = 9;
        this.score = 0;
        this.displayScore();
        this.displayGameStatusImage();
        generateNewPassword();
        
        //Full time = 0;
        //Round time = 0;
    }



    
}