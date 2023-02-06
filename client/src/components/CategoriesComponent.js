import styles from "@/styles/components/Categories.module.scss"
import kidImage from "../../public/img/kid.jpg";
import manImage from "../../public/img/man.jpg";
import womanImage from "../../public/img/woman.jpg";
import Link from 'next/link'
import {ImMan, ImWoman} from 'react-icons/im'
import {HiOutlineArrowNarrowRight} from 'react-icons/hi'
import {MdChildCare} from 'react-icons/md'

export default function CategoriesComponent() {
    return (
        <div className={styles.container}>
            <div className={styles.heading}>
                <h3>Categories</h3>
                <Link href="/"><a>view all <HiOutlineArrowNarrowRight /></a></Link>
            </div>
            <div className={styles.discover}>
                <Link href="/">
                    <a>
                        <ImMan />
                        <p>men</p>
                    </a>
                </Link>
                <Link href="/">
                    <a>
                        <MdChildCare />
                        <p>kids</p>
                    </a>
                </Link>
                <Link href="/">
                    <a>
                        <ImWoman />
                        <p>women</p>
                    </a>
                </Link>
            </div>
        </div>
    )
}