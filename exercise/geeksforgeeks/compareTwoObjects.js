//! How to compare two objects to determine the first object contains equivalent property values to the second object in JavaScript ?
function check(obj1, obj2) {
    
}

let obj1 = {
    name: "John",
    age: 23,
    degree: "CS"
};

let obj2 = {
    age: 23,
    degree: "CS"
};

console.log('object compare :>> ', check(obj1, obj2));