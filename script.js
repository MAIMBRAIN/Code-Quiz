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
var questionAnswer = questions[currentQuestion]["answer"];

// Function for displaying the current question

function displayCurrentQuestion ()
{
    // Target the id: question to replace the text with the current question
    $("#question").text(questionTitle.toString());

    // Clear the description from the id: choices div
    $("#description").remove();

    // Create a new div for the list to append to
    var olDiv = $("<div class='col-sm-12'>").appendTo($("#userRes"));

    // Create list to append to div
    var list = $("<ol id='choices'>").appendTo(olDiv)

    // Create a new button for each choice in the current question
    for (var i = 0; i < questionChoices.length; i++)
    {
        $("<li><button class='choiceBtn' data-label='" + questionChoices[i] + "'>" + questionChoices[i] + "</button></li>").appendTo($(list));
    }

    // Listen for button click then check if button value is the same as the question answer
    $(".choiceBtn").on("click", () =>
    {
        console.log($(this).data("data-label"));
    })
    
}
// Start quiz function, will display the current question and choices, then based off of the user input,
// it will tell them if they are correct or incorrect
function startQuiz() 
{
    // when the start button is clicked it will remove the start button
    $("#start").remove();
    console.log("you have started the quiz");
    // The inspector will say you have started the quiz then run the following code

    // Timer
        var timerInterval = setInterval(function () 
        {
            timeLeft--;
            $("#timer").html("Time: " + timeLeft);

            if (timeLeft === 0) 
            {
                clearInterval(timerInterval);
            }
        }, 1000);


    // The quiz will use the index of each item inside the questions object to 
    // display each question with their respective choices
    

    displayCurrentQuestion();
}

function saveHighscore() {
    // get value of input box
    var initials = $("#initials").value.trim();
  
    // make sure value wasn't empty
    if (initials !== "") {
      // get saved scores from localstorage, or if not any, set to empty array
      var highscores =
        JSON.parse(window.localStorage.getItem("highscores")) || [];
  
1      // format new score object for current user
      var newScore = {
        score: timeLeft,
        initials: initials
      };
  
      // save to localstorage
      highscores.push(newScore);
      window.localStorage.setItem("highscores", JSON.stringify(highscores));
  
      // redirect to next page
      window.location.href = "highscores.html";
    }
  }