"use client"

import { useEffect } from 'react'

// style imports
import styles from './navbar.module.scss'

// type imports
import { TNavbar } from '@/app/models/navbar/navbar'

export default function Navbar( navbarProps: TNavbar ) {

  useEffect(() => {
    console.log(`navbarProps`, navbarProps)
  })

  return (
    <nav className={styles.nav}>
      <div className={styles.navTitle}>{navbarProps.navDisplayName}</div>
      <ul className={styles.navUl}>
        {
          navbarProps.navItems.map((item) => (
            <li className={styles.navLi} key={item.title}>
              <a href={item.url}>{item.title}</a>
            </li>
          )) 
        }
      </ul>
    </nav>
  )
}