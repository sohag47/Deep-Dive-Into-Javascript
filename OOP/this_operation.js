//! Javascript 'This' Operation

//? 1. this refers global objects
//console.log(this); // show window objects

//? 2. return this in function
function test(){
    return this;
}
//console.log(test()); // show window objects

//? 3. use strict
"use strict";
//console.log(this); // undefined

//? 4. event 
{/* <button onclick="this.style.display='none'">
  Click to Remove Me!
</button>  */}

//? 5.object method bining or implicit bining
const persion = {
    first_name : "Minhazul Islam",
    last_name: "Sohag",
    get_fullName: function(){
        return "My Name is " + this.first_name + " " + this.last_name;
    }
}
console.log(persion.get_fullName());

//? 5. Explicit Function Binding
/*
* 1. use call()
* 2. use apply()
* 3. use bind()
*/



const employee2 = {
    get_fullName: function(){
        return "My Name is " + this.first_name + " " + this.last_name;
    }
}
const employee = {
    first_name : "Minhazul Islam",
    last_name: "Sohag",
}

console.log(employee2.get_fullName.apply(employee));
console.log(employee2.get_fullName.call(employee));

const person = {
    firstName:"John",
    lastName: "Doe",
    fullName: function () {
      return this.firstName + " " + this.lastName;
    }
  }
  
  const member = {
    firstName:"Hege",
    lastName: "Nilsen",
  }
  
console.log(person.fullName.bind(member));