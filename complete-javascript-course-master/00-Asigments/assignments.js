"use strict";
// Assignment 01
// -----------------
// const country = "México";
// const continent = "America";
// let population = 130;

// console.log(country);
// console.log(continent);
// console.log(population);

// Assignment 02
// -----------------
// const isIsland = false;
// let language;

// console.log(typeof isIsland);
// console.log(typeof population);
// console.log(typeof country);
// console.log(typeof language);

// Assignment 03
// -----------------
// language = "spanish";
// isIsland = true;

// Assignment 04
// let dividePopulation = population / 2;
// console.log(dividePopulation);
// console.log(++population);
// let populationFinland = 6000000;
// console.log(populationFinland > population);
// let averagePopulationCountry = 33000000;
// console.log(population < averagePopulationCountry);
// let description =
//   country +
//   " is in " +
//   continent +
//   ", and its " +
//   population +
//   " million people speak " +
//   language;
// console.log(description);

// Strings and Template Literals
// description = `${country} is in ${continent}, and its ${population} million people speak ${language} yeaah!!!`;
// console.log(description);

// Taking Decisions
// if (population > 33) {
//   console.log(
//     `${country}'s population is greater than ${population - 33} below average.`
//   );
// }

// The switch Statement
// switch (language) {
//   case "chinese":
//   case "mandarin":
//     console.log("Most number of native speakers!");
//     break;
//   case "spanish":
//     console.log("2nd place in number of native speakers");
//     break;
//   case "english":
//     console.log("3rd place");
//     break;
//   case "hindi":
//     console.log("Number 4");
//     break;
//   case "arabic":
//     console.log("5th most spoken language");
//     break;
//   default:
//     console.log("Great language too :D");
// }

// The conditional (ternary) operator
// population > 33
//   ? console.log(`${country}'s population is above average`)
//   : console.log(`${country}'s population is below average`);

// console.log(
//   `${country}'s population is ${population > 33 ? "above" : "below"} average`
// );

// --
// || ******************************************
// >> 01 - FUNCTIONS
// || ******************************************
// VV

// const describreCountry = function (country, population, capitalCity) {
//   return `${country} has ${population} million people and its capital city is ${capitalCity}`;
// };

// const mexico = describreCountry("Mexico", 129, "Ciudad de Mexico");
// const usa = describreCountry("USA", 145, "Washington");
// const canada = describreCountry("Canada", 95, "Vancouver");

// console.log(mexico);
// console.log(usa);
// console.log(canada);

// --
// || ******************************************
// >> 02 - FUNCTION DECLARATIONS VS EXPRESSIONS
// || ******************************************
// VV

// function percentageOfWorld1(population, country) {
//   const percentageCountry = (population / 7900) * 100;
//   return `The percentage of ${country} is ${percentageCountry.toFixed(2)}%`;
// }

// const mexicoPercentage = percentageOfWorld1(129, "Mexico");
// const usaPercentage = percentageOfWorld1(145, "USA");
// const canadaPercentage = percentageOfWorld1(95, "Canada");

// console.log(mexicoPercentage);
// console.log(usaPercentage);
// console.log(canadaPercentage);

// const percentageOfWorld2 = function (population, country) {
//   const percentageCountry = (population / 7900) * 100;
//   return `The percentage of ${country} is ${percentageCountry.toFixed(2)}%`;
// };

// --
// || ******************************************
// >> 03 - ARROW FUNCTIONS
// || ******************************************
// VV

// const percentageOfWorld3 = (population, country) => {
//   const percentageCountry = (population / 7900) * 100;
//   return `The percentage of ${country} is ${percentageCountry.toFixed(2)}%`;
// };

// console.log(percentageOfWorld3(100, "India"));

// --
// || ******************************************
// >> 05 - INTRODUCTION TO ARRAYS
// || ******************************************
// VV

// const populations = [129, 145, 95, 108];
// console.log(populations.length === 4);
// const percentages = [
//   percentageOfWorld1(populations[0]),
//   percentageOfWorld1(populations[1]),
//   percentageOfWorld1(populations[2]),
//   percentageOfWorld1(populations[3]),
// ];
// console.log(percentages);

// --
// || ******************************************
// >> 06 - BASIC ARRAY OPERATIONS (METHODS)
// || ******************************************
// VV

// // 1
// const neighbors = ["USA", "Guatemala", "Belize"];

