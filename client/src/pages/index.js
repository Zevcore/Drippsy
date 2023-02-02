import IndexLayout from "@/layouts/IndexLayout";
import styles from "@/styles/components/Index.module.scss"
import Link from 'next/link'
import Slider from "@/components/Slider";
import Discover from "@/components/Discover";
import Sm from "@/components/products/Sm";

export default function Home() {
    return (
        <IndexLayout>
            <main className={styles.main}>
                <div className={styles.welcome}>
                    <Link href="/"><a>FOR MAN</a></Link>
                    <Link href="/"><a>FOR WOMAN</a></Link>
                    <Link href="/"><a>FOR KID</a></Link>
                </div>
            </main>
            <Slider />
            <Sm />
            <Discover />
        </IndexLayout>
    )
}
