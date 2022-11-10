const Intern = require('../lib/intern');


    describe('intern', () => {
        it("should return a 'number' property set to the 'id' argument", () => {
            const id = 5;
            const name = "John"
            const email = "John@fakeemail.com"
            const school = "UWM"
            const intern = new Intern(name, id, email, school);
            expect(intern.id).toEqual(id);
            expect(intern.name).toEqual(name);
            expect(intern.email).toEqual(email);
            expect(intern.school).toEqual(school);
        })
    });


 it("should throw and error if not provided a 'number' value", () => {
     const cb = new Intern;
     const err = new Error(
         "Expected parameter 'number' to be a non empty string"
     );
     expect(cb).toThrowError(err);
 });