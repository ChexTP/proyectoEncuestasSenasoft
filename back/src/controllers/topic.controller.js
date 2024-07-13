import Topic from '../models/topic.model.js'
import Survey from '../models/survey.model.js'
import mongoose from 'mongoose'


export const addTopic = async (req,res)=>{

    //recibir id de la encuesta a asociar el tema y el tema a asociar
    const {surveyId,topicTitle} = req.body

    try {
        //verificar que la ecuesta existe
        const surveyFound= await Survey.findById(surveyId)
        if(!surveyFound) return res.status(404).json({message:'Survey not found'})
        
        //crear el nuevo tema
        const newTopic = new Topic({
            topicTitle,
            survey:surveyFound._id,
        })
        
        //guardar el nuevo tema 
        await newTopic.save()

        res.status(201).json({message:"Topic added to survey correctly",topic:newTopic})

    } catch (error) {

        res.status(500).json({message:"error to added topic",error:error.message})
        
    }


}