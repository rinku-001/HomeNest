import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                HomeNest
            </div>

            <ul className={styles.navLinks}>
                <li>
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive ? styles.active : ""
                        }
                    >
                        Home
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        to="/properties"
                        className={({ isActive }) =>
                            isActive ? styles.active : ""
                        }
                    >
                        Properties
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        to="/contact"
                        className={({ isActive }) =>
                            isActive ? styles.active : ""
                        }
                    >
                        Contact
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        to="/about"
                        className={({ isActive }) =>
                            isActive ? styles.active : ""
                        }
                    >
                        About
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;