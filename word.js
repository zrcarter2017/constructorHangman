//import letter constructor
var Letter = require('./letter.js');

//create word constructor
class Word{
	constructor(word) {
	this.word = word;
    this.letters = [];
    this.pushLetters = function() {
        for (var i =0; i < this.word.length; i++) {
            this.letters.push(word[i]);
            
        }
    } 
    this.renderWord = function() {
        for (var x = 0; x < this.word.length; x++) {
            console.log('_');
        }
    }
  }
}

//allow word constructor to be exported
module.exports = Word;