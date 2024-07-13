import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    
    documentType: {
        type: String,
        enum: [
            "Cedula de ciudadania",
            "Tarjeta de identidad",
            "Cedula de extranjeria",
        ],
        required: true,
    },

    documentNumber: {
        type: String,
        unique: true,
        required: true,
    },

    firstName: {
        type: String,
        required: true,
    },

    lastName: { 
        type: String,
        required: true 
    },

    gender: {
        type: String,
        enum: ["Hombre", "Mujer", "Intersexual", "Indefinido", "Prefiere no decir"],
        required: true,
    },

    mobilePhone: { 
        type: Number 
    },

    phone: { 
        type: Number
    },

    email: { 
        type: String, 
        unique: true, 
        required: true 
    },

    municipality: { 
        type: String, 
        required: true 
    },

    address: { 
        type: String 
    },

    neighborhood: { 
        type: String, 
        required: true 
    },

    birthDate: { 
        type: Date, 
        required: true 
    },

    ethnicity: { 
        type: String, 
        required: true 
    },

    disability: { 
        type: String, 
        required: true 
    },

    socioeconomicStratum: { 
        type: Number, 
        required: true 
    },

    educationLevel: { 
        type: String, 
        required: true 
    },

    deviceAcces:{
        type: Boolean,
        required:true,
    },
    
    devices: {
        type: String,
        enum: ["Telefono Movil", "Computador", "Tablet", "Otro"],
    },

    connectivityInternet: { 
        type: Boolean,
        required: true, 
    },
    healthRegime: { 
        type: String, 
        enum: ["Subsidiado", "Contributivo"] 
    },

    password: { 
        type: String, 
        required: true 
    },

    role: { 
        type: String, 
        enum: ["admin", "ciudadano"], 
        required: true },
    
    survey:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Survey'
    }]
});

export default mongoose.model('User',userSchema)
