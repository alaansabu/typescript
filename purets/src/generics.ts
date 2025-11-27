function identityone<T>(val:T):T{
        return val


}

interface bottle {
    brand : string ,
    type:number
}
identityone<bottle>({

    brand:"celio",
    type:3
})

//generics in array


function findNamae<type>(val:type[]):type|undefined{

    const nameidx = 3
    return val[nameidx]

} 



const getMoreName = <t>(val:t[]):t |undefined=>{

    
    const nameidx = 5
    return val[nameidx]

    
   
    



}

interface fetchUserData{

    user_id : string;
    userName:string;


}

//genric class
function anotherexample<t,u extends fetchUserData>(valone:t,valtwo:u):object {
return {

    valone,valtwo
}
}


anotherexample(2,{user_id:"Dev one",userName:"Alan Sabu"})

