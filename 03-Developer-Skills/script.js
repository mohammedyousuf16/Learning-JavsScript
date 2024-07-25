// Remember, we're gonna use strict mode in all scripts now!
'use strict';

const x = 23;
// if (x === 23) console.log(23);

const calcAge = birthyear => 2037 - birthyear;

// problem

const tepratures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
let total = 0;
const tempAmplitude = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    const temp = arr[i];
    if (arr[i] === 'error') {
      console.log(`"error" found in array at ${arr[i].length - 1}`);
    } else {
      total += temp;
    }
  }
  console.log(`the total value is ${total} after adding all the array items`);
};

console.log(tempAmplitude(tepratures));
// if (arr[i] === 'error') {
//   console.log(`string found: ${arr[i]}`);
// } else {
//   console.log('number');
// }
// Challange 1
const arr = [12, 5, -5, 0, 4];
const printForecast = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(`${arr[i]}ºC in ${i + 1} days`);
  }
};
console.log(printForecast(arr));
