// next imports
import Image from 'next/image'
// import { Inter } from 'next/font/google'

// style imports
import styles from './page.module.scss'

// type imports
// TODO: maybe change the model name to NavbarModel? 
import { default as NavbarModel }from '@/app/models/navbar/navbar'

// component imports
import Navbar from '@/app/components/navbar/navbar'

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const navItems = NavbarModel.builder().withDefaultNavItems().build().navItems

  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <Navbar 
          navDisplayName="Navbar Title"
          navItems={navItems}
        /> 
      </header>
      <section className={styles.section}>
        <Image className={styles.hero} src="/landing-houses.jpg" alt="Hauses" fill priority/>
        <section>
          <h1>
            {"I sell hauses. Let's make a deal."}
          </h1>
          

        </section>
      </section>
    </main>
  )
}
