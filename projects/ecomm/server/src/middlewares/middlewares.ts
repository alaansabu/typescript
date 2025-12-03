import { error } from "console";
import { Request,Response,NextFunction} from "express";


export const authMidlleWare = (req:Request,res:Response,next:NextFunction) =>{
try {
      const authHeader = req.headers.authorization;
      console.log(authHeader);
      
  if(!authHeader){

return res.status(400).json({"error":"header not found"});

  }
} catch (error) {
    console.log(error)
    
}


const token = authHeader.split('')[1]

console.log("token is unavailabel",token);

if(!token){
    res.status(400).json({"message":"token ot availabe"})
}


next


}