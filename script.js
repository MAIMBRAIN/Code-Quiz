// This script will replacing the starting text with the question and a list of 4 choices for the user
//  to pick from. Then it will initialize the timer countdown for the quiz. After the user selects 1 of
//  the 4 choices, it will tell you if you are correct or incorrect and move onto the next question and 
//  set of choices until the user completes all of the questions. When the user is finished, their score
//  is the timer. Ask the user to type in their initials and display their final score. Then save it to 
//  the highscore board with their initials : and their final score. Allow the user to clear the data
//  on the highscore board and let them return to the main menu.


var questions = [{
        title: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
    },
    {
        title: "The condition in an if / else statement is enclosed within ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
    },
    ///etc.
];
var timeLeft = questions.length * 30;


function setTime() {
    var timerInterval = setInterval(function () {
        timeLeft--;

        if (timeLeft === 0) {
            clearInterval(timerInterval);
        }
    }, 1000);
}

function startQuiz() 
{
    // The inspector will say you have started the quiz then run the following code
    console.log("you have started the quiz");

    // when the start button is clicked it will remove the start button
    $("#start").remove();
    
    // Then replace the title with questions
    

    // Then replace the directions with answer choices

    
    // when the start button is clicked it will 
    // when the start button is clicked it will 
    // the questions will be pulled from an object with an array of items

}

