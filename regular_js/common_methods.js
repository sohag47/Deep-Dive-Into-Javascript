//! Regular uses common methods:
/*
1. foreach() 
2. map()
3. filter()
4. reduce() 
5. findIndex()
6. find()
7. join()
*/

let country = ["Africa", "Bangladesh", "Canada"];
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let result;

//? 1. foreach()
country.forEach((value, index) => {
    console.log(`1. example: Country[${index}] => ${value}`);
});

//? 1. map()
country.map((value, index) => {
    console.log(`1. example: Country[${index}] => ${value}`)
});

//? 3. filter()
result = country.filter((value, index) => {
    if (value === "Bangladesh") {
        return (`3. example: Country[${index}] => ${value}`)
    }
});
console.log("filtered data => ", result);

//? 4. reduce() 
result = numbers.reduce((preValue, currentvalue, currentIndex) => {
    return preValue + currentvalue;
});

console.log('4. example: Total  :>> ', result);