import styles from "@/styles/components/products/Sm.module.scss"
import {GrFavorite} from "react-icons/gr";
import Link from 'next/link'

export default function Sm() {

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Last</h1>
            <div className={styles.products}>
                <div className={styles.product}>
                    <div className={styles.thumbnail}>
                        <Link href="/"><a><GrFavorite /></a></Link>
                        <img src="https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/b7beee7c32d4438aaba3acb6001c2e7b_9366/FY7757_01_standard.jpg" />
                    </div>
                    <p className={styles.price}>499 zł</p>
                    <Link href="/"><a><p className={styles.product_title}>Forum Low Shoes</p></a></Link>
                    <span>Nickname</span>
                </div>
                <div className={styles.product}>
                    <div className={styles.thumbnail}>
                        <Link href="/"><a><GrFavorite /></a></Link>
                        <img src="https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/b7beee7c32d4438aaba3acb6001c2e7b_9366/FY7757_01_standard.jpg" />
                    </div>
                    <p className={styles.price}>499 zł</p>
                    <Link href="/"><a><p className={styles.product_title}>Forum Low Shoes</p></a></Link>
                    <span>Nickname</span>
                </div>
                <div className={styles.product}>
                    <div className={styles.thumbnail}>
                        <Link href="/"><a><GrFavorite /></a></Link>
                        <img src="https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/b7beee7c32d4438aaba3acb6001c2e7b_9366/FY7757_01_standard.jpg" />
                    </div>
                    <p className={styles.price}>499 zł</p>
                    <Link href="/"><a><p className={styles.product_title}>Forum Low Shoes</p></a></Link>
                    <span>Nickname</span>
                </div>
                <div className={styles.product}>
                    <div className={styles.thumbnail}>
                        <Link href="/"><a><GrFavorite /></a></Link>
                        <img src="https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/b7beee7c32d4438aaba3acb6001c2e7b_9366/FY7757_01_standard.jpg" />
                    </div>
                    <p className={styles.price}>499 zł</p>
                    <Link href="/"><a><p className={styles.product_title}>Forum Low Shoes</p></a></Link>
                    <span>Nickname</span>
                </div>
                <div className={styles.product}>
                    <div className={styles.thumbnail}>
                        <Link href="/"><a><GrFavorite /></a></Link>
                        <img src="https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/b7beee7c32d4438aaba3acb6001c2e7b_9366/FY7757_01_standard.jpg" />
                    </div>
                    <p className={styles.price}>499 zł</p>
                    <Link href="/"><a><p className={styles.product_title}>Forum Low Shoes</p></a></Link>
                    <span>Nickname</span>
                </div>
                <div className={styles.product}>
                    <div className={styles.thumbnail}>
                        <Link href="/"><a><GrFavorite /></a></Link>
                        <img src="https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/b7beee7c32d4438aaba3acb6001c2e7b_9366/FY7757_01_standard.jpg" />
                    </div>
                    <p className={styles.price}>499 zł</p>
                    <Link href="/"><a><p className={styles.product_title}>Forum Low Shoes</p></a></Link>
                    <span>Nickname</span>
                </div>
                <div className={styles.product}>
                    <div className={styles.thumbnail}>
                        <Link href="/"><a><GrFavorite /></a></Link>
                        <img src="https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/b7beee7c32d4438aaba3acb6001c2e7b_9366/FY7757_01_standard.jpg" />
                    </div>
                    <p className={styles.price}>499 zł</p>
                    <Link href="/"><a><p className={styles.product_title}>Forum Low Shoes</p></a></Link>
                    <span>Nickname</span>
                </div>
                <div className={styles.product}>
                    <div className={styles.thumbnail}>
                        <Link href="/"><a><GrFavorite /></a></Link>
                        <img src="https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/b7beee7c32d4438aaba3acb6001c2e7b_9366/FY7757_01_standard.jpg" />
                    </div>
                    <p className={styles.price}>499 zł</p>
                    <Link href="/"><a><p className={styles.product_title}>Forum Low Shoes</p></a></Link>
                    <span>Nickname</span>
                </div>
            </div>
        </div>
    )
}