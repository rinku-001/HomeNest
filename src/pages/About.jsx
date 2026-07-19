import styles from "./About.module.css";

function About() {
    return (
        <section className={styles.container}>

            <h1 className={styles.heading}>
                About HomeNest
            </h1>

            <div className={styles.section}>
                <h2>Our Mission</h2>

                <p>
                    Our mission is to provide trusted property listings
                    and help customers find their dream homes with ease.
                </p>
            </div>

            <div className={styles.section}>
                <h2>Our Vision</h2>

                <p>
                    Our vision is to become one of the most trusted
                    real estate platforms by offering quality service
                    and verified properties.
                </p>
            </div>

        </section>
    );
}

export default About;