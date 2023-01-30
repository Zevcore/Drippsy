import styles from "@/styles/forms/Register.module.scss"

export default function RegisterForm() {
    return (
        <div className={styles.container}>
            <form className="container w-50 border p-5">
                <h1>[ register ]</h1>
                <hr/>
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
                <input type="submit" className="btn btn-success w-50" value="Sing up" />
            </form>
        </div>
    )
}
