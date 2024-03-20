//! Create JS Objects
let output = "";

let employee = new Object();
let user = {};

//? show object
console.log('init :>> ', employee, user);

//? Show type
output = `
show type with typeof
type of 'employee' ${typeof employee}
type of 'user' ${typeof user}
`;
console.log(output);

//? check type
output = `
check object type with instanceof
type of 'employee' ${employee instanceof Object}
type of 'user' ${user instanceof Object}
`;
console.log(output);

employee = {role: "HR", emp_id: "emp-101"};
user = {emp_id: "emp-101", name: "Sohag", age: 27};
console.log('object :>> ', employee, user, "\n");

//? Object Concatenation
output = {...user, ...employee};
console.log('output :>> ', output);

