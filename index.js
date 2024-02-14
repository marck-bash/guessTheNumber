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

  let min = 1;
  let max = 100;

  let randomNumber = Math.floor(Math.random() * max + min); 
// to guess between the range for binary algorithm, add a divide by two after the 100 in here to get it to guess 50 off the bat, this will reduce the amount of guesses necessary

  //original function to guess linearly
  function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)  
  }

  // function randomIntFromInterval(min, max) { // min and max included 
  //   return Math.floor(Math.round((max + min) / 2))  
  // }

  //pick a game to start cpuGameStart() or reverseGameStart()
  async function gameStart() {
  let gameStart = await ask(`Which game would you like to play? (Regular or Reverse): `)
    if (gameStart == "Regular" || gameStart == "regular") {
      cpuGameStart();
    } else if (gameStart == "Reverse" || gameStart == "reverse") {
      reverseGameStart();
    }
  }

  gameStart();

  //cpuGameStart();
  async function cpuGameStart() {
  console.log("Please think of a number between 1 and 100 (inclusive).\nI will try to guess it.");
  let guess = await ask(`Is it... ${randomNumber}? (Y/N) `);

  let higherOrLower;  //instantiate the variable that will recieve either h or l response for the if...else logic inside the while loop
  let guessCounter = 1;  //used to increment the amount of rounds played within the game

  while (guess == "N" || guess == "no" || guess == "n") {
    if (guess == "N" || guess == "no" || guess == "n") {
          higherOrLower = await ask("Is your number higher(h) or lower(l)? ");      
      if (higherOrLower == "h") {  
        min = randomNumber + 1 //sets up the minimum number for the range in our function randomIntFromInterval (the lowest it would be would be our randomNumber + 1)
        randomNumber = randomIntFromInterval(min, max);
        console.log(randomNumber); //logs what it generated
        
        //  if (randomNumber <= min){
        //    console.log(`You said your number was higher than ${randomNumber}, so it can't be also be lower than ${randomNumber}`)
        //  }
        guessCounter++;
        guess = await ask(`Is it... ${randomNumber}? (Y/N) `);
      } else if (higherOrLower == "l") {
        max = randomNumber - 1;    //sets up the maximum number for the range in our function randomIntFromInterval (the highest it would be would be our randomNumber - 1)
        randomNumber = randomIntFromInterval(min, max);
        console.log(randomNumber); //logs what it generated
        guessCounter++;
        guess = await ask(`Is it... ${randomNumber}? (Y/N) `);
      }
    } //put the play again loop here?    
  }
  
if (guess == "Y" || guess == "yes" || guess == "y") {   
  console.log(`Your number was ${randomNumber}!`);}
console.log(`You guessed the answer in ${guessCounter} tries!`);
process.exit();
}


//reverseGameStart();
async function reverseGameStart() {  //rename the async function so that it can be called in the original index.js file
  console.log("Let's play a game where I (the computer) pick a number and you try to guess it. (1 - 100)\n")
  let guess = await ask("What is your first guess?: ");
  console.log('You entered: ' + guess);
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
    process.exit();
  }