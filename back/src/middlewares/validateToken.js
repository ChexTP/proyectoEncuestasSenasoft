import jwt from "jsonwebtoken";
import dotenv from 'dotenv'

dotenv.config()

const TOKEN_SECRET = process.env.TOKEN_SECRET

export const authRequired = (req,res,next)=>{

    const {token} = req.cookies

    if(!token) return res.status(401).json({message:"No token, authorization denied"})

        jwt.verify(token,TOKEN_SECRET,(err,user)=>{
            if(err) return res.status(401).json({message: "Invalid token"});
 
            req.user=user

            next()
        })

}