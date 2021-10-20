// // Adding a single element:
// const cart = ['apple', 'orange'];
// cart.push('pear'); 

// // Adding multiple elements:
// const numbers = [1, 2];
// numbers.push(3, 4, 5);

// console.log(cart); 
// console.log(numbers);


// let text = "Hello world" ;
// let newText = text.replace(/l/g, "*") ;
// console.log(newText);

// let text = "Hello world" ;
// let newText = text.replace(/(a|e|i|o|u)/g , "*") ;
// console.log(newText);

// let text = "Hello world!!";
// let vowels = "aeiouAEIOU";

// for(const char of text){
//     for(const vowel of vowels){
//         if(char == vowel){
//             text = text.replace(vowel, '*');
//         }
//     }
// }

// console.log(text);

// let text = "Hi where are u now?!!"

// let splits = text.split("");

// splits.map(x => console.log(x));

// a => a + 100
// console.log(a = 100)


let helloSomeone = (name) => `Hello, ${name}`;

let area = (width, height) => width * height;

let evenNum1 = (num) => {
    if (num % 2 === 0) {
        return true;
    }
    else {
        return false;
    }
}

// let evenNum2 = (num) => (num % 2 === 0) ? true : false;

let evenNum2 = (num) => (num % 2 === 0);

console.log(helloSomeone('bomber'));
console.log(area(4,5))
console.log(evenNum1(10))
console.log(evenNum2(5))
