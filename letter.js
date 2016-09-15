// should control whether or not a letter appears as a "_" or as itself on-screen
// var letter = [];
// var placeHolder = '_';
//using constructors to display letters guessed
function characters(letters) {
	this.letters = letters;
	this.placeHolder = '_';
	this.letterGuessed = false;

	this.getLetter = function() {
		var guess = '';

		if (this.letterGuessed) {
			guess = this.letters;
		}else {
			guess = this.placeHolder;
		}
	}
}
// if (letter == true) {
// 	console.log(letter);
// }else {
// 	placeHolder = placeHolder;
// }

//exports to word.js
module.exports = characters;