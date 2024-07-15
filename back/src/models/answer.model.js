import mongoose from 'mongoose'

const answerSchema = new mongoose.Schema({

    answer:{
        type:String,
        required:true
    },

    question:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Question',
        required:true
    },

    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true,
    },


})

export default mongoose.model('Answer',answerSchema)