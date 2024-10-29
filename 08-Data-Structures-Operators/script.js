'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [`${weekdays[2 + 3]}`]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  //old method to add befor es6
  // openingHours: openingHours,

  // es6 enhanced object literals
  openingHours,
  orderDelivery({ starterIndex = 1, mainIndex = 0, address, time = '20:00' }) {
    console.log(
      `order received ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be deleverd to ${address} at ${time}`
    );
  },
  orderPasta(ing1, ing2, ing3) {
    console.log(`here is pasta with ${ing1},${ing2},${ing3}`);
  },
  orderPizza: function (mainIngredians, ...otherIngrediants) {
    console.log(mainIngredians, otherIngrediants);
  },
};
// split and join
console.log('a+very+nice+string'.split('+'));
console.log('mohammed yousuf'.split(' '));
const [firstName, lastName] = 'mohammed yousuf'.split(' ');

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];
  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
};
capitalizeName('mohammed yousuf');
capitalizeName('jessica ann smith davis');

// padding a string
const message = 'Go to gate 23';
console.log(message.padStart(25, ' + ').padEnd(35, ' + '));
console.log('mohammed'.padStart(25, '-').padEnd(35, ' + '));

// Masking
const maskCreditCard = function (number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};
console.log(maskCreditCard(1234445353553535));
console.log(maskCreditCard('134245353535534423424'));

