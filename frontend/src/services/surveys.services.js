import axios from "./axios";

export const getAllSurveys = async() => {
    try {

        const surveys = await axios.get("/survey/surveys");
        return surveys;

    } catch (error) {
        console.log(error);
    }
}

export const addSurvey = async(survey) => {
    try {
        const surveyRes = await axios.post("/survey/addSurvey", survey, {
            headers:{
                'Content-Type': 'multipart/form-data'
            }
        });
        return surveyRes;
    } catch (error) {
        console.log(error);
    }
}