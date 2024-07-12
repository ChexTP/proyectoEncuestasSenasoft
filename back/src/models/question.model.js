import mongoose from 'mongoose'

const questionSchema = new mongoose.Schema({

    questionText:{
        type:Text,
        required:true
    },

    survey:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Survey',
        required:true
    }

})

export default mongoose.model('Question',questionSchema)