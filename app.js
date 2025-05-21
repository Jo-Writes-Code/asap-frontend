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

console.log(str)

let userLoggedIn = false
let userHasMembership = true

let permission = (userLoggedIn && userHasMembership) ? "show video." : "dont show video.";

console.log(permission)