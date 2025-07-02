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
// greeterHey('Jonas');
// greeterHey('Jorge');

// greet('Hello')('Jorge');

// Challenge
const greetArr = greeting => name => console.log(`${greeting} ${name}`);
// greetArr('Hi')('Jorge');

// --
// || ******************************************
// LEC >> 140 - The Call and apply Methods
// // || ******************************************
// VV

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  // book: function(){}
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

// lufthansa.book(239, 'Jorge Humberto');
// lufthansa.book(635, 'Hugo Gonzalez');

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

// Does NOT work
// book(23, 'Sarah Williams');

// Call method
// book.call(eurowings, 23, 'Sarah Williams');
// console.log(eurowings);

// book.call(lufthansa, 239, 'Mary Cooper');
// console.log(lufthansa);

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

// book.call(swiss, 583, 'Mary Cooper');
// console.log(swiss);

// Apply method
const flightData = [583, 'George Cooper'];
// book.apply(swiss, flightData);
// console.log(swiss);

// book.call(swiss, ...flightData);
// console.log(swiss);

// --
// || ******************************************
// LEC >> 141- The Bind method
// // || ******************************************
// VV

const bookBW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

// // bookBW(23, 'Steven Williams');

const bookEW23 = book.bind(eurowings, 23);
// // bookEW23('Jonas Schemedan');
// // bookEW23('Martha Cooper');

// With Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};
// lufthansa.buyPlane();
document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial application
const addTax = (rate, value) => value + value * rate;
// // console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
// addVAT = value => value + value * 023;

// // console.log(addVAT(100));
// // console.log(addVAT(23));

// Challenge
// const addTax2 = function (rate, value) {
//   return function (name) {
//     console.log(`${rate} ${value} ${name}`);
//   };
// };
// console.log(addTax2(0.2, 100));

const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};
const addVAT2 = addTaxRate(0.23);
// // console.log(addVAT2(100));
// // console.log(addVAT2(23));

// --
// || ******************************************
// LEC >> 142- Challenge #1
// // || ******************************************
// VV

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    //Get answer
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}(Write option number)`
      )
    );
    console.log(answer);

    //Register answer
    typeof answer === 'number' &&
      answer < this.answers.length &&
      this.answers[answer]++;

    this.displayResults();
    this.displayResults('string');
  },
  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      // Poll results are 13, 2, 4, 1
      console.log(`Poll results are ${this.answers.join(', ')}`);
    }
  },
};
// poll.registerNewAnswer();

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

// // poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
// // poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string');
// [5,2,3]
// [1,5,3,9,6,1]

// --
// || ******************************************
// LEC >> 143- Immediately Invoked Function Expressions (IIFE)
// // || ******************************************
// VV

const runOnce = function () {
  console.log('This will never run again');
};
// runOnce();

// IIFE
// (function () {
//   console.log('This will never run again');
//   const isPrivate = 23;
// })();

// console.log(isPrivate);

// (() => console.log('This will never run again'))();

{
  const isPrivate = 23;
  var notPrivate = 46;
}
// console.log(isPrivate);
// console.log(notPrivate);

// --
// || ******************************************
// LEC >> 144- Closures
// // || ******************************************
// VV

const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();

booker();
booker();
booker();
