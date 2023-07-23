let array1 = [1, 2, 3, 4];
let array2 = ["ram", "shyam", "sita", "gita"];
let object = {};

array1.forEach((item, index) => {
    let key = item
    let value = array2[index];
    object[index] = value;

    // console.log(key, value);
})

console.log(object);