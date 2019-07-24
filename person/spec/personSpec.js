let person = new Person("Nosipho Ngwane",8,"female","Dancing,singing");

describe("person", function(){
  it("should return random number",function(){
    let result = person.fullname();
    expect(result).toBeTruthy();
  })

  it("should return random number",function(){
    let result = person.intro();
    expect(result).toBeTruthy();
  })

})

