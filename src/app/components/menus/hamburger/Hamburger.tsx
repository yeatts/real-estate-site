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
    const menuElement = document.getElementById("hamburgerIcon");

    // TODO: this is NOT optimal - this is temporary
    if (scrolled) {
      menuElement ? menuElement.classList.add(styles.scrolled) : null;
    } else {
      menuElement ? menuElement.classList.remove(styles.scrolled) : null;
    }
  }, [scrolled]);



  return (
    <div className={styles.hamburgerMenu}>
      <button className={styles.hamburgerCheckbox} onClick={toggleMenu}>
        <span className="open">☰</span>
        <span className="close">×</span>
      </button>
      {/* <input
        type="checkbox"
        className={styles.hamburgerCheckbox}
        checked={isOpen}
        onChange={toggleMenu}
      /> */}
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
