var fs = require("fs");

var newMovie = fs.readFileSync("./movies.txt", "utf8", function (err, data) {
    if (err) {
        throw err;
    }
});

var Word = function () {
    var alphabet = "abcdefghijklmnopqrstuvwxyz";
    this.choiceArray = alphabet.split("");
    this.chances = 7;
    //grab our movie array from the txt file
    newMovie = newMovie.split("---");
    newMovie.pop();
    //grab a random number from 1 to 100
    var indexNumber = Math.floor(Math.random() * 100 + 1);
    //grab the movie with the indexNumber
    this.newWord = newMovie[indexNumber];

};



module.exports = Word;



