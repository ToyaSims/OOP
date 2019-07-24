let dicefac = new DiceFactory(6);
let dicetester = new DiceTester();

describe("DiceFactory", function(){
  it("should return random number",function(){
    let result = dicefac.makeDie();
    expect(result).toMatch(/\d{1,6}/)
  })

})

describe("DiceTester", function(){
  it("should throw error if die is not fair",function(){
    expect(dicetester.testDie(dicefac)).toBeFalsy()
  })

describe("DiceTester", function(){
  it("should return true if the die is fair ",function(){
    expect(dicetester.testDie(dicefac)).toBeTruthy()
  })
})

})