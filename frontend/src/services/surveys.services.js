import axios from "./axios";

export const getAllSurveys = async() => {
    try {

        const surveys = await axios.get("/survey/surveys");
        return surveys;

    } catch (error) {
        console.log(error);
    }
}