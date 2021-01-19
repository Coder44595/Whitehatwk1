const Scooter = require('./Scooter')
const { timeStamp } = require('console')
const { hasUncaughtExceptionCaptureCallback } = require('process')




describe('ScooterLocation Constructor', function () {

    test('location near me', function () {
        const aeroHead = new Scooter("aeroHead", 'red', 60, 100)
        expect(aeroHead.scooterID).toBe("aeroHead")
    })

    test('scooterName', function () {
        expect(() => new Scooter()).toThrowError('Please insert Scooter ID')
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


