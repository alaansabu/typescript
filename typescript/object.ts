type user  = {name:string,age:number,isActive:boolean}

function greetPerson(User:user){

    return "hello"+User.name
}
greetPerson({

name:"Alan Sabu",
age:18,
isActive:true

})


interface user1  {
readonly _id :string 
name :string,
age:number,
creditCard?:number

}
function greet(User1:user1){
    // User1._id = ghjkl;
    return User1.name,"welcome to my webpage";
}


type cardNumber ={Number:string}

type cardDate ={date:number}


type cardDetails = cardNumber&cardDate& {

cvv:number
}


export{}
