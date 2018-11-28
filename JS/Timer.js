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
        this.isPaused = false;
    }


    pause(){
        this.isPaused = true;
    }


    setTime() {
        if (!this.isPaused) {
            this.totalSeconds++;
            let seconds = this.totalSeconds%60;
            let minutes = Math.trunc(this.totalSeconds/60);
            this.timerDiv.innerHTML = `0${minutes}:${seconds}`;
        }
    }
    

    // pad(val) {
    //   var valString = val + "";
    //   if (valString.length < 2) {
    //     return "0" + valString;
    //   } else {
    //     return valString;
    //   }
    // }

}