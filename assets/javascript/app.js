
// Trivia Question
var questions = {
    Q1: "how many golf clubs can you carry in a pga tour?",
    Q2: "What color of jacket do you get if you win the masters?",
    Q3: "Can you change the brand or type of golf ball midway through a pro tournament?",
    Q4: "How many holes are in a full round of golf?",
    Q5: "What year was golf invented?", 
    Q6: "What is it called if the hole calls for a 4 and you shot a 4, what is it called?",
    Q7: "Which of the following is not a professional golfer?",
    Q8: "How old is Phil Mickelson?",
    };

// Options the user can choose from
    options = {
    Q1: ["13", "11", "15", "14"],
    Q2: ["Blue", "Green", "Yellow", "black"], 
    Q3: ["Yes", "No"], 
    Q4: ["16", "19", "18", "20"], 
    Q5: ["1457", "1557", "1357", "None of the answers"], 
    Q6: ["Eagle", "Par", "Bogey"], 
    Q7: ["Tiger Woods", "Jordan Spieth", "Danny Ainge", "Ben Hogan"], 
    Q8: ["47", "49", "48", "50"], 
    };

// Answers to the questions
    answers = {
    Q1: "14", 
    Q2: "Green",
    Q3: "No",
    Q4: "18",
    Q5: "1457",
    Q6: "Par",
    Q7: "Danny Ainge",
    Q8: "48",
    };

// create your variables,
var time = 45;
var countDown;
var intervalId;


// call your ID's from HTML
var timeText = document.getElementById("time-remaining");
var resultText = document.getElementById("results");
var correctAnsText = document.getElementById("correct-answers");
var incorrectAnsText = document.getElementById("incorrect-answers");
var unanswered = document.getElementById("un-answered");
var start = document.getElementById("startButton")

           

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
    $("#time-remaining").html("00:" + time);
    console.log(time);
}


// Start the game
clockStart();