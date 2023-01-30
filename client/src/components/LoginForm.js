import styles from "@/styles/forms/Login.module.scss"
import {loginUser} from "@/libs/actions/login"
import {useState} from "react";
import {redirect} from "next/dist/server/api-utils";
import { useRouter } from "next/router";

export default function LoginForm() {

    const [data, setData] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = new FormData();
        data.append('email', e.target.email.value);
        data.append('password', e.target.password.value);

        let res = loginUser(data);
        res.then(data => setData(data));

        validateData();
    };

    const validateData = () => {
        let error = document.querySelector(".error");
        if(data) {
            if(data.code === 200) {
                // save token
                // redirect to ap
                console.log(data.token);
            }
            else {
                error.innerHTML = data.message;
            }
        }
    }

    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit}>
                <h1>[ login ]</h1>
                <hr/>
                <div className={styles.element}>
                    <label htmlFor="email">Email address</label>
                    <input type="email" id="email" />
                </div>
                <div className={styles.element}>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" />
                </div>
                <p className="error"></p>
                <input type="submit" value="Login"/>
            </form>
        </div>
    )
}
