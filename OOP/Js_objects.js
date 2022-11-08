//? JavaScripts Objects 

//! init objects
let user = new Object();
console.log(user)

let user1 = {
    name: "John",
    age: 30,
    "likes birds": true,
    isAdmin: true
};
console.log(user1);
console.log(user1["likes birds"])

delete user1.name;

for (let key in user1) {
    console.log(user1[key]);
}

let fruits = "mango"
let beg ={}
console.log(beg.noSuchProperty === undefined)
beg[fruits] = 5
console.log(beg.mango) 

//? check value
console.log("age" in user1)

