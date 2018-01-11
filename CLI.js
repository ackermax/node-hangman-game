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
var points = 0;
var hangman = function () {
    //let's start the game!

    //first we get the new word.
    var word = new Letter();
    var hangmanWord = word.blankArray.toString();
    hangmanWord = hangmanWord.replace(/,/g, " ");

    //run some more game logic
    guess(word);

};

var guess = function (word) {
    inquirer.prompt([
        {
            message: "What letter would you like to guess?",
            name: "guess"
        }
    ]).then(function (ans) {
        //run the letter guess function
        word.letterGuess(ans.guess);
        //print out what the word looks like now
        var hangmanWord = word.blankArray.toString();
        hangmanWord = hangmanWord.replace(/,/g, " ");
        console.log(hangmanWord);
        //if you still have more guesses
        if (word.word.chances > 0) {
            var hangmanWord = word.blankArray.toString();
            hangmanWord = hangmanWord.replace(/,/g, "");
            //if you got the word right we're gonna give you a new word and a new set of chances
            if (hangmanWord === word.word.newWord) {
                console.log("You guessed the word right! Nice job! Here's another one!");
                points++;
                hangmanWord();
            }
            //otherwise we'll just let you guess a new letter
            else {
                guess();
            }
        }
        //if you have no more guesses
        else {
            console.log("Game over. The word was " + word.word.newWord + ".");
            if (points === 1) {
                console.log("You only got one word right. Too bad.");
            }
            else if (points === 0) {
                console.log("You didn't get any words right. Oh well...");
            }
            else {
                console.log("You got " + points + " words right. Nice job!");
            }
            inquirer.prompt([
                {
                    type: "confirm",
                    message: "Would you like to play again?",
                    name: "reset",
                    default: true
                }
            ]).then(function(ans){
                if (ans.reset === true) {
                    points = 0;
                    console.log("Let's play again!");
                    hangman();
                }
                else {
                    console.log("Thanks for playing!");
                }
            });
        }
    });
};

console.log("Let's play some hangman!");
hangman();