// from the exercise at Codecademy

// store my age
let myAge = 40;
// the first two dog years have a different cumulative value
let earlyYears = 2;
// early dog yeras are 10.5 human years
// apply the higher value; *= is shorthand
// could also be written as: earlyYears = earlyYears * 10.5;
earlyYears *= 10.5;
// get remainder of years after early years
let laterYears = myAge - 2
// later human years are 4 dog years
laterYears *= 4;
// combine early and later years
myAgeInDogYears = earlyYears + laterYears;
// set name; using toLowerCase method just because the tutorial said so; not really needed
let myName = 'Joel'.toLowerCase();

// print a sentence with the data
console.log(`Hi, my name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);
