const Engineer = require('../lib/engineer');


    describe('engineer', () => {
        it("should return a 'number' property set to the 'id' argument", () => {
            const id = 2;
            const name = "Grace";
            const email = "grace@fakeemail.com";
            const github = "gracechoi";
            const engineer = new Engineer(name, id, email, github);
            expect(engineer.id).toEqual(id);
            expect(engineer.name).toEqual(name);
            expect(engineer.email).toEqual(email);
            expect(engineer.github).toEqual(github);
        })
    });


 it("should throw an error if not provided a 'number' value", () => {
    const id = "two";
    const name = "Grace";
    const email = "grace@fakeemail.com";
    const github = "gracechoi";
    const engineer = new Engineer(name, id, email, github);
    const err = new Error(
        "Expected parameter 'id' to be a number"
        );
    expect (() => engineer.getId()).toThrowError(err);
  });
     
