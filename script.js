var startButton = document.getElementById("start");
var timeEl = document.getElementById("time");


startButton.addEventListener("click", setTimer);



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
];

var currentQuestionsIdx = 0;
renderQuestion();

//FUNCTIONS
function initQuestion() {
  $(".option").on("click", function () {
    var correctAnsIdx = questions[currentQuestionsIdx].answerIdx;
    console.log($(this).text());
    if($(this).text() === questions[currentQuestionsIdx].options[correctAnsIdx]) {
      alert("correct!");
      currentQuestionsIdx++;
      renderQuestion();
    } else {
      alert("Incorrect!");
    }
  })
}


function renderQuestion() {
  $("#question").text(questions[currentQuestionsIdx].question);
  var options = questions[currentQuestionsIdx].options;
  $("#options").html("");
  for (var i = 0; i < options.length; i++) {
    var newOptions = $("<button>");
    $("#options").append(newOptions);
  }
  initQuestion();
}

//TIMER



function setTimer() {
  var secondsLeft = 120;

    var timeInterval = setInterval(function() {
      secondsLeft--;
      timeEl.textContent = "Timer: " + secondsLeft;
  
      if(secondsLeft <= 0) {
        clearInterval(timeInterval);
      }
  
    }, 1000);
  }