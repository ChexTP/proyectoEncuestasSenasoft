import mongoose from 'mongoose'

const certificateSchema = new mongoose.Schema({

    generationDate:{
        type:Date,
        required:true
    },

    identifier:{
        type:String,
        required:true,
        unique:true
    },

    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required: true
    },

    survey:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Survey',
        required:true
    }

}) 

export default mongoose.model('Certificate',certificateSchema)