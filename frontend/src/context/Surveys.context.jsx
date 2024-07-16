import { createContext, useState, useEffect } from "react";

import { getAllSurveys } from "../services/surveys.services.js";

export const SurveysContext = createContext();

const SurveysContextProvider = ({children}) => {

    const [surveysModalState, setSurveysModalState] = useState(false);
    const [surveyLoading, setSurveyLoading] = useState(true);

    // renderizar las encuestas
    const [surveys, setSurveys] = useState([]);
    useEffect(() => {
        const getSurveysSerice = async() => {
            try {
                const allSurvies = await getAllSurveys();
                setSurveys(allSurvies.data);
                setSurveyLoading(false);
            } catch (error) {
                setSurveyLoading(false);
                console.log(error);
            }
        }
        getSurveysSerice();

    }, []);

    return (
        <SurveysContext.Provider value={{
            setSurveysModalState,
            surveysModalState,
            surveys,
            setSurveys,
            surveyLoading,
            setSurveyLoading
        }}>
            {children}
        </SurveysContext.Provider>
    );
}

export default SurveysContextProvider;
