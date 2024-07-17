/*

let js = "amazing";
//console.log(40 + 8 - 23 + 10);

console.log("yousuf");
console.log(23);

let firstName = "yousuf";

console.log(firstName);
console.log(firstName);
console.log(firstName);

// variable name covertions
let mohammed_yousuf = "MY";
let $function = 23;

let person = "mohammed";
let PI = 3.1415;

let myFirstJob = "programmer";
let myCurrentJob = "student";

console.log(myFirstJob);


let a = 23;
let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof "java");

javascriptIsFun = "Yes!";
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(year);
console.log(typeof year);

console.log(typeof null);


let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990;

// const job;

var job = "programmer";
job = "student";

//Math operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = "james";
const lastName = "bond";

console.log(firstName + " " + lastName);

//Assignment operators
let x = 10 + 5; //x=15 here
x += 10; //x=15+10=25
x *= 4; //x=25*4
x++; //x=x+1
x--;
x--;
console.log(x);

//comparison operators
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);



const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(now - 1991 > now - 2018);

console.log(25 - 10 - 5);
let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);



//Challange 1

Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.
GOOD LUCK � 

let markMass = 78;
let markHeight = 1.69;
let johnMass = 92;
let johnHeight = 1.95;
let markBmi = markMass / (markHeight * markHeight);
let johnBmi = johnMass / (johnHeight * johnHeight);
console.log(markBmi, johnBmi);
let markHigherBMI = markBmi > johnBmi;
console.log(markHigherBMI);
markMass = 95;
markHeight = 1.88;
johnHeight = 1.76;
johnMass = 85;
markBmi = markMass / (markHeight * markHeight);
johnBmi = johnMass / (johnHeight * johnHeight);
console.log(markBmi, johnBmi);
markHigherBMI = markBmi > johnBmi;
console.log(markHigherBMI);

const firstName = "john";
const job = "student";
const birthYear = 1991;
const year = 2037;

const john =
"i'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";
console.log(john);

const johnNew = `i'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(johnNew);
console.log(`just a regular string`);

console.log(`hey this is 
how we can 
use multi line 
strings`);
console.log("rather than \n of writting this \n stupid slash n ");


const age = 19;

if (age >= 18) {
  console.log(`sarah can start driving now `);
} else {
  console.log(`she has to wait for ${18 - age} years `);
}

// Challange 2

const markMass = 95;
const markHeight = 1.88;
const johnHeight = 1.76;
const johnMass = 85;
markBmi = markMass / markHeight ** 2;
johnBmi = johnMass / (johnHeight * johnHeight);
markHigherBMI = markBmi > johnBmi;
// console.log(markBmi, johnBmi, markHigherBMI);
if (markBmi > johnBmi) {
  console.log(`Mark's BMI ${markBmi} is higher than John's ${johnBmi}!`);
} else {
  console.log(`John's BMI ${johnBmi} is higher than Mark's ${markBmi}!`);
}

// Type convertion

const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("john"));
console.log(typeof NaN);

console.log(String(23), 23);

//Type coerction

console.log("i'm " + 23 + " years old");
console.log("i'm 23 years old");
console.log("23" - "10" - 3);
console.log("23" * "2");
console.log("10" / "2");

let n = "1" + 1; //'11'
n = n - 1; //'11'-1
console.log(n);
// Truthy and Falsy values

//5 falsy values: 0, '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("john"));
console.log(Boolean({}));
console.log(Boolean(""));

const money = 100;
if (money) {
  console.log("don't spend it all");
} else {
  console.log("you should get a job!");
}

let height = 0;
if (height) {
  console.log("YAY! height is defined");
} else {
  console.log("height is UNDEFINED");
}

// Equality operators == vs ===
const age = "18";
if (age === 18) console.log("you just became an adult (strict)");

if (age == 18) console.log("you just became an adult (loose)");

const favourite = Number(prompt("what is your fav number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
  console.log("cool! 23 is an amazing number");
} else if (favourite === 7) {
  console.log("seven is also a cool number");
} else if (favourite === 9) {
  console.log("9 is also a cool number");
} else {
  console.log("num is not 23 or 7 or 9");
}

if (favourite !== 23) {
  console.log("why not 23");
}


const hasDriversLicense = true;
const hasGoodVision = true;
// AND-&&, OR-||, NOT-!
console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

// if (hasDriversLicense && hasGoodVision) {
  //   console.log("sarah is able to drive!");
  // } else {
    //   console.log("someone else should drive...");
    // }
    
    const isTired = false;
    console.log(hasDriversLicense && hasGoodVision && !isTired);
    
    if (hasDriversLicense && hasGoodVision && !isTired) {
      console.log("sarah is able to drive!");
    } else {
      console.log("someone else should drive...");
  }
  
  
  There are two gymnastics teams, Dolphins and Koalas. They compete against each
  other 3 times. The winner with the highest average score wins a trophy!
  Your tasks:
  1. Calculate the average score for each team, using the test data below
  2. Compare the team's average scores to determine the winner of the competition,
  and print it to the console. Don't forget that there can be a draw, so test for that
  as well (draw means they have the same average score)
  3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
  team only wins if it has a higher score than the other team, and the same time a
  score of at least 100 points. Hint: Use a logical operator to test for minimum
  score, as well as multiple else-if blocks �
  4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
  both teams have the same score and both have a score greater or equal 100
  points. Otherwise, no team wins the trophy
  Test data:
  § Data 1: Dolphins score 96, 108 and 89(293)(97.66). Koalas score 88, 91 and 110(289)(96.33)
  § Data Bonus 1: Dolphins score 97, 112 and 101(310)(103.33). Koalas score 109, 95 and 123 (327)(109)
  § Data Bonus 2: Dolphins score 97, 112 and 101(310)(103.33). Koalas score 109, 95 and 106(310)(103.33)
  GOOD LUCK �
  */

// Challange 3
// const oneDolphins = 96;
// const twoDolphins = 108;
// const thrDolphins = 89;
// const oneKoalas = 88;
// const twoKoalas = 91;
// const thrKoalas = 110;

// Bonus 1
// const oneDolphins = 97;
// const twoDolphins = 112;
// const thrDolphins = 101;
// const oneKoalas = 109;
// const twoKoalas = 95;
// const thrKoalas = 123;

// BOnus 2
const oneDolphins = 97;
const twoDolphins = 112;
const thrDolphins = 101;
const oneKoalas = 109;
const twoKoalas = 95;
const thrKoalas = 106;

const avgDolphins = (oneDolphins + twoDolphins + thrDolphins) / 3;
const avgKoalas = (oneKoalas + twoKoalas + thrKoalas) / 3;
console.log(
  `the average of dolphins is ${avgDolphins} and average of koalas is ${avgKoalas}`
);
if (avgDolphins > 100 && avgKoalas < avgDolphins) {
  console.log(
    `DOlphins wins the competition with average score of ${avgDolphins}`
  );
} else if (avgKoalas > 100 && avgKoalas > avgDolphins) {
  console.log(`Koalas wins the competition with average score of ${avgKoalas}`);
} else if (
  avgDolphins === avgKoalas &&
  avgDolphins >= 100 &&
  avgKoalas >= 100
) {
  console.log("Both wins the trophy");
} else {
  console.log(`No one wins due to average is lesser than 100 points`);
}
