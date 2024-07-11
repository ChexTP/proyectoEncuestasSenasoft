import User from '../models/user.model.js'
import bcrypt from 'bcryptjs'

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

export const login = (req,res)=> res.send("desde login")