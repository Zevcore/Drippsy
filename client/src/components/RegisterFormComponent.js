import styles from "@/styles/forms/Auth.module.scss"
import {registerUser} from "@/libs/auth/actions"
import {useRouter} from "next/router";
import {useEffect, useRef, useState} from "react";
import { validateRegisterFormData } from "@/libs/auth/validators";

export default function RegisterFormComponent() {

    const router = useRouter();
    const [response, setResponse] = useState(null);
    const [errorDiv, setErrorDiv] = useState(null);
    let errorMessage = useRef();

    useEffect(() => {
        setErrorDiv(errorMessage.current);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = new FormData();
        data.append('email', e.target.email.value);
        data.append('password', e.target.password.value);
        data.append('firstname', e.target.name.value);
        data.append('lastname', e.target.surname.value);
        data.append('date_of_birth', e.target.date.value);
        data.append('street', e.target.street.value);
        data.append('street_number', e.target.street_number.value);
        data.append('city', e.target.city.value);
        data.append('postal_code', e.target.postal_code.value);

        if(validateRegisterFormData(data).length !== 0) {
            errorDiv.innerHTML = validateRegisterFormData(data).join("<br>");
            return;
        }

        let res = registerUser(data);
        res.then(data => setResponse(data));

        switch(validateRegisterFormResponse(response)) {
            case true:
                router.push("/");
                break;
            case false:
                let error = document.querySelector(".error");
                error.innerHTML = response.message;
                break;
        }
    }

    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit} className="container w-50 border p-5">
                <h1>Create an account</h1>
                <div className={styles.element}>
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" />
                </div>
                <div className={styles.element}>
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" />
                </div>
                <div className={styles.wrapper}>
                    <div className={styles.element}>
                        <label htmlFor="name" className="form-label">First name</label>
                        <input type="text" className="form-control" id="name" />
                    </div>
                    <div className={styles.element}>
                        <label htmlFor="surname" className="form-label">Last name</label>
                        <input type="text" className="form-control" id="surname" />
                    </div>
                </div>
                <div className={styles.element}>
                    <label htmlFor="date" className="form-label">Date of birth</label>
                    <input type="date" className="form-control" id="date" />
                </div>
                <div className={styles.wrapper}>
                    <div className={styles.element}>
                        <label htmlFor="street" className="form-label">Street</label>
                        <input type="text" className="form-control" id="street" />
                    </div>
                    <div className={styles.element}>
                        <label htmlFor="street_number" className="form-label">Number</label>
                        <input type="text" className="form-control" id="street_number" />
                    </div>
                </div>
                <div className={styles.wrapper}>
                    <div className={styles.element}>
                        <label htmlFor="city" className="form-label">City</label>
                        <input type="text" className="form-control" id="city" />
                    </div>
                    <div className={styles.element}>
                        <label htmlFor="postal_code" className="form-label">Postal code</label>
                        <input type="text" className="form-control" id="postal_code" />
                    </div>
                </div>
                <p ref={errorMessage} className={styles.error}></p>
                <input type="submit" className="btn btn-success w-50" value="Sing up" />
            </form>
        </div>
    )
}
