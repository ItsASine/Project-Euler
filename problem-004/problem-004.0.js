/*
 A palindromic number reads the same both ways.
 The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

 Find the largest palindrome made from the product of two 3-digit numbers.
 */
var isPalindrome = function (number) {
    var string = String(number);
    var length = string.length;

    if (string[0] == string[length - 1]) {
        if (string[1] == string[length - 2]) {
            if (length == 5) {
                return true;
            } else {
                if (string[2] == string[length - 3]) {
                    return true;
                }
            }
        }
    }

    return false;
};

var euler4 = function () {
    var x1, x2, y;
    var largest = 0;

    for (x1 = 100; x1 < 1000; x1++) {
        for (x2 = x1; x2 < 1000; x2++) {
            y = x1 * x2;
            if (isPalindrome(y)) {
                if (largest < y) {
                    largest = y;
                }
            }
        }
    }

    console.log(largest);
};

var start = Date.now();
euler4();
console.log('Time elapsed: ' + (Date.now() - start) + 'ms');
