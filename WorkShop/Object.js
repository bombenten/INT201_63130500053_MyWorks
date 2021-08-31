//-1-----------------------------------------------------------------
// let student = {
//     firstName: 'Thanatorn',
//     lastName: 'Roswan',
//     age: 20,
//     gpa: {
//         INT201: 'A++++',
//         INT201: 'A++++'
//     }
// }
// student.email = 'bombenten'
// student['age'] = 50

// let obj = {}
// student = obj
// console.log(student)

// for (let key in student) {
//     console.log(`${key} : ${student[key]}`)
// }

//-2-----------------------------------------------------------------
// let WaterDispenser = {
//     name: ['coke', 'pepsi', 'sevenup'],
//     price: [15, 18, 17]
// };

// console.log(WaterDispenser);
//   console.log(WaterDispenser.name[0]);
//   console.log(WaterDispenser.name[WaterDispenser.name.length-1]);

// let product1 = { "name": 'coke', "price": 15 };
// let product2 = { "name": 'pepsi', "price": 18 };

// let waterDispenser = [product1, product2];

// for (let water of waterDispenser) {
//     console.log(water);
// }

//-3-----------------------------------------------------------------
function distance(p1, p2) {
    console.log(typeof p1)
    console.log(typeof p2)

    return Math.sqrt((p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2);
}

console.log(distance({ x: 1, y: 1 }, { x: 2, y: 2 }));