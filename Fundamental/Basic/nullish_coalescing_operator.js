//! Nullish coalescing operator '??'

let a, b = null;

var result = (a !== null && a !== undefined) ? a : b;
// console.log(result);

let firstname;
let lastname = null;
let nickname = "Javascript"
// null/undefined
console.log(firstname ?? lastname ?? nickname ?? "Anonymous");
console.log(firstname || lastname || nickname || "Anonymous");

let height = 0;
console.log(height ?? 100);
console.log(height || 100);

let x = (1 && 2) ?? 3;
console.log(x);

