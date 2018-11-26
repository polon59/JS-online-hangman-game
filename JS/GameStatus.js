class GameStatus{

    constructor(){
        this.gameStatusImageDiv = document.getElementById("hangmanImageContainer");
        this.lives = 9;
    }

    

    displayGameStatusImage(){
        this.gameStatusImageDiv.style.backgroundImage = `url("Resources/h${this.lives}.jpg")`;
    }


    subtractLives(){
        this.lives --;
        this.displayGameStatusImage();
    
        if (this.lives == 0) {
            alert("GAME OVER");
        }
    }


    
}