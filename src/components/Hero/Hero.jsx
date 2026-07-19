import styles from "./Hero.module.css";

function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.content}>
                <h1>Find Your Dream Home</h1>

                <p>
                    Discover the best properties for buying, renting,
                    and leasing at affordable prices.
                </p>

                <button>Browse Properties</button>
            </div>
        </section>
    );
}

export default Hero;