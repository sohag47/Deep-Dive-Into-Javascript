//! How to print object by id in an array of objects in JavaScript ?

var data = [
    { id: 1, name: "a" },
    { id: 2, name: "b" },
    { id: 3, name: "c" },
    { id: 4, name: "d" },
    { id: 5, name: "e" },
    { id: 6, name: "f" },
];
let id = 1;
let item = data.filter((value) => value.id === id);
//? return data as a list
console.log('using filter :>> ', item[0].name);

let item2 = data.find((value) => value.id === id);
//? return data as a object
console.log('using find :>> ', item2.name);


let item3 = {}
data.forEach((value) => {
    if (value.id === id) return item3 = value;
});
//? return data as a object
console.log('using forEach :>> ', item3.name);

let item4 = {}
data.map((value) => {
    if (value.id === id) return item4 = value;
});
//? return data as a object
console.log('using map :>> ', item4.name);

let exampleObj = {
    book: "Sherlock Holmes",
    author: "Arthur Conan Doyle",
    genre: "Mystery"
};

for (const key in exampleObj) {
    // if (Object.hasOwnProperty.call(object, key)) {
    //     const element = object[key];

    // }

    if (exampleObj.hasOwnProperty(key)) {
        console.log('key :>> ', exampleObj[key]);
    }

}

// Object.entries(data).map((item) => {
//     let key = item[0]
//     let value = item[1]
//     console.log('object :>> ', key, value);
// });
