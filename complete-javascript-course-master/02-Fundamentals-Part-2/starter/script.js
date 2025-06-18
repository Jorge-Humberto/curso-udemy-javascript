// --
// || ******************************************
// >> 33 - ACTIVATING STRICT MODE
// || ******************************************
// VV

"use strict";

/* let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive :D");

// const interface = "Audio";
// const private = 234;
// const if = 23; */

// --
// || ******************************************
// >> 34 - FUNCTIONS
// || ******************************************
// VV

/* function logger() {
  console.log("My name is Jorge");
}

// calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice); */

// --
// || ******************************************
// >> 35 - FUNCTION DECLARATIONS VS EXPRESSIONS
// || ******************************************
// VV

/* // Function declaration
function calcAge1(birthYear) {
  return 2037 - birthYear;
}
const age1 = calcAge1(1988);

// Function expression
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};
const age2 = calcAge2(1988);

console.log(age1, age2); */

// --
// || ******************************************
// >> 36 - ARROW FUNCTIONS
// || ******************************************
// VV

// // Function expression
// const calcAge2 = function (birthYear) {
//   return 2037 - birthYear;
// };

/* // Arrow function
const calcAge3 = (birthYear) => 2037 - birthYear;
const age3 = calcAge3(1988);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2025 - birthYear;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(1988, "Jorge"));
console.log(yearsUntilRetirement(1992, "Miguel")); */

// --
// || ******************************************
// >> 37 - FUNCTIONS CALLING OTHER FUNCTIONS
// || ******************************************
// VV

/* const cutFruitPieces = function (fruit) {
  return fruit * 3;
};

const fruitProcessor = function (apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangesPieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} pieces of apple and ${orangesPieces} pieces of orange.`;
  return juice;
};

console.log(fruitProcessor(2, 3));
 */

// --
// || ******************************************
// >> 38 - REVIEWING FUNCTIONS
// || ******************************************
// VV

/* const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;
  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years.`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired.`);
    return -1;
  }
};
console.log(yearsUntilRetirement(1988, "Jorge"));
console.log(yearsUntilRetirement(1950, "Jesus"));
 */

// --
// || ******************************************
// >> 40 - INTRODUCTION TO ARRAYS
// || ******************************************
// VV

/* const friends = ["Michael", "Steven", "Peter"];
console.log(friends);

// const years = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Jorge";
console.log(friends);

const firstName = "Jorge";
const jorge = [firstName, "Gonzalez", 2037 - 1988, "programmer", friends];
console.log(jorge);
console.log(jorge.length);

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
 */

// --
// || ******************************************
// >> 41 - BASIC ARRAY OPERATION (METHODS)
// || ******************************************
// VV

/* const friends = ["Michael", "Steven", "Peter"];

// Add elements
const newLength = friends.push("Jay");
console.log(friends);
console.log(newLength);

friends.unshift("John"); //First
console.log(friends);

// Remove elements
friends.pop(); //Last
const popped = friends.pop(); //Last
console.log(popped);
console.log(friends);

friends.shift(); //First
console.log(friends);

console.log(friends.indexOf("Steven"));
console.log(friends.indexOf("Bob"));

friends.push(23);
console.log(friends.includes("Steven"));
console.log(friends.includes("Bob"));
console.log(friends.includes(23));

if (friends.includes("Steven")) {
  console.log("You have a friend called Peter");
}
 */

// --
// || ******************************************
// >> 43 - INTRODUCTION TO OBJECTS
// || ******************************************
// VV

/* const jonasArray = [
  "Jonas",
  "Gonzalez",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
];

const jonas = {
  firstName: "Jonas",
  lastName: "Gonzalez",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
}; */

// --
// || ******************************************
// >> 44 - DOT VS. BRACKET NOTATION
// || ******************************************
// VV

