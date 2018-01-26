//import required files and packages
var Word = require('./word.js');
var Letter = require('./letter.js');
var inquirer = require('inquirer');

//the wordbank
wordBank = ["coding", "python", "javascript", "bootstrap", "node", "ruby"];

//create game constructor
class game {
	constructor() {
		//generate random selection from the word bank
		this.currentWord = new Word(wordBank[Math.ceil(Math.random()*wordBank.length)]);
		this.round = 0;
		this.wins = 0;
		this.losses = 0;
		this.wrongGuesses = 0;

		//ask the user to guess a letter
		this.askForLetter = function() {
			if (this.wrongGuesses < 8) {
				inquirer.prompt([
			    {
			      type: "input",
			      name: "guess",
			      message: "What letter do you guess?",
			   		
			    }
			  ]).then(function(inquirerResponse) {
			  		if (this.currentWord.indexOf(inquirerResponse.guess) !== -1) {
			  			console.log("it does exists");
			  			this.showLetter(inquirerResponse.guess);
			  		}

			  		else {
			  			console.log("it does not exists");
			  		}

				
				});
			}
		}
		//create function to display letter if guessed
		this.showLetter = function(guess) {

		};
	}
}


var firstGuess = new game();
console.log(firstGuess.currentWord);
firstGuess.askForLetter();