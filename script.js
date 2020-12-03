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
var answerPool = answerArray1
var questionsEl = $("#Qdisplay")
var questionMove = false
var arrayQu = 0
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
    timeDisplay = 60
    timeLeft.text(timeDisplay)
    
    $("#begin").css("display", "none")
    questionsEl.css("display", "block")
    questionStrings()
    //countdown timer
    interval = setInterval(function(){
        if (timeDisplay > 0){ 
            timeDisplay --
            timeLeft.text(timeDisplay)
            
        }
        else if (timeDisplay == 0 || arrayQu == 5){
            clearInterval(interval)
           return endQuiz()
        }
    }, 1000)    
})
//function to display questions and interaction with right and wrong answers

function questionStrings(){
    questionMove = false
    console.log(questionMove)
    $(".test").empty()
    $("#ques").text(questionArray[arrayQu])
    
    //console.log(arrayQu)
    console.log(answerPool)
    for ( i = 0; i < answerPool.length; i++) {
        var test = $("<li>")
        var button = $("<button>")
        button.addClass("answers")
        button.attr("id", i)
        button.text(answerPool[i])
        test.append(button)
        $(".test").append(test)

    }
    
    $("body").on("click", "[id^='1']", function() {
        questionMove = true
         console.log(questionMove)
            
         
            
        if (questionMove === true) {
            arrayQu ++
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
            else if (arrayQu = 4) {
                answerPool = answerArray5
            }
            console.log(arrayQu)
            //console.log(questionArray[arrayQu])
            questionMove = !true
            console.log(questionMove)
            questionStrings()
        }   
        else {
             console.log("wrong answer")
            }

    })
    

}
// I CANT FIGURE THIS OUT!!!!!!!AERHGAEIHFBGA0EF

function endQuiz() {
    questionsEl.css("display", "none")
    saveScore.css("display", "block")
    score.text(timeDisplay)
    $("#redoBtn").on("click", function() {
        saveScore.css("display", "none")
        $("#begin").css("display", "block")
    })
    $("#scoreBtn").on("click", function(e) {
        e.preventDefault()
        var nameEntered = userName.value
        if (nameEntered != "")
    
            var userRecord = {
                userName: nameEntered,
                userScore: timeDisplay,
            }
            console.log(userRecord) 
            savedScores.push(userRecord)
            userStorage.setItem("saved scores", JSON.stringify(savedScores))
    })
}


// function to show how the final score and to enter high score
$("#hsbutton").on("click", function() {
    questionsEl.css("display", "none")
    saveScore.css("display", "none")
    highScore.css("display", "block")
    $("#begin").css("display", "none")
})
function Highscore(event) {
    event.preventDefault()

    for (var i = 0; i < savedScores.length; i++) {
        var userNameLog = $("<li>")
        var userScoreLog = $("<li>")
        $("#hsScreen").append(userNameLog)
        userNameLog.text(savedScores[i].userName)
        $("#hsscreen").append(userScoreLog)
        userNameLog.text(savedScores[i].userScore)
    }
}

$("#returnBtn").on("click", function() {
    highScore.css("display", "none")
    $("#begin").css("display", "block")
})
//restart button function