// // 2
// neighbors.push("Utopia");
// console.log(neighbors);

// // 3
// neighbors.pop();
// console.log(neighbors);

// // 4
// if (!neighbors.includes("Germany")) {
//   console.log(`Probably not a central european country :D`);
// }

// // 5
// const indexCountry = neighbors.indexOf("Guatemala");
// console.log(indexCountry);
// neighbors[neighbors.indexOf("Guatemala")] = "Republica de Guatemala";
// console.log(neighbors);

// --
// || ******************************************
// >> 07 - INTRODUCTION TO OBJECTS
// || ******************************************
// VV

/* const myCountry = {
  country: "Mexico",
  capital: "Mexico City",
  language: "Spanish",
  population: 139,
  neighbors: ["USA", "Canada", "Belize", "Guatemala"],
};
 */
// --
// || ******************************************
// >> 09 - OBJECT METHODS
// || ******************************************
// VV

// const myCountry = {
//   country: "Mexico",
//   capital: "Mexico City",
//   language: "Spanish",
//   population: 139,
//   neighbors: ["USA", "Canada", "Belize", "Guatemala"],
//   describe: function () {
//     console.log(
//       `${this.country} has ${this.population} million ${this.language}`
//     );
//   },

//   checkIsland: function () {
//     this.isIsland = this.neighbors.length === 0 ? true : false;
//   },
// };

// myCountry.describe();
// myCountry.checkIsland();

// console.log(myCountry);

// --
// || ******************************************
// >> 10 - LOOPING BACKWARDS AND LOOPS IN LOOPS
// || ******************************************
// VV

// // 1
// const listOfNeighbors = [
//   ["Canada", "Mexico"],
//   ["Spain"],
//   ["Norway", "Sweden", "Russia"],
// ];

// // 2
// for (
//   let packetCountry = 0;
//   packetCountry < listOfNeighbors.length;
//   packetCountry++
// ) {
//   for (
//     let country = 0;
//     country < listOfNeighbors[packetCountry].length;
//     country++
//   ) {
//     console.log(listOfNeighbors[packetCountry][country]);
//   }
// }

// --
// || ******************************************
// >> 11 - THE WHILE LOOP
// // || ******************************************
// VV

// // 1
// const populations3 = [10, 1441, 332, 83];
// const percentages3 = [];

// for (let i = 0; i < populations3.length; i++) {
//   const perc = percentageOfWorld1(populations3[i]);
//   percentages3.push(perc);
// }

// console.log(percentages3);

// const populations4 = [10, 1441, 332, 83];
// const percentage4 = [];
// let populationIndex = 0;

// while (populations4.length > populationIndex) {
//   const perc2 = percentageOfWorld1(populations4[populationIndex]);
//   percentage4.push(perc2);
//   populationIndex++;
// }

// console.log(percentage4);

// const calcTip = function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// };

// /* Write your code below. Good luck! 🙂 */

// const bills = [22, 295, 176, 440, 37, 105, 10, 110, 1100, 86, 52];
// const tips = [];
// const totals = [];

// for (let tip = 0; tip < bills.length; tip++) {
//   tips.push(calcTip(bills[tip]));
//   totals.push(tips[tip] + bills[tip]);
// }

// console.log(tips);
// console.log(totals);

// --
// || ******************************************
// LEC >> 61 - USING GOOGLE, STACKOVERFLOW, AND MDN
// // || ******************************************
// VV

// const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

// const calcTempAmplitude = function (temps) {
//   let max = temps[0];
//   let min = temps[0];
//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== "number") continue;
//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   console.log(max, min);
//   return max - min;
// };

// const amplitude = calcTempAmplitude(temperatures);
// console.log(amplitude);

// // PROBLEM 2:
// // Function should receive 2 arrays of temps.

// // 1) Understanding the problem
// // - With 2 arrays, should we implement functionality twice? NO! Just merge two arrays

// // 2) Breaking up into sub-problems
// // - Merge 2 arrays

// const calcTempAmplitudeNew = function (t1, t2) {
//   const temps = t1.concat(t2);
//   console.log(temps);

//   let max = temps[0];
//   let min = temps[0];
//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== "number") continue;
//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   console.log(max, min);
//   return max - min;
// };

// const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
// console.log(amplitudeNew);

// --
// || ******************************************
// LEC >> 63 - DEBUGGING WITH THE CONSOLE AND BREAKPOINTS
// // || ******************************************
// VV

