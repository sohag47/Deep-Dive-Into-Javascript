//! Converting Arrays to Strings
let cars;
cars = ["Saab", "Volvo", "BMW"];
console.log('Array To String toString():>> ', cars.toString());
console.log('Array To String join():>> ', cars.join("-"));
console.log('String to array Array.from() :>> ', Array.from("ABCDEFG"));
console.log('Array Length :>> ', cars.length);
console.log('Sorting :>> ', cars.sort());
console.log('Reverse :>> ', cars.reverse());

const points = [40, 100, 1, 5, 25, 10];
console.log('incorrect result when sorting numbers sort() :>> ', points.sort());
/*
Because of this, the sort() method will produce incorrect result when sorting numbers.
*/

console.log('points :>> ', points.sort(function(a, b){return a - b}));
console.log('lowest value :>> ', points[0]);
console.log('lowest value :>> ', points[points.length -1]);

let max_value =  (points) => {
    return Math.max.apply(null, points)
}
console.log('max_value :>> ', max_value(points));

let min_value =  (points) => {
    return Math.min.apply(null, points)
}
console.log('max_value :>> ', min_value(points));


