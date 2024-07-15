import mongoose from 'mongoose'

const questionSchema = new mongoose.Schema({

    questionText:{
        type:String,
        required:true
    },

    survey:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Survey',
        required:true
    },

    answer:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Answer',
        default:""
    }

})

export default mongoose.model('Question',questionSchema)