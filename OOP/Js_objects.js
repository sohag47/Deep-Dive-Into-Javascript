//? JavaScripts Objects 

//! init objects
// let user = new Object();

let user = {
    name: "John",
    age: 30,
    isAdmin: true
};


// delete user.name;
// console.log(user);

for (let key in user) {
    console.log(user[key]);
}