"use client"

import { useEffect } from 'react'

// style imports
import styles from './navbar.module.scss'

// type imports
import { TNavbar } from '@/app/models/navbar/navbar'

export default function Navbar( props: TNavbar ) {

  useEffect(() => {
    console.log(`navbar props`, props)
  })

  return (
    <nav className={styles.nav}>
      <div className={styles.navTitle}>{props.navDisplayName}</div>
      <ul className={styles.navUl}>
        {
          props.navItems.map((item) => (
            <li className={styles.navLi} key={item.title}>
              <a href={item.url}>{item.title}</a>
            </li>
          )) 
        }
      </ul>
    </nav>
  )
}