// Reapeat
const message2 = 'Bad weather.... All Depature delayed... ';
console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`there are ${n} planes in line `.repeat(n));
};
planesInLine(5);
planesInLine(3);
planesInLine(12);
/*
const airline = 'Tap Air portugal';
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// fix capitalization in name
const passenger = 'jAmes'; // James
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

// comparing email
const email = 'hello@jonas.io';
const loginEmail = '   Hello@Jonas.Io \n';

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
// console.log(trimmedEmail);

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);

// Replacing parts of string

const priceGB = '288,97@';
const priceUS = priceGB.replace('@', '$').replace(',', '.');
console.log(priceUS);

const announcement =
  'All passanger come to boarding door 23. Boarding door 23!';
console.log(announcement.replace('door', 'gate'));
console.log(announcement.replaceAll('door', 'gate'));

console.log(announcement.replace(/door/g, 'gate'));

// Booleans

const plane = 'Airbus A320neo';
console.log(plane.includes('A320'));
console.log(plane.includes('Boeing'));
console.log(plane.startsWith('Airb'));

if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
  console.log('Part of the new Airbus family');
}
// Practice Excersise
const checkBaggage = function (item) {
  const baggage = item.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('you are NOT allowed ');
  } else {
    console.log('welcome aboard!');
  }
};
checkBaggage('i have a laptop, some Food and a pocket Knife');
checkBaggage('i have some clothes, shoes and laptop');
checkBaggage('Got some snacks and a gun for protection');

// Working with strings
const airline = 'Tap Air portugal';
const plane = 'A320';
console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[0]);

console.log('B737'.length);
console.log(airline.length);

console.log(airline.indexOf('r'));
console.log(airline.indexOf('portugal'));
console.log(airline.lastIndexOf('r'));

console.log(airline.slice(4));
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMidSeat = function (seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') {
    console.log('you got mid seat');
  } else {
    console.log('you got luckey');
  }
};
checkMidSeat('11B');
checkMidSeat('13A');
checkMidSeat('43C');
checkMidSeat('63D');
checkMidSeat('34E');

console.log(new String('james'));
console.log(typeof new String('james'));


const question = new Map([
  ['question', 'what is the best programming language in the world ?'],
  [1, 'c'],
  [2, 'java'],
  [3, 'javaScript'],
  ['correct', 3],
  [true, 'correct!!!'],
  [false, 'Try again!'],
]);
console.log(question);

// Convert objects to maps
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);
//Quize app
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}
// const answer = Number(prompt('what is your answer'));
const answer = 3;
console.log(answer);
// if (answer === question.get('correct')) {
//   console.log(question.get(true));
// } else {
//   console.log(question.get(false));
// }
console.log(question.get(question.get('correct') === answer));
// Convert map to array
console.log([...question]);
// console.log([...question.entries()]);
console.log([...question.keys()]);
console.log([...question.values()]);


// Maps Fundamentals
const rest = new Map();
rest.set('name', 'classico Italiano');
rest.set(1, 'firenze, Italy');
console.log(rest.set(2, 'Lisbon, Portugal'));

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'we are open')
  .set(false, 'we are closed');
console.log(rest.get('name'));
console.log(rest.get(true));

const time = 8;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));
console.log(rest.has('categories'));
rest.delete(2);
// rest.clear();
const arr = [1, 2];
rest.set(arr, 'Test');
rest.set(document.querySelector('h1'), 'heading');
console.log(rest);
console.log(rest.size);
console.log(rest.get(arr));


const ordersSet = new Set([
  'pasta',
  'pizza',
  'pasta',
  'Risotto',
  'pasta',
  'pizza',
]);
console.log(ordersSet);

console.log(new Set('james'));
console.log(ordersSet.size);
console.log(ordersSet.has('pizza'));
console.log(ordersSet.has('bread'));
ordersSet.add('garlic bread');
ordersSet.add('garlic bread');
ordersSet.delete('Risotto');
// ordersSet.clear();
console.log(ordersSet);
for (const order of ordersSet) console.log(order);

//Example
const staff = ['waiter', 'chef', 'waiter', 'manager', 'chef', 'waiter'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);
console.log(
  new Set(['waiter', 'chef', 'waiter', 'manager', 'chef', 'waiter']).size
);
console.log(new Set('mohammedyousuf').size);
first.last@razer.com n0:- 8558725233  88869720337
// propertiy names
const properties = Object.keys(openingHours);
console.log(properties);
let openStr = `we are open on ${properties.length} days `;
for (const day of properties) {
  openStr += `${day}, `;
}
console.log(openStr);

//proprety values
const values = Object.values(openingHours);
console.log(values);

//Entire Object
const entries = Object.entries(openingHours);
console.log(entries);

for (const [day, { open, close }] of entries) {
  console.log(`On ${day} we open at ${open} and close at ${close}`);
}

if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);
// without optional chaining we will get error
///// console.log(restaurant.openingHours.mon.open);
// with optional chaining
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
// for (const day of days) {
//   // console.log(day);
//   const open = restaurant.openingHours[day]?.open ?? 'No-';
//   const close = restaurant.openingHours[day]?.close || 'NO-';
//   console.log(`on ${day}, we open at ${open}hrs and close at ${close}hrs`);
// }

//Method
console.log(restaurant.order?.(0, 1) ?? 'method does not exists');
console.log(restaurant.ordezr?.(0, 1) ?? 'method does not exists');

// Array
const users = [{ name: 'james', email: 'jamesbond@gmail.com' }];
console.log(users[0]?.name ?? 'user array empty');

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const item of menu) console.log(item);
for (const [i, el] of menu.entries()) {
  // console.log(`${itme[0] + 1} ${itme[1]}`);
  console.log(`${i + 1} ${el}`);
}
// console.log([...menu.entries()]);

const rest1 = {
name: 'capri',
// numGuest: 20,
  numGuest: 0,
};

const rest2 = {
  name: 'L Piazza',
  owner: 'Giovanni Rossi',
};

// OR assignment Operator

// rest1.numGuest = rest1.numGuest || 10;
// rest2.numGuest = rest2.numGuest || 10;

// rest1.numGuest ||= 10;
// rest2.numGuest ||= 10;
// Nullish assignment Operator(null or undefined)

rest1.numGuest ??= 10;
rest2.numGuest ??= 10;

// And assignment opetator
// rest2.owner = rest2.owner && '<Anonymos>';
// rest1.owner = rest1.owner && '<Anonymos>';

rest1.owner &&= '<Anonymos>';
rest2.owner &&= '<Anonymos>';
console.log(rest1, rest2);
restaurant.numGuests = 0;
const guest = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guest);
//Nullish: null and undefined [NOT 0 or '']
const guessCorrect = restaurant.numGuests ?? 10;
console.log(guessCorrect);

// Use any data type, return any data type,shor-circuiting
      
console.log('-----OR-----');
console.log(3 || 'james');
console.log('' || 'james');
console.log(true || 0);
console.log(undefined || null);
console.log(undefined || 0 || '' || 'hello' || 3 || null);
//OR will not work when the numGuest is 0 it will show 10
restaurant.numGuests = 23;
const guest1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guest1);

const guest2 = restaurant.numGuests || 10;
console.log(guest2);

console.log('-----AND-----');
console.log(0 && 'jonas');
console.log(1 && 'jonas');

console.log('hello' && 23 && null && 'jonas');

if (restaurant.orderPizza) {
  restaurant.orderPizza('mushroom', 'spinish');
}

restaurant.orderPizza && restaurant.orderPizza('ing1', 'ing2', 'ing3');
// 1)Destructuring

// SPREAD, because on Right side of = (assignment operator)
const arr = [1, 2, ...[3, 4]];
//REST, because on Left side of = (assignment operator)
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);
// REST inobjects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(sat, weekdays);
// 2) Functions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};
add(2, 3);
add(2, 3, 5, 7);
add(2, 3, 5, 6, 8, 9);

const x = [23, 10, 10];
add(...x);

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
restaurant.orderPizza('mushrooms');
          const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// copy array
const mainMenuCopy = [...restaurant.mainMenu];

// join 2 arrays
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

// Iterables: arrays, strings, maps, sets. Not objects
const str = 'jonas';
const lettes = [...str, '', 'S.'];
console.log(lettes);
console.log(...str);
//realworld example
const ingridiants = [
  // prompt("let's make pasta! Ingridiant 1?"),
  // prompt("let's make pasta! Ingridiant 2?"),
  // prompt("let's make pasta! Ingridiant 3?"),
];
// console.log(ingridiants);

// restaurant.orderPasta(...ingridiants);
//objects with spread
const newRestaurant = { foundIn: 1998, ...restaurant, founder: 'mohammed' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurant.name);
console.log(restaurantCopy.name);

//destructing objects
restaurant.orderDelivery({
  time: '22:30',
  address: 'vitamin address',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'vitamin D3 address',

  starterIndex: 1,
});

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);
//default values

const { menu = {}, starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

//mutating variables

let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 24 };
({ a, b } = obj);
console.log(a, b);

// Nested objects
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);

///
/////
///////
//////////
/////////////
/////////////////
////////////////////////
////////////////////////////
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// switching variables

// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

console.log(restaurant.order(2, 0));

// receive  return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);

const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);

// Coding Challenge #1
// We're building a football betting app (soccer for my American friends �)!
// Suppose we get data from a web service about a certain game ('game' variable on
// next page). In this challenge we're gonna work with that data.
// Your tasks:
// 1. Create one player array for each team (variables 'players1' and
// 'players2')
// 2. The first player in any player array is the goalkeeper and the others are field
// players. For Bayern Munich (team 1) create one variable ('gk') with the
// goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10
// field players
// 3. Create an array 'allPlayers' containing all players of both teams (22
// players)
// 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a
// new array ('players1Final') containing all the original team1 players plus
// 'Thiago', 'Coutinho' and 'Perisic'
// 5. Based on the game.odds object, create one variable for each odd (called
// 'team1', 'draw' and 'team2')
// 6. Write a function ('printGoals') that receives an arbitrary number of player
// names (not an array) and prints each of them to the console, along with the
// number of goals that were scored in total (number of player names passed in)
// 7. The team with the lower odd is more likely to win. Print to the console which
// team is more likely to win, without using an if/else statement or the ternary
// operator.
// Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'.
// Then, call the function again with players from game.scored
*/
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
/*
const [players1, players2] = game.players;
console.log(players1, players2);

const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

const allplayers = [...players1, ...players2];
console.log(allplayers);

const players1Final = [...players1, 'Thiago', 'couthinho', 'periscic'];

const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(draw, team1, team2);

const printGoals = function (...players) {
  console.log(`${players.length} goals were scored`);
};
printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals('Davies', 'Muller');
printGoals(...game.score);

team1 < team2 && console.log('team 1 is more likely to win');
team2 < team1 && console.log('team 2 is more likely to win');

// challenge 2
// console.log(game.scored);
//1)

for (const [i, player] of game.scored.entries()) {
  console.log(`Goal ${i + 1}: ${player}`);
}

//2)
let average = 0;
const odds = Object.values(game.odds);
for (const odd of odds) {
  average += odd;
}
average /= odds.length;
console.log(average);

//3)
// Odd of victory Bayern Munich: 1.33
// Odd of draw: 3.25
// Odd of victory Borrussia Dortmund: 6.5
for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'draw' : ` victory ${game[team]}`;
  console.log(`odd of ${teamStr}.... ${odd}`);
}

// Bonus
const scorers = {};
for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}
console.log(scorers);
// for (const x of Object.entries)
/*
Coding Challenge #2
Let's continue with our football betting app! Keep using the 'game' variable from
before.
Your tasks:
1. Loop over the game.scored array and print each player name to the console,
along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already
studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
Odd of victory Bayern Munich: 1.33
Odd of draw: 3.25
Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them
(except for "draw"). Hint: Note how the odds and the game objects have the
same property names �
4. Bonus: Create an object called 'scorers' which contains the names of the
players who scored as properties, and the number of goals as the value. In this
game, it will look like this:
{
 Gnarby: 1,
 Hummels: 1,
 Lewandowski: 2
}
// coding challenge #3
Let's continue with our football betting app! This time, we have a map called
'gameEvents' (see below) with a log of the events that happened during the
game. The values are the events themselves, and the keys are the minutes in which
each event happened (a football game has 90 minutes plus some extra time).
Your tasks:
1. Create an array 'events' of the different game events that happened (no
duplicates)
2. After the game has finished, is was found that the yellow card from minute 64
was unfair. So remove this event from the game events log.
3. Compute and log the following string to the console: "An event happened, on
average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over 'gameEvents' and log each element to the console, marking
whether it's in the first half or second half (after 45 min) of the game, like this:
[FIRST HALF] 17: ⚽ GOAL
GOOD LUCK �
*/
const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '� Substitution'],
  [47, '⚽ GOAL'],
  [61, '� Substitution'],
  [64, '� Yellow card'],
  [69, '� Red card'],
  [70, '� Substitution'],
  [72, '� Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '� Yellow card'],
]);
/*
// 1.
const event = [...new Set(gameEvents.values())];
console.log(event);

// 2.
gameEvents.delete(64);
console.log(gameEvents);

// 3.
console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes`
);
const time = [...gameEvents.keys()].pop();
console.log(time);
console.log(
  `An event happened, on average, every ${time / gameEvents.size} minutes`
);
// 4.
for (const [key, value] of gameEvents) {
  if (key < 45) {
    console.log(`First Half: ${key}: ${value}`);
  } else {
    console.log(`Second Half: ${key}: ${value}`);
  }
}
*/
