var Letter = require("./letter");
var inquirer = require("inquirer");
// var max = function () {
//     var letter = new Letter;
//     letter.letterGuess("z");
//     letter.letterGuess("a");
//     letter.letterGuess("e");
//     letter.letterGuess("R");
//     console.log(letter.blankArray);
// };

// max();

var hangman = function () {
    //first we get the new word.
    var word = new Letter();
    var hangmanWord = word.blankArray.toString();
    hangmanWord = hangmanWord.replace(/,/g , " ");
    console.log(hangmanWord);
    // inquirer.prompt([

    // ]).then(function (ans) {

    // });
};

hangman();