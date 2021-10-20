console.log(`Array forEach \n`);

let arrayGroup = [5, "a", 3, "b", 1];

console.log(arrayGroup);

console.log(`\nforEach Value`);
arrayGroup.forEach((value) => {
  console.log(`Value: ${value}`);
});

console.log(`\nforEach Index`);
arrayGroup.forEach((value, index) => {
  console.log(`Index: ${index}`);
});

console.log(`\nforEach Index & Value`);
arrayGroup.forEach((value, index) => {
  console.log(`Index: ${index} Value: ${value}`);
});

// ----------------------------------------------------------------------

let nums = [5, 4, 3, 2, 1];
nums.forEach((num) => {
  console.log(num + 2)
});

let nums = [10, 20, 30, 40, 55];
let sum = 0;
nums.forEach((num) => {
  sum += num
  console.log(sum)
});
console.log(`Sum : ${sum}`)

// ----------------------------------------------------------------------

console.log(`Object forEach `);

let obj = {
  name: "Toey",
  firstName: "Metha",
  lastName: "Srisutapat",
  studentId: "63130500004"
};

// console.log(`\nforEach Index & Value`);
console.log(obj);
console.log(Object.entries(obj));
console.log("");

Object.entries(obj).forEach(([key]) => {
  console.log(`${key}`);
});
console.log("");

Object.entries(obj).forEach(([key, value]) => {
  console.log(`${value}`);
});
console.log("");

Object.entries(obj).forEach(([key, value]) => {
  console.log(`${key} : ${value}`);
});


// let obj = {
//   "1": 5,
//   "2": 7,
//   "3": 0,
//   "4": 0,
//   "5": 0,
//   "6": 0,
//   "7": 0,
//   "8": 0,
//   "9": 0,
//   "10": 0,
//   "11": 0,
//   "12": 0
// }
