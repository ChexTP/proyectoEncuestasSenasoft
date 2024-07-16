import axios from "./axios";

export const verifyToken = async() => {
    try {
        const user = await axios.get('/verifyToken');
        return user;
    } catch (error) {
        console.log(error);
        return error;
    }
}

export const login = async(credentials) => {
    try {
        const user = await axios.post('/login', credentials);
        return user;
    } catch (error) {
        console.log(error);
        return error;
    }
}

export const logout = async() => {
    try {
        const logoutResponse = await axios.post('/logout');
        return logoutResponse;
    } catch (error) {
        console.log(error);
        return error;
    }
}

export const registerService = async(data) => {

    try {
        
        const register = await axios.post("/register", data);
        return register;

    } catch (error) {
        console.log(error);
        return error;
    }

}