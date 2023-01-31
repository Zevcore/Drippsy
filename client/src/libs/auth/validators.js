import Cookies from "js-cookie";

export const validateLoginFormResponse = (response) => {
    if(response) {
        if(response.code === 200) {
            saveUser(response.token, response.user);
            return true;
        }
        else {
            return false;
        }
    }
}

export const validateLoginFormData = (data) => {
    let errors = [];

    if(!data.get('email')) {
        errors.push("Email is empty!");
    }

    if(!data.get("password")) {
        errors.push("Password is empty!");
    }

    return errors;
}

export const validateRegisterFormData = (data) => {
    let errors = [];

    if(!data.get('email') || !data.get("password") || !data.get("firstname") ||
        !data.get("lastname") || !data.get("date_of_birth") || !data.get("street") ||
        !data.get("number") || !data.get("city") || !data.get("postal_code")) {
        errors.push("All fields are required!");
    }

    if(data.get('email').length < 8) {
        errors.push("Password should have at least 8 chars");
    }

    if(data.get('firstname').length < 3) {
        errors.push("Firstname should have at least 3 chars");
    }

    if(data.get('lastname').length < 3) {
        errors.push("Lastname should have at least 3 chars");
    }

    if(data.get('street').length < 3) {
        errors.push("Street should have at least 3 chars");
    }

    if(data.get('city').length < 3) {
        errors.push("City should have at least 3 chars");
    }

    return errors;
}

export const validateRegisterFormResponse = (response) => {
    if(response) {
        if(response.code === 201) {
            saveUser(response.token, response.user);
            return true;
        }
        else {
            return false;
        }
    }
}


export const saveUser = (token, user) => {
    Cookies.set("X-API-TOKEN", token, {expires: 30});
    Cookies.set("user", user)
}