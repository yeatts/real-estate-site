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

export default function Navbar( props: TNavbar ) {
  // useState for scrolled boolean value
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const menuToggleHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

  // useEffect that sets event listener on nav element
  useEffect(() => {
    var navbar = document.getElementsByTagName('nav')[0];
    var body = document.getElementsByTagName('body')[0];
    
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
      body.removeEventListener('scroll', () => {});
    };
  }, []); // The empty dependency array [] ensures that the effect runs only once on mount


  return (
    <nav className={`${styles.nav} ${isOpen ? styles.opened : styles.closed}`}>
      <ul className={styles.navItems}>
        {
          props.leftNavItems.map((item: TNavItem) => {
            return (
              <ol className={styles.navItem} key={item.title}>
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
          props.rightNavItems.map((item: TNavItem) => {
            return (
              <ol className={styles.navItem} key={item.title}>
                <a href={item.url}>{item.title}</a>
              </ol>
            )
          })
        }
      </ul>
      <Hamburger scrolled={scrolled} isOpen={isOpen} onMenuToggle={menuToggleHandler}/>
    </nav>
  )
}