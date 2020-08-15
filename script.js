var startButton = document.getElementById("start");
var timeEl = document.getElementById("time");

startButton.addEventListener("click", startQuiz);
startButton.addEventListener("click", setTimer);

function startQuiz() {
    console.log("Start!");
}

function nextQuestion() {

}

function selectAnswer() {

}

//TIMER

var secondsLeft = 60;

function setTimer() {
    var timeInterval = setInterval(function() {
      secondsLeft--;
      timeEl.textContent = "Timer: " + secondsLeft;
  
      if(secondsLeft === 0) {
        clearInterval(timeInterval);
      }
  
    }, 6000);
  }