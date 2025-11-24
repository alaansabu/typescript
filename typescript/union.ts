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

export{}