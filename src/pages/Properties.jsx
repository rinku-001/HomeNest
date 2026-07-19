import { useState } from "react";
import styles from "./Properties.module.css";

import properties from "../data/properties";
import PropertyCard from "../components/PropertyCard/PropertyCard";

function Properties() {

    const [selectedType, setSelectedType] = useState("All");

    const filteredProperties =
        selectedType === "All"
            ? properties
            : properties.filter(
                  (property) => property.type === selectedType
              );

    return (
        <section className={styles.container}>

            <h1 className={styles.heading}>
                Our Properties
            </h1>

            <p className={styles.description}>
                Browse our collection of verified properties available
                for buying, renting and leasing.
            </p>

            <div className={styles.filterSection}>
                <button onClick={() => setSelectedType("All")}>
                    All
                </button>

                <button onClick={() => setSelectedType("Buy")}>
                    Buy
                </button>

                <button onClick={() => setSelectedType("Rent")}>
                    Rent
                </button>

                <button onClick={() => setSelectedType("Lease")}>
                    Lease
                </button>
            </div>

            <div className={styles.propertyContainer}>
                {filteredProperties.map((property) => (
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