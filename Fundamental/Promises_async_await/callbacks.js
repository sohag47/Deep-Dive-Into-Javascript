function myCalculator(num1, num2, myCalback) {
    let sum = num1 + num2;
    myCalback(sum);
}

function myDisplayer(data) {
    console.log(data);

}

myCalculator(5, 5, myDisplayer)