// const measureKelvin = function () {
//   const measurement = {
//     type: "temp",
//     unit: "celsius",

//     //C) FIX
//     // value: Number(prompt("Degrees celsius: ")),
//     value: 10,
//   };

//   // B) FIND
//   console.log(measurement);
//   // console.warn(measurement.value);
//   // console.error(measurement.value);

//   const kelvin = measurement.value + 273;
//   return kelvin;
// };

// // A) IDENTIFY
// console.log(measureKelvin());

// // Using the debbuger
// const calcTempAmplitudeBug = function (t1, t2) {
//   const temps = t1.concat(t2);
//   console.log(temps);

//   let max = 0;
//   let min = 0;

//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== "number") continue;

//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   console.log(max, min);
//   return max - min;
// };

// const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);
// // A) IDENTIFY
// console.log(amplitudeBug);

// --
// || ******************************************
// >> 64 - CHALLENGE #1
// // || ******************************************
// VV

// const printForecast = function (arr) {
//   let temperatureString = "";

//   for (let temp = 0; temp < arr.length; temp++) {
//     temperatureString += `${arr[temp]}°C in ${temp + 1} days ... `;
//   }
//   console.log("... " + temperatureString);
// };

// printForecast([17, 21, 23]);
// printForecast([12, 5, -5, 0, 4]);

// --
// || ******************************************
// LEC >> DATA STRUCTURES, MODERN OPERATORS AND STRINGS
// // || ******************************************
// VV

const books = [
  {
    title: "Algorithms",
    author: ["Robert Sedgewick", "Kevin Wayne"],
    publisher: "Addison-Wesley Professional",
    publicationDate: "2011-03-24",
    edition: 4,
    keywords: [
      "computer science",
      "programming",
      "algorithms",
      "data structures",
      "java",
      "math",
      "software",
      "engineering",
    ],
    pages: 976,
    format: "hardcover",
    ISBN: "9780321573513",
    language: "English",
    programmingLanguage: "Java",
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.41,
        ratingsCount: 1733,
        reviewsCount: 63,
        fiveStarRatingCount: 976,
        oneStarRatingCount: 13,
      },
    },
    highlighted: true,
  },
  {
    title: "Structure and Interpretation of Computer Programs",
    author: [
      "Harold Abelson",
      "Gerald Jay Sussman",
      "Julie Sussman (Contributor)",
    ],
    publisher: "The MIT Press",
    publicationDate: "2022-04-12",
    edition: 2,
    keywords: [
      "computer science",
      "programming",
      "javascript",
      "software",
      "engineering",
    ],
    pages: 640,
    format: "paperback",
    ISBN: "9780262543231",
    language: "English",
    programmingLanguage: "JavaScript",
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.36,
        ratingsCount: 14,
        reviewsCount: 3,
        fiveStarRatingCount: 8,
        oneStarRatingCount: 0,
      },
    },
    highlighted: true,
  },
  {
    title: "Computer Systems: A Programmer's Perspective",
    author: ["Randal E. Bryant", "David Richard O'Hallaron"],
    publisher: "Prentice Hall",
    publicationDate: "2002-01-01",
    edition: 1,
    keywords: [
      "computer science",
      "computer systems",
      "programming",
      "software",
      "C",
      "engineering",
    ],
    pages: 978,
    format: "hardcover",
    ISBN: "9780130340740",
    language: "English",
    programmingLanguage: "C",
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 1010,
        reviewsCount: 57,
        fiveStarRatingCount: 638,
        oneStarRatingCount: 16,
      },
    },
    highlighted: true,
  },
  {
    title: "Operating System Concepts",
    author: ["Abraham Silberschatz", "Peter B. Galvin", "Greg Gagne"],
    publisher: "John Wiley & Sons",
    publicationDate: "2004-12-14",
    edition: 10,
    keywords: [
      "computer science",
      "operating systems",
      "programming",
      "software",
      "C",
      "Java",
      "engineering",
    ],
    pages: 921,
    format: "hardcover",
    ISBN: "9780471694663",
    language: "English",
    programmingLanguage: "C, Java",
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 3.9,
        ratingsCount: 2131,
        reviewsCount: 114,
        fiveStarRatingCount: 728,
        oneStarRatingCount: 65,
      },
    },
  },
  {
    title: "Engineering Mathematics",
    author: ["K.A. Stroud", "Dexter J. Booth"],
    publisher: "Palgrave",
    publicationDate: "2007-01-01",
    edition: 14,
    keywords: ["mathematics", "engineering"],
    pages: 1288,
    format: "paperback",
    ISBN: "9781403942463",
    language: "English",
    programmingLanguage: null,
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.35,
        ratingsCount: 370,
        reviewsCount: 18,
        fiveStarRatingCount: 211,
        oneStarRatingCount: 6,
      },
    },
    highlighted: true,
  },
  {
    title: "The Personal MBA: Master the Art of Business",
    author: "Josh Kaufman",
    publisher: "Portfolio",
    publicationDate: "2010-12-30",
    keywords: ["business"],
    pages: 416,
    format: "hardcover",
    ISBN: "9781591843528",
    language: "English",
    thirdParty: {
      goodreads: {
        rating: 4.11,
        ratingsCount: 40119,
        reviewsCount: 1351,
        fiveStarRatingCount: 18033,
        oneStarRatingCount: 1090,
      },
    },
  },
  {
    title: "Crafting Interpreters",
    author: "Robert Nystrom",
    publisher: "Genever Benning",
    publicationDate: "2021-07-28",
    keywords: [
      "computer science",
      "compilers",
      "engineering",
      "interpreters",
      "software",
      "engineering",
    ],
    pages: 865,
    format: "paperback",
    ISBN: "9780990582939",
    language: "English",
    thirdParty: {
      goodreads: {
        rating: 4.7,
        ratingsCount: 253,
        reviewsCount: 23,
        fiveStarRatingCount: 193,
        oneStarRatingCount: 0,
      },
    },
  },
  {
    title: "Deep Work: Rules for Focused Success in a Distracted World",
    author: "Cal Newport",
    publisher: "Grand Central Publishing",
    publicationDate: "2016-01-05",
    edition: 1,
    keywords: ["work", "focus", "personal development", "business"],
    pages: 296,
    format: "hardcover",
    ISBN: "9781455586691",
    language: "English",
    thirdParty: {
      goodreads: {
        rating: 4.19,
        ratingsCount: 144584,
        reviewsCount: 11598,
        fiveStarRatingCount: 63405,
        oneStarRatingCount: 1808,
      },
    },
    highlighted: true,
  },
];

