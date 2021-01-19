/**Creates a class scooter
 * 
 */
class Maintance {

    scooterLocation;
    scooterID
    batteryPercentage;
    damage;
    allScooters = [];

    /**
     *  @param {string}scooterLocation--scooterLocation
     * @param {string}battery--BatteryPercentage
     * @param {string} scooterID--ScooterID
     */

    constructor(_scooterLocation, batteryPercentage, _ScooterID, damage) {
        this.scooterID = scooterID;
        this._scooterLocation = _scooterLocation
        this.batteryPercentage = batteryPercentage;
        this.damage = damage;

        this.allScooters.push(this.scooterID)
    }





    /**
     * Method to repair scooter
     */
    repair() {
        if (this.damage) {
            this.damage = false;
            console.log("Repair Complete")
        }
    }
}