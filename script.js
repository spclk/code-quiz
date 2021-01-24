var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector(".start-button");
var questionElement = document.querySelector (".quiz");
var resultsElement = document.querySelector (".results");
var qDisplay = document.querySelector ("#Qs")
var a1Display = document.querySelector ("#A1")
var a2Display = document.querySelector ("#A2")
var a3Display = document.querySelector ("#A3")
var a4Display = document.querySelector ("#A4")


var questionsIndex = 0
var answersIndex = 0

// this data will be used by a later function to fill in the quiz section

var questions = [ 
    {
        Q: "Which of these IS NOT a variable value?",
        A: ["string", "number", "prompt", "boolean"],
        C: "prompt"
    },
    {
        Q: "When a variable lists elements associated with one another, that list is called:",
        A: ["variety", "array", "inventory", "catalog"],
        C: "array"
    }
]

// this data will be used by a later function to fill in the results section

var answers = [
  {
    correctMessage: "You are correct!", 
    wrongMessage: "Wrong answer, try again",
  }
]

function displayQuestions (){
    qDisplay.textContent = questions[questionsIndex].Q
    a1Display.textContent = questions[questionsIndex].A[0]
    a2Display.textContent = questions[questionsIndex].A[1]
    a3Display.textContent = questions[questionsIndex].A[2]
    a4Display.textContent = questions[questionsIndex].A[3]

}
function displayResults () {
  resultsElement.textContent = answers[answersIndex].correctMessage
  resultsElement.textContent = answers[answersIndex].wrongMessage

}

// function to begin the timer when the start button is clicked

function startTimer() {
    timerCount=60
    timer = setInterval(function() {
      timerCount--;
      timerElement.textContent = timerCount;
      if (timerCount >5999) {
      }
     
      if (timerCount === 0) {
        clearInterval(timer);
      }
    }, 1000);
  }


  startButton.addEventListener("click",function(){
    displayQuestions();
    startTimer();
  })

  questionElement.addEventListener("click",function (event){

    if(event.target.matches("button")){
        console.log(event.target)
        console.log (event.target.textContent)
      }
    
    if(event.target.matches(a3Display.textContent = questions[questionsIndex].C)){
      displayResults([0]);
      }
    
    else { 
      displayResults([1]);
      }
      

  })  

 


 


