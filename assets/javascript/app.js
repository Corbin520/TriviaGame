
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
var time = 45;
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

// click on start button to start the clock
$("#startButton").on("click", function() {
    clockStart();
});

// build a function that stops the clock at 00:00
function clockStop() {
}





//put those on our htm page

// create a function that will display our questions
function displayQuestions(){

    //loop over our array
    for (var i = 0; i < triviaQuestions.length; i++) {
        //create a div to hold our questions and options

        // store the info on the right into "<div>"
        var div = $("<div id='q-" + i+ "'>");

        // log the triviaQuestions at the index its at + questoinsText
        console.log(triviaQuestions[i].questionText)

        //h2 that will hold our question we are asking our users
        var h2 = $("<h2> " + triviaQuestions[i].questionText +"</h2>")

        // append the <h2> to the <div>
        div.append(h2)

        // creating an inner for loop (nested for loop) to loop through the options the user can click on.

        // nameing the second loop [j] because if we used [i] again, it would be pulling the index we used
        // on our first loop to loop through the questions
        for (var j = 0; j < triviaQuestions[i].options.length; j++) {

            //consoleing the triviaQuestion[i] (questions) and then the [j] (options) so we can see the answer to know 
            // if its working for us
            console.log(triviaQuestions[i].options[j])

            // it is now consoling each option from the array of questions
            //create an bunch of select elements that are type=option that will hold our possible options/answers

            // We need to create a way for the user to select a button, in this case, radio button is what we will use
            
            // add radio <input> into our HTML file, name the radio button(question-) + the question at the index we are at [i] (question 1)
            // get the value which is 

            // we are displaying the questions on the page with the radio buttons with our answers
            // triviaQuestions[i].options[j] (inner for loop = [j]) === the options as a radio button + triviaQuestions[i]
            // and putting that in the radio variable
            var radio = $('<input type="radio" name="question-' + i +'" value="' + triviaQuestions[i].options[j] +'"> ' + triviaQuestions[i].options[j]+ '<br>')

            // take th radio variable and appnd it to our div
            div.append(radio)
        }
        // console.log
        console.log(questionText1);


        // display the questions display possible answers to the DOM / screen
        questionsDiv.append(div).append($("<hr>"))
    }
}





// We want to create a loop that will loop over our array one object at a time (one question at a time)
// and give us the information we requested. In our cause, we will need it to loop over the array and
// take the data from each object and display it on our HTML for the user to see.

// for (var i = 0; i < triviaQuestions.length; i++){
    // var [I] = whatever array we are at. We will need to start at 0. Our array starts at 0 and will loop through 0
    // then once the loop is done it will move to index 1, then index 2, until it completes a loop through each object 
    // in the array (question 8 OR Object 7) .length is going to pull the length of the index from the array. Example:
    // if we have [option0], [option1], [option2], the length will === 3 to user, 2 to computer
    
    // creating a variable that creats a <div> tag that we can call on to PUSH data or text into a div in HTML
    // var div = $("<div>");
    
    // creating a variable that we can call on to push JS info into an <H2> tag that will display on HTML page
    // var h2 = $("<h2>");
    
    // creating a variable that we can call on to push JS info into an <p> tag that will display on HTML page
    // var p = $("<p>");
    
    // here we are taking the triviaQuestions at index [0] (OR whatever object in the array we are on) calling the
    // the questions in our text and adding them to an <h2> tag to display the questions on the page.
    // h2.text(triviaQuestions[i].questionText);
    
    // here we are taking the triviaQuestions at index [0] (OR whatever object in the array we are on) calling the
    // OPTIONS portion of our object and displaying them on the HTML page as a <p> tag
    // p.text(triviaQuestions[i].options[0]);
    
    // now we must ".append" both of the <h2> & <p> tags into the div we created above. .append will push whatever text
    // you want and put it into the area you want your text to go into. in this case, take the tags we made and put them
    // into a div, like we would do in HTML to store the info we want into its own section
    // div.append(h2, p);
    
    
    // NOW, we will add the questionsText and add it as text to our HTML page. So we are now pushing the text to
    // the page we want the user to see.
    // (html      add    to the div) 
    // questionsDiv.append(div)
    // }
    
    
    // call this function to start the game. if the function is not called, the function that we built will not run
    displayQuestions();
    
    
    // We need to create code that will run when the user clicks on the done button **IF** they answer all the questions 
    // before the time runs out.
    
    // listen for the button to be clicked when the user is done answering questions
    $("#doneButton").on("click", function() {
        
        
        // loop over our array
        for (var i = 0; i < triviaQuestions.length; i++) {
            
            //get the value off each radio button or otherwords get the value of the button the user click for each question
            var userChoice = $("input[name=question-" + i + "]:checked").val()
            console.log(userChoice);
            
            // creating a variable to store our triviaQuestions[i].answer. Here I am using dot notation to dig from triviaQuestions
            // into the answer section (which holds our answer that must be clicked to get the correct answer)
            var answer = triviaQuestions[i].answer
            
            // create an IF statement saying that if the userChoice is == to the triviaQuestions[answer] then we want to 
            // increese the "correct answers ++"
            if(userChoice == triviaQuestions[i].options[answer]){
                console.log("correct");
                
                // create an ELSE statement saying that if the userChoice is NOT == to the triviaQuestions[answer] then we
                // want to ++ incorrect answers
            }else{
                console.log("incorrect");
            }
        }
    });
    
    

    
    




