// --------------------------------------
// Exercise 3 - Add numbers from string to float

const numberOne = "1.10";
const numberTwo = "2.30";

// add those two numbers and show the result
// you cannot touch line 1 neither line 2

const number1 = parseFloat(numberOne);
const number2 = parseFloat(numberTwo);

const result = number1 + number2;

console.log(result);


// --------------------------------------
// Exercise 4 - Add the numbers and the total with 2 decimals

const anotherNumberOne = "1.10";
const anotherNumberTwo = "2.30";

let result1 = parseFloat(anotherNumberOne) + parseFloat(anotherNumberTwo);

console.log(result.toFixed(2));


// --------------------------------------
// Exercise 5 - Decimals and average

const one = 10;
const two = 45;
const three = 98;

// Show in the console the avg. with 5 decimals

let plusSum = one + two + three;
let avg = plusSum / 3;

console.log(avg.toFixed(5));


// --------------------------------------
// Exercise 6 - Get the character by index

const letters = "abc";
// Get me the character "c"

console.log(letters.charAt(2));


// --------------------------------------
// Exercise 7 - Replace

const fact = "You are learning javascript!";

// capitalize the J in Javascript

const updateFact = fact.replace("javascript!", "Javascript!");

console.log(updateFact);

// --------------------------------------



