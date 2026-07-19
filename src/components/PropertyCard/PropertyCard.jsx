import styles from "./PropertyCard.module.css";

function PropertyCard(props) {
    return (
        <div className={styles.card}>
            <h3>{props.title}</h3>

            <p><strong>Location:</strong> {props.location}</p>

            <p><strong>Size:</strong> {props.size}</p>

            <p><strong>Price:</strong> {props.price}</p>

            <button>View Details</button>
        </div>
    );
}

export default PropertyCard;