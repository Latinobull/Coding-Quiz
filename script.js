//variables
var timeLeft = 0
var timeDisplay = 60
var currentHighscore = 0
var questionArray = ["Q0", "Q1", "Q2", "Q3"]
var answerArray1 = ["A0-1", "A1-1", "A2-1", "A3-1"]
var answerArray2 = ["A0-2", "A1-2", "A2-2", "A3-2"]
var answerArray3 = ["A0-3", "A1-3", "A2-3", "A3-3"]
var answerArray4 = ["A0-4", "A1-4", "A2-4", "A3-4"]
var questionsEl = $("#Qdisplay")

// function to display timer
timerTag = $("#timer")
timerTag.text(timeDisplay)

//function to start the game 
$("#readyButton").on("click", function() {
    $("#begin").css("display", "none")
    questionsEl.css("display", "block")
})




//function to display questions and interaction with right and wrong answers




// function to show how the final score and to enter high score

//restart button function

