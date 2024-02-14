const readline = require('readline');
const readlineInterface = readline.createInterface(
  process.stdin,
  process.stdout
);

function ask(questionText) {
  return new Promise((resolve, reject) => {
    readlineInterface.question(questionText, resolve);
  });
}

let randomNumber = Math.floor(Math.random() * 100);
if (randomNumber === 0) {
  randomNumber = randomNumber + 1;   
}
//console.log(randomNumber); //logs out guess for testing purposes (remove in live version)

start();
async function start() {  //rename the async function so that it can be called in the original index.js file
  console.log("Let's play a game where I (the computer) pick a number and you try to guess it. (1 - 100)\n")
  let guess = await ask("What is your first guess?: ");
  console.log('You entered: ' + guess);
  // Now try and complete the program.
    while (randomNumber != guess) {
    if (guess < randomNumber) {
        guess = await ask("Sorry too low.  Please guess higher: ");
        //console.log(guess);
    } else if (guess > randomNumber) {
        guess = await ask("sorry too high.  Please guess lower: ");
        //console.log(guess);
    }
    }
    console.log(`You guess correctly! The answer was ${randomNumber}`);
//   secret number = 44
//   my guess secret number = 20
//   my guess is lower
//   tell me to guess higher
//     let guess = await ask("Guess higher");
    process.exit();
  }