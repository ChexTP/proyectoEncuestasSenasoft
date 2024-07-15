import axios from "./axios";

export const getAllSurveys = async() => {
    try {

        const res = await axios.get("/");
        return res;

    } catch (error) {
        console.log(error);
    }
}