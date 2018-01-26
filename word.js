//import letter constructor
var Letter = require('./letter.js');

//create word constructor
class Word{
	constructor(word) {
	this.word = word;
    this.letters = [];
    this.blanks = [];
    this.pushLetters = function() {
        for (var i =0; i < this.word.length; i++) {
            this.letters.push(word[i]);
            this.blanks.push('_');
            
        }
    } 
    this.renderBlanks = function() {
        console.log(this.blanks.join(' '));
    }
    this.renderWord = function() {
        console.log(this.letters.join(' '));
    }
  }
}

// var firstWord = new Word('firstword');
// firstWord.pushLetters();
// firstWord.renderBlanks();

//allow word constructor to be exported
module.exports = Word;