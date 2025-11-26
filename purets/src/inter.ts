interface takephoto{

bursttime:number
flash:boolean
vide0:string


}

interface story{

    story:string
    
}

class youtube implements takephoto,story{

    constructor(

public bursttime:number,
public flash:boolean,
public vide0:string,
public story:string,
shorts:string
    ){}
}