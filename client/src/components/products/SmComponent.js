import styles from "@/styles/components/products/Sm.module.scss"
import {BsFillEyeFill, BsFillCartPlusFill} from "react-icons/bs";
import Link from 'next/link'
import {getRecentlyAddedItems} from "@/libs/items/actions";
import {useEffect, useState} from "react";
import { useRouter } from 'next/router'

export default function SmComponent() {
    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(false)
    const router = useRouter();

    useEffect(() => {
        setLoading(true)
        if(!data) {
            getRecentlyAddedItems(10)
                .then((res) => {
                    setData(res)
                    setLoading(false)
                });
        }
    }, [])

    if (isLoading) return <p>Loading...</p>
    if (!data) return <p>No profile data</p>

    const handleClick = id => (e) => {
        e.preventDefault();
        router.push("/single?id=" + id);
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>hot deals</h1>
            <div className={styles.products}>
                {data.items.map((item) => {
                    if(item.visibility) {
                        return (
                            <div className={styles.product} key={item.id} onClick={handleClick(item.id)}>
                                <div className={styles.thumbnail}>
                                    {
                                        item.thumbnails[0] ?
                                            <img src={"http://localhost:8000/" + item.thumbnails[0]}  alt="test"/>
                                            :
                                            <img src="https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/b7beee7c32d4438aaba3acb6001c2e7b_9366/FY7757_01_standard.jpg" />
                                    }
                                </div>
                                <div className={styles.wrapper}>
                                    <p className={styles.name}>{item.name}</p>
                                    <p className={styles.price}>{item.price}</p>
                                </div>
                                <p className={styles.brand}>{item.brand}</p>
                            </div>
                        )
                    }
                })}
            </div>
        </div>
    )
}