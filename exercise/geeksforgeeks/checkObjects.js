// ! How to check if a value is object-like in JavaScript ?
/*
1. use typeof 
2. use instanceof 
3. use constructor 
*/

let user = {
    name: "Minhazul Islam Sohag",
    country: "Bangladesh",
};

console.log('use typeof  :>> ', typeof user);
console.log('use instanceof :>> ', user instanceof Object);
console.log('use constructor :>> ', user.constructor === Object);

// ! exceptions:
let k0 = new Set()
let k1 = [1, 2, 3];
let k2 = "hello";
let k3 = null;
let k4 = undefined;

console.log('1. typeof exceptions :>> ', typeof k0);
console.log('1. typeof exceptions :>> ', typeof k1);
console.log('1. typeof exceptions :>> ', typeof k2);
console.log('1. typeof exceptions :>> ', typeof k3);
console.log('1. typeof exceptions :>> ', typeof k4);

console.log('2. instanceof  exceptions :>> ', k0 instanceof Object);
console.log('2. instanceof  exceptions :>> ', k1 instanceof Object);
console.log('2. instanceof  exceptions :>> ', k2 instanceof Object);
console.log('2. instanceof  exceptions :>> ', k3 instanceof Object);
console.log('2. instanceof  exceptions :>> ', k4 instanceof Object);

console.log('3. constructor  exceptions :>> ', k0.constructor === Object);
console.log('3. constructor  exceptions :>> ', k1.constructor === Object);
console.log('3. constructor  exceptions :>> ', k2.constructor === Object);
// console.log('3. constructor  exceptions :>> ', k3.constructor === Object);
// console.log('3. constructor  exceptions :>> ', k4.constructor === Object);