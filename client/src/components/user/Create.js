import styles from "@/styles/components/user/Create.module.scss"
import {useEffect, useState} from "react";
import {getUser} from "@/libs/cookies";
import {createItem} from "@/libs/items/actions";

export default function Create() {

    const sizes = [20, 21, 22, 23, 24, 25, 26, 27, 28, 29,
                    30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
                    41, 42, 43, 44, 45, 46, 47, 48, 49, 50];

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = new FormData();
        data.append('name', e.target.name.value);
        data.append('description', e.target.description.value);
        data.append('quantity', e.target.quantity.value);
        data.append('color', e.target.color.value);
        data.append('category', e.target.category.value);
        data.append('state', e.target.state.value);
        data.append('size', e.target.size.value);
        data.append('brand', e.target.brand.value);
        data.append('owner', getUser().email);
        data.append('price', e.target.price.value + " " + e.target.currency.value)

        let res = createItem()
    }

    return (
        <div className={styles.container}>
            <h1>Add new item</h1>

            <form encType="multipart/form-data" onSubmit={handleSubmit}>
                <div className={styles.element}>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name"/>
                </div>
                <div className={styles.element}>
                    <label htmlFor="description">Description</label>
                    <textarea id="description" />
                </div>
                <div className={styles.wrapper}>
                    <div className={styles.element}>
                        <label htmlFor="price">Price</label>
                        <input type="text" id="price"/>
                    </div>
                    <div className={styles.element}>
                        <label htmlFor="currency">Currency</label>
                        <select id="currency">
                            <option value="PLN">PLN</option>
                            <option value="EURO">Euro</option>
                            <option value="DOLLAR">Dollar</option>
                        </select>
                    </div>
                </div>
                <div className={styles.element}>
                    <label htmlFor="category">Category</label>
                    <select id="category">
                        <option value="MAN">MAN</option>
                        <option value="WOMAN">WOMAN</option>
                        <option value="KID">KID</option>
                    </select>
                </div>
                <div className={styles.wrapper}>
                    <div className={styles.element}>
                        <label htmlFor="state">State</label>
                        <select id="state">
                            <option value="USED">used</option>
                            <option value="NEW">new</option>
                        </select>
                    </div>
                    <div className={styles.element}>
                        <label htmlFor="number">Quantity</label>
                        <input type="number" id="quantity"/>
                    </div>
                </div>
                <div className={styles.element}>
                    <div className={styles.element}>
                        <label htmlFor="size">Size</label>
                        <select id="size">
                            {sizes.map((size) => {
                                return (
                                    <option value={size}>{size}</option>
                                )
                            })}
                        </select>
                    </div>
                    <div className={styles.element}>
                        <label htmlFor="color">Color</label>
                        <input type="text" id="color"/>
                    </div>
                    <div className={styles.element}>
                        <label htmlFor="brand">Brand</label>
                        <select id="brand">
                            <option value="nike">NIKE</option>
                            <option value="addidas">ADDIDAS</option>
                            <option value="newbalance">NEWBALANCE</option>
                            <option value="other">OTHER</option>
                        </select>
                    </div>
                </div>
                <div className={styles.element}>
                    <label htmlFor="thumbnails">Thumbnails</label>
                    <input multiple type="file" accept="image/*" id="thumbnails"/>
                </div>
                <div className={styles.element}>
                    <input type="submit" value="Add" />
                </div>
            </form>
        </div>
    )
}
