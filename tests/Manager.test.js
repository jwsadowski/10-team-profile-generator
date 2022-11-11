const Manager = require('../lib/manager');


    describe('manager', () => {
        it("should return a 'number' property set to the 'id' argument", () => {
            const id = 1;
            const name = "Jared"
            const email = "jared@fakeemail.com"
            const officeNumber = 1;
            const school = "USC";
            const manager = new Manager(name, id, email, officeNumber, school);
            expect(manager.id).toEqual(id);
            expect(manager.name).toEqual(name);
            expect(manager.email).toEqual(email);
            expect(manager.officeNumber).toEqual(officeNumber);
            expect(manager.school).toEqual(school);
        })
    });


    it("should throw an error if not provided a 'number' value", () => {
        const id = "one";
        const name = "Jared";
        const email = "jared@fakeemail.com";
        const officeNumber = 1;
        const school = "USC";
        const manager = new Manager(id, name, email, officeNumber, school);
        const err = new Error(
            "Expected parameter 'id' to be a number"
        );
        expect (() => manager.getId()).toThrowError(err);
      });
         