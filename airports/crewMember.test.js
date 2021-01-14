const crewMember =require("./crewMember")

describe('crewMember', function(){

    test('has a age', function(){
        const Adam = new crewMember('Adam','Pilot', 32)
        expect(Adam.age).toEqual(32)
    })
    test('has a name', function(){
        const Allan = new crewMember('Allan','Pilot', 32)
        expect(Allan.age).toEqual(32)
    })

})
