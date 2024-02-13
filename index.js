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

// start();
// async function start() {
//   console.log("Let's play a game where you (human) make up a number and I (computer) try to guess it.")
//   let secretNumber = await ask("What is your secret number?\nI won't peek, I promise...\n");
//   console.log('You entered: ' + secretNumber);
//   // Now try and complete the program.
//   let guess = await ask("Please guess a number: ");
//   console.log("GUESS:", guess);
//   while (secretNumber != guess) {
//     if (guess < secretNumber) {
//         guess = await ask("Sorry too low.  Please guess higher: ");
//         console.log(guess);
//     } else if (guess > secretNumber) {
//         guess = await ask("sorry too high.  Please guess lower: ");
//         console.log(guess);
//     }
//     }
//     console.log("You guess correctly!");
//   secret number = 44
//   my guess secret number = 20
//   my guess is lower
//   tell me to guess higher
//     let guess = await ask("Guess higher");
//     process.exit();
//   }
  
  //now we must have the computer guess a random number and log it into the guess variable to make it work correctly
  //using math.random() method, we can obtain a random number.
  //something like this : 

    //generate random number from 1 - 100 (inclusively) to be stored as the secretNumber
  // let secretNumber = Math.floor(Math.random() * 100);
  // console.log(secretNumber);  //logs out guess for testing purposes (remove in live version)
  // if (secretNumber === 0) {
  //   secretNumber = secretNumber + 1;
  //   console.log(secretNumber); //logs out guess for testing purposes (remove in live version)
  // } 
    //generate a random number for the player to guess against the secretNumber
  let randomNumber = Math.floor(Math.random() * 100);
  if (randomNumber === 0) {
    randomNumber = randomNumber + 1;
    console.log(randomNumber); //logs out guess for testing purposes (remove in live version)
  }

  start();

  async function start() {
  console.log("Please think of a number between 1 and 100 (inclusive).\nI will try to guess it.");
  let guess = await ask(`Is it... ${randomNumber}? (Y/N) `);
  //console.log(guess);  //logs out secretNumber for testing purposes (remove in live version)
  let higherOrLower;

  while (guess == "N" || guess == "no" || guess == "n") {
  if (guess == "N" || guess == "no" || guess == "n") {
    higherOrLower = await ask("Is your number higher(h) or lower(l)? ");
    if (higherOrLower == "h") {
        randomNumber = Math.floor(Math.random() * (100 - randomNumber) - randomNumber + 1);
        console.log(randomNumber); //logs what it generated
        guess = await ask(`Is it... ${randomNumber}? (Y/N) `);
      } else if (higherOrLower == "l") {
        randomNumber = Math.floor(Math.random() * (randomNumber - 1) + 1);
        console.log(randomNumber); //logs what it generated
        guess = await ask(`Is it... ${randomNumber}? (Y/N) `);
      }
  }
}
  if (guess == "Y" || guess == "yes" || guess == "y") {   
  console.log(`Your number was ${randomNumber}!`);
}
process.exit();
}


  // while (secretNumber != randomNumber) {
  //       if (randomNumber < secretNumber) {
  //           guess = await ask("Sorry too low.  Please guess higher: ");
  //           console.log(guess);
  //       } else if (guess > secretNumber) {
  //           guess = await ask("sorry too high.  Please guess lower: ");
  //           console.log(guess);
  //       }
  // }