var wordList = ["bulldog", "beagle", "yorkie", "poodle", "rottweiler","boxer","pomeranian","pug","collie","husky"];
var wins = 0;
var losses = 0;
var guessleft = 10;
var emptyArray = [];
var isAlphabet = function (check) {
    return /^[A-Z]$/i.test(check);
}

function Winner() {
    alert('YOU WIN!');
}

function newGame() {

    //Index Generator Selector//
    var IndexGenerator = Math.floor(Math.random() * wordList.length); //selecting random word 

    var guessingWord = []; //array for input


    for (var i = 0; i < wordList[IndexGenerator].length; i++) {
        guessingWord.push(" _ ");

        // Putting placeholder in DOM //
        var putGuessWordToDom = document.getElementById("currentWord");
        putGuessWordToDom.innerHTML = guessingWord.join(" ");
        //Puts word underlines in dom


        var PutInArray = wordList[IndexGenerator].split(''); // put the word hello each letter in array = PutInArray= ["h","e","l","l","o"];


        // Putting Letters used in DOM // 
        var newDiv = document.getElementById("guessSoFar").innerHTML = " ";

    }

    // function for onclick //
    document.onkeyup = function (event) {

        var letter = event.key;

        if (isAlphabet(letter)) { // alphabet check //
            letter = letter.toLowerCase(); // lowercase //

            if (PutInArray.indexOf(letter) >= 0) {

                for (var i = 0; i < PutInArray.length; i++) {
                    if (letter === PutInArray[i]) {
                        guessingWord[i] = letter;
                        putGuessWordToDom.innerHTML = guessingWord;
                    }
                }
                if (guessingWord.includes(" _ ") === false) {
                    wins++;
                    setTimeout(Winner, 500); // Timer set for last letter to display first before sending Winning Message // 
                    document.getElementById("totalWins").innerHTML = wins;  // updating total wins //
                }
            } else {

                if (!emptyArray.includes(letter)) {
                    guessleft--;
                    document.getElementById('guessSoFar').innerHTML += letter + " ";
                    emptyArray.push(letter);
                    document.getElementById("guessesLeft").innerHTML = guessleft;
                }

                if (guessleft === 0) {
                    losses++;
                    document.getElementById("totalLosses").innerHTML = losses; // updating total loss //
                    alert("Game Over");
                }
            }
        } else {
            alert("Invalid Input, Try Again"); // Alert incase of Invalid Key //
        }
    }
    guessleft = 10; // reset guess to 10 //
    document.getElementById("guessesLeft").innerHTML = guessleft;
}

document.getElementById("totalWins").innerHTML = wins; // outside to keep record of score //
document.getElementById("totalLosses").innerHTML = losses;
