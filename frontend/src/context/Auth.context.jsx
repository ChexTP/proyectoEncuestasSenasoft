import { createContext, useState, useEffect } from 'react';
// import Cookies from "js-cookie";


export const AuthContext = createContext();

const AuthContextProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);
    
    return (
        <AuthContext.Provider value={{
            user,
            setUser,
            isAuthenticated,
            setIsAuthenticated,
            loading,
            setLoading
        }}>
            {children}
        </AuthContext.Provider>
    );

}

export default AuthContextProvider;
