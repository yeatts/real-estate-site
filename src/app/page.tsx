// next imports
import Image from 'next/image'
// import { Inter } from 'next/font/google'

// style imports
import styles from './page.module.scss'
import buttonStyles from '@/app/styles/buttons.module.scss'

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
      <section className={styles.hero}>
        <Image className={styles.heroImage} src="/landing-houses.jpg" alt="Hauses" fill priority/>
        <section className={styles.heroBody}>
          <h1>
            {"I sell hauses."}
          </h1>
          <p>
            {"Let me help you experience the luxury of owning your dream home. "} 
            <br/>
            {"With my expert real estate services, I'll guide you every step of the way to finding the perfect property."}
          </p>
          <div className={styles.heroButtonGroup}>
            <button className={buttonStyles.buttonPrimary}>
              {"Let's do it!"}
            </button>
            <button className={buttonStyles.buttonSecondary}>
              {"Learn More."}
            </button>
          </div>

        </section>
      </section>
    </main>
  )
}
