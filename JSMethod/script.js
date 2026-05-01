let a = 20;
b = 30;

function sum(x, y) {
  let z = b + a;
  console.log(z);
}
sum(a, b);

let abc = function () {
  console.log("hello world ");
};

console.log(abc);

abc();

let add = function (a, b) {
  return a + b;
};

console.log(add);

console.log(add(4, 6));

// arrow function

const addArrow = (a, b) => a + b;


// console.log(addArrow(9, 8));

console.log(addArrow(7,9));



const arrowfun = () =>{
    console.log("I am Arrow Function");
    
}
arrowfun();