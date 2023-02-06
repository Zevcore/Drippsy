import styles from "@/styles/components/Footer.module.scss"
import Link from 'next/link'
import {ImFacebook, ImInstagram, ImTwitter, ImYoutube} from "react-icons/im"


export default function FooterComponent() {
    return (
        <div className={styles.footer}>
            <div className={styles.links}>
                <ul>
                    <h3>Drippsy</h3>
                    <p>Sell and exchange your beloved shoes here!</p>
                    <div class={styles.box}>
                        <li><Link href="/"><a><ImFacebook /></a></Link></li>
                        <li><Link href="/"><a><ImInstagram /></a></Link></li>
                        <li><Link href="/"><a><ImTwitter /></a></Link></li>
                        <li><Link href="/"><a><ImYoutube /></a></Link></li>
                    </div>
                </ul>
                <div className={styles.wrapper}>
                    <ul>
                        <h3>Products</h3>
                        <li><Link href="/">Men</Link></li>
                        <li><Link href="/">Women</Link></li>
                        <li><Link href="/">Kids</Link></li>
                    </ul>
                    <ul>
                        <h3>Support</h3>
                        <li><Link href="/">Help and support</Link></li>
                        <li><Link href="/">Delivery</Link></li>
                        <li><Link href="/">Returns</Link></li>
                        <li><Link href="/">Contact</Link></li>
                    </ul>
                    <ul>
                        <h3>About Drippsy</h3>
                        <li><Link href="/">FAQ</Link></li>
                        <li><Link href="/">About us</Link></li>
                        <li><Link href="/">Career</Link></li>
                        <li><Link href="/">For media</Link></li>
                    </ul>
                </div>
            </div>
            {/*<div className={styles.cookies}>*/}
            {/*    <ul>*/}
            {/*        <li><Link href="/">Cookie settings</Link></li>*/}
            {/*        <li><Link href="/">Privacy center</Link></li>*/}
            {/*        <li><Link href="/">Cookies</Link></li>*/}
            {/*        <li><Link href="/">Statute</Link></li>*/}
            {/*    </ul>*/}
            {/*</div>*/}
            <div className={styles.copyrights}>
                <p>&copy; 2023 Piotr Jarema. All rights reserved.</p>
            </div>
        </div>
    )
}