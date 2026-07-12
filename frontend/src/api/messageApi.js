import axios from "axios";

const API = axios.create({
    baseURL: "https://chat-application-2-zaro.onrender.com/api",
});

export const getMessages = async () => {
    const response = await API.get("/messages");
    return response.data.data;
};
