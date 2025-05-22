let string = "ASAP Frontend";

console.log(string);
console.log(string[0]);
console.log(string.length);
console.log(string[string.length - 1]);
console.log(10 % 3);
console.log((10 * 5) / 2);
1 + 1;

let string2 = null;
let age = 17;

const points = 100;

// Comment
age += 1;

console.log(age);
console.log(points);

// Currency Conversion
let USD = 1200;
let AUD = USD * 1.5;

console.log(USD + "$ = " + AUD + "AU$");

// Equality Comparison Operator

console.log("6" == 6);
console.log("6" === 6);

console.log("6" != 6);
console.log("6" !== 6);

// Conditional Statments
let hasMembership = false;
let signedIn = true;

if (hasMembership === true) {
  console.log("Welcome");
} else if (signedIn === true) {
  console.log("Upgrade");
} else {
  console.log("Login");
}

let ageRequired = 18;
let customerAge = 16;
let yearsLeft = ageRequired - customerAge;

if (customerAge >= ageRequired) {
  console.log(`${customerAge} years old.`);
  console.log("Welcome!");
} else {
  console.log(`${customerAge} years old.`);
  console.log(`You are ${yearsLeft} years too young.`);
}

// Logical Operators
let registeredAge = 19;
let hasId = true;

if (registeredAge >= 18 && hasId) {
  console.log("Enter..");
}

if (!hasId === false) {
  console.log("Nice Id");
}

if (null) {
  console.log(Boolean(null));
} else if (age) {
  console.log(Boolean(age));
}

// Ternary Operator
let isRaining = true;

isRaining ? console.log("Its raining.") : console.log("Its not raining.");
let str = registeredAge >= 18 && hasId ? "Enter.." : "Dont Enter.";

console.log(str);

let userLoggedIn = false;
let userHasMembership = true;

let permission =
  userLoggedIn && userHasMembership ? "show video." : "dont show video.";

console.log(permission);

// Loops

// let counter = 1;

// while (counter <= 20) {
//   console.log(counter);
//   counter += 1;
// }

// console.log('loop finished.')

for (let i = 0; i < 5; i++) {
  console.log(i);
}

for (i = 1; i <= 15; i++) {
  if (i % 2 === 0) {
    console.log(`${i} - FRONTEND`);
  } else if (i % 5 === 0) {
    console.log(`${i} - ASAP FRONTEND`);
  } else {
    console.log(`${i} - ASAP`);
  }
}

let text = "ASAP FRONTEND";

for (i = 0; i < text.length; i++) {
  console.log(text[i]);
}

let ex1Count = 0;

while (ex1Count < text.length) {
  console.log(text[ex1Count]);
  ex1Count++;
}

// Functions

// Function Declaration
function greetUser(name, time) {
  console.log(`Hello ${name}, its ${time}.`);
}

// Call the function
greetUser("John", "10:00pm");

function main() {
  console.log("Hello World");
  return "ASAP FRONTEND";
}

console.log(main());

// Currency Converter 2.0

// function convertUsdTOAud(usd) {
//   console.log(usd * 1.5);
// }

// Arrow Function
const convertUsdTOAud = (usd) => {
  return usd * 1.5;
};

console.log(convertUsdTOAud(1200));

// Arrays
let array = ["Apples", "Bananas", "Eggs", "Milk"];

// Mutating Method
array.push("Bread");

// variable equated as arrow function
// const variableName = () => {}

// Non-mutating method
let filteredArray = array.filter((element) => {
  element.length > 4 && console.log(element);
  return element.length > 4;
  // if (element.length > 4) {
  //   return true
  // }
});

// SHORTHAND
// let filteredArray = array.filter((element) => element.length > 4)

// call-back function passed in as argument

console.log(filteredArray);
console.log(array); // Whole array
console.log(array[0]); // First element
console.log(array[array.length - 1]); // Last element

let ages = [27, 31, 18, 22, 15];

// let filteredAges = ages.filter(element => element <= 18)
let filteredAges = ages.filter((element) => {
  return element <= 18;
});

console.log(filteredAges);

for (i = 0; i < ages.length; i++) {
  ages[i] <= 18 && console.log(ages[i]);
}

filteredAges = []
for (i = 0; i < ages.length; i++) {
  ages[i] <= 18 && filteredAges.push(ages[i]);
}

console.log(filteredAges);


// Maps

let array2 = [1, 2, 3, 4, 5]

// let newArray2 = array2.map((element) => {
//   console.log(element)
//   return 'hello world'
// })

let newArray2 = array2.map((element) => 'hello world')

console.log(newArray2)

let usDollars = [1000, 750, 1200, 675, 900]

// let auDollars = usDollars.map((element) => element * 1.5)
let auDollars = []

for (i = 0; i < usDollars.length; i++) {
  auDollars.push(usDollars[i] * 1.5)
}

console.log(auDollars)
