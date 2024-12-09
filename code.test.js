const fs = require('fs');
const assert = require('assert');
eval(fs.readFileSync('code.js') + '');

function runTests() {
    const testCases = [
        [[]],
        [[0]],
        [[0, 1], [1, 0]],
        [[0, 1, 2], [2, 0, 2], [0, 2, 1]],
        [[0, 4, 4, 5, 1], [2, 0, 3, 6, 6], [1, 4, 6, 5, 8], [2, 7, 5, 1, 3], [4, 3, 7, 2, 0]],
        Array.from({ length: 10 }, () => Array.from( { length: 10 }, () => Math.floor(Math.random() * 100))),
        Array.from({ length: 100000 }, () => Array.from( { length: 100000 }, () => Math.floor(Math.random() * 1000))),
    ];

    console.log("Test Results");

    testCases.forEach((dm, i) => {
        const results = compare(dm);
        console.log(results);
        console.log();
    });
}

runTests();
