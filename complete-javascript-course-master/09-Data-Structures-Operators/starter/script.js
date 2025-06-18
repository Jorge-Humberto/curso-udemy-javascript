'use strict';

// // Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// const italianFoods = new Set([
//   'pasta',
//   'gnocchi',
//   'tomatoes',
//   'olive oil',
//   'garlic',
//   'basil',
// ]);

// const mexicanFoods = new Set([
//   'tortillas',
//   'beans',
//   'rice',
//   'tomatoes',
//   'avocado',
//   'garlic',
// ]);

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
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES6 enhanced object literals
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPastas(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

// restaurant.orderDelivery({
//   time: '23:30',
//   address: 'Via del Sole, 21',
//   mainIndex: 2,
//   starterIndex: 2,
// });

// restaurant.orderDelivery({
//   address: 'Via del Sole, 21',
//   starterIndex: 1,
// });

// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
// console.log(restaurantName, hours, tags);

// Default values
const { menu = [], starterMenu: starter = [] } = restaurant;
// console.log(menu, starter);

// Mutating variables
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };
// ({ a, b } = obj);
// console.log(a, b);

// Nested objects
const {
  fri: { open: o, close: c },
} = openingHours;
// console.log(o, c);

// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr;
// console.log(x, y, z);
// console.log(arr);

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// Switching variables
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// // Receive 2 return values from a function
// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// // Nested destructuring
// const nested = [2, 4, [5, 6]];
// // const [i, , j] = nested;
// // console.log(i, j);
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// // Default values
// const [p = 1, q = 1, r = 1] = [8];
// console.log(p, q, r);

// --
// || ******************************************
// LEC >> 111 - The spread Operator (...)
// // || ******************************************
// VV

// const arr = [7, 8, 9];
// const badNewArray = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArray);

// const newArr = [1, 2, ...arr];
// console.log(newArr);

// console.log(...newArr);
// console.log(1, 2, 7, 8, 9);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

// Copy array
const mainMenuCopy = [...restaurant.mainMenu];

// Join 2 arrays
const menu2 = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu2);

// Iterables: arrays, strings, maps, sets, NOY objects
const str = 'Jorge';
const letters = [...str, ' ', 'S.'];
// console.log(letters);
// console.log(...str);

// Real world example
// const ingredients = [
//   prompt("Let's make pasta! Ingredient 1? "),
//   prompt('Ingredient 2? '),
//   prompt('Ingredient 3? '),
// ];

// console.log(ingredients);

// restaurant.orderPastas(ingredients[0], ingredients[1], ingredients[2]);
// restaurant.orderPastas(...ingredients);

// Objects
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guisepe' };
// console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
// console.log(restaurantCopy.name);
// console.log(restaurant.name);

// --
// || ******************************************
// LEC >> 112 - Rest Pattern and Parameters
// // || ******************************************
// VV

// 1) Destructuring

// SPREAD, because on RIGHT side of =
const arr = [1, 2, ...[3, 4]];

// REST, because on LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
// console.log(pizza, risotto, otherFood);

// Objects
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

// 2) Functions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};
// add(2, 3);
// add(5, 3, 7, 2);

// const x = [23, 5, 7];
// add(...x);
// restaurant.orderPizza('hongos', 'cebolla', 'olives', 'espinaca');
// restaurant.orderPizza('hongos');

// --
// || ******************************************
// LEC >> 113 - Short Circuiting (&& and ||)
// // || ******************************************
// VV

// console.log('----- OR ------');

// Use ANY data type, return ANY data type, short-circuiting
// console.log(3 || 'Jorge');
// console.log('' || 'Jorge');
// console.log(true || 0);
// console.log(undefined || null);

// console.log(undefined || 0 || '' || 'Hello' || 23 || null);

restaurant.numGuests = 10;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1);

const guests2 = restaurant.numGuests || 10;
// console.log(guests2);

// console.log('----- AND ------');
// console.log(0 && 'Jorge');
// console.log(7 && 'Jorge');

// console.log('Hello' && 23 && null && 'Jorge');

// Practical example
if (restaurant.orderPizza) {
  // restaurant.orderPizza('hongos', 'espinaca');
}

// restaurant.orderPizza && restaurant.orderPizza('hongos', 'spinach');

// --
// || ******************************************
// LEC >> 114 - The Nullish Coalescing Operator (??)
// // || ******************************************
// VV

restaurant.numGuests = 0;
const guests3 = restaurant.numGuests || 10;
// console.log(guests3);

