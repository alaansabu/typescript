interface  user{

name:String,
gmail:string,
isPremium:boolean,
isAdmin:()=>string,
ApplayCoupon(couponCode:string ,value:number):number

}

interface developer extends user {
// inheritance

role: "frontend-developer"|"backend-developer"|"db-engineer"


}



const Alan:developer = {name:"Alan sabu",gmail:"a@gmail.com",isPremium:false,

isAdmin:()=>{

    return "he is a admin"
},

ApplayCoupon:(name:"superdiwali",value:46)=>{

let price:number = 2999
return price-value;

},

role:"frontend-developer"
}


export{}