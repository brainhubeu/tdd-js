const { expect } = require('chai');

const Person = require('../Person');

describe('Person', () => {
  describe('#getInitials', () => {
    it('returns initials for length 0', () => {
      const person = new Person();
      person.setFirstName('Alejandro');
      person.setLastName('Valverde');

      const initials = person.getInitials(0);

      expect(initials).to.equal('');
    });

    it('returns initials for length 1', () => {
      const person = new Person();
      person.setFirstName('Alejandro');
      person.setLastName('Valverde');

      const initials = person.getInitials(1);

      expect(initials).to.equal('AV');
    });

    it('returns initials for length 2', () => {
      const person = new Person();
      person.setFirstName('Alejandro');
      person.setLastName('Valverde');

      const initials = person.getInitials(2);

      expect(initials).to.equal('AlVa');
    });

    it('returns initials for length 3', () => {
      const person = new Person();
      person.setFirstName('Alejandro');
      person.setLastName('Valverde');

      const initials = person.getInitials(3);

      expect(initials).to.equal('AleVal');
    });

    it('returns initials for length of the first name', () => {
      const person = new Person();
      person.setFirstName('Alejandro');
      person.setLastName('Valverde');

      const initials = person.getInitials(9);

      expect(initials).to.equal('AlejandroValverde');
    });

    it('returns initials for length of the last name', () => {
      const person = new Person();
      person.setFirstName('Alejandro');
      person.setLastName('Valverde');

      const initials = person.getInitials(8);

      expect(initials).to.equal('AlejandrValverde');
    });

    it('returns initials for a very long length', () => {
      const person = new Person();
      person.setFirstName('Alejandro');
      person.setLastName('Valverde');

      const initials = person.getInitials(50);

      expect(initials).to.equal('AlejandroValverde');
    });
  });
});
