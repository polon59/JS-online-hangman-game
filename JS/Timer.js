class Timer{

    constructor(timerType){
        this.timerType = timerType;
        this.timerDiv = document.getElementById(this.timerType);
        this.timerName = timerType;
        this.isPaused = false;
        this.totalSeconds = 0;
        

        setInterval(() => this.setTime(), 1000);
        
    }


    resetTime(){
        this.totalSeconds = 0;
        console.log("RESET");
        this.startTimer();
        
    }

    startTimer(){
        this.isPaused = false;
    }

    pause(){
        this.isPaused = true;
    }


    setTimerName(){
        if (this.timerType == "totalTime") {
            return "Total time";
        } else {
            return "Round time";
        }
    }


    setTime() {
        if (!this.isPaused) {
            this.totalSeconds++;
            let seconds = this.adjustTimeFormat(this.totalSeconds%60);
            let minutes = this.adjustTimeFormat(Math.trunc(this.totalSeconds/60));
            let timerName = this.setTimerName();
            this.timerDiv.innerHTML = `${timerName} :  ${minutes}:${seconds}`;
        }
    }
    

    adjustTimeFormat(value){
        if (value < 10){
            value = "0" + value;
        }
        return value;
    }


}