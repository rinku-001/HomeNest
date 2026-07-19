import styles from "./Properties.module.css";

function Properties() {
    return (
        <section className={styles.container}>
            <h1 className={styles.heading}>
                Our Properties
            </h1>

            <p className={styles.description}>
                Browse our collection of verified properties available
                for buying, renting and leasing.
            </p>
        </section>
    );
}

export default Properties;