/*
 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

 What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
 */

var euler5 = function() {
    var i = 2520; //assuming solution is higher than the given example, so starting there
    var dividend;
    var divisors = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
    var solutionFound;

    for(i; true; i++) {
        dividend = i;

        solutionFound = divisors.every(function(divisor) {
            return dividend % divisor == 0;
        });

        if(solutionFound) {
            break;
        }
    }

    console.log(i);
};

euler5();
