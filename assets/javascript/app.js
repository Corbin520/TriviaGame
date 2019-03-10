
$(document).ready(function() {
// Trivia Questions
var triviaQuestions = [

    {
        questionText: "how many golf clubs can you carry in a pga tour?",
        options: ["13", "11", "15", "14"],
        answer: 3
    },
    {
        questionText: "What color of jacket do you get if you win the masters?",
        options: ["Blue", "Green", "Yellow", "black"],
        answer: 1
    },
    {
        questionText: "Can you change the brand or type of golf ball midway through a pro tournament?",
        options: ["Yes", "No"],
        answer: 1,
    },
    {
        questionText: "How many holes are in a full round of golf?",
        options: ["16", "19", "18", "20"],
        answer: 2,
    },
    {
        questionText: "What year was golf invented?",
        options: ["1457", "1557", "1357", "None of the answers"],
        answer: 0,
    },
    {
        questionText: "What is it called if the hole calls for a 4 strokes and you shot  4 strokes?",
        options: ["Eagle", "Par", "Bogey"],
        answer: 1
    },
    {
        questionText: "Which of the following is not a professional golfer?",
        options: ["Tiger Woods", "Jordan Spieth", "Danny Ainge", "Ben Hogan"],
        answer: 2
    },
    {
        questionText: "How old is Phil Mickelson?",
        options: ["47", "49", "48", "50"],
        answer: 1
    },
]

var time = 60;
var countDown;
var intervalId;
var correctAnswers = 0;
var incorrectAnswers = 0;


// HTML text stored to JS variables
var questionsDiv = $(".questions")
var timeText = document.getElementById("time-remaining");
var resultText = document.getElementById("results");
var correctAnsText = document.getElementById("correct-answers");
var incorrectAnsText = document.getElementById("incorrect-answers");
var unanswered = document.getElementById("un-answered");
var start = document.getElementById("startButton")
var questionText1 = document.getElementById("question1");


// 1000 === 1 second 
function clockStart() {
    intervalId = setInterval(decrement, 1000);
}

// -- 1000 until time hits 0
function decrement() {

    time--;
    $("#time-remaining").html("Time Remaining: 0:" + time);
    
    if (time === 0) {
        finished = true;

        stop();
        $(".questions").hide();
        $(".stop-container").hide();
        $("#incorrect-answers").show();
        $("#correct-answers").show();
        $("#time-remaining").hide();

        for (var i = 0; i < triviaQuestions.length; i++) {

            var userChoice = $("input[name=question-" + i + "]:checked").val();

            var answer = triviaQuestions[i].answer;

            if (userChoice == triviaQuestions[i].options[answer]) {
                correctAnswers++;
                correctAnsText.textContent = "Correct Answers: " + correctAnswers;

            } else {
                incorrectAnswers++;
                incorrectAnsText.textContent = "Incorrect Answers: " + incorrectAnswers;
            }
        }
    }
}

// clear interval = stop()
function stop() {

    clearInterval(intervalId);
}



// Start button on click
$("#startButton").on("click", function () {
    $(".questions").show();
    $(".start-container").hide();
    $(".stop-container").show();
    clockStart();
    $("#time-remaining").show();
});

// displayQuestions() == showing the questions and options from trivia questions array
function displayQuestions() {

    for (var i = 0; i < triviaQuestions.length; i++) {

        var div = $("<div>")

        console.log(triviaQuestions[i].questionText)

        var h2 = $("<h2> " + triviaQuestions[i].questionText + "<h2>");

        div.append(h2)

        for (var j = 0; j < triviaQuestions[i].options.length; j++) {

            console.log(triviaQuestions[i].options[j])

            var radio = $('<input>');
            radio.attr('type', "radio");
            radio.attr('name', "question-" + i);
            radio.attr('value', triviaQuestions[i].options[j])

            div.append(radio)
            div.append(triviaQuestions[i].options[j] + "<br/>")

            questionsDiv.append(div)
        }
    }
}

// start out game questions
displayQuestions();


// function that runs when the done button is clicked 
function gameOver() {

    $("#doneButton").on("click", function () {
        $(".questions").hide();
        $(".stop-container").hide();
        $("#incorrect-answers").show();
        $("#correct-answers").show();
        $("#time-remaining").hide();

        for (var i = 0; i < triviaQuestions.length; i++) {

            var userChoice = $("input[name=question-" + i + "]:checked").val();

            var answer = triviaQuestions[i].answer;

            if (userChoice == triviaQuestions[i].options[answer]) {
                correctAnswers++;
                correctAnsText.textContent = "Correct Answers: " + correctAnswers;
                stop();
                decrement();

            } else {
                incorrectAnswers++;
                incorrectAnsText.textContent = "Incorrect Answers: " + incorrectAnswers; 
                stop();
                decrement();
            }
        }
    })
}

// calling game over function
gameOver();

})


















