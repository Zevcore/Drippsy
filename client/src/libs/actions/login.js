import axios from 'axios';

const endpoint = "http://localhost:8000/api/auth/login"

export const loginUser = async (data) => {
    try {
        const response = await axios.post(endpoint, data);
        return response.data;
    } catch (error) {
        throw new Error(error);
    }
};
