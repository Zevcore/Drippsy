import IndexLayout from "@/layouts/IndexLayout";
import DiscountComponent from "@/components/DiscountComponent";
import CartComponent from "@/components/CartComponent";

export default function Cart() {
    return (
        <IndexLayout>
            <CartComponent />
            <DiscountComponent />
        </IndexLayout>
    )
}
