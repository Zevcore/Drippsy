import LoginFormComponent from "@/components/LoginFormComponent"
import IndexLayout from "@/layouts/IndexLayout";
import Newsletter from "@/components/Newsletter";
import FooterComponent from "@/components/FooterComponent";

export default function Login() {
    return (
        <IndexLayout>
            <LoginFormComponent />
        </IndexLayout>
    )
}
