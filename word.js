//npm requirements
var fs = require("fs");

//Read our text file of random movies and store them in an array.
var newMovie = fs.readFileSync("./movies.txt", "utf8", function (err, data) {
    if (err) {
        throw err;
    }
});
    newMovie = newMovie.split("---");
    newMovie.pop();

    //make our Word constructor
var Word = function () {
    //make our array of letters to cycle through for the blank array as well as for logging choices in the actual game
    var alphabet = "abcdefghijklmnopqrstuvwxyz";
    this.choiceArray = alphabet.split("");

    //each time we make a new word we give our player 7 more chances to guess the movie. I'm not a monster... 
    this.chances = 7;

    
    //grab a random number from 1 to 100
    var indexNumber = Math.floor(Math.random() * 100 + 1);
    //grab the movie with the indexNumber and save it in our new object
    this.newWord = newMovie[indexNumber];
};

//export our sweet sweet new constructor
module.exports = Word;