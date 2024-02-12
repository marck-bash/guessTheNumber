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
//   // console.log("Let's play a game where you (human) make up a number and I (computer) try to guess it.")
//   // let secretNumber = await ask("What is your secret number?\nI won't peek, I promise...\n");
//   // console.log('You entered: ' + secretNumber);
//   // // Now try and complete the program.
//   // let guess = await ask("Please guess a number: ");
//   // console.log("GUESS:", guess);
//   // while (secretNumber != guess) {
//   //   if (guess < secretNumber) {
//   //       guess = await ask("Sorry too low.  Please guess higher: ");
//   //       console.log(guess);
//   //   } else if (guess > secretNumber) {
//   //       guess = await ask("sorry too high.  Please guess lower: ");
//   //       console.log(guess);
//   //   }
//   //   }
//   //   console.log("You guess correctly!");
//   // secret number = 44
//   //my guess secret number = 20
//   //my guess is lower
//   //tell me to guess higher
//     //let guess = await ask("Guess higher");
//     process.exit();
//   }
  
  //now we must have the computer guess a random number and log it into the guess variable to make it work correctly
  //using math.random() method, we can obtain a random number.
  //something like this 
  
  let guess = Math.floor(Math.random() * 100);
  console.log(guess);
  if (guess == 0) {
    let guess = guess++
    console.log(guess);
  } else if (guess == 100) {
    let guess = --guess
    console.log(guess);
  }
  
  
process.exit();


