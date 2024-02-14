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

  //now we must have the computer guess a random number and log it into the guess variable to make it work correctly
  //using math.random() method, we can obtain a random number.
  //something like this : 

  // let min = 1;
  // let max;

  // let randomNumber = Math.floor(Math.random() * max + min); 

  //original function to guess linearly
  // function randomIntFromInterval(min, max) { // min and max included 
  //   return Math.floor(Math.random() * (max - min + 1) + min)  
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

  // Icebox Suggestion: put a while loop so that I can get the game to play over and over
  // while (restart == "Y" || restart == "y") {
  // let restart = await ask(`Do you want to play again? (Y/N): `)  
  // }

  //cpuGameStart();
  async function cpuGameStart() {
  console.log("Please think of a number between 1 and 100 (inclusive).\nI will try to guess it.");
  let min = 1;
  let max = await ask(`Update version 1.8: you can now add your own maximum number to play this game. Please enter a number: `);
  let maxNum = Number(max); //this will change the type of max to a Number instead of a String
  let randomNumber = Math.floor(Math.random() * maxNum + min); 
  // to guess between the range for binary algorithm, add a divide by two after the 100 in here to get it to guess 50 off the bat, this will reduce the amount of guesses necessary
  //function using binary algorithm
  function randomIntFromInterval(min, maxNum) { // min and max included 
    return (Math.round((maxNum + min) / 2))  
  }
  console.log(typeof maxNum);
  let guess = await ask(`Is it... ${randomNumber}? (Y/N) `);
  let higherOrLower;  //instantiate the variable that will recieve either h or l response for the if...else logic inside the while loop
  let guessCounter = 0;  //used to increment the amount of rounds played within the game

  while (guess == "N" || guess == "no" || guess == "n") {
    if (guess == "N" || guess == "no" || guess == "n") {
          higherOrLower = await ask("Is your number higher(h) or lower(l)? ");      
      if (higherOrLower == "h") {  
        min = randomNumber + 1 //sets up the minimum number for the range in our function randomIntFromInterval (the lowest it would be would be our randomNumber + 1)
        randomNumber = randomIntFromInterval(min, maxNum);
        console.log(randomNumber); //logs what it generated
        
        //  if (randomNumber <= min){
        //    console.log(`You said your number was higher than ${randomNumber}, so it can't be also be lower than ${min}`)
        //  }
        guessCounter++;
        guess = await ask(`Is it... ${randomNumber}? (Y/N) `);
      } else if (higherOrLower == "l") {
        maxNum = randomNumber - 1;    //sets up the maximum number for the range in our function randomIntFromInterval (the highest it would be would be our randomNumber - 1)
        randomNumber = randomIntFromInterval(min, maxNum);
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
  let max = 100;
  let min = 1;
  let randomNumber = Math.floor(Math.random() * max + min); 
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