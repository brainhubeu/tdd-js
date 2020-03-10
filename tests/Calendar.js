const sinon = require('sinon');
const { expect } = require('./setup');
const Calendar = require('../Calendar');

let clock;

describe('Calendar', () => {
  beforeEach(() => {
    if (clock) {
      clock.restore();
    }
  });

  describe('#showMonth', () => {
    it('works for January 2020 (31 days, 5 weeks, starts on Wednesday, ends on Friday)', () => {
      clock = sinon.useFakeTimers(new Date('2020-01-01 12:00:00'));
      const calendar = new Calendar();

      const result = calendar.showMonth();

      expect(result).to.equal(`
2020
January
Su Mo Tu We Th Fr Sa
          1  2  3  4
 5  6  7  8  9 10 11
12 13 14 15 16 17 18
19 20 21 22 23 24 25
26 27 28 29 30 31
`);
    });
  });
});
