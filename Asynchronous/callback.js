function sumCalculator(num1 = 0, num2 = 0, callback = undefined) {
    let result = num1 + num2;
    if (callback instanceof Function) callback(result);
    return;
}
sumCalculator(10, 20, (result) => { console.log(result) });

sumCalculator(100, 100, (result) => { console.log(result * 10)})
