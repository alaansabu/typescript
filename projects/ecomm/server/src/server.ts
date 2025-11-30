import express from 'express';
import {connection } from "./config/connect";
import type { Request, Response } from 'express';
import dotenv from "dotenv"
dotenv.config()
const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.get("/",(req:Request,res:Response)=>{
    res.send("hllo server")
})
//test prisma 
app.post("/add-user", async (req: Request, res: Response) => {
  const { email, password_hash } = req.body;
 if (!email || !password_hash) {
      return res.status(400).json({ error: "email and password are required" });
    }
  try {
    const query =
  "INSERT INTO User (email, password_hash) VALUES (?, ?)";


    const [result] = await connection.execute(query, [
      email,
      password_hash,
    ]);

    res.status(201).json({
      message: "User inserted",
      userId: (result as any).insertId,
    });
  } catch (error: any) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

app.listen(5000,async()=>{
    console.log("server successfully running at port 5000🚀🚀")

})


