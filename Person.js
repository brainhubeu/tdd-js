const firstName = Symbol('firstName');
const lastName = Symbol('lastName');

class Person {
  setFirstName(name) {
    this[firstName] = name;
  }

  setLastName(name) {
    this[lastName] = name;
  }

  getInitials(length) {
    return this[firstName].substr(0, length) + this[lastName].substr(0, length);
  }
}

module.exports = Person;
