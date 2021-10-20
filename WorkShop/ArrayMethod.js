//array foreach
console.log("array foreach");
let metha = [5, "a", 3, "b", 1];   //สร้าง array เก็บ [5 a 3 b 1] 
console.log(metha);                //แสดงของใน array ออกมา [ 5, 'a', 3, 'b', 1 ]
console.log("");

metha.forEach((array) => {         //ใช้ฟังก์ชั่น foreach เพื่อดึงของที่อยู่ใน array จนหมด โดยใช้ parameter เป็น array เพื่อเก็บค่า value
  console.log(" Value: " + array); //แสดงข้อความว่า value: แล้วตามด้วยค่าของ value ที่เก็บใน parameter ที่มีชื่อว่า array 
});                                // ทำซ้ำไปเลื่อยๆจนหมด array ที่มีชื่อว่า metha
console.log("");

metha.forEach((array, index) => {  //ใช้ฟังก์ชั่น foreach โดยใช้ parameter เป็น array เพื่อเก็บค่า value ใช้ index เพื่อเก็บค่าของ index (parameter ตัวแรกเป็น value ตัวที่สองจะเป็น index )
  console.log("Index: " + index);  //แสดงข้อความว่า Index: แล้วตามด้วยค่าของ Index ที่เก็บใน parameter ที่มีชื่อว่า index
});                                // ทำซ้ำไปเลื่อยๆจนหมด array ที่มีชื่อว่า metha
console.log("");

metha.forEach((array, index) => {  //ใช้ฟังก์ชั่น foreach โดยใช้ parameter เป็น array เพื่อเก็บค่า value ใช้ index เพื่อเก็บค่าของ index (parameter ตัวแรกเป็น value ตัวที่สองจะเป็น index )
  console.log("Index: " + index + " Value: " + array); //แสดงข้อความว่า Index: แล้วตามด้วยค่าของ Index ที่เก็บใน parameter ที่มีชื่อว่า index และแสดงข้อความ value: แล้วตามด้วยค่าของ value ที่เก็บใน parameter ที่มีชื่อว่า array
});                                // ทำซ้ำไปเลื่อยๆจนหมด array ที่มีชื่อว่า metha
console.log("");

// let num = [5,4,3,2,1];
// num.forEach((num) => {
//   console.log(num+2)
// });

// let num = [5,4,3,2,1];
// let sum = 0;
// num.forEach((num) => {
//   sum += num
//   console.log(sum)
// });


//obj foreach
console.log("obj foreach");
let obj = {                       //สร้าง object ชื่่อ obj
  first: "Metha",                 //เก็บชื่อจริง metha
  last: "dairy queen",            //เก็บนามสกุล dairy queen
};
console.log(obj);                 //แสดงของใน obj //{ first: 'John', last: 'Doe' }
console.log(Object.entries(obj)); //เก็บของใน obj ในรูปของ entry //[ [ 'first', 'John' ], [ 'last', 'Doe' ] ]
console.log("");

Object.entries(obj).forEach(([key]) => {         //ดึง key ใน obj จาก entry มาเก็บไว้ใน parameter key  
  console.log(`${key}`);                         //แสดง key ใน obj จาก entry 
});                                              //จากนั้นทำซ้ำจนกว่าจะครบ key ทุกตัวใน entry
console.log("");

Object.entries(obj).forEach(([key, value]) => {  //ดึง key ใน obj จาก entry มาเก็บไว้ใน parameter key ดึง value ใน obj จาก entry มาเก็บไว้ใน parameter value (parameter ตัวแรกเป็น key ตัวที่สองจะเป็น value )
  console.log(`${value}`);                       //แสดง value ใน obj จาก entry
});                                              //จากนั้นทำซ้ำจนกว่าจะครบ value ทุกตัวใน entry
console.log("");

Object.entries(obj).forEach(([key, value]) => {  //ดึง key ใน obj จาก entry มาเก็บไว้ใน parameter key ดึง value ใน obj จาก entry มาเก็บไว้ใน parameter value (parameter ตัวแรกเป็น key ตัวที่สองจะเป็น value )
  console.log(`${key} : ${value}`);              //แสดง key : value ใน obj จาก entry
});                                              //จากนั้นทำซ้ำจนกว่าจะครบ value ทุกตัวใน entry
console.log("");


let res = Object.entries(obj)
console.log(res);

Object.entries(obj).forEach(([key, value]) => {
  console.log(`key: ${key} value: ${value}`)
});

sum = 0 ;
Object.entries(obj).forEach(([key, value]) => {
  sum += value
  console.log(`Sum is : ${value} + ${sum-value} = ${sum}`)
})


let res =Object.entries(obj)
console.log(res)

Object.entries(obj).forEach(([key,value]) => {
  console.log(`key: ${key} , value ${value}`)
})

let sum = 0 ;
Object.entries(obj).forEach(([key,value]) => {
  sum += value
  console.log(`${value} + ${sum-value} = ${sum}`)
})
console.log(`sum is ${sum}`)