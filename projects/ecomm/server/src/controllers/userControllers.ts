import "dotenv/config";
import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import { PrismaClient } from "@prisma/client";

let prisma: PrismaClient;

const getPrisma = () => {
    if (!prisma) {
        prisma = new PrismaClient();
    }
    return prisma;
};

export interface User {
    id: number;
    email: string;
    password_hash: string;
}

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
        const password_hash = await hashedPassword(password);
        const prismaClient = getPrisma();

        const created = await prismaClient.user.create({
            data: {
                email: userEmail,
                password_hash: password_hash
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
