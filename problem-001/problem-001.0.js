/*
 If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9.
 The sum of these multiples is 23.

 Find the sum of all the multiples of 3 or 5 below 1000.
 */

var euler1 = function () {
    var multiplesOf3Or5 = [];
    var max = 1000;
    var sum;
    var i;

    for (i = 0; i < max; i++) {
        if (i % 3 == 0 || i % 5 == 0) {
            multiplesOf3Or5.push(i);
        }
    }

    sum = multiplesOf3Or5.reduce(function (previousValue, currentValue) {
        return previousValue + currentValue;
    });

    console.log(sum);
};

var start = Date.now();
euler1();
console.log('Time elapsed: ' + (Date.now() - start) + 'ms');