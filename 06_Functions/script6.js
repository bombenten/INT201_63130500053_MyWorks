//function expression
// const doSomething = function (n1, n2, n3) {
//     return n1 + n2 + n3;
// };

// console.log(doSomething(5, 2, 1));

// //named function expression
// console.log(doSomething(5, 2, 1)); //8

// const findSum = function sum(n) {
//     if (n <= 1) return 1;
//     else return n + sum(n - 1);
// };
// console.log(findSum(5)); //15



//function expression
// const doSomething = function (n1, n2, n3) {
//     return n1 + n2 + n3;
// };

// //named function expression
// console.log(doSomething(5, 2, 1)); //8

// const findSum = function sum(n) {
//     if (n <= 1)
//         return 1;
//     else
//         return n + sum(n - 1); //5+sum(4)+sum(3)+sum(2)+sum(1) // 5+4+3+2+1
// };
// console.log(findSum(5)); //15



//simple function
function area(width, height) {
    return width * height;
  }
  
  console.log(area(5, 4));