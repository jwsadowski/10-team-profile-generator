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


 it("should throw an error if not provided a 'number' value", () => {
     const id = "five";
     const name = "John"
     const email = "John@fakeemail.com"
     const school = "UWM"
     const intern = new Intern(name, id, email, school);
     const err = new Error(
         "Expected parameter 'id' to be a number"
     );
     expect (() => intern.getId()).toThrowError(err);
 });