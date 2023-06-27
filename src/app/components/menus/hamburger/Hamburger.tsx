"use client";

import { useEffect, useState } from "react";
import styles from "./hamburger.module.scss";
import React from "react";

export default function Hamburger({ scrolled }: { scrolled: boolean }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const menuElement = document.getElementById("hamburgerButton");

    // TODO: this is NOT optimal - this is temporary
    if (scrolled) {
      menuElement ? menuElement.classList.add(styles.scrolled) : null;
    } else {
      menuElement ? menuElement.classList.remove(styles.scrolled) : null;
    }
    console.log(menuElement);
  }, [scrolled]);

  const toggleMenu = (e: React.MouseEvent<HTMLButtonElement>) => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

  return (
    <div className={styles.hamburgerMenu}>
      <button
        className={`${styles.hamburgerButton} ${isOpen ? styles.opened : styles.closed}`}
        id="hamburgerButton"
        onClick={toggleMenu}
      >
        <span className={styles.open}>☰</span>
        <span className={styles.close}>×</span>
      </button>
      <ul className={styles.menu}>
        <li className={styles.menuItem}>Home</li>
        <li className={styles.menuItem}>About</li>
        <li className={styles.menuItem}>Services</li>
        <li className={styles.menuItem}>Contact</li>
      </ul>
    </div>
  );
}
