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
    
};

var max = function () {
    var letter = new Letter;
    console.log(letter.word.newWord);
    console.log(letter.blankArray);
};

max();