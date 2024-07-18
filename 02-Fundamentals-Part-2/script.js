"use strict";
/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log(`i can drive`);

// const interface = "audio";
// const private = "audio";

//functions

function logger() {
  console.log("my name is mohammed yousuf");
}
//calling /running / invoking funtion
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  const juice = `juice with ${apples} apples and ${oranges} oranges`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const applaOrangeJuice = fruitProcessor(2, 4);
console.log(applaOrangeJuice);


// Function declaration
function calcAge1(birthYear) {
  return 2037 - birthYear;
}

const age1 = calcAge1(1991);

// Function expression
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};
const age2 = calcAge2(1991);
console.log(age1, age2);


// Arrow function
const calcAge3 = (birthYear) => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} retires in ${retirement} years`;
};
console.log(yearsUntilRetirement(1991, "Mohammed"));
console.log(yearsUntilRetirement(1996, "yousuf"));


function cutFruitPices(fruit) {
  return fruit * 2;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPices(apples);
  const orangePieces = cutFruitPices(oranges);
  
  const juice = `juice with ${applePieces} apple pieces and ${orangePieces} orange pieces`;
  return juice;
}
console.log(fruitProcessor(2, 3));


const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;
  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired`);
  return -1;
}

//   return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(1991, "mohammed"));
console.log(yearsUntilRetirement(1950, "mike"));

*/

// challange 1
const calcAverage = (s1, s2, s3) => (s1 + s2 + s3) / 3;
let avgScoreDolphins = calcAverage(25, 25, 1);
let avgScoreKoalas = calcAverage(73, 34, 43);
console.log(
  `the avg score of Dolphins (${avgScoreDolphins})`,
  `and koalas( ${avgScoreKoalas})`
);

const winner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`);
  } else {
    console.log(`no team wins`);
  }
};
console.log(winner(avgScoreDolphins, avgScoreKoalas));

// test 2

avgScoreDolphins = calcAverage(730, 340, 430);
avgScoreKoalas = calcAverage(20, 20, 20);
console.log(
  `the avg score of Dolphins (${avgScoreDolphins})`,
  `and koalas( ${avgScoreKoalas})`
);
console.log(winner(avgScoreDolphins, avgScoreKoalas));

// test 3

avgScoreDolphins = calcAverage(50, 20, 35);
avgScoreKoalas = calcAverage(20, 20, 20);
console.log(
  `the avg score of Dolphins (${avgScoreDolphins})`,
  `and koalas( ${avgScoreKoalas})`
);
console.log(winner(avgScoreDolphins, avgScoreKoalas));
