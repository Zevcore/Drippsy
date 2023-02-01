import axios from 'axios';

const endpoints = {
    "create": "http://localhost:8000/api/item/login",
    "update": "http://localhost:8000/api/item/update",
    "delete": "http://localhost:8000/api/item/delete",
    "show": "http://localhost:8000/api/item/show",
    "showByIds": "http://localhost:8000/api/item/showByIds",
    "showRecentlyAdded": "http://localhost:8000/api/item/showRecentlyAdded",
}

export const getRecentlyAddedItems = async (count) => {
    try {
        const response = await axios.get(endpoints.showRecentlyAdded + "?count=" + count);
        return response.data;
    } catch (error) {
        throw new Error(error);
    }
};

export const getItem = async (id) => {
    try {
        const response = await axios.get(endpoints.show + "?id=" + id);
        return response.data;
    } catch (error) {
        throw new Error(error);
    }
};