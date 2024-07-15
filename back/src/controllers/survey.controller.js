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
            image
        })
    
        await newSurvey.save()

        res.status(201).json({message:"survey add correctly",survey:newSurvey})
    } catch (error) {
        res.status(500).json({ message: 'An error occurred', error: error.message });
    }

}

export const getAllSurveys = async(req, res) => {
    try {
        
        const surveys = await Survey.find({});
        res.status(201).json(surveys);

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'An error occurred created the surveys', error: error.message });
    }
}