// --
// || ******************************************
// LEC >> 108 - Destructuring Arrays
// // || ******************************************
// VV

// 1.1

const [firstBook, secondBook] = books;
// console.log(firstBook, secondBook);

// 1.2
const [, , thirdBook] = books;
// console.log(thirdBook);

// 1.3
const ratings = [
  ["rating", 4.19],
  ["ratingsCount", 144584],
];
const [[, rating], [, ratingsCount]] = ratings;
// console.log(rating, ratingsCount);

// 1.4
const ratingStars = [63405, 1808];
// const [fiveStarRatings = 0, oneStarRatings = 0, threeStarRatings = 0] =
//   ratingStars;
const [fiveStarRatings, oneStarRatings, threeStarRatings = 0] = ratingStars;
// console.log(fiveStarRatings, oneStarRatings, threeStarRatings);

// --
// || ******************************************
// LEC >> 110 - Destructuring Objects
// // || ******************************************
// VV

// 2.1
// Destructure the first book object from the books array into variables called title, author and ISBN.
const { title, author, ISBN } = books[0];

// 2.2
// Each book object has the keywords property. Destructure the first book object from the books array into a variable called tags. The tags variable should be assigned with the value of the keywords property.
const { keywords: tags } = books[0];
// console.log(tags);

// 2.3
// The seventh book from the books array is missing the programmingLanguage property. Destructure the seventh book object (books[6]) into variables called language and programmingLanguage. Assign the programmingLanguage variable with a default value of 'unknown'.
const { language, programmingLanguage = "unknown" } = books[6];
// console.log(books[6]);

// 2.4
// Below are two variables called bookTitle and bookAuthor. Reassign them with the values of the title and author properties of the first book object from the books array.
let bookTitle = "unknown";
let bookAuthor = "unknown";
({ title: bookTitle, author: bookAuthor } = books[0]);

// 2.5
const {
  thirdParty: {
    goodreads: { rating: bookRating },
  },
} = books[0];
// console.log(books[0]);

