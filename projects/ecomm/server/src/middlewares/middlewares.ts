import { Request,Response,NextFunction} from "express";


export const authMidlleWare = (req:Request,res:Response,next:NextFunction) =>{
    try {
    const authHeader = req.headers.authorization;
      console.log(authHeader);
      
  if(!authHeader){

return res.status(400).json({"error":"header not found"});

  }
  const token = req.headers["authorization"];

console.log("token is unavailabe",token);

if(!token){
    return res.status(400).json({"message":"token id uavailabe"})
}

} catch (error) {
    console.log(error)
    
}



next()


}