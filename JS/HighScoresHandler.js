
class HighScoresHandler{

    constructor(){
        this.highScoresList = this.fillHighScoresListFromLocalStorage();

    }


    fillHighScoresListFromLocalStorage() {
        if (localStorage.getItem("hangmanHS") == null) {
            this.highScoresList = [];
          }else{
            this.highScoresList = JSON.parse(localStorage.getItem("hangmanHS"));
          }
    }

    
    addNewrecord(points, guessedWords) {
        highScores.push(record);
        sortHighScores();
        localStorage.setItem("highScores", JSON.stringify(highScores));
    }

}







var highScores;
fillHighScoresFromLocalStorage();
displayHighScores();


function addNewrecord(record) {
    highScores.push(record);
    sortHighScores();
    localStorage.setItem("highScores", JSON.stringify(highScores));
}


function sortNumber(a,b) {
    return b - a;
}


function sortHighScores(params) {
    highScores.sort(sortNumber);
    highScores.splice(3);
    // alert(highScores.join(","));
}


function displayHighScores(params) {

    for (let index = 0; index < highScores.length; index++) {
        document.getElementById(`highScore${index}`).innerHTML = highScores[index];
    }
   
}


function fillHighScoresFromLocalStorage() {
    if (localStorage.getItem("highScores") == null) {
        highScores = [];
      }else{
        highScores = JSON.parse(localStorage.getItem("highScores"));
      }
}