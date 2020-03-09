const { expect } = require('./setup');
const splitStringIntoChunks = require('../splitStringIntoChunks');

describe('splitStringIntoChunks', () => {
  it('works', () => {
    expect(splitStringIntoChunks('', 2)).to.deep.equal([]);
    expect(splitStringIntoChunks('a', 2)).to.deep.equal(['a']);
    expect(splitStringIntoChunks('ab', 2)).to.deep.equal(['ab']);
    expect(splitStringIntoChunks('abc', 2)).to.deep.equal(['ab', 'c']);
    expect(splitStringIntoChunks('abcd', 2)).to.deep.equal(['ab', 'cd']);
    expect(splitStringIntoChunks('abcde', 2)).to.deep.equal(['ab', 'cd', 'e']);
    expect(splitStringIntoChunks('abcde', 3)).to.deep.equal(['abc', 'de']);
    expect(splitStringIntoChunks('abcde', 4)).to.deep.equal(['abcd', 'e']);
    expect(splitStringIntoChunks('abcde', 5)).to.deep.equal(['abcde']);
    expect(splitStringIntoChunks('abcde', 6)).to.deep.equal(['abcde']);
  });
});
