//? JavaScripts Objects 

//! init objects:
let user1 = new Object();
let user = {};
console.log(user1, user)

//! object value assign:
user = {
    name: "John",
    age: 30,
    "likes birds": true,
    isAdmin: true
};

//? Object querying:
/*
* object.property
* object["property"]
*/
console.log(user);
console.log(user.age)
console.log(user["likes birds"])

//? object iterations:

for (element in user) {
    console.log(`${element} > ${user[element]}`)
}

//? Property Access Errors: 
console.log(user.dob) // undefined

//? delete object property:
delete user.name;
console.log(user)


//? check empty object:
let beg ={}
console.log(beg.noSuchProperty === undefined)
beg[fruits] = 5
console.log(beg.mango) 

// //? check value
console.log("age" in user1)

