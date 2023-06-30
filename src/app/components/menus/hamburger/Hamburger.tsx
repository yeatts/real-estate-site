"use client";

import { useEffect, useState } from "react";
import styles from "./hamburger.module.scss";

interface IProps {
  scrolled: boolean;
  isOpen: boolean;
  onMenuToggle:(e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function Hamburger(props:IProps) {
  const {scrolled, isOpen, onMenuToggle} = props;

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



  return (
    <div className={styles.hamburgerMenu}>
      <button
        className={styles.hamburgerButton}
        id="hamburgerButton"
        onClick={toggleMenu}
        className={`${isOpen ? styles.opened : styles.closed}`}
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
