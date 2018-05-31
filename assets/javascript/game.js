        var wins = 0;
		var losses = 0;
		var guessesLeft = 9;
		var guessesSoFar = [];

		document.onkeyup = function(event) {
		 	var guess = event.key;
		 	var options = ["q","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l","z","x","c","v","b","n","m"];
			var letter = options[Math.floor(Math.random() * options.length)]; 

			if (options.indexOf(guess) > -1) {

				if (guess === letter) {
					wins++;
					guessesLeft = 9;
					guessesSoFar = [];
				}

				if (guess != letter) {
					guessesLeft --;
					guessesSoFar.push(guess);
				}

				if (guessesLeft === 0) {

				guessesLeft = 9;
				losses ++;
				guessesSoFar = [];	
				}
			}
			var html = 
			"<h1> The Psychic Game </h1>" +
			"<p>Guess what letter I'm thinking of!</p>" +
			"<p>Wins: " + wins + "</p>" +
			"<p>Losses: " + losses + "</p>" +
			"<p>Guesses Left: " + guessesLeft + "</p>" +
			"<p>Your Guesses so far: " + guessesSoFar.join(", ") + "</p>";

			document.querySelector("#game").innerHTML = html;

		}		