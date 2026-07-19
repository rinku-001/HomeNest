import styles from "./Properties.module.css";

import properties from "../data/properties";
import PropertyCard from "../components/PropertyCard/PropertyCard";

function Properties() {
    return (
        <section className={styles.container}>

            <h1 className={styles.heading}>
                Our Properties
            </h1>

            <p className={styles.description}>
                Browse our collection of verified properties available
                for buying, renting and leasing.
            </p>

            <div className={styles.propertyContainer}>
                {properties.map((property) => (
                    <PropertyCard
                        key={property.id}
                        title={property.title}
                        location={property.location}
                        size={property.size}
                        price={property.price}
                    />
                ))}
            </div>

        </section>
    );
}

export default Properties;