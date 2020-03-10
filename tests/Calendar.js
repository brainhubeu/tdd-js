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

    it('works for February 2020 (29 days, 5 weeks, starts on Saturday, ends on Saturday)', () => {
      clock = sinon.useFakeTimers(new Date('2020-02-01 12:00:00'));
      const calendar = new Calendar();

      const result = calendar.showMonth();

      expect(result).to.equal(`
2020
February
Su Mo Tu We Th Fr Sa
                   1
 2  3  4  5  6  7  8
 9 10 11 12 13 14 15
16 17 18 19 20 21 22
23 24 25 26 27 28 29
`);
    });

    it('works for March 2020 (31 days, 5 weeks, starts on Sunday, ends on Tuesday)', () => {
      clock = sinon.useFakeTimers(new Date('2020-03-01 12:00:00'));
      const calendar = new Calendar();

      const result = calendar.showMonth();

      expect(result).to.equal(`
2020
March
Su Mo Tu We Th Fr Sa
 1  2  3  4  5  6  7
 8  9 10 11 12 13 14
15 16 17 18 19 20 21
22 23 24 25 26 27 28
29 30 31
`);
    });

    it('works for April 2020 (30 days, 5 weeks, starts on Wednesday, ends on Thursday)', () => {
      clock = sinon.useFakeTimers(new Date('2020-04-01 12:00:00'));
      const calendar = new Calendar();

      const result = calendar.showMonth();

      expect(result).to.equal(`
2020
April
Su Mo Tu We Th Fr Sa
          1  2  3  4
 5  6  7  8  9 10 11
12 13 14 15 16 17 18
19 20 21 22 23 24 25
26 27 28 29 30
`);
    });

    it('works for May 2020 (31 days, 6 weeks, starts on Friday, ends on Sunday)', () => {
      clock = sinon.useFakeTimers(new Date('2020-05-01 12:00:00'));
      const calendar = new Calendar();

      const result = calendar.showMonth();

      expect(result).to.equal(`
2020
May
Su Mo Tu We Th Fr Sa
                1  2
 3  4  5  6  7  8  9
10 11 12 13 14 15 16
17 18 19 20 21 22 23
24 25 26 27 28 29 30
31
`);
    });

    it('works for February 2026 (28 days, 4 weeks, starts on Sunday, ends on Saturday)', () => {
      clock = sinon.useFakeTimers(new Date('2026-02-01 12:00:00'));
      const calendar = new Calendar();

      const result = calendar.showMonth();

      expect(result).to.equal(`
2026
February
Su Mo Tu We Th Fr Sa
 1  2  3  4  5  6  7
 8  9 10 11 12 13 14
15 16 17 18 19 20 21
22 23 24 25 26 27 28
`);
    });
  });
});
