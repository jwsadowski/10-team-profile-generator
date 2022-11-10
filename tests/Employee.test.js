const Employee = require('../lib/employee');


    describe('employee', () => {
        it("should return a 'number' property set to the 'id' argument", () => {
            const id = 6;
            const name = "";
            const email = "";
            const role = "";
            const employee = new Employee(name, id, email, school);
            expect(employee.id).toEqual(id);
            expect(employee.name).toEqual(name);
            expect(employee.email).toEqual(email);
            expect(employee.role).toEqual(role);
        })
    });


 it("should throw and error if not provided a 'number' value", () => {
     const cb = new Employee;
     const err = new Error(
         "Expected parameter 'number' to be a non empty string"
     );
     expect(cb).toThrowError(err);
 });