/* const jonas = {
  firstName: "Jonas",
  lastName: "Gonzalez",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
};
console.log(jonas);

console.log(jonas.lastName);
console.log(jonas["lastName"]);

const nameKey = "Name";
console.log(jonas["first" + nameKey]);
console.log(jonas["last" + nameKey]);

// const interestedIn = prompt(
//   "What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends"
// );
// if (jonas[interestedIn]) {
//   console.log(jonas[interestedIn]);
// } else {
//   console.log(
//     "Wrong request! Choose between firstName, lastName, age, job, and friends"
//   );
// }

jonas.location = "Portugal";
jonas["twitter"] = "@jorgehumberto";
console.log(jonas);

// Challenge
// "Jonas has 3 friends, and his best friend is called Michael"
console.log(
  `${jonas.firstName} has ${jonas.friends.length} friends, and his best friends is called ${jonas.friends[0]}`
);
 */

// --
// || ******************************************
// >> 45 - OBJECT METHODS
// || ******************************************
// VV

/* const jonas = {
  firstName: "Jonas",
  lastName: "Gonzalez",
  birthYear: 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
  hasDriverLicense: true,

  calcAge: function (birthYear) {
    return 2037 - birthYear;
  },

  calcAge: function () {
    // console.log(this)
    return 2037 - this.birthYear;
  },

  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${
      this.job
    }, and he ${this.hasDriverLicense ? "has" : "has not"} a driver's license.`;
  },
};

console.log(jonas.calcAge());

console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);

console.log(jonas.getSummary());

// Challenge
// ("Jonas is a 46-year old teacher, and he has a driver's license.");

const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,

  calcIBM: function () {
    this.bmi = (this.mass / (this.height * this.height)).toFixed(2);
    return this.bmi;
  },
};

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,

  calcIBM: function () {
    this.bmi = (this.mass / (this.height * this.height)).toFixed(2);
    return this.bmi;
  },
};

mark.calcIBM();
john.calcIBM();
console.log(mark.ibm, john.ibm);

if (mark.bmi > john.bmi) {
  console.log(
    `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`
  );
} else if (john.bmi > mark.bmi) {
  console.log(
    `${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})`
  );
}
 */

// --
// || ******************************************
// >> 47 - ITERATION: THE FOR LOOP
// || ******************************************
// VV

/* // console.log("Lifting weights repetition 1 🏋️");

// for loop keeps running while condition is TRUE
for (let rep = 1; rep <= 30; rep++) {
  console.log(`Lifting weights repetition ${rep} 🏋️`);
} */

// --
// || ******************************************
// >> 48 - LOOPING ARRAYS, BREAKING AND CONTINUING
// || ******************************************
// VV

/* const jorge = [
  "jorge",
  "Gonzalez",
  2037 - 1988,
  "teacher",
  ["Michael", "Peter", "Steven"],
  true,
];

const types = [];

for (let i = 0; i < jorge.length; i++) {
  // Reading from jorge array
  console.log(jorge[i], typeof jorge[i]);

  // Filling types array
  // types[i] = typeof jorge[i];
  types.push(typeof jorge[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}
console.log(ages);

// continue and break
console.log("--- ONLY STRINGS ---");
for (let i = 0; i < jorge.length; i++) {
  if (typeof jorge[i] !== "string") continue;
  console.log(jorge[i], typeof jorge[i]);
}

console.log("--- BREAK WITH NUMBER ---");
for (let i = 0; i < jorge.length; i++) {
  if (typeof jorge[i] === "number") break;
  console.log(jorge[i], typeof jorge[i]);
} */

// --
// || ******************************************
// >> 49 - LOOPING BACKWARDS AND LOOPS IN LOOPS
// || ******************************************
// VV

/* const jorge = [
  "jorge",
  "Gonzalez",
  2037 - 1988,
  "teacher",
  ["Michael", "Peter", "Steven"],
  true,
];

// 0, 1, ..., 4
// 4, 3, ..., 0

for (let i = jorge.length - 1; i >= 0; i--) {
  console.log(i, jorge[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`---------- Starting exercise ${exercise} `);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} 🏋️`);
  }
}
 */

// --
// || ******************************************
// >> 50 - THE WHILE LOOP
// || ******************************************
// VV

// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repetition ${rep} 🏋️`);
// }

// let rep = 1;
// while (rep <= 10) {
//   console.log(`WHILE: Lifting weights repetition ${rep} 🏋️`);
//   rep++;
// }

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) {
    console.log("Loop is about to end...");
  }
}
