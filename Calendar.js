/* eslint-disable class-methods-use-this */

class Calendar {
  showMonth() {
    const now = new Date();
    const date = new Date();
    date.setDate(1);
    let days = ' '.repeat(3 * date.getDay());
    for (let dayOfMonth = 1; ; dayOfMonth += 1) {
      date.setDate(dayOfMonth);
      if (date.getMonth() !== now.getMonth()) {
        break;
      }
      if (dayOfMonth < 10) {
        days += ` ${dayOfMonth}`;
      } else {
        days += dayOfMonth;
      }
      if (date.getDay() === 6) {
        days += '\n';
      } else {
        days += ' ';
      }
    }
    days = days.replace(/ $/, '');
    days = days.replace(/\n$/, '');

    return `
${new Date().getFullYear()}
${new Date().toLocaleString('default', { month: 'long' })}
Su Mo Tu We Th Fr Sa
${days}
`;
  }
}

module.exports = Calendar;
