//type narrowing

function getid(id:string|number){

if (typeof id === "number") {

    return 0
}
else{
    return "fuck you"
}


}
interface user{
    name:string
    email:string
}
interface admin extends user{

    Admin:boolean

}

function isAdmin(account:admin|user){

    //logic??
    if (("admin" in account)== true){
    console.log("admin");
    // return account.Admin
    
    }else{
      
const promoted:admin = {...account,Admin:true}

console.log("he is promoted");

    }
}



//instance of narrowing  


type  fish = {swim:()=>void }
type  bird= {fly:()=>void }

function petIdent(pet:fish|bird){

   (pet as fish).swim !== undefined


}

  interface circle{

    
  }