/*
There are 3 ways to declare a JavaScript variable:
! var
? let 
* const
*/

//? operation of var keyword
//* it is global variable, able to redeclare variable, changeable data
var text = "Javascript";
console.log(text);

var text = "Change Text";
console.log(text);

//? operation of let keyword
//* it is block variable, unable to redeclare variable, changeable data

let text2;
text2 = "Hello Let variable";
console.log(text2);
//let text2 = "Change text"; //! unable to redeclare variable
text2 = "Change Text";
console.log(text2);


//? operation of const keyword
//* it is block variable, unable to redeclare variable, unchangeable data

const PI = 3.1416;
console.log(PI);
//const PI = 9.8; //! unable to redeclare variable, unchangeable data

//? One Statement, Many Variables
let person = "John Doe",
    carName = "Volvo",
    price = 200;

console.log(person, carName, price)


//? Var Hoisting
carName1 = "Volvo";
console.log("🚀 ~ file: variable.js ~ line 44 ~ carName1", carName1)
var carName1;


//? let Hoisting
carName2 = "Volvo";
console.log("🚀 ~ file: variable.js ~ line 44 ~ carName1", carName2)
//let carName2; //! ReferenceError

//? const Hoisting
carName3 = "Volvo";
console.log("🚀 ~ file: variable.js ~ line 44 ~ carName1", carName3)
//const carName3; //! ReferenceError

//! When to use JavaScript const?
/*
?As a general rule, always declare a variable with const unless you know that the value will change.
?Use const when you declare:

* A new Array
* A new Object
* A new Function
* A new RegExp
*/