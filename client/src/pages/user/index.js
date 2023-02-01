import IndexLayout from "@/layouts/IndexLayout";
import styles from "@/styles/components/Index.module.scss"
import Link from 'next/link'
import Slider from "@/components/Slider";
import Discover from "@/components/Discover";
import Sm from "@/components/products/Sm";
import Dashboard from "@/components/user/Dashboard";

export default function Home() {
    return (
        <IndexLayout>
            <Dashboard />
        </IndexLayout>
    )
}
