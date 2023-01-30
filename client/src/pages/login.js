import LoginForm from "@/components/LoginForm"
import IndexLayout from "@/layouts/IndexLayout";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export default function Login() {
    return (
        <IndexLayout>
            <LoginForm />
            <Newsletter />
            <Footer />
        </IndexLayout>
    )
}
