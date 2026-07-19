import styles from "./Testimonial.module.css";

function Testimonial(props) {
    return (
        <div className={styles.card}>
            <p>"{props.review}"</p>

            <h4>- {props.name}</h4>
        </div>
    );
}

export default Testimonial;