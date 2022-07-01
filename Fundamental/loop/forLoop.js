/*
! Different Kinds of for Loops
JavaScript supports different kinds of loops:

*1. for - loops through a block of code a number of times
*2. for/in - loops through the properties of an object
*3. for/of - loops through the values of an iterable object
*4. foreach
*/

let cars = ["Saab", "Volvo", "BMW"];

//! basic loop
//? way 1
for(let i =0; i<cars.length; i++ ){
    console.log(cars[i]);
}

//? way 2
for (let i = 0, len = cars.length, text = ""; i < len; i++) {
    text += cars[i];
    console.log("🚀 ~ file: forLoop.js ~ line 20 ~ text", text)
    
}

//? way 3
let j=0;
for(; j< cars.length; ){
    console.log(cars[j]);
    j++;
}

//! for in loop
for(let item in cars){
    console.log(cars[item]);
} 

//! for of loop
for(let x of cars){
    console.log("🚀 ~ file: forLoop.js for of loop x", x)
}

//! foreach()
cars.forEach(showArray);
function showArray(value, index, array){
    console.log(value+":"+index);
}