// 2.6
//Write a function called printBookInfo that has three parameters called title, author and year. This function should work for a single object passed as an argument, and it should log to the console information about the book in this format: "${title} by ${author}, ${year}".

// If year is undefined (was not passed), it should be assigned with a default value of 'year unknown'.

const printBookInfo = function ({ title, author, year = "year unknown" }) {
  // console.log(`${title} by ${author}, ${year}`);
};
// console.log(
//   printBookInfo({
//     title: "Algorithms",
//     author: "Robert Sedgewick",
//     year: "2011",
//   })
// );

// --
// || ******************************************
// LEC >> 111 - The spread operator (...)
// // || ******************************************
// VV

// 3.1
// Each book object has the author property, which stores an array of strings (author names) if there are multiple authors, or a single string (author name) if there is just one author.

// Declare an array called bookAuthors, and fill it with authors of the first two books from the books array. The bookAuthors array should have just one level (no nested arrays).

const bookAuthors = [...books[0].author, ...books[1].author];
// console.log(bookAuthors);

// 3.2
// Write a function called spellWord that accepts a single string as an argument. This function should log to the console each letter of the argument separated by a space.

const spellWord = function (str) {
  const letters = [...str];
  return letters;
};
// console.log(spellWord("koke"));

// function spellWord2(word) {
//   console.log(...word);
// }
// spellWord2("koke");

// --
// || ******************************************
// LEC >> 112 - Rest Pattern and Parameters
// // || ******************************************
// VV

// 4.1
// Destructure the keywords property (array) of the first book from the books array into variables called mainKeyword and rest. The first keyword should be assigned to mainKeyword, and the rest of the keywords should be assigned to the rest variable (it should be an array).
const [mainKeyword, ...rest] = books[0].keywords;
// console.log(mainKeyword, rest);

// 4.2
// Destructure the second book from the books array into a variable called bookPublisher. The bookPublisher variable should be assigned with the value of the publisher property of the book object. Assign the rest of the properties to the restOfTheBook variable.
const { publisher: bookPublisher, ...restOfTheBook } = books[1];
// console.log(bookPublisher, restOfTheBook);

// 4.3
// Write a function called printBookAuthorsCount that has two parameters called title and authors. The authors parameter should accept any number of arguments. This function should log to the console a string formatted like that: "The book "${title}" has ${authors.length} authors".
const printBookAuthorsCount = function (title, ...authors) {
  // console.log(`The book ${title} has ${authors.length} authors`);
};
// printBookAuthorsCount(books[0].title, books[0].author);

// --
// || ******************************************
// LEC >> 113 - Short Circuiting (&& and ||)
// // || ******************************************
// VV

// 5.1
// Some of the book objects have the programmingLanguage property, which specifies what programming language is used in the book, for example
const hasExamplesInJava = function (bookObject) {
  const hasJava =
    bookObject.programmingLanguage === "Java" || "no data available";
  return hasJava;
};
// console.log(hasExamplesInJava(books[0]));

// 5.2
// Some of the book objects have the onlineContent property, which is either true or false. Loop over the books array, and for the books that provide online content, log to the console a string in this format: "${title}" provides online content. Use short-circuiting.
// for (let i = 0; i < books.length; i++) {
//   books[i].onlineContent &&
//     console.log(`"${books[i].title}" provides online content`);
// }

// --
// || ******************************************
// LEC >> 114 - The Nullish Coalescing Operator (??)
// // || ******************************************
// VV

// 6.1
// There are objects in the books array that don't have the onlineContent property at all. Loop over the books array, and log a string to the console in this format: "${title}" provides no data about its online content.
for (let i = 0; i < books.length; i++) {
  books[i].onlineContent ??
    console
      .log
      // `"${books[i].title}" provides no data about its online content.`
      ();
}

// --
// || ******************************************
// LEC >> 115 - Logical Assignment Operators
// // || ******************************************
// VV

// 7.1
// Some of the book objects from the books array are missing the edition property. Loop over the books array, and assign this property with a number 1 (if it doesn't already exist). Use logical assignment operators.
for (let i = 0; i < books.length; i++) {
  // console.log((books[i].edition ||= 1));
}

// 7.2
// Some of the book objects from the books array have the highlighted property, which by default is set to true. Iterate over the books array, and if the thirdParty.goodreads.rating property is less than 4.2, reassign it with false.
// Use the &&= operator (tip: you may also need the ! operator)
for (let i = 0; i < books.length; i++) {
  // console.log(
  //   (books[i].highlighted &&= !(books[i].thirdParty.goodreads.rating < 4.2))
  // );
}

