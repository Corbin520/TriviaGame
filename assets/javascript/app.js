
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
        answer: 1 // 49
    },
]

// create your variables,
var time = 5;
var timeEnd = 0;
var countDown;
var intervalId;
var correctAnswers = 0;
var incorrectAnswers = 0;


// call your ID's from HTML and store them in a variable that we can use to send text to HTML
var questionsDiv = $(".questions")
var timeText = document.getElementById("time-remaining");
var resultText = document.getElementById("results");
var correctAnsText = document.getElementById("correct-answers");
var incorrectAnsText = document.getElementById("incorrect-answers");
var unanswered = document.getElementById("un-answered");
var start = document.getElementById("startButton")

var questionText1 = document.getElementById("question1");

        
// function starts the clock
function clockStart() {
    // make the clock decrement by 1 second (45-0)
    intervalId = setInterval(decrement, 1000);
}

function clockStop() {
    intervalId = clearInterval();
}

// function the decrements the time
function decrement() {
    // make the time variable -1
    time--;
    // display the time in the browser
    $("#time-remaining").html(+ time);
}

// click on start button to start the clock
$("#startButton").on("click", function() {
    $(".questions").show();
    $(".start-container").hide();
    $(".stop-container").show();
    clockStart();
});





// build a function that stops the clock at 00:00
function clockStop() {
}




// create a function that will display our questions, options and buttons

function displayQuestions() {

    for (var i = 0; i < triviaQuestions.length; i++) {

        // make a variable for our questions so we can push the text to html
        var div = $("<div>")
        
        console.log(triviaQuestions[i].questionText)

        
        var h2 = $("<h2> " + triviaQuestions[i].questionText + "<h2>");

        div.append(h2)

            // loop through the options object in the array
            for (var j = 0; j < triviaQuestions[i].options.length; j++) {

                console.log(triviaQuestions[i].options[j])

                // add a button for each answer option while keeping the answer in the same div as the question.
                var radio = $('<input>');
                radio.attr('type', "radio");
                radio.attr('name', "question-" + i ); 
                radio.attr('value', triviaQuestions[i].options[j]) 
                // radio.text(triviaQuestions[i].options[j]);

                // var label = $()
                


                div.append(radio)
                div.append(triviaQuestions[i].options[j] + "<br/>")

                questionsDiv.append(div)
            }
        }
    }

    // start out game
    displayQuestions();




    // We want our user to be able to click the done button if they finish before the time is out. If they do click done
    // we will need to pull their answers (OR the buttons that are checked) and store it so we can check if they are
    // correct or incorrect.

    // listen for done button to bee clicked, then run this function.
    $("#doneButton").on("click", function() {
        $(".questions").hide();
        $(".stop-container").hide();
        $("#incorrect-answers").show();
        $("#correct-answers").show();
        
        // loop over our array one object at a time
        for (var i = 0; i < triviaQuestions.length; i++) {
            
            
            // store the value of the users button click(s) in a userChoice variable
            // get the value of the button that is clicked and store it in a variable to call on later
            // hint * you want the value of the clicked button ( google is a friend) . val

            // we are just storing the useres Input in the userChoice
            var userChoice = $("input[name=question-" + i + "]:checked").val();


            // consoe.log is your friend
            console.log(userChoice);
            
            // creating a variable to store our triviaQuestions[i].answer. Here I am using dot notation to dig from triviaQuestions
            // into the answer section(property) (which holds our answer that must be clicked to get the correct answer)
            // create a variable to store the answer from our array

            // create a variable that hold our array + what we are pulling from the array
            var answer = triviaQuestions[i].answer;
 


            // IF user choice is = to the answer within the options, make the score go up. Thing to remember,
            // we are in a loop, therefor this is ONLY going through the array one at a time. for example, this
            // loop will start at index [0] OR question 1, loop through the array, see what options the user has
            // and see if that optoin that was selected matches the answer within the same object in the array

            // IF statment if correct at options and answer, do this
            if (userChoice == triviaQuestions[i].options[answer]) {
                console.log("correct");
                correctAnswers++;
                correctAnsText.textContent = "Correct Answers: " + correctAnswers;

            } else {
                console.log("incorrect");
                incorrectAnswers++;
                incorrectAnsText.textContent = "Incorrect Answers: " + incorrectAnswers; 
            }
                

            // ELSE user choice is NOT = to the answer, on that index, we will ++ to our incorrect answers
            
        }
    })
 
        // This will display the users score at the end of the game either when the done button is clicked, 
        // OR when the time runs out

        
    
    

    
    




