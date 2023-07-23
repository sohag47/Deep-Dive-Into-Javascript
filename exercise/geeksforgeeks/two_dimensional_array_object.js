let array = [
    ["John", 12],
    ["Jack", 13],
    ["Matt", 14],
    ["Max", 15]
];
let object = {};
array.forEach((item, index) => {
    let key = item[0]
    let value = item[1]
    object[key] = value;

});

console.log(object)
