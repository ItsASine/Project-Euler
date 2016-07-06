/*
 The sum of the squares of the first ten natural numbers is,
 1^2 + 2^2 + ... + 10^2 = 385

 The square of the sum of the first ten natural numbers is,
 (1 + 2 + ... + 10)^2 = 552 = 3025

 Hence the difference between the sum of the squares of the
 first ten natural numbers and the square of the sum is 3025 − 385 = 2640.

 Find the difference between the sum of the squares of the
 first one hundred natural numbers and the square of the sum.
 */

var euler6 = function () {
    var count = 100;
    var numbers = new Array(count);
    var sumOfSquares, squareOfSum, sum, i;
    var squares = [];

    for (i = 1; i <= count; i++) {
        numbers[i - 1] = i;
    }

    numbers.forEach(function (value) {
        squares.push(Math.pow(value, 2));
    });

    sumOfSquares = squares.reduce(function (previousValue, currentValue) {
        return previousValue + currentValue;
    });

    sum = numbers.reduce(function (previousValue, currentValue) {
        return previousValue + currentValue;
    });

    squareOfSum = Math.pow(sum, 2);

    console.log(squareOfSum - sumOfSquares);
};

var start = Date.now();
euler6();
console.log('Time elapsed: ' + (Date.now() - start) + 'ms');
