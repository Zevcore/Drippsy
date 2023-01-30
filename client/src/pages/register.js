import RegisterForm from "@/components/RegisterForm"
import IndexLayout from "@/layouts/IndexLayout";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export default function Register() {
    return (
        <IndexLayout>
            <RegisterForm />
            <Newsletter />
            <Footer />
        </IndexLayout>
    )
}
