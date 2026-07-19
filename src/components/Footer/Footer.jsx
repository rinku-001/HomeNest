import styles from "./Footer.module.css";

function Footer() {
    return (
        <footer className={styles.footer}>
            <h3>HomeNest</h3>

            <p>Email: info@homenest.com</p>

            <p>Phone: +91 9876543210</p>

            <p>Follow Us: Facebook | Instagram | LinkedIn</p>

            <p>&copy; 2026 HomeNest. All Rights Reserved.</p>
        </footer>
    );
}

export default Footer;