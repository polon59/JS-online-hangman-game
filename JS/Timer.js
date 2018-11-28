class Timer{

    constructor(timerType){
        // this.timerDiv = document.getElementById("roundTime");
        console.log(timerType);

        this.totalSeconds = 0;
        setInterval(this.setTime, 1000);
    }


    resetTime(){
        this.totalSeconds = 0;
    }

    

    setTime() {
      this.totalSeconds++;
      let seconds = this.totalSeconds%60;
      let minutes = this.totalSeconds/60;
    //   this.timerDiv.innerHTML = `${minutes}:${seconds}`
      var chuj = document.getElementById("totalTime");
      chuj.innerHTML = `${minutes}:${seconds}`;
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