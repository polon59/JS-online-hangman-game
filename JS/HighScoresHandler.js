
class HighScoresHandler{
    
    constructor(){
        this.highScoresList = this.fillHighScoresListFromLocalStorage();
        this.displayHighScores();
    }
    

    addNewrecord(points_, guessedWords_, cheatUsed) {
        let newRecord = {points:points_, guessedWords:guessedWords_, date: this.setDate(), cheat: this.checkIfCheaUsed(cheatUsed)};
        this.highScoresList.push(newRecord);
        this.sortHighScores();
        this.saveHighScoresListInLocalStorage();
        this.displayHighScores();
    }

    checkIfCheaUsed(cheatUsed){
        if(cheatUsed){
            return "Yes";
        }
        return "No";
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


    resetHighScores(){
        localStorage.removeItem("hangmanHS");
        this.highScoresList = this.fillHighScoresListFromLocalStorage();
        this.displayHighScores();
    }


    displayHighScores(){
        let record = "";
        let newTableContent = `<tr class="highScores__table--record">
                                <td></td>
                                <td>points</td>
                                <td>level</td>
                                <td>date</td>
                                <td>cheat</td>
                            </tr>`;

        for (let i = 0; i < 3; i++){
            if (this.highScoresList[i] == null) {
                record = `<tr class="highScores__table--record">
                            <td><img src="Resources/icons/leaderboard${i}.png"></td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                        </tr>`
            } else {
                record = `<tr class="highScores__table--record">
                            <td><img src="Resources/icons/leaderboard${i}.png"></td>
                            <td>${this.highScoresList[i].points}</td>
                            <td>${this.highScoresList[i].guessedWords}</td>
                            <td>${this.highScoresList[i].date}</td>
                            <td>${this.highScoresList[i].cheat}</td>
                        </tr>`
            }
            newTableContent+=record;
        }
        $("#highScores__table").html(newTableContent);
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