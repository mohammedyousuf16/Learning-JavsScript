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


const friends = ["michael", "steven", "peter"];
console.log(friends);

const yers = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "jay";
console.log(friends);
// friends= ['bob','alice']
const firstName = "jonas";
const jonas = [firstName, "jake", 2037 - 1991, "teacher", friends];
console.log(jonas.length);

// Exercise
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};
const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);
const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];
console.log(ages);


// Add elements to Array
// 'push' adds elemensts at the end of an array
// 'unshift' adds elements at the start of an array
const friends = ["michael", "steven", "peter"];
const newLength = friends.push("jay");
console.log(friends);
console.log(newLength);

friends.unshift("john");
console.log(friends);

// Remove elements from an array
// 'pop' removes elements from the end of an array
// 'shift' removes elements from the starting of an array
friends.pop();
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift();
console.log(friends);

// "indexOf" is an older method which gives the value of the element i.e (steven -1, michael-0, bob-(-1, due to it is not there in the arrya)) present in the array
console.log(friends.indexOf("steven"));
console.log(friends.indexOf("bob"));

// "Includes" is the modern method and it is strict if you pass 23 as number and find it using the string value it will be false
friends.push(23);
console.log(friends.includes("steven"));
console.log(friends.includes("bob"));
console.log(friends.includes(23));

if (friends.includes("steven")) {
  console.log("you have a friend called steven");
}

//  Challange 2
const bills = [125, 555, 44];
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};
// function calcTip(bill) {
  //   if (bill >= 50 && bill <= 300) {
    //     tip = bill * 0.15;
//     tips.push(tip);
//   } else {
  //     tip = bill * 0.2;
  //     tips.push(tip);
  //   }
  // }
  let tips = [
    calcTip(bills[0]),
    calcTip(bills[1]),
    calcTip(bills[bills.length - 1]),
  ];
  const total = [tips[0] + bills[0], tips[1] + bills[1], tips[2] + bills[2]];
  console.log(bills, tips);
  console.log(total);
  
  
  // Intorduction to Objects
  const yousuf = {
    firstName: "mohammed",
    lastName: "yousuf",
    age: 2037 - 1999,
    job: "developer in IT",
    friends: ["bob", "pop", "badass"],
  };
  
  const mohammed = {
    firstName: "mohammed",
    lastName: "yousuf",
    age: 2037 - 1999,
    job: "developer in IT",
    friends: ["bob", "pop", "badass"],
  };
  console.log(mohammed.lastName);
  console.log(mohammed["lastName"]);
  
  const nameKey = "Name";
  console.log(mohammed["first" + nameKey]);
  console.log(mohammed["last" + nameKey]);
  
  // this wont work with dot notation
  // console.log(mohammed."last" + nameKey)
  
  const intrestedIn = prompt(
    "what do you want to know about mohammed choose between firstName, lastName, age, job, friends "
  );
  if (mohammed[intrestedIn]) {
    console.log(mohammed[intrestedIn]);
  } else {
    console.log("choose between firstName, lastName, age, job, friends");
}

mohammed.location = "india";
mohammed["instagram"] = "mohammedyousuf16.md";

//challange
// "mohammed has 3 friends, and his best friend is bob"

console.log(
  mohammed.lastName +
  " has " +
  mohammed.friends.length +
  " friends and his best friend is " +
  mohammed.friends[0]
);

console.log(
  `${mohammed.firstName} has ${mohammed.friends.length} friends and his best friend is ${mohammed.friends[0]}`
);

*/

const mohammed = {
  firstName: "mohammed",
  lastName: "yousuf",
  birthYear: 1991,
  job: "developer",
  friends: ["bob", "pop", "badass"],
  hasDriversLicense: true,
  // calcAge: function (birthYear) {
  //   return 2037 - birthYear;
  // },

  // calcAge: function () {
  //   // console.log(this)
  //   return 2037 - this.birthYear;
  // },

  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.lastName} is a ${this.calcAge()}-year old ${this.job}, and ${
      this.hasDriversLicense ? "a" : "no"
    } drivers license`;
  },
};

console.log(`The age is ${mohammed.calcAge()}`);
console.log(mohammed.age);
console.log(mohammed.age);
console.log(mohammed.age);

// Challange
// "mohammed is a 46-year old developer, and he has drivers license"

console.log(mohammed.getSummary());
