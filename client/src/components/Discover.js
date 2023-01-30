import styles from "@/styles/components/Discover.module.scss"
import kidImage from "../../public/img/kid.jpg";
import manImage from "../../public/img/man.jpg";
import womanImage from "../../public/img/woman.jpg";
import Link from 'next/link'

export default function Discover() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Discover more products</h1>
            <div className={styles.discover}>
                <Link href="/">
                    <a>
                        <img src={manImage.src} alt=""/>
                        <p>MAN</p>
                    </a>
                </Link>
                <Link href="/">
                    <a>
                        <img src={womanImage.src} alt=""/>
                        <p>WOMAN</p>
                    </a>
                </Link>
                <Link href="/">
                    <a>
                        <img src={kidImage.src} alt=""/>
                        <p>KID</p>
                    </a>
                </Link>
            </div>
        </div>
    )
}