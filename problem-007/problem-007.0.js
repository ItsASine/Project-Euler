/*
 By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

 What is the 10 001st prime number?
 */
var primes = [2, 3];

var isPrime = function (number) {
    var i = 1;
    var prime = primes[i];
    var limit = Math.ceil(Math.sqrt(number));

    while (prime <= limit) {
        if (number % prime === 0) {
            return false;
        }

        i += 1;
        prime = primes[i];
    }

    return true;
};

var euler7 = function () {
    var n = 5;
    var targetPrime = 10001;

    while (primes.length < targetPrime) {
        while (!isPrime(n)) {
            n += 2;
        }

        primes.push(n);
        n += 2;
    }

    console.log(primes[targetPrime - 1]);
};

var start = Date.now();
euler7();
console.log('Time elapsed: ' + (Date.now() - start) + 'ms');

