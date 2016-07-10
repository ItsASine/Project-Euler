/*
 The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

 Find the sum of all the primes below two million.
 */

var eratosthenes = function(n) {
    // Eratosthenes algorithm to find all primes under n
    // via http://stackoverflow.com/a/15471749/4892895
    var array = [];
    var upperLimit = Math.sqrt(n);
    var output = [];
    var i;

    // Make an array from 2 to (n - 1)
    for (i = 0; i < n; i++) {
        array.push(true);
    }

    // Remove multiples of primes starting from 2, 3, 5,...
    for (i = 2; i <= upperLimit; i++) {
        if (array[i]) {
            for (var j = i * i; j < n; j += i) {
                array[j] = false;
            }
        }
    }

    // All array[i] set to true are primes
    for (i = 2; i < n; i++) {
        if(array[i]) {
            output.push(i);
        }
    }

    return output;
};

var euler10 = function() {
    var max = 2000000;
    var primes = eratosthenes(max);
    var sum;
    
    sum = primes.reduce(function (previousValue, currentValue) {
        return previousValue + currentValue;
    });

    console.log(sum);
};

var start = Date.now();
euler10();
console.log('Time elapsed: ' + (Date.now() - start) + 'ms');
