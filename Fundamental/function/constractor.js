const myFunction = new Function("a", "b", "return a * b");
let x = myFunction(4, 3);
console.log("🚀 ~ file: constractor.js ~ line 3 ~ x", x)

const myFunction1 = function (a, b) {return a * b};
let y = myFunction1(4, 3);
console.log("🚀 ~ file: constractor.js ~ line 7 ~ y", y)

