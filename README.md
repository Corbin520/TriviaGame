# TriviaGame

(Images/1-basic.jpg)

**[Click Here to Watch the Demo](https://youtu.be/fBIj8YsA9dk)**.

* You'll create a trivia form with multiple choice or true/false options (your choice).

* The player will have a limited amount of time to finish the quiz. 


  * The game ends when the time runs out. The page will reveal the number of questions that players answer correctly and incorrectly.

* Don't let the player pick more than one answer per question.

* Don't forget to include a countdown timer.




game notes //
for (var i = 0; i < triviaQuestions.length; i++){
// var [I] = whatever array we are at. We will need to start at 0. Our array starts at 0 and will loop through 0
// then once the loop is done it will move to index 1, then index 2, until it completes a loop through each object 
// in the array (question 8 OR Object 7)

// creating a variable that creats a <div> tag that we can call on to PUSH data or text into a div in HTML
        var div = $("<div>");

        // creating a variable that we can call on to push JS info into an <H2> tag that will display on HTML page
        var h2 = $("<h2>");

        // creating a variable that we can call on to push JS info into an <p> tag that will display on HTML page
        var p = $("<p>");

        // here we are taking the triviaQuestions at index [0] (OR whatever object in the array we are on) calling the
        // the questions in our text and adding them to an <h2> tag to display the questions on the page.
        h2.text(triviaQuestions[i].questionText);

        // here we are taking the triviaQuestions at index [0] (OR whatever object in the array we are on) calling the
        // OPTIONS portion of our object and displaying them on the HTML page as a <p> tag
        p.text(triviaQuestions[i].options[0]);

        // now we must ".append" both of the <h2> & <p> tags into the div we created above. .append will push whatever text
        // you want and put it into the area you want your text to go into. in this case, take the tags we made and put them
        // into a div, like we would do in HTML to store the info we want into its own section
        div.append(h2, p);


        // NOW, we will add the questionsText and add it as text to our HTML page. So we are now pushing the text to
        // the page we want the user to see.
        // (html      add    to the div) 
        questionsDiv.append(div)
    }
    
    
    // .length will pull each option from the array. So if I have 4 items in my array, it will start at inxex 0 and
    // go through index 4 and pull me each item in that array [0], [1], [2], [3], [4]
    //
