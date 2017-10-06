
  var myChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  var wins = 0;
  var losses = 0;

  var guesses = 9;

  var guessesChosen = [];

  var resetGame = function() {
  	guesses = 9;
  	guessesChosen = [];
  	computerRandom = computerChoices[Math.floor(Math.random() * computerChoices.length)];
  }

  var computerRandom = computerChoices[Math.floor(Math.random() * computerChoices.length)];

  console.log(computerRandom)

  var slice1 = computerChoices.slice(0,13);
var slice2 = computerChoices.slice(14,26);

  document.onkeyup = function(event){
  	myGuess = event.key 

  	guessesChosen.push(String.fromCharCode(event.keyCode).toLowerCase());

   if (myChoices.includes(myGuess)){
   	if(myGuess === computerRandom){
   		alert("You are a Psychic!");
   		wins++;
   		resetGame();
   		console.log(guessesChosen);
   		console.log(guesses);
   	}

   	else if ((myGuess != computerRandom) && (guesses > 1)){

   		guesses--;
   		console.log(guessesChosen);
   		console.log(guesses);
   		document.querySelector('#guessesChosen').innerHTML = "<p> Your Guesses So Far: " + guessesChosen.join(",") + "</p>";
      }
   	
   	else {
   		alert("You are normal! The answer was "  + computerRandom);
   		guesses--;
   		losses++;
   		resetGame();
   		console.log(guessesChosen);
   		console.log(guesses);

      	}

   	var scoreBoard = 
   	"<p> Wins: " + wins + "</p>" + "<p> Losses: " + losses + "</p>";

   	document.querySelector("#game").innerHTML = scoreBoard

   	}
   }
  
