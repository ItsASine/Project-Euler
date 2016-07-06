/*
 By starting at the top of the triangle below and moving to adjacent numbers on the row below,
 the maximum total from top to bottom is 23.

 3
 7 4
 2 4 6
 8 5 9 3

 That is, 3 + 7 + 4 + 9 = 23.

 Find the maximum total from top to bottom of the triangle below:

 75
 95 64
 17 47 82
 18 35 87 10
 20 04 82 47 65
 19 01 23 75 03 34
 88 02 77 73 07 63 67
 99 65 04 28 06 16 70 92
 41 41 26 56 83 40 80 70 33
 41 48 72 33 47 32 37 16 94 29
 53 71 44 65 25 43 91 52 97 51 14
 70 11 33 28 77 73 17 78 39 68 17 57
 91 71 52 38 17 14 91 43 58 50 27 29 48
 63 66 04 68 89 53 67 30 73 16 69 87 40 31
 04 62 98 27 23 09 70 98 73 93 38 53 60 04 23

 NOTE: As there are only 16384 routes, it is possible to solve this problem by trying every route.
 However, Problem 67, is the same challenge with a triangle containing one-hundred rows;
 it cannot be solved by brute force, and requires a clever method! ;o)
 */

var triangle = require('./triangle.json');

var topToBottom = function () {
    var rows = triangle.rows;
    var largestNumbers = [];
    var startIndex, start, lowerLeftIndex, lowerLeft, lowerRightIndex, lowerRight, sum;

    start = rows[0][0];
    startIndex = 0;
    largestNumbers.push(start);

    rows.forEach(function (arrayOfNumbers, index) {
        //0 can check 0 and 1
        //1 can check 1 and 2
        //2 can check 2 and 3

        lowerLeftIndex = startIndex;
        lowerRightIndex = lowerLeftIndex + 1;

        lowerLeft = arrayOfNumbers[lowerLeftIndex];
        lowerRight = arrayOfNumbers[lowerRightIndex];

        start = lowerLeft > lowerRight ? lowerLeft : lowerRight;

        startIndex = arrayOfNumbers.indexOf(start);
        if (startIndex != lowerLeftIndex || startIndex != lowerRightIndex) {
            startIndex = arrayOfNumbers.lastIndexOf(start);
        }

        if (index !== 0) {
            largestNumbers.push(start);
        }
    });

    sum = largestNumbers.reduce(function (previousValue, currentValue) {
        return previousValue + currentValue;
    });

    return sum;
};

var bottomToTop = function () {
    var rows = triangle.rows;
    var largestNumbers = [];
    var startIndex, start, upperLeftIndex, upperLeft, upperRightIndex, upperRight, sum, halfCountRow;
    var i, arrayOfNumbers;

    //Calculate initial start index
    var largestInitialSum = 0;
    var lowestRow = rows[rows.length - 1];
    var secondLowestRow = rows[rows.length - 2];
    var x, y = 0;
    var largest = 0;
    halfCountRow = (lowestRow.length - 1) / 2;

    lowestRow.forEach(function (number, index) {
        if (index < halfCountRow) {
            x = index == 0 ? 0 : (number + secondLowestRow[index - 1]);
            y = number + secondLowestRow[index];
        } else {
            x = number + secondLowestRow[index - 1];
            y = index == (lowestRow.length - 1) ? 0 : (number + secondLowestRow[index]);
        }

        largest = Math.max(x, y);

        if (largest > largestInitialSum) {
            startIndex = index;
            largestInitialSum = largest;
        }
    });

    for (i = (rows.length - 1); i >= 0; i--) {
        //0 can check 0 and 1
        //1 can check 1 and 2
        //2 can check 2 and 3
        //-1 can check -1 and -2

        arrayOfNumbers = rows[i];
        halfCountRow = (arrayOfNumbers.length - 1) / 2;

        upperLeftIndex = startIndex == 0 ? 0 : (startIndex - 1);
        upperRightIndex = startIndex == (rows[i].length) ? upperLeftIndex : startIndex;

        upperLeft = arrayOfNumbers[upperLeftIndex];
        upperRight = arrayOfNumbers[upperRightIndex];

        start = i != 0 ? Math.max(upperLeft, upperRight) : rows[0][0];

        startIndex = arrayOfNumbers.indexOf(start);
        if (startIndex != upperLeftIndex || startIndex != upperRightIndex) {
            startIndex = arrayOfNumbers.lastIndexOf(start);
        }

        largestNumbers.push(start);
    }

    sum = largestNumbers.reduce(function (previousValue, currentValue) {
        return previousValue + currentValue;
    });

    return sum;
};

var scrunchie = function () {
    var rowsData = triangle.rows;
    var sum = 0;
    var loop = function (rows, init) {
        rows[init].forEach(function (number, index) {
            rows[init][index] = number +
                Math.max(
                    rows[init + 1][index],
                    rows[init + 1][index + 1]
                )
        });

        if (rows[init].length == 1) {
            sum = rows[init][0];
        } else {
            //I hate recursive functions omg
            loop(rows, init - 1);
        }
    };

    loop(rowsData, (rowsData.length - 2));

    return sum;
};

var euler18 = function () {
    var viaTop = topToBottom();
    var viaBottom = bottomToTop();
    var smoosh = scrunchie();
    var getMaxOfArray = function (numArray) {
        return Math.max.apply(null, numArray);
    };

    var answers = [viaTop, viaBottom, smoosh];
    var max = getMaxOfArray(answers);

    console.log(answers);
    console.log(max);
};

var start = Date.now();
euler18();
console.log('Time elapsed: ' + (Date.now() - start) + 'ms');
