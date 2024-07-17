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

*/
