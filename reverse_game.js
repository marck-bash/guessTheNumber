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
console.log(randomNumber); //logs out guess for testing purposes (remove in live version)
start();
async function start() {
  console.log("Let's play a game where I (the computer) pick a number and you try to guess it.\n")
  let secretNumber = await ask("What is your secret number?\nI won't peek, I promise...\n");
  console.log('You entered: ' + secretNumber);
  // Now try and complete the program.
  let guess = await ask("Please guess a number: ");
  console.log("GUESS:", guess);
  while (secretNumber != guess) {
    if (guess < secretNumber) {
        guess = await ask("Sorry too low.  Please guess higher: ");
        console.log(guess);
    } else if (guess > secretNumber) {
        guess = await ask("sorry too high.  Please guess lower: ");
        console.log(guess);
    }
    }
    console.log("You guess correctly!");
//   secret number = 44
//   my guess secret number = 20
//   my guess is lower
//   tell me to guess higher
//     let guess = await ask("Guess higher");
    process.exit();
  }