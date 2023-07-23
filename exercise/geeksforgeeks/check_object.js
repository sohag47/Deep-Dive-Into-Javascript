//! How to use array that include and check an object against a property of an object ?
let Person = {
    name: "Minhazul Islam Sohag",
    age: 26
};

console.log('name' in Person) // true
console.log('gender' in Person) // false

console.log(Person.hasOwnProperty('name')) // true
console.log(Person.hasOwnProperty('gender')) // false

console.log(Person.name !== undefined) // true
console.log(Person.gender !== undefined) // false