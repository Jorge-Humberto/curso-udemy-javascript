'use strict';

// --
// || ******************************************
// LEC >> 135 - Default parameters
// // || ******************************************
// VV

const bookings = [];

const createBooking = function (
  fligNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  // ES5
  // numPassengers = numPassengers || 1;
  // price = price || 199;

  const booking = {
    fligNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

// createBooking('LH123');
// createBooking('LH123', 2, 800);
// createBooking('LH123', 2);
// createBooking('LH123', 5);
// createBooking('LH123', undefined, 100);

// --
// || ******************************************
// LEC >> 136 - How passing arguments works: value vs reference
// // || ******************************************
// VV

const flight = 'LH123';
const jorge = {
  name: 'Jorge Humberto',
  passport: 2345677543,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr ' + passenger.name;
  if (passenger.passport === 2345677543) {
    alert('Check In');
  } else {
    alert('Wrong passport!');
  }
};

// checkIn(flight, jorge);
// console.log(flight);
// console.log(jorge);

// Is the same as doing...
// const flightNum = flight;
// const passenger = jorge;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000);
};

// newPassport(jorge);
// checkIn(flight, jorge);

// --
// || ******************************************
// LEC >> 137 - First-class and higher-order functions
// // || ******************************************
// VV

// --
// || ******************************************
// LEC >> 138 - Functions accepting callback functions
// // || ******************************************
// VV

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// Higher-order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
};

// transformer('JavaScript is the best!', upperFirstWord);
// transformer('JavaScript is the best!', oneWord);

// JS uses callbacks all the time
const high5 = function () {
  console.log('🤚');
};
// document.body.addEventListener('click', high5);

// ['Jonas', 'Martha'].forEach(high5);

// --
// || ******************************************
// LEC >> 139 - Functions returning functions
// // || ******************************************
// VV

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');
greeterHey('Jonas');
greeterHey('Jorge');

greet('Hello')('Jorge');

// Challenge
const greetArr = greeting => name => console.log(`${greeting} ${name}`);
greetArr('Hi')('Jorge');