// Nullish: null and undefined (NOT 0 or '')
const guestCorrect = restaurant.numGuests ?? 10;
// console.log(guestCorrect);

// --
// || ******************************************
// LEC >> 115 - Logical assignment operators
// // || ******************************************
// VV

const rest1 = {
  name: 'Capri',
  // numGuests: 20,
  numGuests: 0,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};

// OR assignment operator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// nullish assignment operator (null or undefined)
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

// AND assignment operator
// rest1.owner = rest1.owner && '<ANONYMOUS>';
// rest2.owner = rest2.owner && '<ANONYMOUS>';
rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';

// console.log(rest1);
// console.log(rest2);

// --
// || ******************************************
// LEC >> 116 - CHALLENGE #1
// // || ******************************************
// VV

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// // 1.
// const [players1, players2] = game.players;
// console.log(players1, players2);

// // 2
// const [gk, ...fieldPlayers] = players1;
// console.log(gk);
// console.log(fieldPlayers);

// // 3
// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

// // 4
// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// console.log(players1Final);

// // 5
// const {
//   odds: { team1, x: draw, team2 },
// } = game;
// console.log(team1, draw, team2);

// // 6
// const printGoals = function (...players) {
//   console.log(`${players.length} goals were scored`);
// };

// // printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// // printGoals('Davies', 'Muller');
// // printGoals('Koke', 'Muller');
// printGoals(...game.scored);

// // 7
// team1 < team2 && console.log('Team 1 is more likely to win');
// team1 > team2 && console.log('Team 2 is more likely to win');

// --
// || ******************************************
// LEC >> 117 - LOOPING ARRAYS: THE FOR-OF LOOP
// // || ******************************************
// VV

const menu3 = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const item of menu3) console.log(item);

for (const [i, el] of menu3.entries()) {
  // console.log(`${i + 1}: ${el}`);
}

// console.log(...menu3.entries());

// --
// || ******************************************
// LEC >> 118 - ENHANCED OBJECTS LITERALS
// // || ******************************************
// VV

// --
// || ******************************************
// LEC >> 119 - OPTIONAL CHAINING (?)
// // || ******************************************
// VV
// if (restaurant.openingHours && restaurant.openingHours.mon)
// console.log(restaurant.openingHours.mon.open);

// console.log(restaurant.openingHours.mon.open);

// With Optional chaining
// console.log(restaurant.openingHours.mon?.open);
// console.log(restaurant.openingHours?.mon?.open);

//Example
// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
// for (const day of days) {
//   console.log(day);
//   const open = restaurant.openingHours[day]?.open ?? 'closed';
//   console.log(`On ${day}, we open at ${open}`);
// }

// Methods
// console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
// console.log(restaurant.orderRisoto?.(0, 1) ?? 'Method does not exist');

// Arrays
const users = [
  {
    name: 'Jorge',
    email: 'hello@jorge.io',
  },
];
// const users = [];

// console.log(users[0]?.name ?? 'User array empty');

if (users.length > 0) console.log(users[0].name);
// else console.log('user array empty');

// --
// || ******************************************
// LEC >> 120 - LOOPING OBJECTS: OBJECT KEYS, VALUES, AND ENTRIES
// // || ******************************************
// VV

// Properties NAMES
const properties = Object.keys(openingHours);
// console.log(properties);

let openStr = `We are open on ${properties.length} days: `;

for (const day of properties) {
  openStr += `${day}, `;
}

// console.log(openStr);

// Properties VALUES
const values = Object.values(openingHours);
// console.log(values);

// Entire Object
const entries = Object.entries(openingHours);
// console.log(entries);

// [Key, value]
for (const [key, { open, close }] of entries) {
  // console.log(`On ${key} we open at ${open} and close at ${close}.`);
}

// --
// || ******************************************
// LEC >> 121 - CHALLENGE #2
// // || ******************************************
// VV

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

// 1.
// console.log(`Goal ${i + 1}: ${player}`);

// 2.
// const odds = Object.values(game.odds);
// let average = 0;
// for (const odd of Object.values(game.odds)) average += odd;
// average /= odds.length;
// console.log(average);

// 3.
for (const [i, player] of game.scored.entries())
  for (const [team, odd] of Object.entries(game.odds)) {
    const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
    // console.log(`Odd of ${teamStr} ${odd}`);
  }

// --
// || ******************************************
// LEC >> 122 - Sets
// // || ******************************************
// VV

const orderSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);
// console.log(orderSet);

// console.log(new Set('Jonas'));

