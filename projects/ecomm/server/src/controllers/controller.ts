import { Request,Response } from "express";


export interface User{

    id:number
    userName:string
    password:string
    gmail:string
    dateCreated : number


}

export interface Session extends User  {


 
    userName:string
    issuedTime:number
    expireTime:number

}

export type patialSession = Omit<Session ,"issued" | "expired">