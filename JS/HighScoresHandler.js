
class HighScoresHandler{
    
    constructor(){
        this.highScoresList = this.fillHighScoresListFromLocalStorage();
        this.displayHighScores();
    }
    

    addNewrecord(points_, guessedWords_) {
        let newRecord = {points:points_, guessedWords:guessedWords_, date: this.setDate()};
        this.highScoresList.push(newRecord);
        this.sortHighScores();
        this.saveHighScoresListInLocalStorage();
        this.displayHighScores();
    }
    

    sortHighScores() {
        this.highScoresList.sort(this.compareNumber);
        this.highScoresList.splice(3);
    }
    

    compareNumber(a,b) {
        return b.points - a.points;
    }


    fillHighScoresListFromLocalStorage() {
        if (localStorage.getItem("hangmanHS") == null) {
            return new Array();
        }
        else{
            return JSON.parse(localStorage.getItem("hangmanHS"));
        }
    }


    saveHighScoresListInLocalStorage(){
        localStorage.setItem("hangmanHS", JSON.stringify(this.highScoresList));
    }


    displayHighScores(){
        let record = "";

        for (let i = 0; i < 3; i++){
            if (this.highScoresList[i] == null) {
                record = `<tr class="highScores__table--record">
                            <td>${i}</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                        </tr>`
            } else {
                record = `<tr class="highScores__table--record">
                            <td>${i}</td>
                            <td>${this.highScoresList[i].points}</td>
                            <td>${this.highScoresList[i].guessedWords}</td>
                            <td>${this.highScoresList[i].date}</td>
                        </tr>`
            }

            $("#highScores__table").append(record);
        }
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