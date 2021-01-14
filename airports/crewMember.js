const person = require("./Person")
class crewMember extends person{

    name;
    jobRole;
    age;
    
    /**create a constructor with parameters job role age and name
     * @param {string}name - 
     */
    constructor(name, jobRole, age){
        super(name)
        this.jobRole = jobRole
        this.age = age 
    }
}

module.exports = crewMember