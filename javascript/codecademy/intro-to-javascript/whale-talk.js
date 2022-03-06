// from Array exercise at Codecademy's Intro to JavaScript course
// Whale Talk
// also referenced the walk through video a couple times when I got stuck
// https://www.youtube.com/watch?v=qu1zWdqoado&t=26s&ab_channel=Codecademy

const input = 'Swimming is super fun, wheee!';
const vowels = ['a', 'e', 'i', 'o', 'u'];
const resultArray = [];

for (let inputIndex = 0; inputIndex < input.length; inputIndex++) {
  // console.log(`inputIndex is ${inputIndex}`);
  if (input[inputIndex] === 'e' || input[inputIndex] === 'u') {
    resultArray.push(input[inputIndex]);
  }
  for (let vowelIndex = 0; vowelIndex < vowels.length; vowelIndex++) {
    // console.log(vowelsIndex);
    if (input[inputIndex] === vowels[vowelIndex]) {
      resultArray.push(input[inputIndex]);
    }
  }
}
const resultString = resultArray.join('').toUpperCase();
console.log(resultString);

// returns: IIIUUEEUUEEEEEE
