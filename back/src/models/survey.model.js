import mongoose from 'mongoose'

const surveySchema = new mongoose.Schema({

    title:{
        type:String,
        required:true,
        trim:true
    },

    description:{
        type:Text,
        required:true,
    },

    startDate:{
        type:Date,
        required:true,
    },

    finishDate:{
        type:Date,
        required:true,
    },

    gender:{
        type:String,
        enum:["Hombre","Mujer"],
        required:true
    },

    age:{
        type:Number,
        required:true
    },

    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true,
    }

})

export default mongoose.model('Survey',surveySchema)