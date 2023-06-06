'use client'

// react imports
import { useEffect } from 'react'

// style imports
import styles from './navbar.module.scss'

// type imports
import { TNavbar } from '@/app/models/navbar/navbar'
import { TNavItem } from '@/app/models/navbar/navitem'

export default function Navbar( props: TNavbar ) {
  // useEffect that sets event listener on nav element
  useEffect(() => {
    var navbar = document.getElementsByTagName('nav')[0];
    var body = document.getElementsByTagName('body')[0];
    
    body.addEventListener('scroll', () => {

      console.log(`scrollTop: `, document.body.scrollTop === 0)

      if (document.body.scrollTop === 0) {
        navbar.classList.remove(styles.scrolled);
      } else {
        navbar.classList.add(styles.scrolled);
      }
      
    });
    
    // Remove the event listener when the component is unmounted
    return () => {
      body.removeEventListener('scroll', () => {});
    };
  }, []); // The empty dependency array [] ensures that the effect runs only once on mount


  return (
    <nav className={styles.nav}>
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
    </nav>
  )
}