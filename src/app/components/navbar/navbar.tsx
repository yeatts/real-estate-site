// style imports
import styles from './navbar.module.scss'

// type imports
import { TNavbar } from '@/app/models/navbar/navbar'

// other imports
import { ReactFragment } from 'react'

export default function Navbar( navbarProps: TNavbar) {

  console.log(`navbarProps`, navbarProps)

  return (
      <nav className={styles.nav}>
        <div className={styles.navTitle}>{navbarProps.navDisplayName}</div>
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
  