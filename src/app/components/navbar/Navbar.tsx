'use client'

// react imports
import { useEffect, useState } from 'react'

// style imports
import styles from './navbar.module.scss'

// type imports
import { TNavbar } from '@/app/models/navbar/navbar'
import { TNavItem } from '@/app/models/navbar/navitem'

// component imports
import Hamburger from '../menus/hamburger/Hamburger'
import Menu from '../menus/hamburger/menu/Menu'

export default function Navbar(props: TNavbar) {
  // useState for scrolled boolean value
  const [scrolled, setScrolled] = useState(false);
  const [hbgActive, setHbgActive] = useState(false); // hbg = hamburger

  // useEffect that sets event listener on nav element
  useEffect(() => {
    const navbar = document.getElementsByTagName('nav')[0];
    const body = document.getElementsByTagName('body')[0];

    body.addEventListener('scroll', () => {

      if (document.body.scrollTop === 0) {
        navbar.classList.remove(styles.scrolled);
        setScrolled(false);
      } else {
        navbar.classList.add(styles.scrolled);
        setScrolled(true);
      }

    });

    // Remove the event listener when the component is unmounted
    return () => {
      body.removeEventListener('scroll', () => { });
    };
  }, [hbgActive]); // The empty dependency array [] ensures that the effect runs only once on mount

  const toggleHbg = () => {
    setHbgActive(!hbgActive);
  };

  return (
    <nav className={`${styles.nav} ${hbgActive ? styles.active : null}`}>
      <ul className={styles.navItems}>
        {
          props.leftNavItems.map((item: TNavItem, index) => {
            return (
              <ol className={styles.navItem} key={index}>
                <a href={item.url}>{item.title}</a>
              </ol>
            )
          })
        }
      </ul>
      <header className={styles.navTitle}>
        {props.navDisplayName}
      </header>
      <ul className={styles.navItems}>
        {
          props.rightNavItems.map((item: TNavItem, index) => {
            return (
              <ol className={styles.navItem} key={index}>
                <a href={item.url}>{item.title}</a>
              </ol>
            )
          })
        }
      </ul>
      <Hamburger scrolled={scrolled} hbgActive={hbgActive} toggleHbg={toggleHbg} />
      <Menu scrolled={scrolled} hbgActive={hbgActive} navItems={props.navItems} />
    </nav>
  )
}