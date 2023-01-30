import styles from "@/styles/forms/Login.module.scss"

export default function LoginForm() {
    return (
        <div className={styles.container}>
            <form>
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
                <input type="submit" value="Login"/>
            </form>
        </div>
    )
}
