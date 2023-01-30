import {motion} from 'framer-motion'
import {useRef, useEffect, useState} from "react";
import styles from "@/styles/components/Slider.module.scss"
import Link from 'next/link'

export default function Slider() {

    const [width, setWidth] = useState(0);
    const carousel = useRef();

    useEffect(() => {
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
    }, []);

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Last added</h1>
            <motion.div ref={carousel} className={styles.carousel}>
                <motion.div drag="x" dragConstraints={{right: 0, left: -width}} className={styles.inner_carousel}>
                    <motion.div className={styles.item}>
                        <Link href="/">
                            <a>
                                <img src="https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/b7beee7c32d4438aaba3acb6001c2e7b_9366/FY7757_01_standard.jpg"/>
                                <p>Description</p>
                            </a>
                        </Link>
                    </motion.div>
                    <motion.div className={styles.item}>
                        <Link href="/">
                            <a>
                                <img src="https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/b7beee7c32d4438aaba3acb6001c2e7b_9366/FY7757_01_standard.jpg"/>
                                <p>Description</p>
                            </a>
                        </Link>
                    </motion.div>
                    <motion.div className={styles.item}>
                        <Link href="/">
                            <a>
                                <img src="https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/b7beee7c32d4438aaba3acb6001c2e7b_9366/FY7757_01_standard.jpg"/>
                                <p>Description</p>
                            </a>
                        </Link>
                    </motion.div>
                    <motion.div className={styles.item}>
                        <Link href="/">
                            <a>
                                <img src="https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/b7beee7c32d4438aaba3acb6001c2e7b_9366/FY7757_01_standard.jpg"/>
                                <p>Description</p>
                            </a>
                        </Link>
                    </motion.div>
                    <motion.div className={styles.item}>
                        <Link href="/">
                            <a>
                                <img src="https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/b7beee7c32d4438aaba3acb6001c2e7b_9366/FY7757_01_standard.jpg"/>
                                <p>Description</p>
                            </a>
                        </Link>
                    </motion.div>
                    <motion.div className={styles.item}>
                        <Link href="/">
                            <a>
                                <img src="https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/b7beee7c32d4438aaba3acb6001c2e7b_9366/FY7757_01_standard.jpg"/>
                                <p>Description</p>
                            </a>
                        </Link>
                    </motion.div>
                    <motion.div className={styles.item}>
                        <Link href="/">
                            <a>
                                <img src="https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/b7beee7c32d4438aaba3acb6001c2e7b_9366/FY7757_01_standard.jpg"/>
                                <p>Description</p>
                            </a>
                        </Link>
                    </motion.div>
                    <motion.div className={styles.item}>
                        <Link href="/">
                            <a>
                                <img src="https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/b7beee7c32d4438aaba3acb6001c2e7b_9366/FY7757_01_standard.jpg"/>
                                <p>Description</p>
                            </a>
                        </Link>
                    </motion.div>
                </motion.div>
            </motion.div>
        </div>
    )
}