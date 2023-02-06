import IndexLayout from "@/layouts/IndexLayout";
import CategoriesComponent from "@/components/CategoriesComponent";
import Single from "@/components/products/SingleComponent";

export default function Home() {
    return (
        <IndexLayout>
            <Single />
        </IndexLayout>
    )
}
