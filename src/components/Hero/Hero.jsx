import styles from "./Hero.module.css";
import { useNavigate } from "react-router-dom";

function Hero() {
    const navigate = useNavigate();

    return (
        <section className={styles.hero}>
            <div className={styles.content}>
                <h1>Find Your Dream Home</h1>

                <p>
                    Discover the best properties for buying, renting,
                    and leasing at affordable prices.
                </p>

                <button onClick={() => navigate("/properties")}>
                    Browse Properties
                </button>
            </div>
        </section>
    );
}

export default Hero;