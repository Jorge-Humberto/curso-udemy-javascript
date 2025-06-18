/* let js = "amazing";
if (js === "amazing") alert("JavaScript is FUN!");
 */
/* console.log(40 + 8 + 23 - 10);

console.log("Jorge");
console.log(23);

let firstName = "Jorge";
console.log(firstName);

// Variable name convention
let myFirstJob = "Programmer";
let myCurrentJob = "Teacher";
console.log(myFirstJob);
console.log(myCurrentJob); 

let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof "jorge");

javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);
*/

/* let age = 30;
age = 31;

const birthYear = 1988;
// birthYear = 1990;

// const job;

var job = "programmer";
job = "teacher";

lastName = "Gonzalez";
console.log(lastName); */

/* // Math Operators
const now = 2037;
const ageJorge = now - 1991;
const ageHugo = now - 2018;
console.log(ageJorge, ageHugo);

console.log(ageJorge * 2, ageJorge / 2, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = "Jorge";
const lastName = "Gonzalez";
console.log(firstName + " " + lastName);

// Assignment Operators
let x = 10 + 5;
x += 10;
x *= 4;
x++;
x--;
x--;
console.log(x);

// Comparison operators
console.log(ageJorge > ageHugo);
console.log(ageHugo >= 18);

const isFullAge = ageHugo >= 18;

console.log(now - 1991 > now - 2019);
 */

// const now = 2037;
// const ageJorge = now - 1991;
// const ageHugo = now - 2018;

// console.log(now - 1991 > now - 2018);

// let x, y;
// x = y = 25 - 10 - 5;
// console.log(x, y);
// const averageAge = (ageJorge + ageHugo) / 2;
// console.log(ageJorge, ageHugo, averageAge);

/* const firstName = "Jorge";
const job = "teacher";
const birthYear = 1988;
const year = 2037;

const jorge =
  "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
console.log(jorge);

const jorgeNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(jorgeNew);

console.log(`Just a regular string...`);

console.log(`String
multiple
lines`); */

/* const age = 15;

if (age >= 18) {
  console.log("Sarah can start driving license 🚗");
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}

const birthYear = 2020;
let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century); */

/* // type conversion
const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("Jorge"));
console.log(typeof NaN);

console.log(String(23), 23);

// type coercion
console.log("I am " + 23 + " years old");
console.log("23" - "10" - 3);
console.log("23" / "2");

let n = "1" + 1;
n = n - 1;
console.log(n); */

/* // 5 falsy values: 0, '', undefined, null, NaN
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Jorge"));
console.log(Boolean({}));
console.log(Boolean(""));

const money = 0;
if (money) {
  console.log("Don't spend it all");
} else {
  console.log("You should get a job!");
}

let height = 0;
if (height) {
  console.log("YAY! Height is defined");
} else {
  console.log("Height is UNDEFINED");
} */

/* const age = "18";
if (age === 18) console.log("You just became an adult :D (strict)");

if (age == 18) console.log("You just became an adult :D (loose)");

const favorite = Number(prompt("Why is your favorite number?"));

console.log(favorite);
console.log(typeof favorite);

if (favorite === 23) {
  //'23' === 23 ->  FALSE
  console.log("Cool! 23 is an amazing number!");
} else if (favorite === 7) {
  console.log("7 is also a cool number");
} else if (favorite === 9) {
  console.log("9 is also a cool number");
} else {
  console.log("Number is not 23 or 7");
}

if (favorite !== 23) console.log("Why not 23?");
 */

/* const hasDriverLicense = true;
const hasGoodVision = true;

console.log(hasDriverLicense && hasGoodVision);
console.log(hasDriverLicense || hasGoodVision);
console.log(!hasDriverLicense);

// const shouldDrive = hasDriverLicense && hasGoodVision;
// if (shouldDrive) {
//   console.log("Jorge is able to drive!");
// } else {
//   console.log("Someone else should drive...");
// }

const isTired = false;
console.log(hasDriverLicense && hasGoodVision && isTired);

if (hasDriverLicense && hasGoodVision && !isTired) {
  console.log("Jorge is able to drive!");
} else {
  console.log("Someone else should drive...");
}
 */

/* const day = "monday";

switch (day) {
  case "monday": // day === "monday"
    console.log("Plan course structure");
    console.log("Go to coding meetup");
    break;
  case "tuesday":
    console.log("Prepare theory videos");
    break;
  case "wednesday":
  case "thursday":
    console.log("Write code examples");
    break;
  case "friday":
    console.log("Record videos");
    break;
  case "sunday":
    console.log("Enjoy the weekend");
    break;
  default:
    console.log("Not a valid day!");
}

if (day === "monday") {
  console.log("Plan course structure");
  console.log("Go to coding meetup");
} else if (day === "tuesday") {
  console.log("Prepare theory videos");
} else if (day === "wednesday" || day === "thursday") {
  console.log("Write code examples");
} else if (day === "friday") {
  console.log("Record videos");
} else if (day === "saturday" || day === "sunday") {
  console.log("Enjoy the weekend");
} else {
  console.log("Not a valid day!");
} */

const age = 15;
/* age >= 18
  ? console.log("I like to drink wine 🍷")
  : console.log("I like to drink water 💧"); */

const drink = age >= 18 ? "wine 🍷" : "water 💧";
console.log(drink);
