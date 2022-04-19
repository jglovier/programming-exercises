// from exercise in Codecademy Intro to JavaScript course

let story = 'Last weekend, I took literally the most beautifull bike ride of my life. The route is called "The 9W to Nyack" and it stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it literally took me an entire day. I stopped at Riverbank State Park to take some artsy photos. It was a short stop, though, because I had a freaking long way to go. After a quick photo op at the very popular Little Red Lighthouse I began my trek across the George Washington Bridge into New Jersey. The GW is a breathtaking 4,760 feet long! I was already very tired by the time I got to the other side. An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautifull park along the coast of the Hudson. Something that was very surprising to me was that near the end of the route you literally cross back into New York! At this point, you are very close to the end.';

let storyWords = story.split(' ');
let unnecessaryWord = 'literally';
let misspelledWord = 'beautifull';
let badWord = 'freaking';

// console.log(storyWords);

// set a variable to store the story word count
let count = 0;

// iterate over the story array and for each word, increment the count variable by one
storyWords.forEach((word) => {
  count ++
});

// filter unnecessary words out of the story
storyWords = storyWords.filter((word) => {
  return word !== unnecessaryWord;
});

// check for mispelled word and replace it with correct spelling if matched
storyWords = storyWords.map((word) => {
  return word === misspelledWord ? 'beautiful' : word;
});

let badWordIndex = storyWords.findIndex((word) => {
  return word === badWord;
});

// find Index of bad word
// console.log(badWordIndex);

// replace bad word with alternative word
storyWords[78] = 'really';

// check if all words are less than 10 characters
// by setting a variable and using the every iterator on the string array
let lengthCheck = storyWords.every((word) => {
  return word.length < 10;
});

// access the long word
storyWords.forEach((word) => {
  word.length > 10 && console.log(word);
});

console.log(lengthCheck);

console.log(storyWords.join(' '));
