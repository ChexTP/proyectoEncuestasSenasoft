import Survey from '../models/survey.model.js'
import User from '../models/user.model.js'

export const addSurvey = async (req,res) =>{

    const{
        title,
        description,
        startDate,
        finishDate,
        gender,
        age,
        userId,
        topic=[],
        question=[]
        
    }=req.body

    const image = req.file ? req.file.path : null;
    
    try {
        const newSurvey = new Survey({
            title,
            description,
            startDate,
            finishDate,
            gender,
            age,
            user:userId,
            image,
            topic,
            question
        })
    
        await newSurvey.save()

        res.status(201).json({message:"survey add correctly",survey:newSurvey})
    } catch (error) {
        res.status(500).json({ message: 'An error occurred', error: error.message });
    }

}

export const getAllSurveys = async(req, res) => {
    try {
        
        const surveys = await Survey.find({})
            .populate('topic')
            .populate({
            path: 'question',
            populate: {
                path: 'answer'
                }
            });
        res.status(201).json(surveys);

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'An error occurred created the surveys', error: error.message });
    }
}

export const getSurveyByUser = async (req,res) =>{

    const {userId}=req.body

    try {
        const surveys = await Survey.find({user:userId})
        .populate('topic')
        .populate({
            path:'question',
            populate:{path: 'answer'}
        })

        if (!surveys.length) {
            return res.status(404).json({ message: 'No surveys found for this user' });
        }

        res.status(201).json(surveys);

    } catch (error) {
        res.status(500).json({ message: 'An error occurred fetching the surveys', error: error.message });
    }
}