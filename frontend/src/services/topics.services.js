import axios from "./axios.js";

export const getAllTopics = async() => {
    try {
        const topics = await axios.get("");
        return topics;
    } catch (error) {
        console.log(error);
    }
}