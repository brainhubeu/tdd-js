const assert = require('assert');

const splitStringIntoChunks = require('./splitStringIntoChunks');

const isEqual = (x, y) => JSON.stringify(x) === JSON.stringify(y);

assert(isEqual(splitStringIntoChunks('', 2), []));
assert(isEqual(splitStringIntoChunks('a', 2), ['a']));
assert(isEqual(splitStringIntoChunks('ab', 2), ['ab']));
assert(isEqual(splitStringIntoChunks('abc', 2), ['ab', 'c']));
assert(isEqual(splitStringIntoChunks('abcd', 2), ['ab', 'cd']));
assert(isEqual(splitStringIntoChunks('abcde', 2), ['ab', 'cd', 'e']));
assert(isEqual(splitStringIntoChunks('abcde', 3), ['abc', 'de']));
assert(isEqual(splitStringIntoChunks('abcde', 4), ['abcd', 'e']));
assert(isEqual(splitStringIntoChunks('abcde', 5), ['abcde']));
assert(isEqual(splitStringIntoChunks('abcde', 6), ['abcde']));

console.log('all the tests passed');
