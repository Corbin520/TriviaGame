// create your variables,
var time = 45;

// create an array of trivia questions.
var questions = {
    Q1: "how many golf clubs can you carry in a pga tour?"; // question 1
    Q2: "What color of jacket do you get if you win the masters?"; // question 2
    Q3: "Can you change the brand or type of golf ball midway through a pro tournament?"; // question 3
    Q4: "How many holes are in a full round of golf?"; // question 4
    Q5: "What year was golf invented?"; // question 5
    Q6: "What is it called if the hole calls for a 4 and you shot a 4, what is it called?";// question 6
    Q7: "Which of the following is not a professional golfer?";// question 7
    Q8: "How old is Phil Mickelson?";// question 8
};

// Options the user can choose from
var options = {
    ["13", "11", "15", "14"]; // options for question 1
    ["Blue", "Green", "Yellow", "black"]; // options for question 2
    ["Yes", "No"]; // options for question 3 
    ["16", "19", "18", "20"]; // options for question 4
    ["1457", "1557", "1357", "None of the answers"]; // options for question 5
    ["Eagle", "Par", "Bogey"]; // options ffor question 6
    ["Tiger Woods", "Jordan Spieth", "Danny Ainge", "Ben Hogan"]; // options for questions 7
    ["47", "49", "48", "50"]; // options for question 8
}

// Answers to the questions
var answers = [
    "14"; // question 1 answer
    "Green"; // question 2 answer
    "No"; // question 3 answer
    "18"; // question 4 answer
    "1457"; // question 5 answer
    "Par"; // question 6 answer
    "Danny Ainge" // question 7 answer
    "48" // question 8 answer
;

// call your ID's from HTML
var timeText = document.getElementById("time-remaining");
var resultText = docutment.getElementById("results");
var correctAnsText = document.getElementById("correct-answers");
var incorrectAnsText = document.getElementById("incorrect-answers");
var unanswered = document.getElementById("un-answered");

// create a timer that counts down to 0
// change to 1000 * 45 when your done
setTimeout(timeRemaining, 1000 * 5);

//defind a function timeRemaining() to store what we want it todo
function timeRemaining() {
    time--;

}





// lossesText.text("Losses: " + losses) same as above but with jquer