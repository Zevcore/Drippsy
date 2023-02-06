import styles from "@/styles/components/user/Dashboard.module.scss"
import {getUser} from "@/libs/cookies";
import {useEffect, useState} from "react";
import Link from "next/link";
import { useRouter } from 'next/router'
import NoAccountComponent from "@/components/NoAccountComponent";

export default function DashboardComponent() {
    const [user, setUser] = useState(null);
    const router = useRouter();

    useEffect(() => {
        setUser(getUser)
    }, [])

    if(!user) {
        return (
            <NoAccountComponent message="You're not logged in :("/>
        )
    }

    return (
        <div className={styles.container}>
            <div className={styles.welcome}>
                Hello <span>{user.firstname} {user.lastname}</span>
            </div>
            <div className={styles.actions}>
                <ul>
                    <li><Link href="/item/create">Create item</Link></li>
                    <li><Link href="/item/create">Edit profile</Link></li>
                    <li><Link href="/item/create">Show my products</Link></li>
                    <li><Link href="/item/create">Show my orders</Link></li>
                </ul>
            </div>
            <div className={styles.account}>
                <div className={styles.element}>
                    <span>Email</span>
                    <p>{user.email}</p>
                </div>
                <div className={styles.wrapper}>
                    <div className={styles.element}>
                        <span>Firstname</span>
                        <p>{user.firstname}</p>
                    </div>
                    <div className={styles.element}>
                        <span>Lastname</span>
                        <p>{user.lastname}</p>
                    </div>
                </div>
                <div className={styles.element}>
                    <span>Date of birth</span>
                    <p>{user.date_of_birth.date.split(" ")[0]}</p>
                </div>
                <div className={styles.wrapper}>
                    <div className={styles.element}>
                        <span>Street</span>
                        <p>{user.street}</p>
                    </div>
                    <div className={styles.element}>
                        <span>Number</span>
                        <p>{user.number}</p>
                    </div>
                </div>
                <div className={styles.wrapper}>
                    <div className={styles.element}>
                        <span>City</span>
                        <p>{user.city}</p>
                    </div>
                    <div className={styles.element}>
                        <span>Postal code</span>
                        <p>{user.postal_code}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
