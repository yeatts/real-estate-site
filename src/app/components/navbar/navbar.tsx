'use client'

// react imports
import { useEffect } from 'react'

// style imports
import styles from './navbar.module.scss'

// type imports
import { TNavbar } from '@/app/models/navbar/navbar'
import NavItem from '@/app/models/navbar/navitem'

export default function Navbar( props: TNavbar ) {
  const itemCount: number = props.navItems.length
  const leftSideItems: NavItem[] = props.navItems.slice(0, Math.floor(itemCount / 2))
  const rightSideItems: NavItem[] = props.navItems.slice(Math.floor(itemCount / 2), itemCount)

  // useEffect that sets event listener on nav element
  useEffect(() => {
    const navElement = document.getElementsByTagName("nav")[0]

    const getYCoord = (): number => {
      return navElement.getBoundingClientRect().top + window.pageYOffset
    }

    // Add the event listener to the nav element
    navElement.addEventListener('click', getYCoord);

    // Remove the event listener when the component is unmounted
    return () => {
      navElement.removeEventListener('click', getYCoord);
    };
  }, []); // The empty dependency array [] ensures that the effect runs only once on mount


  return (
    <nav className={styles.nav}>
      <ul className={styles.navItems}>
        {
          leftSideItems.map((item) => {
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
          rightSideItems.map((item) => {
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