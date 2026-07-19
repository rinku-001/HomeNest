import styles from "./Timeline.module.css";

function Timeline(props) {
    return (
        <div className={styles.item}>
            <h3>{props.year}</h3>
            <p>{props.event}</p>
        </div>
    );
}

export default Timeline;