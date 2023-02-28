// style imports
import styles from './navbar.module.scss'

// type imports
import NavItem from '@/app/types/navbar/navItem'

// other imports
import { ReactFragment } from 'react'

interface NavbarProps {
  navTitle: string,
  navItems: NavItem[]
}

export default function Navbar( NavbarProps: NavbarProps ) {

  return (
      <nav className={styles.nav}>
        <div className={styles.navTitle}>{NavbarProps.navTitle}</div>
        <ul>
          {
            NavbarProps.navItems.map((item) => {
              <li className={styles.navItem}>
                <a href={item.url}>{item.title}</a>
              </li>
            }) as ReactFragment
          }
        </ul>
      </nav>
    )
  }
  