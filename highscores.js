function printHighscores() {
    // either get scores from localstorage or set to empty array
    var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];
  
    // sort highscores by score property in descending order
    highscores.sort(function(a, b) {
      return b.score - a.score;
    });
  
    highscores.forEach(function(score) {
      // Create li tag for each high score
      var li = $("<li>");
      li.textContent = score.initials + " - " + score.score;
  
      // display on page
      $("#highscores").appendChild(li);
    });
  }
  
  function clearHighscores() {
    window.localStorage.removeItem("highscores");
    window.location.reload();
  }
  
  $("clear").onclick = clearHighscores;
  
  // run function when page loads
  printHighscores();
  