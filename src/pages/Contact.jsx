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

    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

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

    function validateForm() {

        const newErrors = {};

        if (formData.fullName === "") {
            newErrors.fullName = "Full Name is required";
        }

        if (formData.email === "") {
            newErrors.email = "Email is required";
        } else if (!formData.email.includes("@")) {
            newErrors.email = "Enter a valid email";
        }

        if (formData.phone === "") {
            newErrors.phone = "Phone Number is required";
        } else if (!/^\d{10}$/.test(formData.phone)) {
            newErrors.phone = "Phone Number must be 10 digits";
        }

        if (formData.visitDate === "") {
            newErrors.visitDate = "Select a visit date";
        }

        if (formData.propertyType === "") {
            newErrors.propertyType = "Select a property type";
        }

        if (formData.purpose === "") {
            newErrors.purpose = "Select a purpose";
        }

        if (formData.amenities.length === 0) {
            newErrors.amenities = "Select at least one amenity";
        }

        if (formData.message === "") {
            newErrors.message = "Message is required";
        }

        return newErrors;
    }

    function handleSubmit(event) {

        event.preventDefault();

        const validationErrors = validateForm();

        if (Object.keys(validationErrors).length > 0) {

            setErrors(validationErrors);

        } else {

            setErrors({});
            setSubmitted(true);

        }

    }

    function handleReset() {
        setFormData({
            fullName: "",
            email: "",
            phone: "",
            visitDate: "",
            propertyType: "",
            purpose: "",
            amenities: [],
            message: ""
        });

        setErrors({});
        setSubmitted(false);
    }

    return (
        <section className={styles.container}>

            <h1 className={styles.heading}>
                Contact Us
            </h1>

            {submitted ? (

                <div>
                    <h2>Your enquiry has been submitted successfully.</h2>

                    <button
                        type="button"
                        className={styles.successButton}
                        onClick={handleReset}
                    >
                        Submit another enquiry
                    </button>
                </div>

            ) : (

                <form onSubmit={handleSubmit}>

                    <div className={styles.formGroup}>
                        <label htmlFor="fullName">Full Name</label>
                        <input
                            id="fullName"
                            type="text"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                        />
                        {errors.fullName && (
                            <p className={styles.error}>
                                {errors.fullName}
                            </p>
                        )}
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="email">Email</label>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        {errors.email && (
                            <p className={styles.error}>
                                {errors.email}
                            </p>
                        )}
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="phone">Phone Number</label>
                        <input
                            id="phone"
                            type="text"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                        />
                        {errors.phone && (
                            <p className={styles.error}>
                                {errors.phone}
                            </p>
                        )}
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="visitDate">Preferred Visit Date</label>
                        <input
                            id="visitDate"
                            type="date"
                            name="visitDate"
                            value={formData.visitDate}
                            onChange={handleChange}
                        />
                        {errors.visitDate && (
                            <p className={styles.error}>
                                {errors.visitDate}
                            </p>
                        )}
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="propertyType">Property Type</label>

                        <select
                            id="propertyType"
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
                        {errors.propertyType && (
                            <p className={styles.error}>
                                {errors.propertyType}
                            </p>
                        )}
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
                        {errors.purpose && (
                            <p className={styles.error}>
                                {errors.purpose}
                            </p>
                        )}
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
                        {errors.amenities && (
                            <p className={styles.error}>
                                {errors.amenities}
                            </p>
                        )}
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="message">Message</label>

                        <textarea
                            id="message"
                            rows="5"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                        ></textarea>
                        {errors.message && (
                            <p className={styles.error}>
                                {errors.message}
                            </p>
                        )}
                    </div>

                    <div className={styles.buttonGroup}>
                        <button type="submit">
                            Submit
                        </button>

                        <button
                            type="button"
                            onClick={handleReset}
                        >
                            Reset
                        </button>
                    </div>

                </form>
            )}

        </section>
    );
}

export default Contact;