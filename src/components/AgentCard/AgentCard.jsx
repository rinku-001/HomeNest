import styles from "./AgentCard.module.css";

function AgentCard(props) {
    return (
        <div className={styles.card}>
            <img
                src={props.photo}
                alt={props.name}
                className={styles.image}
            />

            <h3>{props.name}</h3>

            <h4>{props.role}</h4>

            <p>{props.bio}</p>
        </div>
    );
}

export default AgentCard;