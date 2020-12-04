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
    arrayQu = 0
    answerPool = answerArray1
    timeLeft.text(timeDisplay)
    
    $("#begin").css("display", "none")
    questionStrings()
    questionsEl.css("display", "block")
    //countdown timer
    interval = setInterval(function(){
        if (timeDisplay > 0){ 
            timeDisplay --
            timeLeft.text(timeDisplay)
            
        }
        else if (timeDisplay == 0 || arrayQu > 4){
            clearInterval(interval)
           return endQuiz()
        }
    }, 1000)    
})
//this took me so long to figure out and its still not perfect need to work on this section more

function questionStrings(){
    questionMove = false
    $(".answerlist").empty()
    $("#ques").text(questionArray[arrayQu])
    

    for ( i = 0; i < answerPool.length; i++) {
        var answerList = $("<li>")
        var button = $("<button>")
        button.addClass("answers")
        button.attr("id", i)
        button.text(answerPool[i])
        answerList.append(button)
        $(".answerlist").append(answerList)

    }
    
    $("body").on("click", "[id^='1']", function() {
        questionMove = true

            
         
            
        if (questionMove === true) {
            arrayQu++
            if (arrayQu == 0) {
                answerPool = answerArray1
            }
            else if (arrayQu == 1) {
                answerPool = answerArray2
            }
        
            else if (arrayQu == 2) {
                answerPool = answerArray3
            }
            else if (arrayQu == 3) {
                answerPool = answerArray4
            }
            else if (arrayQu == 4) {
                answerPool = answerArray5
            }
            else if (arrayQu >= 5) {
                return endQuiz()
            }
        
            questionMove = !true
            questionStrings()
        }   
        else {
             alert("Wrong answer try again")
            }

    })
    

}

function endQuiz() {
    questionsEl.css("display", "none")
    highScore.css("display", "none")
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
    // was able to get the score in the localstorage but the name was a problem for me  need to work on this more
            var userRecord = {
                userName: nameEntered,
                userScore: timeDisplay,
            }
            
            savedScores.push(userRecord)
            userStorage.setItem("saved scores", JSON.stringify(savedScores))
    })
}


$("#hsbutton").on("click", function() {
    questionsEl.css("display", "none")
    saveScore.css("display", "none")
    highScore.css("display", "block")
    $("#begin").css("display", "none")
})
function Highscore(event) {
    event.preventDefault()
// Dont know why its not showing up need to work on these section as well
    for (var i = 0; i < savedScores.length; i++) {
        var userNameLog = $("<li>")
        var userScoreLog = $("<li>")
        $("#hsScreen").append(userNameLog)
        userNameLog.text(savedScores[i].userName)
        $("#hsscreen").append(userScoreLog)
        userNameLog.text(savedScores[i].userScore)
        getScores()
    }
}

$("#returnBtn").on("click", function() {
    highScore.css("display", "none")
    $("#begin").css("display", "block")
    arrayQu = 0
    $("#ques").text(questionArray[arrayQu])

})

function getScores(event) {
    event.preventDefault
    if (userStorage.getItem("saved scores")) {
        savedScores = JSON.parse(userStorage.getItem("saved scores"))
    }
}
