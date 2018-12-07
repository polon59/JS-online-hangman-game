
class HighScoresHandler{

    constructor(){
        this.highScoresList = this.fillHighScoresListFromLocalStorage();

    }


    fillHighScoresListFromLocalStorage() {
        if (localStorage.getItem("hangmanHS") == null) {
            return new Array();
        }
        else{
            return JSON.parse(localStorage.getItem("hangmanHS"));
        }
    }


    addNewrecord(points_, guessedWords_) {
        let newRecord = {points:points_, guessedWords:guessedWords_, date: this.setDate()};

        this.highScoresList.push(newRecord);
        this.sortHighScores();
        localStorage.setItem("hangmanHS", JSON.stringify(this.highScoresList));



        this.highScoresList.forEach(element => {
            let i = 1;
            console.log(`${i}.  ${element.points}`);
            i++;
        });
        
    }

    
    
    sortHighScores() {
        this.highScoresList.sort(this.compareNumber);
        this.highScoresList.splice(3);
    }
    
    compareNumber(a,b) {
        return b.points - a.points;
    }
    

    setDate(){
        let today = new Date();
        let day = today.getDate();
        let month = today.getMonth()+1;
        let year = today.getFullYear();
        
        if(day<10) {
            day = `0${day}`;
        } 
        
        if(month<10) {
            month = `0${month}`;
        } 
        
        return `${day}.${month}.${year}`
    }
}







// var highScores;
// fillHighScoresFromLocalStorage();
// displayHighScores();


// function addNewrecord(record) {
//     highScores.push(record);
//     sortHighScores();
//     localStorage.setItem("highScores", JSON.stringify(highScores));
// }


// function sortNumber(a,b) {
//     return b - a;
// }


// function sortHighScores(params) {
//     highScores.sort(sortNumber);
//     highScores.splice(3);
// }


// function displayHighScores(params) {

//     for (let index = 0; index < highScores.length; index++) {
//         document.getElementById(`highScore${index}`).innerHTML = highScores[index];
//     }
   
// }


// function fillHighScoresFromLocalStorage() {
//     if (localStorage.getItem("highScores") == null) {
//         highScores = [];
//       }else{
//         highScores = JSON.parse(localStorage.getItem("highScores"));
//       }
// }