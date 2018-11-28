class Timer{

    constructor(timerType){

    }

    var timerDiv = document.getElementById("roundTime");
    var totalTimeDiv = document.getElementById("totalTime");

    var totalSeconds = 0;
    setInterval(setTime, 1000);
    
    function setTime() {
      ++totalSeconds;
      let seconds = pad(totalSeconds % 60);
      let minutes = pad(parseInt(totalSeconds / 60));
      let timeString = `${minutes}:${seconds}`
    }
    

    function pad(val) {
      var valString = val + "";
      if (valString.length < 2) {
        return "0" + valString;
      } else {
        return valString;
      }
    }

}