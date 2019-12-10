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

var timeLeft = questions.length * 15;
var currentQuestion = 0;
var questionChoices = questions[currentQuestion]["choices"];
var questionTitle = questions[currentQuestion]["title"];

// Function for displaying the current question

function displayCurrentQuestion ()
{
    // Target the id: question to replace the text with the current question
    $("#question").text(Object.values(questionTitle));

    // Clear the description from the id: choices div
    $("#description").remove();

    // Create a new button for each choice in the current question
    for (var i = 0; i < questionChoices.length; i++)
    {
        $("<button>" + questionChoices[i] + "</button>").appendTo($("#choices"));
    }
}
function startQuiz() 
{
    // when the start button is clicked it will remove the start button
    $("#start").remove();
    console.log("you have started the quiz");
    // The inspector will say you have started the quiz then run the following code

    // Timer
        var timerInterval = setTimeout(function () 
        {
            timeLeft--;
            $("#timer").html("Time: " + timeLeft);

            if (timeLeft === 0) 
            {
                clearTimeout(timerInterval);
            }
        }, 1000);


    // The quiz will use the index of each item inside the questions object to 
    // display each question with their respective choices

    console.log(Object.keys(questions[0]));
    console.log(questions[0]);
    console.log(Object.values(questions[0]));
    console.log(questions[0]["choices"][0]);
    console.log(timeLeft);

    displayCurrentQuestion();
     
}
