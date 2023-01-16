//! first class function :
/*
1. passed by argument as a function to another function
2. return function from another function
3. function use as a variable
*/
//? 1. passed by argument as a function to another function:
function showMyName(name, callback) {
    callback(name)
}
function show(data) {
    console.log(`My Name is ${data}`);
}

// showMyName("Minhazul Islam Sohag", show);

//? 2. return function from another function
function welcomeMessage(name) {
    console.log('name :>> ', name);
    return function showmsg(name) {
        console.log(`Welcome ${name}`);
    }
}
// welcomeMessage("Minhazul Islam Sohag")("Test");


//? 3. function use as a variable
let aFunc = (name) => {
    console.log(`My Name is ${name}`);
}
let call = aFunc;
call("Minhazul Islam Sohag");
