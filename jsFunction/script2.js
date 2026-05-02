// // 1. Create a function expression and store it in a
// // variable, then call it.
// let greet1 = function () {
//   console.log("Hello");
// };
// greet();

// // 2. Write a function expression and execute it
// // using the variable name.

// let display = function () {
//   console.log("Welcome to JavaScript");
// };
// display();

// // 3. Create a function expression that takes one
// // value and displays it.
// let show = function (value) {
//   console.log(value);
// };
// show("This is a function expression");

// // 4. Write a function expression that stores and
// // prints a message.
// let message = function () {
//   console.log("This is a message from function expression");
// };
// message();
// // 5. Create a function expression with two
// // parameters and display both values..
// let displayValues = function (a, b) {
//   console.log("Value 1: " + a);
//   console.log("Value 2: " + b);
// };
// displayValues(10, 20);
// // 6. Write two function expressions with different
// // variable names and call both.
// let greetUser = function (name) {
//   console.log("Hello, " + name + "!");
// };
// let sayGoodbye = function (name) {
//   console.log("Goodbye, " + name + "!");
// };
// greetUser("Amit");
// sayGoodbye("Bumesh");

// // 7. Create a function expression and assign it to
// // another variable, then call both.
// let originalFunction = function () {
//   console.log("This is the original function");
// };
// let newFunction = originalFunction;
// originalFunction();
// newFunction();

// // 8. Write a function expression and print its
// // returned value using console.log().

// let add = function (a, b) {
//   return a + b;
// };
// console.log(add(5, 7));

// // 9. Call a function expression multiple times with
// // different values.

// let multiply1 = function (a, b) {
//   return a * b;
// };
// console.log(multiply1(4, 6));
// console.log(multiply1(7, 8));
// console.log(multiply1(2, 3));

// // 10. Try calling a function expression before
// // declaring it and observe what happens.
// // that returns the average of three numbers.
// console.log(average(4, 6, 8)); // This will throw an error because average is not defined yet.

// let average1 = function (a, b, c) {
//   return (a + b + c) / 3;
// };
// console.log(average(4, 6, 8)); // This will now work correctly.

// // Arrow function

// // 1. Create an arrow function that prints “Welcome
// // to JavaScript”.

// const welcome = () => {
//   console.log("Welcome to JavaScript");
// };
// welcome();

// // 2. Write an arrow function that takes a name and
// // prints a greeting message.
// const greet = (name) => {
//   console.log("Hello, " + name + "!");
// };
// greet("Aman");

// // 3. Create an arrow function that adds two
// // numbers and returns the result.
// const add1 = (a, b) => a + b;
// console.log(add1(4, 6));

// // 4. Write an arrow function that multiplies two
// // numbers and prints the output.
// const multiply2 = (a, b) => {
//   console.log(a * b);
// };
// multiply(4, 6);
// // 5. Create an arrow function that returns
// // the square of a number.

// const square = (num) => num * num;
// console.log(square(5));
// // 6. Write an arrow function that takes three
// // numbers and returns their sum.
// const sum = (a, b, c) => a + b + c;
// console.log(sum(4, 6, 8));

// // 7. Create an arrow function that returns
// // the length of a given string.
// const stringLength = (str) => str.length;
// console.log(stringLength("Hello, world!"));

// // 8. Create an arrow function that checks whether a
// // number is positive or negative.
// const checkNumber = (num) => {
//   if (num > 0) {
//     console.log(num + " is a positive number.");
//   } else {
//     console.log(num + " is not a positive number.");
//   }
// };
// checkNumber(5);
// checkNumber(-3);

// // 9. Write an arrow function that finds the
// // difference between two numbers.

// const difference = (a, b) => a - b;
// console.log(difference(10, 4));

// // 10.Create an arrow function that returns a
// // message like “Learning Arrow Functions”.
// // the average of three numbers.
// const average = (a, b, c) => (a + b + c) / 3;
// console.log(average(4, 6, 8));
