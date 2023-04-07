import { useState } from "react";
import styles from "../styles/navbarContainer.module.css";
export default function Navbar() {

    const [active, setActive] = useState(true)
    return (
    <div className={styles.navbarContainer}>
        <h1>wilko's blog</h1>
        <button onClick={() => setActive(!active)}> &#60; menu</button>
        <div className={active ? styles.navItems :styles.navItems1}>
            <button onClick={() => setActive(!active)}> back &#62;</button>
            <li>test</li>
            <li>test</li>
            <li>test</li>
        </div>
    </div>
    )
  }
  