import axios from 'axios';

const endpoints = {
    "login": "http://localhost:8000/api/auth/login",
    "register": "http://localhost:8000/api/auth/register"
}

export const loginUser = async (data) => {
    try {
        const response = await axios.post(endpoints.login, data);
        return response.data;
    } catch (error) {
        throw new Error(error);
    }
};

export const registerUser = async (data) => {
    try {
        const response = await axios.post(endpoints.register, data);
        return response.data;
    } catch (error) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
        throw new Error(error);
    }
};