import styles from "./Benefits.module.css";
import benefits from "../../data/benefits";

function Benefits() {
    return (
        <section className={styles.benefits}>
            <h2>Why Choose HomeNest?</h2>

            <ul>
                {benefits.map((benefit, index) => (
                    <li key={index}>
                        {benefit}
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default Benefits;