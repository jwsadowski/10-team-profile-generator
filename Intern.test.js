const index = require('index.js');
const { it } = require('node:test');
const { describe } = require('yargs');

describe('index.js', () => {
    describe('intern', () => {
        it("should return a 'number' property set to the 'id' argument", () => {
            const id = 5;
            const obj = new intern;
            expect(obj.number).toEqual(number);
        })
    })
});

it("should throw and error if not provided a 'number' value", () => {
    const cb = new Intern;
    const err = new Error(
        "Expected parameter 'number' to be a non empty string"
    );
    expect(cb).toThrowError(err);
});