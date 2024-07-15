import { createContext, useState } from "react";

export const SurveysContext = createContext();

const SurveysContextProvider = ({children}) => {

    const [surveysModalState, setSurveysModalState] = useState(false);

    return (
        <SurveysContext.Provider value={{
            setSurveysModalState,
            surveysModalState
        }}>
            {children}
        </SurveysContext.Provider>
    );
}

export default SurveysContextProvider;
