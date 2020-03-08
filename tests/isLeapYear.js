const isLeapYear = require('../isLeapYear');
const { expect } = require('chai');

describe('isLeapYear', () => {
  it('returns false for a year non-divisible by 4', () => {
    const result = isLeapYear(2019);

    expect(result).to.equal(false);
  });
});
