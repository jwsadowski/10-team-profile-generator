const Engineer = require('../lib/engineer');


    describe('engineer', () => {
        it("should return a 'number' property set to the 'id' argument", () => {
            const id = 2;
            const name = "Grace"
            const email = "grace@fakeemail.com"
            const github = "gracechoi"
            const engineer = new Engineer(name, id, email, github);
            expect(engineer.id).toEqual(id);
            expect(engineer.name).toEqual(name);
            expect(engineer.email).toEqual(email);
            expect(engineer.github).toEqual(github);
        })
    });


 it("should throw and error if not provided a 'number' value", () => {
     const cb = new Engineer;
     const err = new Error(
         "Expected parameter 'number' to be a non empty string"
     );
     expect(cb).toThrowError(err);
 });