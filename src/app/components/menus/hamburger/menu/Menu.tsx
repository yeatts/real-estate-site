'use client'

import { useEffect, useState } from 'react';
import styles from './menu.module.scss';
import { TNavItem } from '@/app/models/navbar/navitem';

export default function Menu({scrolled, hbgActive, navItems}: {scrolled: boolean, hbgActive: boolean, navItems: TNavItem[]}) {
  useEffect(() => {
    const menuElement = document.getElementById('');

    // TODO: this is NOT optimal - this is temporary
    if (scrolled) {
      menuElement ? menuElement.classList.add(styles.scrolled) : null;
    } else {
      menuElement ? menuElement.classList.remove(styles.scrolled) : null;
    }


  }, [scrolled, hbgActive]);

  return (
    <div className={`${styles.menuContainer} ${hbgActive ? styles.active : null}`}>
      <ul className={styles.menu}>
      {
          navItems.map((item: TNavItem, index) => {
            return (
              <ol className={styles.menuItem} key={index}>
                <a href={item.url}>{item.title}</a>
              </ol>
            )
          })
        }
      </ul>
    </div>
  );
};