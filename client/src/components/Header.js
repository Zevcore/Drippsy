import Link from 'next/link'
import styles from "@/styles/components/Footer.module.scss"
import {IoFootsteps} from "react-icons/io5";
import {FaUserCircle} from "react-icons/fa";
import {RiShoppingCartLine} from "react-icons/ri";

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <h1><Link href="/"><a>Dri<IoFootsteps/>sy</a></Link></h1>
            </div>
            <nav className={styles.nav}>
                <ul>
                    <li><Link href="/">man</Link></li>
                    <li><Link href="/">women</Link></li>
                    <li><Link href="/">kid</Link></li>
                    <li><Link href="/">sport</Link></li>
                    <li><Link href="/">trading</Link></li>
                </ul>
            </nav>
            <div className={styles.sign_in}>
                <Link href="/">Get started</Link>
            </div>
        </header>
    )
}
