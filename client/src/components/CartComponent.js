import styles from "@/styles/components/CartComponent.module.scss"
import {IoClose} from "react-icons/io5";
import {BsTrash} from "react-icons/bs";

export default function CartComponent() {
    return (
        <div className={styles.container}>
            <div className={styles.cart}>
                <h1>Shopping Cart</h1>
                <div className={styles.wrapper}>
                    <div className={styles.items}>
                        <div className={styles.item}>
                            <img
                                src="https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/b7beee7c32d4438aaba3acb6001c2e7b_9366/FY7757_01_standard.jpg"/>
                            <div className={styles.specifications}>
                                <p className={styles.name}>Nike Vapor X</p>
                                <div className={styles.about}>
                                    <p>Nike</p>
                                    <p>L</p>
                                </div>
                                <p className={styles.price}></p>
                            </div>
                            <select disabled>
                                <option value="">1</option>
                            </select>
                            <div className={styles.remove}>
                                <BsTrash/>
                            </div>
                        </div>
                        <div className={styles.item}>
                            <img
                                src="https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/b7beee7c32d4438aaba3acb6001c2e7b_9366/FY7757_01_standard.jpg"/>
                            <div className={styles.specifications}>
                                <p className={styles.name}>Nike Vapor X</p>
                                <div className={styles.about}>
                                    <p>Nike</p>
                                    <p>L</p>
                                </div>
                                <p className={styles.price}></p>
                            </div>
                            <select disabled>
                                <option value="">1</option>
                            </select>
                            <div className={styles.remove}>
                                <BsTrash/>
                            </div>
                        </div>
                        <div className={styles.item}>
                            <img
                                src="https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/b7beee7c32d4438aaba3acb6001c2e7b_9366/FY7757_01_standard.jpg"/>
                            <div className={styles.specifications}>
                                <p className={styles.name}>Nike Vapor X</p>
                                <div className={styles.about}>
                                    <p>Nike</p>
                                    <p>L</p>
                                </div>
                                <p className={styles.price}></p>
                            </div>
                            <select disabled>
                                <option value="">1</option>
                            </select>
                            <div className={styles.remove}>
                                <BsTrash/>
                            </div>
                        </div>
                        <div className={styles.item}>
                            <img
                                src="https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/b7beee7c32d4438aaba3acb6001c2e7b_9366/FY7757_01_standard.jpg"/>
                            <div className={styles.specifications}>
                                <p className={styles.name}>Nike Vapor X</p>
                                <div className={styles.about}>
                                    <p>Nike</p>
                                    <p>L</p>
                                </div>
                                <p className={styles.price}></p>
                            </div>
                            <select disabled>
                                <option value="">1</option>
                            </select>
                            <div className={styles.remove}>
                                <BsTrash/>
                            </div>
                        </div>
                    </div>
                    <div className={styles.summary}>
                        <h2>Order summary</h2>
                        <div class={styles.element}>
                            <p>Subtotal</p>
                            <span>$99,00</span>
                        </div>
                        <div className={styles.element}>
                            <p>Shipping estimate</p>
                            <span>$99,00</span>
                        </div>
                        <div className={styles.element}>
                            <p>Tax estimate</p>
                            <span>$99,00</span>
                        </div>
                        <div className={styles.total}>
                            <p>Order total</p>
                            <span>$2137,00</span>
                        </div>
                        <input type="submit" value="Check out"/>
                    </div>
                </div>
            </div>
        </div>
    )
}