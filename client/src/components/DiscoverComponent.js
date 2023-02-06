import styles from "@/styles/components/Discover.module.scss"
import Link from 'next/link'
import {BiStoreAlt, BiUserPlus} from "react-icons/bi"

export default function DiscoverComponent() {
    return (
        <div className={styles.container}>
            <div className={styles.box}>
                <h1>Hi, it's <span>Drippsy</span></h1>
                <p>You can sell and exchange your beloved shoes here!<br /> Here you will find everything from luxury brands to everyday models <br /> and you will also meet people who share your passion.<br /> Join our community and start your adventure with shoes today!</p>
                <div className={styles.wrapper}>
                    <Link href="/"><a><BiStoreAlt /> <p>Create an account</p></a></Link>
                    <Link href="/"><a><BiUserPlus /> <p>Browse the store</p></a></Link>
                </div>
            </div>
        </div>
    )
}