import Link from 'next/link'
import styles from "@/styles/components/Header.module.scss"
import {RiShoppingCartLine} from "react-icons/ri";
import {BiSearchAlt} from "react-icons/bi";
import {GrFavorite} from "react-icons/gr";

export default function Header() {

    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <div className={styles.auth}>
                    <ul>
                        <li><Link href="/"><a>FAQ</a></Link></li>
                        <li><Link href="/register"><a>Sign up</a></Link></li>
                        <li><Link href="/login"><a>Log in</a></Link></li>
                    </ul>
                </div>
                <div className={styles.menu}>
                    <h1><Link href="/">Drippsy</Link></h1>
                    <ul>
                        <li><Link href="/"><a>New & featured</a></Link></li>
                        <li><Link href="/"><a>Man</a></Link></li>
                        <li><Link href="/"><a>Woman</a></Link></li>
                        <li><Link href="/"><a>Kids</a></Link></li>
                    </ul>
                    <form>
                        <div>
                            <BiSearchAlt />
                            <input type="search" placeholder="Search" />
                        </div>
                    </form>
                    <div className={styles.cart}>
                        <Link href="/"><a><RiShoppingCartLine /></a></Link>
                        <Link href="/"><a><GrFavorite /></a></Link>
                    </div>
                </div>
                <div className={styles.slider}>
                    <p>LOREM IPSUM DOLOR SIT AMET 25%</p>
                </div>
            </nav>
            <div className={styles.fixer}></div>
        </header>
    )
}