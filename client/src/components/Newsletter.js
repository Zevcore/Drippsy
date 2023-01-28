import styles from "@/styles/components/Newsletter.module.scss"
import {GrFavorite} from "react-icons/gr";

export default function Sm() {

    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <h3>Join the newsletter</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
            <form method="POST">
                <input type="email" name="email" placeholder="E-mail" />
                <input type="submit" name="submit" value="Sign up" />
            </form>
        </div>
    )
}