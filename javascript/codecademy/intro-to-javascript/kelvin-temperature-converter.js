// set the forecast temp in kelvin
const kelvin = 0;
// convert to celsius
const celsius = kelvin - 273;
// convert to Fahrenheit scale
let fahrenheit = celsius * (9/5) + 32;
// round down
fahrenheit = Math.floor(fahrenheit);
// convert Newton scale
let newton = celsius * (33/100);
// round down
newton = Math.floor(newton);

console.log(kelvin);
console.log(celsius);
console.log(fahrenheit);
console.log(newton);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
