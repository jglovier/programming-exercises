// exercise from Intro to JavaScript course on Codecademy

// ask user for their name
let userName = '';

// log the name, else just say hi
userName 
  ? console.log(`Hello, ${userName}!`) 
  : console.log('Hello!');

// ask the user for their question
let userQuestion = 'Will it rain tomorrow?';

// generate a random number
let randomNumber = Math.floor(Math.random() * 8);

// define the magic eightball
let eightBall = '';

/*
// control flow for eight ball responses
if (randomNumber === 1) {
  eightBall = 'It is certain';
} else if (randomNumber === 2) {
  eightBall = 'It is decidedly so';
} else if (randomNumber === 3) {
  eightBall = 'Reply hazy try again';
} else if (randomNumber === 4) {
  eightBall = 'Cannot predict now';
} else if (randomNumber === 5) {
  eightBall = 'Do not count on it';
} else if (randomNumber === 6) {
  eightBall = 'My sources say no';
} else if (randomNumber === 7) {
  eightBall = 'Outlook not so good';
} else {
  eightBall = 'Signs point to yes';
}
*/

switch (randomNumber) {
  case 1:
    eightBall = 'It is certain';
    break;
  case 2:
    eightBall = 'It is decidedly so';
    break;
  case 3:
    eightBall = 'Reply hazy try again';
    break;
  case 4:
    eightBall = 'Cannot predict now';
    break;
  case 5:
    eightBall = 'Do not count on it';
    break;
  case 6:
    eightBall = 'My sources say no';
    break;
  case 7:
    eightBall = 'Outlook not so good';
    break;
  default:
    eightBall = 'Signs point to yes';
    break;
}

// output eight ball response
if (userQuestion === '') {
  console.log('You need to enter a question before I can respond...');
} else {
  console.log(
    userName 
      ? `Okay, ${userName}, you want to know: ${userQuestion}`
      : `Okay, you want to know: ${userQuestion}`
    );
  console.log(`The Magic 8-Ball says: ${eightBall}`);
}
