class BankAccount {
   constructor(balance,intRate,monthlyFee,type) {
       this.balance = balance
       this.intRate = intRate
       this.monthlyFee = monthlyFee
       this.type = type
       this.interest = 0
   }


validateType(){
   if(this.type === "cheque" ||this.type === "savings" ||this.type === "credit")
       {return true}
       else
       {console.log("please enter valid account type")}
   }

   calculateinterest(){
      var result = this.balance * this.intRate/12
      this.interest = result
      return this.interest
   }

finalBalance(){
acc.calculateinterest();
var fBalance = this.balance + this.interest -this.monthlyFee
return fBalance
}
}


