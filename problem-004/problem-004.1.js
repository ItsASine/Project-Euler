/*
 A palindromic number reads the same both ways.
 The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

 Find the largest palindrome made from the product of two 3-digit numbers.
 */

/*
 Improvement: Increased runtime but isPalindrome now works regardless of number length.
 */

var isPalindrome = function (number) {
    var string = String(number);
    var array = Array.from(string);
    var reversedArray = Array.from(string).reverse();
    var x = array.toString();
    var y = reversedArray.toString();

    return x == y;
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
