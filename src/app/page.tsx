// nextjs imports
import Image from 'next/image'
// import { Inter } from 'next/font/google'

// style imports
import styles from './page.module.scss'

// type imports
import { default as NavbarModel }from '@/app/models/navbar/navbar'
import { default as NavItemModel } from '@/app/models/navbar/nav-item'

// component imports
import Navbar from '@/app/components/navbar/Navbar'
import ButtonPrimary from '@/app/components/buttons/ButtonPrimary'

export default async function Home() {
  const navItems = [
    NavItemModel.builder().withTitle("Properties").build(),
    NavItemModel.builder().withTitle("About").build(),
    NavItemModel.builder().withTitle("Contact").build(),
  ]
  const navbarProps = NavbarModel.builder().withNavDisplayName("Marquise lovelace").withNavItems(navItems).build()

  return (
    <main className={styles.main}>
      {/* header and nav */}
      <header className={styles.header}>
        <Navbar 
          navDisplayName={navbarProps.navbar.navDisplayName} 
          navItems={navbarProps.navbar.navItems}
        /> 
      </header>
      {/* hero section */}
      <section className={styles.hero}>
        <Image className={styles.heroImage} src="/landing-houses.jpg" alt="Hauses" fill priority/>
        <div className={styles.heroBody}>
          <h1>
            {"I sell hauses."}
          </h1>
          <div className={styles.heroButtonGroup}>
            <ButtonPrimary buttonText="Search All Homes"/>
          </div>
        </div>
      </section>
      {/* bio section */}
      <section className={styles.bio}>
        <div className={styles.bioImgContainer}>
          <Image className={styles.bioImage} src="/cat_portrait_lol.jpg" alt="bio-pic" fill priority/>
        </div>
        <aside className={styles.bioText}>
          <h1>Quise Gives You The Keys 🔑</h1>
          <br/>
          <p> As a Marine Corps veteran, Mar[quise] is a real estate agent who understands the value of hard work and dedication. He is passionate about helping his clients find the perfect home and making the buying or selling process as smooth as possible. With his sharp negotiating skills and knowledge of the local market, Quise is a valuable asset to anyone looking to buy or sell real estate. He is committed to providing exceptional service and building lasting relationships with his clients. Let Quise help you achieve your real estate goals with his expertise and professionalism. </p>
          <br/>
          <ButtonPrimary buttonText="Get To Know Quise"/>
        </aside>
      </section> 
      {/* testimonials section */}
      <section>
        
      </section>
      {/* listings section */}
      <section>

      </section>
      {/* contact section */}
      <section>

      </section>
      {/* social media section */}
      <section>

      </section>
      {/* footer */}
      <footer>
        
      </footer>
    </main>
  )
}