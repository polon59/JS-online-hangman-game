class Timer{

    constructor(timerType){
        this.timerDiv = document.getElementById(timerType);
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


    setTime() {
        if (!this.isPaused) {
            this.totalSeconds++;
            let seconds = this.adjustTimeFormat(this.totalSeconds%60);
            let minutes = this.adjustTimeFormat(Math.trunc(this.totalSeconds/60));
            this.timerDiv.innerHTML = `${minutes}:${seconds}`;
        }
    }
    

    adjustTimeFormat(value){
        if (value < 10){
            value = "0" + value;
        }
        return value;
    }


}