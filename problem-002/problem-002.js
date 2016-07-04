/*
 Each new term in the Fibonacci sequence is generated by adding the previous two terms.
 By starting with 1 and 2, the first 10 terms will be:

 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

 By considering the terms in the Fibonacci sequence whose values do not exceed four million,
 find the sum of the even-valued terms.
 */
var fibNumbers = function(){
    var fibonacciNumbers = [0, 1];
    var max = 4000000;
    var currentNumber = 1;
    var i = 2;

    while(currentNumber < max) {
        fibonacciNumbers[i] = fibonacciNumbers[i - 2] + fibonacciNumbers[i - 1];
        currentNumber = fibonacciNumbers[i];
        i++;
    }

    return fibonacciNumbers;
};

var evenFibNumbers = function(fibNumbers){
    var evenFibonacciNumbers = [];

    fibNumbers.forEach(function(value) {
        if (value % 2 == 0) {
            evenFibonacciNumbers.push(value);
        }
    });

    return evenFibonacciNumbers;
};

var euler2 = function () {
    var fibonacciNumbers = fibNumbers();
    var evenFibonacciNumbers = evenFibNumbers(fibonacciNumbers);
    var sum;

    sum = evenFibonacciNumbers.reduce(function (previousValue, currentValue) {
        return previousValue + currentValue;
    });

    console.log(sum);
};

euler2();