import mongoose from 'mongoose'
// import surveyModel from './survey.model.js'

const topicSchema = new mongoose.Schema({

    topicTitle:{
        type:String,
        required:true
    },

    survey:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Survey',
    
    }


})

export default mongoose.model('Topic',topicSchema)