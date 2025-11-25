type user = {

    id:number
    name:string


}
type Admin = {

    id:number
    username:string


}

let Alan:user|Admin = {id:45,name:"Alan"}

Alan = {id:67,username:"Alan Admin one"}


function dbconnect(id:number | string){

    if (typeof id === "string") {

        id.toLowerCase()
        
    }

    // if(id=== "number"){
    //     id+33; 
    // }


}


let arr1:(string|number)[] = ["Alan Sabu",46]

export{}