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
            alert("GAME OVER");
            this.popup.displayGameOverPopup();
        }
    }


    addLevel(){
        alert("NEXT LEVEL");
        this.popup.displayNextLevelPopup();
    }



    
}