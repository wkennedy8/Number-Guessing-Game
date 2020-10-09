const prompt = require('readline-sync');

const maxGuesses = 3;
let currentGuess = 0;
const maxRange = 10;

let randomNumber = Math.floor(Math.random() * maxRange + 1);

let userGuess = prompt.question(
  `I've chose a number between 1 and ${maxRange}, you have to ${maxGuesses} tries to guess it.\n`
);

//Write a function that will take the user's guess as a parameter, and handle 4 different scenarios:
// 1. If they win
// 2. If they lose
// 3. If they need to guess higher
// 4. If they need to guess lower

function handleGuess(userGuess) {
  for (let guesses = 0; guesses < maxGuesses; guesses++) {
    if (userGuess == randomNumber) {
      console.log('You win! 🏆');
      playAgain();
    } else if (guesses === maxGuesses - 1) {
      console.log(`You lose. 💀\nThe number was ${randomNumber}`);
      playAgain();
    } else if (userGuess > randomNumber) {
      console.log('Think lower');
      currentGuess++;
      console.log('Guesses Left: ', maxGuesses - currentGuess);
      userGuess = prompt.question('Guess again...\n');
    } else {
      console.log('Think higher');
      currentGuess++;
      console.log('Guesses Left: ', maxGuesses - currentGuess);
      userGuess = prompt.question('Guess again...\n');
    }
  }
}

function playAgain() {
  let playQuestion = prompt.question('Do you want to play again? y || n \n');

  if (playQuestion === 'y') {
    randomNumber = Math.floor(Math.random() * maxRange + 1);
    let newGuess = prompt.question(
      `I have chosen a number between 1 and ${maxRange}, you have ${maxGuesses} tries to guess it.\n`
    );
    currentGuess = 0;
    guesses = 0;
    handleGuess(newGuess);
  } else {
    console.log(`Thanks for playing. \nGoodbye.`);
  }
}

handleGuess(userGuess);
