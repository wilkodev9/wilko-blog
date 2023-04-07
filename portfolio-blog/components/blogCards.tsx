import styles from "../styles/card.module.css";
export default function BlogCards() {
    return (
        <div className={styles.cardContainer}>
            <p className={styles.cardName}>blog name</p>
            <p>blog description</p>
        </div>
    )
}