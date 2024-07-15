
import Question from '../models/question.model.js'

export const createQuestion = async (req,res)=>{

    const { idSurvey,questionText }=req.body

    try {
        
        const newQuestion = new Question({

            questionText,
            survey:idSurvey

        })

        await newQuestion.save()
        
        res.status(201).json({message:"question created correctly",question:newQuestion})

    } catch (error) {
        
        res.status(500).json({ message: 'An error occurred', error: error.message });

    }
}