const Airport = require('./Airport');
const Plane = require('./Plane');
const Passenger = require('./Passenger');
const Bag = require('./Bag');
const Person = require('./Person');
const fsp = require('fs').promises; 
const fs = require('fs'); 
const { doesNotMatch, fail } = require('assert');

describe('Airport', () => {


    
    test('has a name, terminal and gates', () => {
        // given
        const LHR = new Airport('LHR', 2, 3);
        const JFK = new Airport('JFK', 4, 6);

        // then
        expect(LHR.airportName).toBe('LHR');
        expect(LHR.terminals).toBe(2);
        expect(LHR.planes).toBe(3);
        expect(JFK.airportName).toBe('JFK');
        expect(JFK.terminals).toBe(4);
        expect(JFK.planes).toBe(6);
    });


 
});