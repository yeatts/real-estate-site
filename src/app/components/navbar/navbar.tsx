// style imports
import styles from './navbar.module.scss'

// type imports
import { TNavbar } from '@/app/models/navbar/navbar'
import NavItem from '@/app/models/navbar/nav-item'

export default function Navbar( props: TNavbar ) {
  const itemCount: number = props.navItems.length
  const leftSideItems: NavItem[] = props.navItems.slice(0, Math.floor(itemCount / 2))
  const rightSideItems: NavItem[] = props.navItems.slice(Math.floor(itemCount / 2), itemCount)

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