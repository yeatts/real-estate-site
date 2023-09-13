'use client'

import { useEffect, useState } from 'react';
import styles from './hamburger.module.scss';
import { TNavItem } from '@/app/models/navbar/navitem';

export default function Hamburger({scrolled, toggleHbg, hbgActive}: {scrolled: boolean, toggleHbg: Function, hbgActive: boolean}) {
  useEffect(() => {
    const menuElement = document.getElementById('hamburgerIcon');

    // TODO: this is NOT optimal - this is temporary
    if (scrolled) {
      menuElement ? menuElement.classList.add(styles.scrolled) : null;
    } else {
      menuElement ? menuElement.classList.remove(styles.scrolled) : null;
    }

    // if (hbgActive) {
    //   menuElement ? menuElement.classList.add(styles.active) : null;
    // } else {
    //   menuElement ? menuElement.classList.remove(styles.active) : null;
    // }
  }, [scrolled, hbgActive]);

  return (
    <div className={`${styles.hamburgerMenu} ${hbgActive ? styles.active : null}`} onClick={() => {toggleHbg()}}>
      <span className={styles.hamburgerIcon} id="hamburgerIcon">
        <span className={styles.hamburgerLine}></span>
        <span className={styles.hamburgerLine}></span>
        <span className={styles.hamburgerLine}></span>
      </span>
    </div>
  );
};