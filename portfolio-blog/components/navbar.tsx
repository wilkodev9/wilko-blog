import { useState } from "react";
import styles from "../styles/navbarContainer.module.css";
export default function Navbar() {
    //checks if the navbar is active or not
    const [active, setActive] = useState(true)

    return (
    <div className={styles.navbarContainer}>
        <h1>wilko's blog</h1>
        {/*the onclick switches the state between true and flase*/}
        <button onClick={() => setActive(!active)}> &#60; menu</button>
        {/* checkes if its active or in active and gives the css acordingly */}
        <div className={active ? styles.navItems :styles.navItems1}>
            {/*the onclick switches the state between true and flase*/}
            <button onClick={() => setActive(!active)}> back &#62;</button>
            <li>home</li>
            <li>blog</li>
            <li>about me</li>
        </div>
    </div>
    )
  }
  