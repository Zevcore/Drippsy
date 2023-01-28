import styles from "@/styles/components/Footer.module.scss"
import Link from 'next/link'
import {BsFacebook} from "react-icons/bs"
import {TiSocialInstagramCircular} from "react-icons/ti"
import {AiFillTwitterCircle} from "react-icons/ai"
import {SiYoutubemusic} from "react-icons/si"


export default function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.links}>
                <ul>
                    <h3>PRODUCTS</h3>
                    <li><Link href="/">MAN</Link></li>
                    <li><Link href="/">WOMAN</Link></li>
                    <li><Link href="/">KID</Link></li>
                </ul>
                <ul>
                    <h3>SUPPORT</h3>
                    <li><Link href="/">Help and support</Link></li>
                    <li><Link href="/">Delivery</Link></li>
                    <li><Link href="/">Returns</Link></li>
                    <li><Link href="/">Contact</Link></li>
                </ul>
                <ul>
                    <h3>ABOUT DRIPPSY</h3>
                    <li><Link href="/">FAQ</Link></li>
                    <li><Link href="/">About us</Link></li>
                    <li><Link href="/">Career</Link></li>
                    <li><Link href="/">For media</Link></li>
                </ul>
                <ul>
                    <h3>FOLLOW US</h3>
                    <li><Link href="/"><BsFacebook /></Link></li>
                    <li><Link href="/"><TiSocialInstagramCircular /></Link></li>
                    <li><Link href="/"><AiFillTwitterCircle /></Link></li>
                    <li><Link href="/"><SiYoutubemusic /></Link></li>
                </ul>
            </div>
            <div className={styles.cookies}>
                <ul>
                    <li><Link href="/">Cookie settings</Link></li>
                    <li><Link href="/">Privacy center</Link></li>
                    <li><Link href="/">Cookies</Link></li>
                    <li><Link href="/">Statute</Link></li>
                </ul>
            </div>
            <div className={styles.copyrights}>
                <p>Created & designed by Piotr Jarema; 2023 &copy; All rights reserved.</p>
            </div>
        </div>
    )
}