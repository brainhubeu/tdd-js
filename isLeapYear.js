function isLeapYear(year) {
  return !(year % 4) && !!(year % 100);
}

module.exports = isLeapYear;
