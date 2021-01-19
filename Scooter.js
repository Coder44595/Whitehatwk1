/**Creates a class scooter
 * 
 */
class Scooter {

    scooterID;
    color;
    batteryPercentage;
    damage;
    allScooters = [];

    /**
     *  @param {string}scooterID--scooter.name
     * @param {string}color--Scooter color
     * @param {string}battery--BatteryPercentage 
     */

    constructor(scooterID, batteryPercentage, color, damage) {
        this.scooterID = scooterID;
        this.color = color;
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

module.exports = Scooter