import styles from "@/styles/components/products/Single.module.scss"
import {AiFillStar} from "react-icons/ai"
import {getItem} from "@/libs/items/actions";
import {useEffect, useState} from "react";

export default function Sm() {
    const [item, setItem] = useState(null)
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        if(!item) {
            getItem(2)
                .then((res) => {
                    setItem(res.item)
                    setLoading(false)
                });
        }
    }, [])


    if (isLoading) return <p>Loading...</p>
    if (!item) return <p>No profile data</p>

    return (
        <div className={styles.container}>
            <h3>Category</h3>
            <div className={styles.wrapper}>
                <div className={styles.gallery}>
                    <img src="https://bigstarshoes.pl/userdata/public/gfx/23865/20200731_0442.jpg" />
                    <img src="https://bigstarshoes.pl/userdata/public/gfx/23865/20200731_0442.jpg" />
                    <img src="https://bigstarshoes.pl/userdata/public/gfx/23865/20200731_0442.jpg" />
                    <img src="https://bigstarshoes.pl/userdata/public/gfx/23865/20200731_0442.jpg" />
                    <img src="https://bigstarshoes.pl/userdata/public/gfx/23865/20200731_0442.jpg" />
                </div>
                <div className={styles.product}>
                    <div className={styles.title}>
                        <h1>{item.name}</h1>
                        <h2>{item.price}</h2>
                    </div>
                    <div className={styles.reviews}>
                        <p>5.0</p>
                        <div><AiFillStar /></div>
                        <div><AiFillStar /></div>
                        <div><AiFillStar /></div>
                        <div><AiFillStar /></div>
                        <div><AiFillStar /></div>
                    </div>
                    <div className={styles.size}>
                        <p>Size</p>
                        <div className={styles.box}>
                            <div className={styles.size}>38</div>
                            <div className={styles.size}>39</div>
                            <div className={styles.size}>40</div>
                            <div className={styles.size}>41</div>
                            <div className={styles.size}>42</div>
                        </div>
                    </div>
                    <div className={styles.add}>
                        Add to cart
                    </div>
                    <div className={styles.description}>
                        <span>Description</span>
                        <p>{item.description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}