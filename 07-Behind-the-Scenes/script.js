'use strict';
/*
function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `${firstName} you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      // creating new variable with same name as outer scopes variables
      const firstName = 'yousuf';
      //reassigning outer scope variable
      output = `new output`;
      const str = `oh, and you are a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    console.log(millenial);
    // console.log(add(2, 3));
    console.log(output);
  }
  printAge();

  return age;
}

const firstName = 'mohammed';
calcAge(1991);
//console.log(age);
//printAge();

//hosting in practice

//variables
console.log(me);
// console.log(job);
// console.log(year);

var me = 'yousuf';
let job = 'teacher';
const year = 1991;

//functions

console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
console.log(addArrow);
// console.log(addArrow(2, 3));
function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

//Example

console.log(undefined);
if (!numProducts) DeleteShoppingCart();
var numProducts = 10;
function DeleteShoppingCart() {
  console.log('all products deleted');
}

var x = 1;
let y = 2;
const z = 3;
console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);

//this keyword in global scope
console.log(this);
//this keyword in funtion
const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAge(1991);

//this keyword in arrow funtion(Arrow function does not has this keyword but uses the this key word from the parent {in here its the global this which points to window})
const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  // console.log(this);
};
calcAgeArrow(1980);

const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};
jonas.calcAge();

const matilda = {
  year: 2017,
};
matilda.calcAge = jonas.calcAge;
matilda.calcAge();

const f = jonas.calcAge;
f();


const jonas = {
  firstName: 'jonas',
  year: 1991,
  calcAge: function () {
    // console.log(this);
    console.log(2037 - this.year);
    
    // solution 1
    // const self = this; //self or that
    // const isMillenial = function () {
      //   console.log(self);
      //   console.log(self.year >= 1981 && self.year <= 1996);
      //   // console.log(this.year >= 1981 && this.year <= 1996);
      // };
      
      //solution 2 (using the arrow function)
      const self = this; //self or that
      const isMillenial = () => {
        console.log(this);
        console.log(this.year >= 1981 && this.year <= 1996);
      };
      isMillenial();
    },
    greet: () => {
      console.log(this);
      console.log(`hey ${this.firstName}`);
    },
  };
  jonas.greet();
  jonas.calcAge();
  
  // arguments keyword
  const addExpr = function (a, b) {
    console.log(arguments);
    return a + b;
  };
  addExpr(2, 5);
  addExpr(2, 5, 8, 10);
  var addArrow = (a, b) => {
    console.log(arguments);
    return a + b;
  };
  // addArrow(2, 5, 8);
  
  */

let age = 30;
let oldage = age;
age = 31;
console.log(age, oldage);

const me = {
  name: 'james',
  age: 30,
};

const friends = me;
friends.age = 27;
console.log('friend:', friends);
console.log('me', me);

//Primitive vs object in practice

// Primitive types
let lastName = 'williams';
let oldLastName = lastName;
lastName = 'davids';
console.log(lastName, oldLastName);

// Reference types
const jessica = {
  firstName: 'jessica',
  lastName: 'williams',
  age: 27,
};
const marriedJessica = jessica;
marriedJessica.lastName = 'Davids';
console.log(jessica, marriedJessica);

// marriedJessica = {};

// Copying Objects
const jessica2 = {
  firstName: 'jessica',
  lastName: 'williams',
  age: 27,
  family: ['alice', 'bob'],
};
// Object.assign() function just shallow copy not deep copy(obj inside obj)
const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davids';
console.log('Before marrage', jessica2);
console.log('after marrage ', jessicaCopy);

jessicaCopy.family.push('marry');
jessicaCopy.family.push('john');

console.log('Before marrage', jessica2);
console.log('after marrage ', jessicaCopy);
