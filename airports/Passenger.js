const Bag = require("./Bag")
const Person = require("./Person")

class Passenger  extends Person{ 
    
    bags;

    constructor(aName) {
        super(aName);

        this.bags = [];
    }

}
module.exports = Passenger;