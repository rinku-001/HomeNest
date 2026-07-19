import Hero from "../components/Hero/Hero";
import FeatureCard from "../components/FeatureCard/FeatureCard";
import Benefits from "../components/Benefits/Benefits";
import Footer from "../components/Footer/Footer";

import features from "../data/features";

import styles from "./Home.module.css";

function Home() {
    return (
        <>
            <Hero />

            <section className={styles.featureSection}>
                <h2 className={styles.heading}>
                    Our Features
                </h2>

                <div className={styles.featureContainer}>
                    {features.map((feature) => (
                        <FeatureCard
                            key={feature.id}
                            title={feature.title}
                            description={feature.description}
                        />
                    ))}
                </div>
            </section>

            <Benefits />

            <Footer />
        </>
    );
}

export default Home;