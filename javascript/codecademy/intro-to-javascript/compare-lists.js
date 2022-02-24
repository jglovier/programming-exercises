// inspired by exercise in Codecademy Intro to JavaScript course

const myFriends = ['mwaura', 'kamau', 'gna gna', 'wanja'];
const yourFriends = ['wanja', 'wanjiko', 'kamau'];

for (let i = 0; i < myFriends.length; i++) {
  for (let j = 0; j < yourFriends.length; j++) {
    if (myFriends[i] === yourFriends[j]) {
      console.log('You are both friends with ' + yourFriends[j])
    }
  }
};
