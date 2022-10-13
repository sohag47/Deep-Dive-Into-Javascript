/*
!The Difference Between Arrays and Objects
*In JavaScript, arrays use numbered indexes.  
*In JavaScript, objects use named indexes.
*Arrays are a special kind of objects, with numbered indexes.
*/
//! Create an Array
let cars;
cars = ["Saab", "Volvo", "BMW"];
console.log("🚀 ~ file: overview.js ~ line 4 ~ cars", cars)

cars = new Array("Saab", "Volvo", "BMW");
console.log("🚀 ~ file: overview.js ~ line 7 ~ cars", cars)

let points = [40];
let points2 = new Array(40)
console.info('points :>> ', points);
console.log('points2 :>> ', points2);

console.log('Data Type :>> ', typeof cars);
console.log('instanceof :>> ', cars instanceof Array);
console.log('isArray :>> ', Array.isArray(cars));
console.log('Array Last Element :>> ', cars[2]);

//? change array element 
cars[0] = "Toyota";
console.log('Updated Array :>> ', cars);



//? Array Properties
console.log('insert element [Marcides] :>> ', cars[cars.length]="Marcides");
console.log('insert element [Roles Royals] push() (last):>> ', cars.push("Roles Royals"));
console.log('remove element pop() (last):>> ', cars.pop());
console.log('remove element shift (first):>> ', cars.shift());
console.log('insert element [Roles Royals] unshift() (First):>> ', cars.unshift("Roles Royals"));



//? Looping Array
cars.forEach(element => console.log('element :>> ', element));

//? array Concatenating
let array2 = ["Emil", "Tobias"];
const arr3 = ["Robin", "Morgan"];
let testarray = array2.concat(cars, arr3, "Peter");
console.log('array Concatenating :>> ', testarray);

//? Splicing and Slicing Arrays
console.log('remove element with position :>> ', testarray.splice(1, 2));
console.log('remove and add element with position :>> ', testarray.splice(1, 2, "Lemon" , "Kiwi"));

console.log('testarray :>> ', testarray);

console.log('slice :>> ', testarray.slice(2, 5));
console.log('testarray :>> ', testarray);