import "dotenv/config";
import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import { PrismaClient } from "@prisma/client";
import Jwt from "jsonwebtoken"
import { configDotenv } from "dotenv";
configDotenv()
let prisma: PrismaClient;

const getPrisma = () => {
    if (!prisma) {
        prisma = new PrismaClient();
    }
    return prisma;
};


const hashedPassword = async (plain: string): Promise<string> => {
    const saltRounds = 12;
    const hashed = await bcrypt.hash(plain, saltRounds);
    return hashed;
};

const comparePassword = async (plain: string, hashed: string): Promise<boolean> => {
    return bcrypt.compare(plain, hashed);
};

export const userSignUp = async (req: Request, res: Response) => {
    console.log("Request body:", req.body); // Debug log
    
    const { email,  password } = req.body as { email?: string; password?: string };
    const userEmail = email ; // Accept either email or gmail field
    
    if (!userEmail || !password || password.length < 8) {
        return res.status(400).json({ 
            error: "email does not exist or password too short",
            received: { email: userEmail, passwordLength: password?.length }
        });
    }

    try {
        const hashedpass = await hashedPassword(password);
       
        const prismaClient = getPrisma();
          
        const created = await prismaClient.user.create({
            data: {
                email: userEmail,
                password_hash: hashedpass
            }
        });

        return res.status(201).json({ message: "User saved", user: { id: created.id, email: created.email } });
    } catch (err: any) {
        console.error("Create user error:", err);
        if (err?.code === "P2002") {
            return res.status(409).json({ error: "Email already registered" });
        }
        return res.status(500).json({ error: "Failed to create user", detail: err?.message ?? String(err) });
    }
}

export const loginUser = async (req:Request,res:Response) => {

    const {email,password} = req.body as {email:string;password:string}

//check if there is user 

const PrismaClient = getPrisma()
const isUser = await PrismaClient.user.findUnique({where:{email},
select:{id:true,email:true,password_hash:true}


})

if(!isUser){
   return  res.status(400).json({"error":"no user found"})

}

//compare password hashed and normal


const isSame = await comparePassword(password,isUser.password_hash);
        if(!isSame){
            console.error("technical error hashing failed")
        }else{
            console.log(" hashing succesfull");
            
        }

        //tocken 
        const JWT_SECREAT = process.env.JWT_SECREAT||"my_super_secret_key"

const token = Jwt.sign({id:isUser.id,email:isUser.email},JWT_SECREAT,{expiresIn:"1h"})
const expiresAt = new Date(Date.now()+60*60*1000)

await prisma.token.create({
data: {

  token:token,
    userId:isUser.id,
    expiresAt:expiresAt

}

  
    



})

res.status(200).json({"message":"session created"})




}



