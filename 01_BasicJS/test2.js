function printNumber() {
let result;
    console.log(result);  // undefined
    for(var i=0; i<5; i++) {
        // var result = `${result}, ${i}`;
        result = `${result}, ${i}`;
    }
    console.log(result); // undefined, 1, 2, 3, 4
    console.log(i); // 5
}

printNumber();