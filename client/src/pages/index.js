import IndexLayout from "@/layouts/IndexLayout";
import styles from "@/styles/components/Index.module.scss"
import Link from 'next/link'
import SliderComponent from "@/components/SliderComponent";
import CategoriesComponent from "@/components/CategoriesComponent";
import SmComponent from "@/components/products/SmComponent";
import DiscountComponent from "@/components/DiscountComponent";
import FooterComponent from "@/components/FooterComponent";
import DiscoverComponent from "@/components/DiscoverComponent";

export default function Home() {
    return (
        <IndexLayout>
            {/*/!*<main className={styles.main}>*!/*/}
            {/*/!*    <div className={styles.welcome}>*!/*/}
            {/*/!*        <Link href="/"><a>FOR MAN</a></Link>*!/*/}
            {/*/!*        <Link href="/"><a>FOR WOMAN</a></Link>*!/*/}
            {/*/!*        <Link href="/"><a>FOR KID</a></Link>*!/*/}
            {/*/!*    </div>*!/*/}
            {/*/!*</main>*!/*/}
            {/*/!*<SliderComponent />*!/*/}
            {/*<SmComponent />*/}
            <DiscoverComponent />
            <CategoriesComponent />
            <SliderComponent />
            <DiscountComponent />
        </IndexLayout>
    )
}
