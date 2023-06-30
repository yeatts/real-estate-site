"use client";

import { useEffect, useState } from "react";
import styles from "./hamburger.module.scss";

export default function Hamburger({ scrolled } : { scrolled: boolean }) {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const menuElement = document.getElementById("hamburgerIcon");

    // TODO: this is NOT optimal - this is temporary
    if (scrolled) {
      menuElement ? menuElement.classList.add(styles.scrolled) : null;
    } else {
      menuElement ? menuElement.classList.remove(styles.scrolled) : null;
    }
  }, [scrolled]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className={styles.hamburgerMenu}>
      <button className={styles.hamburgerCheckbox} onClick={toggleMenu}>
        <span className="open">☰</span>
        <span className="close">×</span>
      </button>
      <span className={styles.hamburgerIcon} id="hamburgerIcon">
        <span className={styles.hamburgerLine}></span>
        <span className={styles.hamburgerLine}></span>
        <span className={styles.hamburgerLine}></span>
      </span>
      <ul className={styles.menu}>
        <li className={styles.menuItem}>Home</li>
        <li className={styles.menuItem}>About</li>
        <li className={styles.menuItem}>Services</li>
        <li className={styles.menuItem}>Contact</li>
      </ul>
    </div>
  );
}
