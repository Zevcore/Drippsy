import LoginForm from "@/components/LoginForm"
import RegisterForm from "@/components/RegisterForm"
import IndexLayout from "@/layouts/IndexLayout";
import styles from "@/styles/components/Index.module.scss"
import Link from 'next/link'

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
        </IndexLayout>
    )
}
