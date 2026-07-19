import styles from "./FeatureCard.module.css";

function FeatureCard(props) {
    return (
        <div className={styles.card}>
            <h3>{props.title}</h3>

            <p>{props.description}</p>
        </div>
    );
}

export default FeatureCard;