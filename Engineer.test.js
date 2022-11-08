const index = require('index.js');
const { it } = require('node:test');
const { describe } = require('yargs');

describe('index.js', () => {
    describe('Engineer', () => {
        it("should return a 'number' property set to the 'id' argument", () => {
            const id = 1;
            const obj = new Engineer(number);
            expect(obj.number).toEqual(number);
        })
    })
});

it("should throw an error if not provided a 'number' value", () => {
    const cb = new Engineer;
    const err = new Error(
        "Expected parameter 'number' to be a non empty string"
    );
    expect(cb).toThrowError(err);
});