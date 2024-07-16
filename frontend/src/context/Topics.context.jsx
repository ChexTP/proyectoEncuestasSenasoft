import { createContext, useState } from 'react';

export const TopicsContext = createContext();

const TopicsContextProvider = ({children}) => {

    const [topicModalState, setTopicModalState] = useState(false);
    
    return (
        <TopicsContext.Provider value={{
            topicModalState,
            setTopicModalState
        }}>
            { children }
        </TopicsContext.Provider>
    );
}

export default TopicsContextProvider;
