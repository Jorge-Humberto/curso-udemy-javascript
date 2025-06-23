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
