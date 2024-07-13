import User from '../models/user.model.js'
import bcrypt from 'bcryptjs'
import {createAccesToken} from '../lib/jwt.js'
import dotenv from 'dotenv'
import jwt from "jsonwebtoken"

dotenv.config()

const TOKEN_SECRET = process.env.TOKEN_SECRET

export const register = async (req,res)=> {

    const {
        documentType,
        documentNumber,
        firstName,
        lastName,
        gender,
        mobilePhone,
        phone,
        email,
        municipality,
        address,
        neighborhood,
        birthDate,
        ethnicity,
        disability,
        socioeconomicStratum,
        educationLevel,
        deviceAcces,
        devices,
        connectivityInternet,
        healthRegime,
        password,
        role
    }=req.body

    try {

        const passwordHash = await bcrypt.hash(password, 10)
        
        const newUser = new User({
            documentType,
            documentNumber,
            firstName,
            lastName,
            gender,
            mobilePhone,
            phone,
            email,
            municipality,
            address,
            neighborhood,
            birthDate,
            ethnicity,
            disability,
            socioeconomicStratum,
            educationLevel,
            deviceAcces,
            devices,
            connectivityInternet,
            healthRegime,
            password:passwordHash,
            role
        })

        const userSaved=await newUser.save()

        const token= await createAccesToken({id:userSaved._id})
        res.cookie("token",token)

        res.json({
            
            id:userSaved._id,
            documentType:userSaved.documentType,
            documentNumber:userSaved.documentNumber,
            firstName:userSaved.firstName,
            lastName:userSaved.lastName,
            gender:userSaved.gender,
            mobilePhone:userSaved.mobilePhone,
            phone:userSaved.phone,
            email:userSaved.email,
            municipality:userSaved.municipality,
            address:userSaved.address,
            neighborhood:userSaved.neighborhood,
            birthDate:userSaved.birthDate,
            ethnicity:userSaved.ethnicity,
            disability:userSaved.disability,
            socioeconomicStratum:userSaved.socioeconomicStratum,
            educationLevel:userSaved.educationLevel,
            deviceAcces:userSaved.deviceAcces,
            devices:userSaved.devices,
            connectivityInternet:userSaved.connectivityInternet,
            healthRegime:userSaved.healthRegime,
            role:userSaved.role,

        })

    } catch (error) {
        res.status(500).json({message:error.message})
    }


}

export const login = async (req,res)=> {
     
    // traer los datos desde el body de la peticion
    const {email,password} = req.body

    try {
        //buscar el ususario por email
        const userFound = await User.findOne({email})

        //verificar si el ususario existe o no en la DB
        if(!userFound) return res.status(400).json({message:"User not found"})

        //comparar contraseña de userFound con la ingresada
        const isMatch = await bcrypt.compare(password,userFound.password)

        if(!isMatch) return res.status(400).json({message:"Incorrect Password"})

        //creacion del token 
        const token= await createAccesToken({
            id:userFound._id,
            role:userFound.role,
        })
        res.cookie("token",token)
        
        // envio del json al cliente con los datos de ususario
        res.json({
            id:userFound._id,
            documentType:userFound.documentType,
            documentNumber:userFound.documentNumber,
            firstName:userFound.firstName,
            lastName:userFound.lastName,
            gender:userFound.gender,
            mobilePhone:userFound.mobilePhone,
            phone:userFound.phone,
            email:userFound.email,
            municipality:userFound.municipality,
            address:userFound.address,
            neighborhood:userFound.neighborhood,
            birthDate:userFound.birthDate,
            ethnicity:userFound.ethnicity,
            disability:userFound.disability,
            socioeconomicStratum:userFound.socioeconomicStratum,
            educationLevel:userFound.educationLevel,
            deviceAcces:userFound.deviceAcces,
            devices:userFound.devices,
            connectivityInternet:userFound.connectivityInternet,
            healthRegime:userFound.healthRegime,
            role:userFound.role,

        })

    } catch (error) {
        res.status(500).json({message:error.message})
    }
        
    
}

export const logout =(req,res)=>{
    res.cookie("token","",{
        expires: new Date(0),
    })
    return res.sendStatus(200)
}   

export const verifyToken = async (req, res) => {
    const { token } = req.cookies;
    if (!token) return res.send(false);
  
    jwt.verify(token, TOKEN_SECRET, async (error, user) => {
      if (error) return res.sendStatus(401);
  
      const userFound = await User.findById(user.id);
      if (!userFound) return res.sendStatus(401);
  
      return res.json({
        id:userFound._id,
        documentType:userFound.documentType,
        documentNumber:userFound.documentNumber,
        firstName:userFound.firstName,
        lastName:userFound.lastName,
        gender:userFound.gender,
        mobilePhone:userFound.mobilePhone,
        phone:userFound.phone,
        email:userFound.email,
        municipality:userFound.municipality,
        address:userFound.address,
        neighborhood:userFound.neighborhood,
        birthDate:userFound.birthDate,
        ethnicity:userFound.ethnicity,
        disability:userFound.disability,
        socioeconomicStratum:userFound.socioeconomicStratum,
        educationLevel:userFound.educationLevel,
        deviceAcces:userFound.deviceAcces,
        devices:userFound.devices,
        connectivityInternet:userFound.connectivityInternet,
        healthRegime:userFound.healthRegime,
        role:userFound.role,
      });
    });
  };
  