// 1) has a function expression called divide
// 2) divide divides 2000 by 100
// 3) has an arrow function called square
// 4) square arrow function takes one parameter and multiplies it times itself
// 5) has an arrow function called add
// 6) add arrow function takes two parameters and adds them together

function divide(x, y) {
  return x / y;
}
divide(2000, 100);

let square = (x) => x * x;
let add = (x, y) => x + y;
