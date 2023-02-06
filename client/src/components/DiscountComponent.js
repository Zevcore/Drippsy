import styles from "@/styles/components/Discount.module.scss"
import {useEffect, useRef, useState} from "react";


export default function DiscountComponent() {

    const [code, setCode] = useState(null);
    let codeDiv = useRef();

    useEffect(() => {
        setCode(codeDiv.current)
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        (code.style.visibility === "visible") ? code.style.visibility = "hidden" : code.style.visibility ="visible"
    }

    return (
        <div className={styles.container}>
            <h3>Get your 25% discount on all products!</h3>
            <p>Take advantage of the opportunity and draw your code, thanks to which you can take advantage of a 25% discount on each product when buying.</p>
            <input type="submit" value="Receive the code" onClick={handleSubmit} />
            <div className={styles.code} ref={codeDiv}>
                21372137
            </div>
        </div>
    )
}