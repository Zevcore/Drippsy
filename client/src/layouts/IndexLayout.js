import HeaderComponent from "@/components/HeaderComponent";
import FooterComponent from "@/components/FooterComponent";
export default function IndexLayout({ children }) {
    return (
        <div>
            <HeaderComponent />
            {children}
            <FooterComponent />
        </div>
    )
}
