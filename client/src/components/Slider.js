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
                                <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8&w=1000&q=80"/>
                                <p>Description</p>
                            </a>
                        </Link>
                    </motion.div>
                    <motion.div className={styles.item}>
                        <Link href="/">
                            <a>
                                <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8&w=1000&q=80"/>
                                <p>Description</p>
                            </a>
                        </Link>
                    </motion.div>
                    <motion.div className={styles.item}>
                        <Link href="/">
                            <a>
                                <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8&w=1000&q=80"/>
                                <p>Description</p>
                            </a>
                        </Link>
                    </motion.div>
                    <motion.div className={styles.item}>
                        <Link href="/">
                            <a>
                                <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8&w=1000&q=80"/>
                                <p>Description</p>
                            </a>
                        </Link>
                    </motion.div>
                    <motion.div className={styles.item}>
                        <Link href="/">
                            <a>
                                <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8&w=1000&q=80"/>
                                <p>Description</p>
                            </a>
                        </Link>
                    </motion.div>
                </motion.div>
            </motion.div>
        </div>
    )
}