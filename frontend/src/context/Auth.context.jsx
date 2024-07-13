import { createContext, useState, useEffect, startTransition } from 'react';
import Cookies from "js-cookie";

import { verifyToken } from '../services/auth.services.js';

export const AuthContext = createContext();

const AuthContextProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);

    // verificar si el usuario esta verificado
    useEffect(() => {
        
        const checkLogin = async() => {
            const cookies = Cookies.get();

            if (!cookies.token) {
                setIsAuthenticated(false);
                setUser(null);
            }

            try {
                const res = await verifyToken(cookies.token);

                if (!res.data) {
                    setIsAuthenticated(false);
                    setLoading(false);
                    return setUser(null);
                }
                
                setIsAuthenticated(true);
                setUser(res.data);
                setLoading(false);

            } catch (error) {
                console.log(error);
                setIsAuthenticated(false);
                setUser(null);
                setLoading(false);
            }
        }
        checkLogin();
    }, []);
    
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
