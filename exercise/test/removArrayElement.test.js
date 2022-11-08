const removeElementFromArray = require('../geeksforgeeks/removArrayElement')
let numbers = [1, 2, 2, 3, 4, 5, 6, 6, 7, 8, 8, 8]
let limiter = 5

test('remove Element From Array', () => {
    expect(removeElementFromArray(numbers, limiter)).toEqual(expect.arrayContaining([1, 2, 2, 3, 4]));
});
