import Header from "@/components/Header";
export default function IndexLayout({ children }) {
    return (
        <div>
            <Header />
            {children}
        </div>
    )
}
