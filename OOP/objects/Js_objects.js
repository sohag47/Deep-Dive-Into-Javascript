//? JavaScripts Objects 

//! init objects:
let user1 = new Object();
let user = {};
// console.log(user1, user);

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
console.log("user", user);
console.log(user.age)
console.log(user["likes birds"], "\n")

//? object iterations:

for (element in user) {
    console.log(`${element} > ${user[element]}`)
}
console.log('\n');
//? Property Access Errors: 
// console.log(user.dob) // undefined

//? delete object property:
delete user.name;
console.log("delete 'name' =>", user)


//? check empty object:
let beg ={}
console.log("check empty object =>", beg.noSuchProperty === undefined)
beg['fruits'] = 5
console.log(beg) 
console.log(beg.mango) 

//? check value
console.log("age" in user1)

