
// Trivia Question

var triviaQuestions = [
    {
        questionText: "how many golf clubs can you carry in a pga tour?",
        options: ["13", "11", "15", "14"],
        // answerIndex: 1,
        answer: 3 // 14
    },
    {
        questionText: "What color of jacket do you get if you win the masters?",
        options: ["Blue", "Green", "Yellow", "black"],
        answer: 1 // green
    },
    {
        questionText: "Can you change the brand or type of golf ball midway through a pro tournament?",
        options: ["Yes", "No"],
        answer: 1, // No
    },
    {
        questionText: "How many holes are in a full round of golf?",
        options: ["16", "19", "18", "20"],
        answer: 2, // 18
    },
    {
        questionText: "What year was golf invented?",
        options: ["1457", "1557", "1357", "None of the answers"],
        answer: 0, // 1457
    },
    {
        questionText: "What is it called if the hole calls for a 4 strokes and you shot  4 strokes?",
        options: ["Eagle", "Par", "Bogey"],
        answer: 1 // par
    },
    {
        questionText: "Which of the following is not a professional golfer?",
        options: ["Tiger Woods", "Jordan Spieth", "Danny Ainge", "Ben Hogan"],
        answer: 2 // Danny Ainge
    },
    {
        questionText: "How old is Phil Mickelson?",
        options: ["47", "49", "48", "50"], 
        answer: 2 // 48
    },
]

// create your variables,
var time = 45;
var timeEnd = 0;
var countDown;
var intervalId;
var correctAnswers = 0;
var incorrectAnswers = 0;


// call your ID's from HTML
var questionsDiv = $(".questions")
var timeText = document.getElementById("time-remaining");
var resultText = document.getElementById("results");
var correctAnsText = document.getElementById("correct-answers");
var incorrectAnsText = document.getElementById("incorrect-answers");
var unanswered = document.getElementById("un-answered");
var start = document.getElementById("startButton")

var questionText1 = document.getElementById("question1");
var questionText2 = document.getElementById("question2");
var questionText3 = document.getElementById("question3");
var questionText4 = document.getElementById("question4");
var questionTest5 = document.getElementById("question5");
var questionText6 = document.getElementById("question6");
var questionText7 = document.getElementById("question7");
var questionText8 = document.getElementById("question8");
           

// function starts the clock
function clockStart() {
    // make the clock decrement by 1 second (45-0)
    intervalId = setInterval(decrement, 1000);
}

// function the decrements the time
function decrement() {
    // make the time variable -1
    time--;
    // display the time in the browser
    $("#time-remaining").html("Time Remaining 00:" + time);
}

// build a function that stops the clock at 00:00
function clockStop() {
}

// click on start button to start the clock
$("#startButton").on("click", function() {
    clockStart();
});


//put those on our htm page
function displayQuestions(){
    //loop over our array
    for (var i = 0; i < triviaQuestions.length; i++) {
        //create a div to hold our questions and options
        var div = $("<div>");
        console.log(triviaQuestions[i].questionText)
        //h2 that will hold our question we are asking our users
        var h2 = $("<h2> " + triviaQuestions[i].questionText +"</h2>")
        div.append(h2)
        for (var j = 0; j < triviaQuestions[i].options.length; j++) {
            console.log(triviaQuestions[i].options[j])
            // it is now consoling each option from the array of questions
            //create an bunch of select elements that are type=option that will hold our possible options/answers
            var radio = $('<input type="radio" name="question-' + i +' value="' + triviaQuestions[i].options[j] +'"> ' + triviaQuestions[i].options[j]+ '<br>')
            //$("input[name=rate]:checked").val()
            div.append(radio)
        }
        console.log(questionText1);
        // display the questions display possible answers to the DOM / screen
        questionsDiv.append(div).append($("<hr>"))
    }
}

displayQuestions();


//if they ran out of time theu=y loose and we need to get answers if any

//listen for button click that user can click on when done with our questionare
            
// if/else checking if the userChoice is === answer
    
    // if so, ++ to correct, if not ++ to incorrect




