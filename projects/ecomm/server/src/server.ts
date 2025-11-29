import express from 'express';
import {connection } from "./config/connect";
import type { Request, Response } from 'express';
import dotenv from "dotenv"
dotenv.config()
const app = express();

app.get("/",(req:Request,res:Response)=>{
    res.send("hllo server")
})

app.listen(5000,async()=>{
    console.log("server successfully running at port 5000🚀🚀")
    try {
    
        
    
        const [rows] =await connection.execute("select 1+2 as result")
        console.log(rows);
        
    
    }
        
     catch (error) {
        console.error(error);
        
        
    }




})


