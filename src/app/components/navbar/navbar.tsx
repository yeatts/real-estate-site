// style imports
import styles from './navbar.module.scss'

// type imports
import NavItem from '@/app/models/navbar/navItem'

// other imports
import { ReactFragment } from 'react'

type NavbarPropsType = {
  navTitle: string,
  navItems: NavItem[]
}

export default function Navbar( navbarProps: NavbarPropsType ) {

  return (
      <nav className={styles.nav}>
        <div className={styles.navTitle}>{navbarProps.navTitle}</div>
        <ul>
          {
            navbarProps.navItems.map((item) => {
              <li className={styles.navItem}>
                <a href={item.url}>{item.title}</a>
              </li>
            }) as ReactFragment
          }
        </ul>
      </nav>
    )
  }
  