import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";


export const  productCard = async(req:Request,res:Response)=>{

    const prisma = new PrismaClient();

try {
      const data = await prisma.products.findMany({

  select: {
    name: true,
    price: true,
    image: true,
  },
});
console.log(data);
res.json(data)

    
} catch (error) {
    

    res.status(400).json(error)
}



  



}