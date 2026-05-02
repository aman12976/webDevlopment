// 1. Create a simple function that prints "Hello 
// World". 

function hello(){
    console.log("Hello World");
}
hello();

// 2. Write a function that displays your name in 
// the console. 

function name(){
    console.log("Aman");
    
}
name();

// 3. Create a function that prints "Welcome to 
// College". 

function welcome(){
    console.log("Welcome to College");
    
}
welcome();

// 4. Write a function that takes a name as a 
// parameter and prints "Hello [name]".

function prsmeter(name){
    console.log("Hello" + name);
    
}
prsmeter(" Aman");

// 5. Create a function that takes two numbers and 
// prints their sum. 

function sum(a, b){
    console.log(a + b);
}
sum(4, 6);

// 6. Write a function that takes a number and 
// prints its square. 

function square(num){
    console.log(num * num);
}
square(5);

// 7. Create a function that takes two numbers and 
// returns their addition. 

function add(a, b){
    return a + b;
}
console.log(add(7, 8));

// 8. Write a function that returns the 
// multiplication of two numbers.
function mul(a, b){
    return a * b;
}
console.log(mul(4, 6));

// 9. Create a function that takes a name and age 
// and prints a message. 

function message(name, age){
    console.log("My name is " + name + " and I am " + age + " years old.");
}
message("Aman", 20);

// 10. Write a function that returns the average of 
// three numbers. 
function average(a, b, c){
    return (a + b + c) / 3;
}
console.log(average(4, 6, 8));

// 11. Create a function and call it multiple times   
// with different values. 

function greet(name){
    console.log("Hello " + name);
}
greet("Aman");
greet("Rahul");
greet("Priya");

// 12. Build a function that takes two numbers and  
// returns the greater number. 

function greater(a, b){
    if(a > b){
        return a;
    } else {
        return b;
    }
}
console.log(greater(4, 6));