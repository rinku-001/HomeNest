import { useId, useState } from "react";
import styles from "./FAQ.module.css";

function FAQ(props) {

    const [showAnswer, setShowAnswer] = useState(false);
    const baseId = useId();
    const questionId = `faq-question-${baseId}`;
    const answerId = `faq-answer-${baseId}`;

    return (
        <div className={styles.card}>

            <button
                type="button"
                onClick={() => setShowAnswer(!showAnswer)}
                className={styles.question}
                aria-expanded={showAnswer}
                aria-controls={answerId}
                id={questionId}
            >
                {props.question}
            </button>

            {
                showAnswer && (
                    <p className={styles.answer} id={answerId} aria-labelledby={questionId}>
                        {props.answer}
                    </p>
                )
            }

        </div>
    );
}

export default FAQ;