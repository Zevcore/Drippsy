import Link from 'next/link'
import styles from "@/styles/components/Header.module.scss"
import {useContext, useEffect, useRef, useState} from "react";
import {getUser} from "@/libs/cookies";
import {CiUser, CiSearch, CiShoppingCart} from "react-icons/ci";
import CartComponent from "@/components/CartComponent";
import { CartContext } from '@/components/CartComponent';


export default function HeaderComponent() {

    const [user, setUser] = useState(null);

    useEffect(() => {
        setUser(getUser)
    }, [])

    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <div className={styles.auth}>
                    {
                        (user) ?
                            <ul className={styles.auth_user}>
                                <li><p>Hello, <span>{user.firstname} {user.lastname}</span></p></li>
                            </ul>
                            :
                            <ul className={styles.auth_guest}>
                                <li><Link href="/register">Create an account</Link></li>
                                <li><Link href="/login">Sign in</Link></li>
                            </ul>

                    }
                </div>
                <div className={styles.menu}>
                    <ul>
                        <li><Link href="/">Drippsy</Link></li>
                        <li><Link href="/login">Store</Link></li>
                        <li><Link href="/login">Company</Link></li>
                        <li><Link href="/login">FAQ</Link></li>
                    </ul>
                    <ul>
                        <li><Link href="/"><CiSearch /></Link></li>
                        {
                            (user) ? <li><Link href="/user"><CiUser /></Link></li> : ""
                        }
                        <li><Link href="/cart"><a><CiShoppingCart /><p>0</p></a></Link></li>
                    </ul>
                </div>
            </nav>
            <div className={styles.fixer}></div>
        </header>
    )
}