// --
// || ******************************************
// LEC >> 117 - Looping arrays: The for-of loop
// // || ******************************************
// VV

// 8.1
// Use the for-of loop to loop over the books array and sum the pages of all books. Use the pageSum variable below, and the pages property of the book objects.
let pageSum = 0;
for (let book of books) {
  pageSum += book.pages;
}
// console.log(pageSum);

// 8.2
// cBelow is the allAuthors variable which stores an empty array. Use the for-of loop to fill allAuthors with the authors of each book from the books array.
const allAuthors = [];
for (const book of books) {
  // console.log(typeof book.author);
  if (typeof book.author === "object") {
    for (const author of book.author) {
      allAuthors.push(author);
    }
  } else {
    allAuthors.push(book.author);
  }
}
// console.log(allAuthors);

// 8.3
// Use the for-of loop together with Array's entries() method to log each author from allAuthors to the console together with its index. Make the index start from 1, instead of 0.
for (const [i, author] of allAuthors.entries()) {
  // console.log(`${i + 1}: ${author}`);
}

// --
// || ******************************************
// LEC >> 118 - Enhanced Object Literals
// // || ******************************************
// VV

// 9.1
const bookData = [
  ["title", "Computer Networking: A Top-Down Approach"],
  ["author", ["James F. Kurose", "Keith W. Ross"]],
  ["publisher", "Addison Wesley"],
];

// Do the rest
const newBook = {
  [bookData[0][0]]: bookData[0][1],
  [bookData[1][0]]: bookData[1][1],
  [bookData[2][0]]: bookData[2][1],
};
// console.log(newBook);

// 9.2
const pages = 880;
const newBook2 = {
  title: "The C Programming Language",
  author: ["Brian W. Kernighan", "Dennis M. Ritchie"],
  pages,
};
// console.log(newBook2);

// --
// || ******************************************
// LEC >> 119 - Optional Chaining (?).
// // || ******************************************
// VV

// 10.1
// Write a function called getFirstKeyword that takes the book object as an argument. This function should return the first keyword from the book's keywords property (array) or undefined (if the keywords property doesn't exist). It shouldn't throw an error. Use optional chaining for that.
const getFirstKeyword = function (book) {
  return book.keywords?.[0];
};
// console.log(getFirstKeyword(books[0]));
// console.log(getFirstKeyword(newBook2));

// --
// || ******************************************
// LEC >> 120 - Looping Objects: Object Keys, Values and Entries
// // || ******************************************
// VV

// 11.1
const entries = [];
for (const key of Object.keys(books[0].thirdParty.goodreads)) {
  entries.push(key);
}
// console.log(entries);

// 11.2
// const example = Object.values(books[0].thirdParty.goodreads).entries();
// console.log(example);
// for (const [index, value] of example) {
//   entries[index].push(value);
// }
// console.log(entries);

// for (const [index, value] of Object.values(
//   books[0].thirdParty.goodreads
// ).entries()) {
//   entries[index].push(value);
// }
// console.log(entries);

// 11.3
const entries2 = Object.entries(books[0].thirdParty.goodreads);

// 11.4
// console.log(entries);
// console.log(entries2);

// --
// || ******************************************
// LEC >> 124 - Maps: Fundamentals
// // || ******************************************
// VV

// 13.1
//Create a new book, but this time, as a Map. Assign it to the bookMap variable. Use this array as initial data:
//[['title', 'Clean Code'], ['author', 'Robert C. Martin']]
const bookMap = new Map();
bookMap.set("title", "Clean Code").set("author", "Robert C. Martin");
// console.log(bookMap);

// 13.2
// Get the title and author values from bookMap, and log to the console a string formatted like that: "${title} by ${author}".
const title02 = bookMap.get("title");
const author02 = bookMap.get("author");
// console.log(`${title02} by ${author02}`);

// 13.4
// Get the size of bookMap, and log it to the console.
// console.log(bookMap.size);

// 13.5
// Check if bookMap has the author key. and if so, log "The author of the book is known" to the console.
// console.log(bookMap.has("author") ? "The author of the book is know" : "");

// --
// || ******************************************
// LEC >> 125 - Maps: Iterations
// // || ******************************************
// VV

