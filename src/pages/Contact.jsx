import { useState } from "react";
import styles from "./Contact.module.css";

function Contact() {

    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        visitDate: "",
        propertyType: "",
        purpose: "",
        amenities: [],
        message: ""
    });

    function handleChange(event) {

        const { name, value } = event.target;

        setFormData({
            ...formData,
            [name]: value
        });

    }

    function handleCheckboxChange(event) {

        const { value, checked } = event.target;

        if (checked) {

            setFormData({
                ...formData,
                amenities: [...formData.amenities, value]
            });

        } else {

            setFormData({
                ...formData,
                amenities: formData.amenities.filter(
                    (item) => item !== value
                )
            });

        }

    }

    return (
        <section className={styles.container}>

            <h1 className={styles.heading}>
                Contact Us
            </h1>

            <form>

                <div className={styles.formGroup}>
                    <label>Full Name</label>
                    <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                    />
                </div>

                <div className={styles.formGroup}>
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>

                <div className={styles.formGroup}>
                    <label>Phone Number</label>
                    <input
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                    />
                </div>

                <div className={styles.formGroup}>
                    <label>Preferred Visit Date</label>
                    <input
                        type="date"
                        name="visitDate"
                        value={formData.visitDate}
                        onChange={handleChange}
                    />
                </div>

                <div className={styles.formGroup}>
                    <label>Property Type</label>

                    <select
                        name="propertyType"
                        value={formData.propertyType}
                        onChange={handleChange}
                    >
                        <option value="">Select Property Type</option>
                        <option value="Apartment">Apartment</option>
                        <option value="Villa">Villa</option>
                        <option value="Plot">Plot</option>
                        <option value="Commercial">Commercial</option>
                    </select>
                </div>

                <div className={styles.formGroup}>
                    <label>Purpose</label>

                    <div className={styles.radioGroup}>
                        <label>
                            <input
                                type="radio"
                                name="purpose"
                                value="Buy"
                                checked={formData.purpose === "Buy"}
                                onChange={handleChange}
                            />
                            Buy
                        </label>

                        <label>
                            <input
                                type="radio"
                                name="purpose"
                                value="Rent"
                                checked={formData.purpose === "Rent"}
                                onChange={handleChange}
                            />
                            Rent
                        </label>

                        <label>
                            <input
                                type="radio"
                                name="purpose"
                                value="Lease"
                                checked={formData.purpose === "Lease"}
                                onChange={handleChange}
                            />
                            Lease
                        </label>
                    </div>
                </div>

                <div className={styles.formGroup}>
                    <label>Amenities</label>

                    <div className={styles.checkboxGroup}>
                        <label>
                            <input
                                type="checkbox"
                                value="Parking"
                                checked={formData.amenities.includes("Parking")}
                                onChange={handleCheckboxChange}
                            />
                            Parking
                        </label>

                        <label>
                            <input
                                type="checkbox"
                                value="Garden"
                                checked={formData.amenities.includes("Garden")}
                                onChange={handleCheckboxChange}
                            />
                            Garden
                        </label>

                        <label>
                            <input
                                type="checkbox"
                                value="Swimming Pool"
                                checked={formData.amenities.includes("Swimming Pool")}
                                onChange={handleCheckboxChange}
                            />
                            Swimming Pool
                        </label>
                    </div>
                </div>

                <div className={styles.formGroup}>
                    <label>Message</label>

                    <textarea
                        rows="5"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                    ></textarea>
                </div>

                <div className={styles.buttonGroup}>
                    <button type="submit">
                        Submit
                    </button>

                    <button type="reset">
                        Reset
                    </button>
                </div>

            </form>

        </section>
    );
}

export default Contact;