//variables
var timeLeft = $("#timer")
var timeDisplay = 5
var currentHighscore = 0
var questionArray = ["Q0", "Q1", "Q2", "Q3","Q4"]
var answerArray0 = ["A0-1", "A0-2", "A0-3", "A0-4"]
var answerArray1 = ["A1-1", "A1-2", "A1-3", "A1-4"]
var answerArray2 = ["A2-1", "A2-2", "A2-3", "A2-4"]
var answerArray3 = ["A3-1", "A3-2", "A3-3", "A3-4"]
var answerArray4 = ["A4-1", "A4-2", "A4-3", "A4-4"]
var questionsEl = $("#Qdisplay")
var questionMove = false
arrayQu= 0
var saveScore = $("#gameResults")
var score = $("#score")
//display timer
timeLeft.text(timeDisplay)
console.log(questionMove)
console.log(answerArray0)
//function to start the game 
$("#readyButton").on("click", function() {
    $("#begin").css("display", "none")
    questionsEl.css("display", "block")
    questionStrings()
    //countdown timer
    interval = setInterval(function(){
        if (timeDisplay > 0){ 
            timeDisplay --
            timeLeft.text(timeDisplay)
            
        }
        else if (timeDisplay == 0){
            clearInterval(interval)
           return endQuiz()
        }
    }, 1000)    
})
//function to display questions and interaction with right and wrong answers

$("#ques").text(questionArray[arrayQu])
function questionStrings(){

    for ( i = 0; i < answerArray0.length; i++) {
        $("<li>").append(answerArray0[i])
        console.log(answerArray0)
    }
    $("#ans2").on("click", function() {
         console.log(questionMove)
            
         var answerPool = answerArray0
            if (arrayQu = 0) {
                answerPool = answerArray0
            }
            else if (arrayQu = 1) {
                answerPool = answerArray1
            }
    
            else if (arrayQu = 2) {
                answerPool = answerArray2
            }
            else if (arrayQu = 3) {
                answerPool = answerArray3
            }
            console.log(arrayQu)
            console.log(answerPool)
        
        if (questionMove === true) {
            arrayQu+
            $("#ques").text(questionArray[arrayQu])
            console.log(questionArray[arrayQu])
            questionMove = false
        }   
        else {
            questionMove = false
             console.log(questionMove)
            }

    })
}
// doing question and answers another day mind is fried lol

function endQuiz() {
    questionsEl.css("display", "none")
    saveScore.css("display", "block")
    score.text(timeDisplay)
    
    }


// function to show how the final score and to enter high score


//restart button function

