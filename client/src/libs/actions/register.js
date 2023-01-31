import axios from 'axios';

const endpoint = "http://localhost:8000/api/auth/register"

export const registerUser = async (data) => {
    try {
        const response = await axios.post(endpoint, data);
        return response.data;
    } catch (error) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
        throw new Error(error);
    }
};
