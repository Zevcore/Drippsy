import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
export default function IndexLayout({ children }) {
    return (
        <div>
            <Header />
            {children}
            <Newsletter />
            <Footer />
        </div>
    )
}
