class GameStatus{

    constructor(){
        this.gameStatusImageDiv = document.getElementById("hangmanImageContainer");
        this.scoreImageDiv = document.getElementById("score");
        this.lives = 9;
        this.score = 0;
        this.popup = new Popup();
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
            this.restartGame();
            //GAME OVER
        }
    }



    startNewLevel(){
        //NEXT LEVEL
        this.popup.displayNextLevelPopup();
        generateNewPassword();
        //Full time = 0;
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