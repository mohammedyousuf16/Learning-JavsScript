// Remember, we're gonna use strict mode in all scripts now!
'use strict';
/*
const x = 23;
// if (x === 23) console.log(23);

const calcAge = birthyear => 2037 - birthyear;

// Challange 1
// const arr = [12, 5, -5, 0, 4];
// const printForecast = function (arr) {
//   for (let i = 0; i < arr.length; i++) {
//     console.log(`${arr[i]}ºC in ${i + 1} days`);
//   }
// };
// console.log(printForecast(arr));

// problem 1

const tepratures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < tepratures.length; i++) {
    const curTemp = temps[i];
    if (typeof temps[i] !== 'number') continue;
    if (max < curTemp) max = curTemp;
    if (min > curTemp) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

// const amplitude = calcTempAmplitude(tepratures);
// console.log(amplitude);

//  problem 2
//  function 2 should now receive 2 arrays of temprature

const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < tepratures.length; i++) {
    const curTemp = temps[i];
    if (typeof temps[i] !== 'number') continue;
    if (max < curTemp) max = curTemp;
    if (min > curTemp) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
const amplitudeNew = calcTempAmplitudeNew(
  [1, 3, 2, -5, 7, 9],
  [3, 65, 8, 9, 3, 4]
);
console.log(amplitudeNew);

const mesureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    values: Number(prompt('degree celsius:')),
  };
  console.table(measurement);
  // console.warn(measurement.values);
  // console.error(measurement.values);

  const kelvin = measurement.values + 273;
  console.log(typeof kelvin);
  return kelvin;
};
console.log(mesureKelvin());

*/

// Challange 1
const arr = [12, 5, -5, 0, 4];
let str = '';
const printForecast = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    // console.log(`${arr[i]}ºC in ${i + 1} days`);
    str += `${arr[i]}ºC in ${i + 1} days... `;
    console.log(str);
  }
};
printForecast(arr);
console.log(str);
