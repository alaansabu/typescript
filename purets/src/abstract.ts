//abstract classes 


abstract class payment{

constructor(
upiId:string,
amount:number,
isPaid:boolean
){}
abstract premiumCust():void
}

class premiumuser extends payment{

constructor(

public upiId:string,
public amount:number,
public isPaid:boolean

){
    super(upiId,amount,isPaid)

}
premiumCust(): void {
if (this.isPaid ===true) {
    console.log("this is a premium user and he is eligible to acess the premium servies");
    
}

}
}