
const Scooter = require('./Scooter')

const { timeStamp } = require('console')
const { hasUncaughtExceptionCaptureCallback } = require('process')




describe('Scooter Constructor', function () {

    test('has a name', function () {
        const aeroHead = new Scooter("aeroHead", 'red', 60, 100)
        expect(aeroHead.scooterID).toBe("aeroHead")
    })

    test('does not have a name', function () {
        expect(() => new Scooter()).toThrowError('Please insert Scooter ID')
    })

    test('has a color', function () {
        const aeroHead = new Scooter("aeroHead", 'red', 60, 100)
        expect(aeroHead.color).toBe('red')
    })

    test('speed', function () {
        const aeroHead = new Scooter("aeorHead", 'red', 60, 100)
        expect(aeroHead.speed).toBe(60)
    })

    test('battery', function () {
        const aeroHead = new Scooter("aeorHead", 'red', 60, 100)
        expect(aeroHead.batteryPercentage).toBe(100)
    })

    test('damage', function () {
        const aeroHead = new Scooter("aeorHead", 'red', 60, 100, false)
        expect(aeroHead.damage).toBe(false)
    })

    test('Send scooter', function () {
        const aeroHead = new Scooter("aeorHead", 'red', 60, 100)
        expect(batteryPercentage.allscooter).tocontain(aeroHead)
    })

    /**
     * test('Send scooter damage', function() {
     *    const aeroHead = new Scooter("aeroHead", 'red', 60, 100, true)
     * expect(batteryPercenatge.allscooter).toContain(true
     })
     */

    test('damage', function () {
        const aeroHead = new Scooter("repair", 'red', 60, 100, true)
        // expect (aeroHead.damage).toBe(true)
        aeroHead.repairAllScooter()
        expect(aeroHead.damage).toBe(false)
    })

})



