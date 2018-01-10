var Word = require("./word");

var Letter = function () {
    //take in the newly generated word
    this.word = new Word();
    //make a blank array to store the hangman blanks
    this.blankArray = [];
    //get those hangman blanks
    for (var i = 0; i < this.word.newWord.length; i++) {
        var singleLetter = this.word.newWord.charAt(i);
        for (var j = 0; j < this.word.choiceArray.length; j++) {
            if (singleLetter.toLowerCase() === this.word.choiceArray[j]) {
                singleLetter = "_";
            }
        }
        this.blankArray.push(singleLetter);
    };
    //logic to run if a letter is chosen
    this.letterGuess = function (g) {
        var g = g.toLowerCase();
        var choices = this.word.choiceArray;
        var validChoice = false;
        var correctGuess = false;
        //run through the choice array and take the letter out
        for (var i = 0; i < choices.length; i++) {
            if (choices[i] === g) {
                //state that this was a valid choice in the array
                validChoice = true;
                //take that choice out of the array so it cannot be chosen again
                choices.splice(i, 1);
            }
        }
        if (validChoice){
            console.log("You have made a good choice.");
        }
        else {
            console.log("That choice was not valid. Please select a valid choice.");
        }
    };
};

var max = function () {
    var letter = new Letter;
    
    letter.letterGuess("a");
    
};

max();