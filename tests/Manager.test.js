const Manager = require('../lib/manager');


    describe('manager', () => {
        it("should return a 'number' property set to the 'id' argument", () => {
            const id = 1;
            const name = "Jared"
            const email = "jared@fakeemail.com"
            const officeNumber = 1;
            const manager = new Manager(name, id, email, school);
            expect(manager.id).toEqual(id);
            expect(manager.name).toEqual(name);
            expect(manager.email).toEqual(email);
            expect(manager.school).toEqual(school);
        })
    });


 it("should throw and error if not provided a 'number' value", () => {
     const cb = new Manager;
     const err = new Error(
         "Expected parameter 'number' to be a non empty string"
     );
     expect(cb).toThrowError(err);
 });