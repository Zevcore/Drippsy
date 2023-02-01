import Cookies from "js-cookie";

export const getUser = () => {
    let user = Cookies.get("user");

    return JSON.parse(user) ?? null;
}

export const getToken = () => {
    let token = Cookies.get("X-API-TOKEN");

    return token ?? null;
}