// console.log(orderSet.size);
// console.log(orderSet.has('Pizza'));
// console.log(orderSet.has('Bread'));
orderSet.add('Garlic Bread');
orderSet.add('Garlic Bread');
orderSet.delete('Risotto');
// orderSet.clear();
// console.log(orderSet);

// for (const order of orderSet) console.log(order);

// Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = [...new Set(staff)];
// console.log(staffUnique);
// console.log(
//   new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
// );

// console.log(new Set('jorgehumberto').size);

// --
// || ******************************************
// LEC >> 123 - New Operations to make sets useful!
// // || ******************************************
// VV

const italianFoods = new Set([
  'pasta',
  'gnocchi',
  'tomatoes',
  'olive oil',
  'garlic',
  'basil',
]);

const mexicanFoods = new Set([
  'tortillas',
  'beans',
  'rice',
  'tomatoes',
  'avocado',
  'garlic',
]);

const commonFoods = italianFoods.intersection(mexicanFoods);
// console.log(`Intersection: `, commonFoods);
// console.log([...commonFoods]);

const italianMexicanFusion = italianFoods.union(mexicanFoods);
// console.log('Union:', italianMexicanFusion);

// console.log([...new Set([...italianFoods, ...mexicanFoods])]);

const uniqueItalianFoods = italianFoods.difference(mexicanFoods);
// console.log('Difference Italian: ', uniqueItalianFoods);

const uniqueMexicanFoods = mexicanFoods.difference(italianFoods);
// console.log('Difference Mexican:', uniqueMexicanFoods);

const uniqueItalianAndMexicanFoods =
  italianFoods.symmetricDifference(mexicanFoods);
// console.log(uniqueItalianAndMexicanFoods);

// console.log(italianFoods.isDisjointFrom(mexicanFoods));

// --
// || ******************************************
// LEC >> 124 - Maps: Fundamentals
// // || ******************************************
// VV

const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
// console.log(rest.set(2, 'Lisbon, Portugal'));

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are closed :(');

// console.log(rest.get('name'));
// console.log(rest.get(true));
// console.log(rest.get(1));

const time = 8;
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// console.log(rest.has('categories'));
rest.delete(2);
// rest.clear();
const arr2 = [1, 2];
rest.set(arr2, 'Test');
rest.set(document.querySelector('h1'), 'Heading');
// console.log(rest);
// console.log(rest.size);

// console.log(rest.get(arr2));

// --
// || ******************************************
// LEC >> 125 - Maps: Iteration
// // || ******************************************
// VV

const question = new Map([
  ['question', 'What is the best programming language in que world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct 🎉'],
  [false, 'Try again! 😖'],
]);

// console.log(question);

// Convert object to map
// console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));

// console.log(hoursMap);

for (const [key, value] of question) {
  // if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}

// const answer = Number(prompt('Your answer'));
const answer = 3;
// console.log(answer);

// console.log(
//   question.get('correct') === answer ? question.get(true) : question.get(false)
// );
// console.log(question.get(question.get('correct') === answer));

// Convert map to array
// console.log([...question]);
// console.log(question.entries());
// console.log([...question.keys()]);
// console.log([...question.values()]);

// --
// || ******************************************
// LEC >> 126 - Summary: Which data structure to use?
// // || ******************************************
// VV

// --
// || ******************************************
// LEC >> 127 - Coding Challenge #3
// // || ******************************************
// VV

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

//1. Create an array 'events' of the different game events that happened (no duplicates)
const eventsSet = new Set(gameEvents.values());
const eventsArray = [...eventsSet];
// console.log(eventsArray);

//2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
gameEvents.delete(64);
// console.log(gameEvents);

//3. Compute and log the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
// console.log(
//   `An event happened, on average, every ${90 / gameEvents.size} minutes`
// );
const time3 = [...gameEvents.keys()].pop();
// console.log(time3);
// console.log(
//   `An event happened, on average, every ${time3 / gameEvents.size} minutes`
// );

//4. Loop over 'gameEvents' and log each element to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this: [FIRST HALF] 17: ⚽ GOAL
//let time2;
for (const [min, event] of gameEvents) {
  const half = min <= 45 ? 'FIRST' : 'SECOND';
  // console.log(`[${half} HALF] ${min}: ${event}`);
  // key < 45 ? (time2 = `[FIRST HALF]`) : (time2 = `[SECOND HALF]`);
  // console.log(`${time2} ${min}: ${event}`);
}

// --
// || ******************************************
// LEC >> 128 - Working with Strings - Part 1
// // || ******************************************
// VV
