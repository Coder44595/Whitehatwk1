/**
 * Represents a bag taken as either hand or cabin luggage on an aircraft
 */
class Bag {
 
    weight; // not required

    /**
     * Creates a Bag.
     * 
     * @param {number} weight - the weight of the bag
     */
    constructor(weight) {
        this.weight = weight 
    }
  }
   
  const bag = new Bag(16) 
  console.log(bag.weight) // 16


module.exports = Bag;
