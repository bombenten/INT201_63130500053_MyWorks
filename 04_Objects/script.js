let person = {}; //let person = new Object();
console.log(typeof person);
person.id = 12345678;
person.name = 'Somchai';
console.log(person);
person.email = 'somchai@gmail.com';
console.log(person);
delete person.email;
console.log(person);