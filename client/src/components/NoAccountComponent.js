import styles from "@/styles/components/NoAccount.module.scss"
import Link from 'next/link'


export default function NoAccountComponent(props) {
    return (
        <div className={styles.container}>
            <h1>Whoops!</h1>
            <p>{props.message}</p>
            <Link href="/login">Sign in</Link>
            <Link href="/register">Create an account</Link>
        </div>
    )
}