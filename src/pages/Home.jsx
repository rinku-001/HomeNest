import Hero from "../components/Hero/Hero";
import FeatureCard from "../components/FeatureCard/FeatureCard";
import Benefits from "../components/Benefits/Benefits";

import features from "../data/features";

function Home() {
    return (
        <>
            <Hero />

            <section>
                <h2
                    style={{
                        textAlign: "center",
                        margin: "40px 0 20px"
                    }}
                >
                    Our Features
                </h2>

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(2,1fr)",
                        gap: "20px",
                        padding: "20px"
                    }}
                >
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
        </>
    );
}

export default Home;