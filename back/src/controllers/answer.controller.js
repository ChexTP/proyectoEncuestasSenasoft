import Answer from '../models/answer.model.js'

export const createAnswer = async (req,res)=>{

        const {answer,questionId,userId}=req.body

        try {
            
            const newAnswer = new Answer({
                answer,
                question:questionId,
                user:userId
            })

            await newAnswer.save()

            res.status(201).json({message:"answer add correctly",answer:newAnswer})

        } catch (error) {
            res.status(500).json({ message: 'An error occurred', error: error.message });
        }

    }