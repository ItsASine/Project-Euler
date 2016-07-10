/*
 A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

 a^2 + b^2 = c^2
 For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2.

 There exists exactly one Pythagorean triplet for which a + b + c = 1000.
 Find the product abc.
 */

var euler9 = function() {
    //Euclid's Formula: https://en.wikipedia.org/wiki/Pythagorean_triple#Generating_a_triple
    var max = 100;
    var a, b, c, m, n;
    var triples = [[3,4,5]];
    var answerTriple = [];
    var product;

    for(m=1; m<max; m++) {
        for(n=1; n<max; n++) {
            a = Math.pow(m,2) - Math.pow(n,2);
            b = 2 * m * n;
            c = Math.pow(m,2) + Math.pow(n,2);

            triples.push([a, b, c]);
        }
    }

    triples.forEach(function(triple) {
        if(triple[0] + triple[1] + triple[2] == 1000) {
            answerTriple = triple;
        }
    });

    product = answerTriple.reduce(function (previousValue, currentValue) {
        return previousValue * currentValue;
    });

    console.log(product);
};

var start = Date.now();
euler9();
console.log('Time elapsed: ' + (Date.now() - start) + 'ms');
