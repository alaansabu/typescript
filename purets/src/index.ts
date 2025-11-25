const name:string = "Alansabu"
console.log(name);

document.body.style.background ="red"


class User{

    name:string
    email:string
    private _coursCount :number =0;

    constructor(name:string,email:string){


        this.name = name
        this.email= email
        email ="hey you have be successfully logged in"
        
    }


    get useremail(){

        return `mail is this ${this.email}`
        

    }
    
    get courseCount():number{


        console.log(this._coursCount)
            return this._coursCount
            

    }

    set courseCount(val:number){

        if(val<1){
            throw new Error("value should be given");
        }
        // val =4
        
        // console.log(this._coursCount);/
    }

}

    const Alan = new User("A","a@gmail,com")

    Alan.courseCount-4
    console.log(Alan.courseCount);
    