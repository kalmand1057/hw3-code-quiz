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

//QUESTIONS
var questions = [
  {
    question: "What is Javascript?",
    options: ["type of coffee", "programming language", "type of font"],
    answerIdx: 1
  },
  {
    question: "What section of the HTML page do you place the javascript?",
    options: ["body", "head", "footer"],
    answerIdx: 0
  },
  {
    question: "How do you add a comment in Javascript?",
    options: ["!comment", "<!--comment-->", "//comment"],
    answerIdx: 2
  },
  {
    question: "What HTML element do you use for Javascript?",
    options: ["<javascript>", "<script>", "<js>"],
    answerIdx: 1
  },
  {
    question: "What case do you use in Javascript?",
    options: ["Camel Case", "Snake Case", "Pascal Case"],
    answerIdx: 0
  },
]

//TIMER

var secondsLeft = 120;

function setTimer() {
    var timeInterval = setInterval(function() {
      secondsLeft--;
      timeEl.textContent = "Timer: " + secondsLeft;
  
      if(secondsLeft <= 0) {
        clearInterval(timeInterval);
      }
  
    }, 1000);
  }