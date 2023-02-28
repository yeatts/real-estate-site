// style imports
import styles from './navbar.module.scss'

// type imports
import NavItem from '@/app/types/navbar/navItem'

// other imports
import { ReactFragment } from 'react'

export default function Navbar( navTitle: string = "Navbar Title", navItems: NavItem[] = [NavItem.empty()]) {

    // const items = navItems.map((item) => {
    //   <li className={styles.navItem} key={item.title}>
    //     <a href={item.url}>{item.title}</a>
    //   </li>
    // })

  return (
      <nav className={styles.nav}>
        <div className={styles.navTitle}>{navTitle}</div>
        <ul>
          {
            navItems.map((item) => {
              <li className={styles.navItem} key={item.title}>
                <a href={item.url}>{item.title}</a>
              </li>
            }) as ReactFragment
          }
        </ul>
      </nav>
    )
  }
  