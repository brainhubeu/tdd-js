const isLeapYear = require('../isLeapYear');
const { expect } = require('chai');

describe('isLeapYear', () => {
  it('returns false for a year non-divisible by 4', () => {
    const result = isLeapYear(2019);

    expect(result).to.equal(false);
  });

  it('returns true for a year divisible by 4', () => {
    const result = isLeapYear(2020);

    expect(result).to.equal(true);
  });

  it('returns false for a year divisible by 100', () => {
    const result = isLeapYear(2100);

    expect(result).to.equal(false);
  });
});
