
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

export const getAllCuestionBySurvey = async (req,res) =>{

    const {idSurvey}=req.body

    try {
        const questions = await  Question.find({survey:idSurvey}).populate('answer')

        if (!questions.length) {
            return res.status(404).json({ message: 'No quiestions found for this survey' });
        }

        res.status(201).json(questions);
    } catch (error) {
        res.status(500).json({ message: 'An error occurred fetching the questions', error: error.message });
    }

}