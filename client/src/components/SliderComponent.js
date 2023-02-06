import {useEffect, useState} from "react";
import styles from "@/styles/components/Slider.module.scss"
import {getRecentlyAddedItems} from "@/libs/items/actions";
import ReactSwipe from 'react-swipe';
import {GrPrevious, GrNext} from 'react-icons/gr';
import Link from "next/link";
import {HiOutlineArrowNarrowRight} from "react-icons/hi";
import {ImMan, ImWoman} from 'react-icons/im'
import {MdChildCare} from 'react-icons/md'

export default function SliderComponent() {
    const [data, setData] = useState(null)

    let reactSwipeEl;

    useEffect(() => {
        if (!data) {
            getRecentlyAddedItems(6)
                .then((res) => {
                    setData(res.items)
                });
        }
    }, [])

    const getDate = (date) => {
        let newDate = new Date(date);

        return newDate.getDay() + "/" + newDate.getMonth() + "/" + newDate.getFullYear();
    }

    const getIcon = (category) => {
        switch(category) {
            case "man":
                return (<ImMan />);
            case "woman":
                return (<ImWoman />);
            case "kids":
                return (<MdChildCare />);
        }
    }


    if(data) {
        return (
            <div className={styles.container}>
                <div className={styles.heading}>
                    <h3>New stuff</h3>
                    <Link href="/"><a>view all <HiOutlineArrowNarrowRight/></a></Link>
                </div>
                <div className={styles.slider}>
                    <ReactSwipe
                        className="carousel"
                        swipeOptions={{ continuous: true }}
                        ref={el => (reactSwipeEl = el)}
                    >
                        {data.map((item) => {
                            return (
                                <div className={styles.item}>
                                    <div className={styles.thumbnail}>
                                        {
                                            item.thumbnails[0] ?
                                                <img src={"http://localhost:8000/" + item.thumbnails[0]}  alt="test"/>
                                                :
                                                <img src="https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/b7beee7c32d4438aaba3acb6001c2e7b_9366/FY7757_01_standard.jpg" />
                                        }
                                    </div>
                                    <div className={styles.data}>
                                        <p className={styles.name}>
                                            <span>{item.name}</span> {getIcon(item.category)}
                                        </p>
                                        <p className={styles.price}>
                                            {item.price}
                                        </p>
                                        <p className={styles.size}>
                                            <span>Size: </span>
                                            {item.size}
                                        </p>
                                        <p className={styles.state}>
                                            <span>State: </span>
                                            {item.state}
                                        </p>
                                        <p className={styles.created_at}>
                                            <span>Created at: </span>
                                            {getDate(item.created_at.date)}
                                        </p>
                                    </div>
                                </div>
                            )
                        })}
                    </ReactSwipe>
                </div>
                <div className={styles.buttons}>
                    <button onClick={() => reactSwipeEl.prev()}><GrPrevious/></button>
                    <button onClick={() => reactSwipeEl.next()}><GrNext/></button>
                </div>
            </div>
        )
    }
}