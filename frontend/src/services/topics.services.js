import axios from "./axios.js";

export const getAllTopics = async() => {
    try {
        const topics = await axios.get("/topic/allTopics");
        return topics;
    } catch (error) {
        console.log(error);
    }
}

export const createTopic = async(topic) => {
    try {
        
        const createdTopic = await axios.post("/topic/addTopic", topic);
        return createdTopic;

    } catch (error) {
        console.log(error);
    }
}