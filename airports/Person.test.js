const person = require('./person');

describe('person', () => {

    test('check name', () => {
        expect(person.William.firstName).toEqual('William');
        expect(person.William.lastName).toEqual('Windsor');
    });
});
