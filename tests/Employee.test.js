const { of } = require('rxjs');
const Employee = require('../lib/employee');


    describe('employee', () => {
        it("should return a 'number' property set to the 'id' argument", () => {
            const id = 6;
            const name = "";
            const email = "";
            const role = "";
            const school = "USC";
            const officeNumber = 2;
            const github = "";
            const employee = new Employee(name, id, email, role, school, officeNumber, github);
            expect(employee.id).toEqual(id);
            expect(employee.name).toEqual(name);
            expect(employee.email).toEqual(email);
            expect(employee.role).toEqual(role);
            expect(employee.school).toEqual(school);
            expect(employee.officeNumber).toEqual(officeNumber);
            expect(employee.github).toEqual(github);
        })
    });

    it("should throw an error if not provided a 'number' value", () => {
        const id = "one";
        const name = "";
        const email = "";
        const role = "";
        const school = "USC";
        const officeNumber = 2;
        const github = "";
        const employee = new Employee(id, name, email, role, school, officeNumber, github);
        const err = new Error(
            "Expected parameter 'id' to be a number"
        );
        expect (() => employee.getId()).toThrowError(err);
      });
         