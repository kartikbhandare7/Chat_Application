import axios from "axios";

const API = axios.create({
    baseURL: "http://localhost:5000/api",
});

export const getMessages = async () => {
    const response = await API.get("/messages");
    return response.data.data;
};