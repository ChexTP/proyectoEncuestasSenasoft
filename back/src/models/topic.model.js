import mongoose from 'mongoose'

const topicSchema = new mongoose.Schema({

    topicTitle:{
        type:String,
        required:true
    }

})

export default mongoose.model('Topic',topicSchema)