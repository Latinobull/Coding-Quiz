//variables
var timeLeft = $("#timer")
var timeDisplay
var currentHighscore = 0
var questionArray = ["Q1: Commonly used data type do not include _____",
 "Q2: The condition of a loop is enclosed in _____",
 "Q3: arrays in JavaScript can be used to store _____",
 "Q4: String values must be enclosed within _____",
 "Q5: To print to cosole in JavaScript, the syntax is _____"]
var answerArray1 = ["Strings", "Booleans", "Alerts", "Numbers"]
var answerArray2 = ["Quotes", "Curly Brackets", "Parentheses", "Numbers"]
var answerArray3 = ["Numbers", "Strings", "Objects", "All of the Ab0ve"]
var answerArray4 = ["Quotes", "Curly Brackets", "Parentheses", "Square Brackets"]
var answerArray5 = ["Print()", "Console.log()", "System.out.Println()", "cout "]
var questionsEl = $("#Qdisplay")
var questionMove = false
arrayQu= 0
var saveScore = $("#gameResults")
var score = $("#score")
var userName = $("#playerName")
var userStorage = window.localStorage
var savedScores = []
var highScore = $("#hsScreen")
//display timer
timeLeft.text(timeDisplay)
//function to start the game 
$("#readyButton").on("click", function() {
    timeDisplay = 2
    timeLeft.text(timeDisplay)
    console.log(questionMove)
    console.log(answerArray1)
    
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

    for ( i = 0; i < answerArray1.length; i++) {
        $("<li>").append(answerArray1[i])
        console.log(answerArray1)
    }
    $("#ans2").on("click", function() {
         console.log(questionMove)
            
         var answerPool = answerArray1
            if (arrayQu = 0) {
                answerPool = answerArray1
            }
            else if (arrayQu = 1) {
                answerPool = answerArray2
            }
    
            else if (arrayQu = 2) {
                answerPool = answerArray3
            }
            else if (arrayQu = 3) {
                answerPool = answerArray4
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
    $("#redoBtn").on("click", function() {
        saveScore.css("display", "none")
        $("#begin").css("display", "block")
    })
    $("#scoreBtn").on("click", function(e) {
        e.preventDefault
        var nameEntered = userName.value.trim()
        if (nameEntered != "")
    
            var userRecord = {
                playerName: nameEntered,
                playerScore: timeDisplay,
            }
            console.log(userRecord) 
            savedScores.push(userRecord)
            playerStorage.setItem("saved scores", JSON.stringify(savedScores))
    })
}


// function to show how the final score and to enter high score
$("#hsbutton").on("click", function() {
    questionsEl.css("display", "none")
    saveScore.css("display", "none")
    highScore.css("display", "block")
})

//restart button function

