// define a function for the user choice using arrow function syntax
const getUserChoice = userInput => {
  // make input all lowercase to ensure proper value matching
  userInput = userInput.toLowerCase();
  // check to see if the input is valid by comparing it with one of the three types
  // return the input if it is value, or let the user know if it is not
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
    return userInput;
  } else {
    console.log('Invalid input! Please select either rock, paper, or scissors.');
  }
};

// test the function with an input value
// console.log(getUserChoice('Paper'));

// define a function for the computer to generate a choice
// Q: not sure if I can use a const here or if I need to use function
// ...I think I can use a const, but not sure if I need to really
function getComputerChoice() {
  // create a variable and assign it's value a random number between 0-2
  let computerChoiceID = Math.floor(Math.random() * 3);
  // based on the number, assign the choice
  if (computerChoiceID === 0) {
    return 'rock';
  } else if (computerChoiceID === 1) {
    return 'paper';
  } else {
    return 'scissors';
  }
}

// test the computer's random choice
// console.log(getComputerChoice());

// write a function that determines the winner by comparing the player choice
// with the computer choice
function determineWinner(userChoice,computerChoice) {
  if (userChoice === computerChoice) {
    // 🤔 Q: how could I add an emoji to be output depending on the userChoice?
    return `Tie! 🎀 You both played ${userChoice}.`;
  } else {
    if (userChoice === 'rock') {
      if (computerChoice === 'paper') {
        return 'You lost! 😞 The computer played paper, and paper beats rock. 📄💥🪨';
      } else {
        return 'You win! 🤩 The computer played scissors, and rock beats scissors. 🪨💥✂️';
      }
    } else if (userChoice === 'paper') {
      if (computerChoice === 'scissors') {
        return 'You lost! 😞 The computer played scissors, and scissors beats paper. ✂️💥📄';
      } else {
        return 'You win! 🤩 The computer played rock, and paper beats rock. 📄💥🪨';
      }
    } else if (userChoice === 'scissors') {
      if (computerChoice === 'rock') {
        return 'You lost! 😞 The computer played rock, and rock beats scissors. 🪨💥✂️';
      } else {
        return 'You win! 🤩 The computer played paper, and scissors beats paper. ✂️💥📄';
      }
    } else if (userChoice === 'bomb') {
      return 'You win! 🤩 The computer cannot compete with your bomb. 💥💣💥';
    }
  }
}

// test determineWinner function
// console.log(determineWinner('paper','scissors'));
// console.log(determineWinner('paper','paper'));
// console.log(determineWinner('paper','rock'));

const playGame = () => {
  const userChoice = getUserChoice('bomb');
  const computerChoice = getComputerChoice();
  console.log('You threw: ' + userChoice);
  console.log('The computer threw: ' + computerChoice);
  console.log(determineWinner(userChoice,computerChoice));
};

playGame();
