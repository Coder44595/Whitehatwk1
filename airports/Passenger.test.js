const Passenger=require("./Passenger")

describe('Passenger', function () {
    test('has a name', function () {
        const passenger = new Passenger('John');
        expect(passenger.name).toBe('John');
    })

})
