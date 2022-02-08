// define some sample hours that I slept each day
// as a later exercise, this could be refactored:
// - to take an input for each day
// - to abstract the need for specific days and just average whatever hours given
const getSleepHours = day => {
  if (day === 'monday') {
    return 8;
  } else if (day === 'tuesday') {
    return 5;
  } else if (day === 'wednesday') {
    return 7;
  } else if (day === 'thursday') {
    return 8;
  } else if (day === 'friday') {
    return 10;
  } else if (day === 'saturday') {
    return 12;
  } else if (day === 'sunday') {
    return 8;
  }
};

// calculate total number of hours slept
const getActualSleepHours = () => {
  const sleepSum = getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');
  return sleepSum;
};

// define the ideal sleep hours and calculate total for the week
const getIdealSleepHours = idealHours => idealHours * 7;

// calculate sleep debt
const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  // be sure to pass your number of ideal sleep hours here
  const idealSleepHours = getIdealSleepHours(8);
  if (actualSleepHours === idealSleepHours) {
    console.log('Great job! You are getting all the sleep that you want to.');
  } else if (actualSleepHours < idealSleepHours) {
    const sleepDebt = idealSleepHours - actualSleepHours;
    console.log(`You are not getting enough rest. You needed ${sleepDebt} hours more to meet your goal. Try getting to bed earlier.`);
  } else if (actualSleepHours > idealSleepHours) {
    const sleepSurplus = actualSleepHours - idealSleepHours;
    console.log(`Wow, you are really getting a lot of rest! You got ${sleepSurplus} hours more than your goal! Do you feel well rested?`);
  }
};

calculateSleepDebt();
