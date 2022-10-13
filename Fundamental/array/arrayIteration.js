//!JavaScript Array Iteration

const numbers = [45, 4, 9, 16, 25];
numbers.forEach((element, index, array)=> console.log('forEach element :>> ', element));

numbers.map((element, index, array)=> console.log('map element :>> ', element * 2));

let filtered = numbers.filter((element, index, array) => element > 10);
console.log('filtered :>> ', filtered);

let reduced = numbers.reduce((total, element, index) => total + element );
console.log('reduced :>> ', reduced);


let reducedRight = numbers.reduceRight((total, element, index, array) => total + element );
console.log('reducedRight :>> ', reducedRight);

let everyValue = numbers.every((element, index, array) => element > 10);
console.log('everyValue :>> ', everyValue);

let someValue = numbers.some((element, index, array) => element > 44);
console.log('someValue :>> ', someValue);

let ValueIndex = numbers.indexOf(16);
console.log('ValueIndex :>> ', ValueIndex);

let ValueFindIndex = numbers.findIndex((element) => element > 10);
console.log('ValueFindIndex :>> ', ValueFindIndex);

let ValueLastIndex = numbers.lastIndexOf(16);
console.log('ValueLastIndex :>> ', ValueLastIndex);

let sorted = numbers.sort(function(a, b){return a - b});
let Valuefind = sorted.find((element) => element > 10);
console.log('Valuefind :>> ', Valuefind);

let keys = numbers.keys();
for (let x of keys) {
    console.log('x :>> ', x);
};
let entries = numbers.entries();
for (let y of entries) {
    console.log('y :>> ', y);
};

console.log('includes :>> ', numbers.includes(45));
