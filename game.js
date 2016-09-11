var wordsGameJs = require('./word.js');
 // file will randomly select a word for the player from the below word bank
var wordBank = ['asynchronous', 'asymmetrical', 'telecommunications', 'aimless', 'haphazard', 'unsystematic'];
// this will grab a random word from the above word bank
function wordGrab() {

	var grabRandomWord = wordBank[Math.floor(Math.random() * wordBank.length)];
}

module.exports = logicMainJs;