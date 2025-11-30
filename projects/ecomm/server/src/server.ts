import express from 'express';
import { connectiondb } from "./config/connect";
import { userRouter } from './routes/routes';
import type { Request, Response } from 'express';
import dotenv from "dotenv";
dotenv.config()



const app = express();
app.use(express.json())

app.use(express.urlencoded({ extended: true }));

app.get("/",(req:Request,res:Response)=>{
    res.send("hllo server")
})

app.use('/api/user',userRouter)

app.listen(5000,()=>{
 connectiondb
  console.log("✓ Server successfully running at port 5000🚀🚀")
})