// 14.1
// Convert the first book object from the books array into a Map, and assign it to a firstBookMap variable.
const firstBookMap = new Map(Object.entries(books[0]));
// console.log(firstBookMap);

// 14.2
// Use the for-of loop to iterate over firstBookMap, and log to the console keys that have numbers as values.
for (const [key, value] of firstBookMap) {
  // if (typeof value === "number")
  //   console.log(`${key}: has the value of: ${value}`);
}

// --
// || ******************************************
// LEC >> 128 - Working with Strings - Part 1
// // || ******************************************
// VV

// 15.1
// Take the ISBN property of the first book from the books array, and log to the console characters at index 6, 4, 9 and 8. Use bracket notation to access individual characters.

// console.log(books[0].ISBN[6]);
// console.log(books[0].ISBN[4]);
// console.log(books[0].ISBN[9]);
// console.log(books[0].ISBN[8]);

// console.log(
//   books[0].ISBN["6"],
//   books[0].ISBN["4"],
//   books[0].ISBN["9"],
//   books[0].ISBN[8]
// );

// 15.2
// Below is the quote variable that stores a string. Find the index of the word 'chess', and log it to the console.
const quote =
  "A computer once beat me at chess, but it was no match for me at kick boxing";

// console.log(quote.indexOf("chess"));

// 15.3
// Extract the word "boxing" from the same quote string, and log it to the console.
// console.log(quote.slice(-6));
// console.log(quote.slice(quote.lastIndexOf(" ") + 1));

// 15.4
// Some authors are noted as "(Contributor)", for example "Julie Sussman (Contributor)". Create a function called isContributor that takes an author's name as an argument, and returns either true (if he's a contributor) of false (if he's not a contributor). The string "(Contributor)" is always the last part of the author's name string.
const isContributor = function (author) {
  // console.log(author.slice(author.lastIndexOf(" ") + 1));
  return author.slice(author.lastIndexOf(" ") + 1) === "(Contributor)"
    ? true
    : false;
};
// console.log(isContributor(books[0].author));
// console.log(isContributor(books[1].author[2]));
// console.log(isContributor("Robert Sedgewick"));
// console.log(isContributor("Julie Sussman (Contributor)"));

// --
// || ******************************************
// LEC >> 129 - Working with Strings - Part 2
// // || ******************************************
// VV

// 16.1
const normalizeAuthorName = function (author) {
  const nameTrim = author.toLowerCase().trim();
  const names = nameTrim.split(" ");
  const namesUpper = [];
  for (const name of names) {
    namesUpper.push(name.replace(name[0], name[0].toUpperCase()));
  }
  if (namesUpper.includes("(contributor)")) namesUpper.pop();
  console.log(namesUpper.join(" "));
  // console.log(namesUpper.includes("(contributor)"));
  // console.log(namesUpper.pop());
};

// normalizeAuthorName("  JuliE sussMan (Contributor)");

// 16.2
const newBookTitle = books[1].title.replace("Programs", "Sofware");
// console.log(newBookTitle);

// 16.3
const logBookTheme = function (title) {
  title = title.toLowerCase();
  if (title.startsWith("computer")) {
    return console.log("This book is about computers");
  } else if (title.includes("algorithms") && title.includes("structures")) {
    return console.log("This book is about algorithms and data structures");
  } else if (
    title.endsWith("system") ||
    (title.endsWith("Systems") && !title.includes("operating"))
  ) {
    return console.log(
      "This book is about some systems, but definitely not about operating systems"
    );
  }
};

// logBookTheme("computer and systems");

// --
// || ******************************************
// LEC >> 130 - Working with Strings - Part 3
// // || ******************************************
// VV

// 17.1
const bookCategories =
  "science;computing;computer science;algorithms;business;operating systems;networking;electronics";

const logBookCategories = function (categories) {
  const arrayCategories = categories.split(";");
  for (let categoria of arrayCategories) {
    console.log(categoria);
  }
};
// logBookCategories(bookCategories);

// 17.2
const getKeywordsAsString = function (books) {
  const allKeywords = [];
  for (let book of books) {
    // console.log(book.keywords);
    allKeywords.push(...book.keywords);
  }
  const setAllKeywords = new Set(allKeywords);
  // let strKeyword = "";
  console.log([...setAllKeywords].join(";"));
  // for (let keyword of setAllKeywords) {
  //   console.log(keyword);
  // }
};
getKeywordsAsString(books);
