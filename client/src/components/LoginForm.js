import styles from "@/styles/forms/Login.module.scss"
import { loginUser } from "@/libs/auth/actions"
import {validateLoginFormData, validateLoginFormResponse} from "@/libs/auth/validators"
import {useEffect, useRef, useState} from "react"
import { useRouter } from 'next/router'

export default function LoginForm() {

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

        if(validateLoginFormData(data).length !== 0) {
            errorDiv.innerHTML = validateLoginFormData(data).join("<br>");
            return;
        }

        let res = loginUser(data);
        res.then(data => setResponse(data));

        switch(validateLoginFormResponse(response)) {
            case true:
                router.push("/");
                break;
            case false:
                errorDiv.innerHTML = response.message;
                break;
        }
    };

    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit}>
                <h1>[ login ]</h1>
                <hr/>
                <div className={styles.element}>
                    <label htmlFor="email">Email address</label>
                    <input type="email" id="email"/>
                </div>
                <div className={styles.element}>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password"/>
                </div>
                <p ref={errorMessage} className={styles.error}></p>
                <input type="submit" value="Login"/>
            </form>
        </div>
    )
}
