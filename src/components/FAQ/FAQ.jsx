import { useState } from "react";
import styles from "./FAQ.module.css";

function FAQ(props) {

    const [showAnswer, setShowAnswer] = useState(false);

    return (
        <div className={styles.card}>

            <h3
                onClick={() => setShowAnswer(!showAnswer)}
                className={styles.question}
            >
                {props.question}
            </h3>

            {
                showAnswer && (
                    <p className={styles.answer}>
                        {props.answer}
                    </p>
                )
            }

        </div>
    );
}

export default FAQ;