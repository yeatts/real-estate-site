'use client'

import { useEffect, useState } from 'react';
import styles from './hamburger.module.scss';
import { TNavItem } from '@/app/models/navbar/navitem';

export default function Hamburger({scrolled, hbgActive}: {scrolled: boolean, hbgActive: boolean}) {
  useEffect(() => {
    const menuElement = document.getElementById('hamburgerIcon');

    // TODO: this is NOT optimal - this is temporary
    if (scrolled) {
      menuElement ? menuElement.classList.add(styles.scrolled) : null;
    } else {
      menuElement ? menuElement.classList.remove(styles.scrolled) : null;
    }
  }, [scrolled]);


  return (
    <div className={styles.hamburgerMenu}>
      <span className={styles.hamburgerIcon} id="hamburgerIcon">
        <span className={styles.hamburgerLine}></span>
        <span className={styles.hamburgerLine}></span>
        <span className={styles.hamburgerLine}></span>
      </span>
    </div>
  );
};