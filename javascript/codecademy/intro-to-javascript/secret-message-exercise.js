// from Codecademy exercise in Intro to JavaScript course

let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

// Use an array method to remove the last string of the array secretMessage.
secretMessage.pop();

// Use an array method to add the words to and Program as separate strings to the end of the secretMessage array.
secretMessage.push('to', 'Program');

// Change the word easily to the word right by accessing the index and replacing it.
secretMessage[7] = 'right';

// Use an array method to remove the first string of the array.
secretMessage.shift();

// Use an array method to add the string Programming to the beginning of the array.
secretMessage.unshift('Programming');

// Use an array method to remove the strings get, right, the, first, time,, and replace them with the single string know
secretMessage.splice(6, 5, 'know');

console.log(secretMessage);
console.log(secretMessage.length);
console.log(secretMessage.join(' '));
