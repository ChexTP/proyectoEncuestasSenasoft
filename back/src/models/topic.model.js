import mongoose from 'mongoose'

const topicSchema = new mongoose.Schema({

    topicTitle:{
        type:String,
        required:true
    },

    survey:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Survey',
        required:true
    }

})

export default mongoose.model('Topic',topicSchema)