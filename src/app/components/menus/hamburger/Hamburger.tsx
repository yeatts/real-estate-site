'use client'

import { useEffect, useState } from 'react';
import styles from './hamburger.module.scss';

export default function Hamburger({scrolled}: {scrolled: boolean}) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const menuElement = document.getElementById('hamburgerIcon');

    // TODO: this is NOT optimal - this is temporary
    if (scrolled) {
      console.log(`scrolled`,)
      menuElement ? menuElement.classList.add(styles.scrolled) : null;
    } else {
      console.log(`not scrolled`,)
      menuElement ? menuElement.classList.remove(styles.scrolled) : null;
    }
  }, [scrolled]);


  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.hamburgerMenu}>
      <input
        type="checkbox"
        className={styles.hamburgerCheckbox}
        checked={isOpen}
        onChange={toggleMenu}
      />
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
};