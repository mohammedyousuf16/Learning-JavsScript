'use strict';
/*
const bookings = [];
const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  // ES5
  // numPassengers = numPassengers || 1;
  // price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};
createBooking('LH123');
createBooking('LH133', 2, 800);
createBooking('LH133', 2);
createBooking('LH133', 4);
createBooking('LH133', undefined, 333);
*/

const flight = 'LH234';
const james = {
  name: 'james',
  passport: 1232341233,
};
const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 1232341233) {
    alert('check in');
  } else {
    alert('wrong passport');
  }
};
// checkIn(flight, james);
// console.log(flight);
// console.log(james);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random()) * 1000000000;
};
newPassport(james);
checkIn(flight, james);
