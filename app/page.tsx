// nextjs imports
import Image from 'next/image'
import { Analytics } from '@vercel/analytics/react';
// import { Inter } from 'next/font/google'

// style imports
import styles from './page.module.scss'

// type imports
import { default as NavbarModel }from 'app/models/navbar/navbar'
import { default as NavItemModel } from 'app/models/navbar/navitem'

// component imports
import Navbar from 'app/components/navbar/Navbar'
import ButtonPrimary from 'app/components/buttons/ButtonPrimary'
import { default as CalendlyPopup } from 'app/components/calendly/Popup'

export default function Home() {
  const navItems = [
    NavItemModel.builder().withTitle("Properties").withUrl("https://www.homes.com/real-estate-agents/marquise-lovelace/c6rhq6g/").build(),
    NavItemModel.builder().withTitle("About").build(),
    NavItemModel.builder().withTitle("Contact").build(), 
  ]
  const navbarProps = NavbarModel.builder().withNavDisplayName("Marquise lovelace").withNavItems(navItems).build()

  return (
    <>
      <main className={styles.main}>
        <Navbar
          navDisplayName={navbarProps.navDisplayName}
          navItems={navbarProps.navItems}
          leftNavItems={navbarProps.leftNavItems}
          rightNavItems={navbarProps.rightNavItems}
        />
        {/* hero section */}
        <section className={styles.hero}>
          <Image className={styles.heroImage} src="/landing-houses.jpg" alt="Hauses" fill priority sizes='100%' />
          <div className={styles.heroBody}>
            <h1>
              {"I sell hauses."}
            </h1>
            <div className={styles.heroButtonGroup}>
              {/* TODO: create a popup here to make sure user knows they're leavin the site */}
              <ButtonPrimary buttonText="Search All Homes" onClickUrl='https://www.homes.com/real-estate-agents/marquise-lovelace/c6rhq6g/'/>
            </div>
          </div>
        </section>
        {/* bio section */}
        <section className={styles.bio}>
          <div className={styles.bioImgContainer}>
            <Image className={styles.bioImage} src="/cat-portrait-lol.jpg" alt="bio-pic" fill priority sizes='100%' />
          </div>
          <aside className={styles.bioText}>
            <h1>Quise Gives You The Keys 🔑</h1>
            <br />
            <p> As a Marine Corps veteran, Mar[quise] is a real estate agent who understands the value of hard work and dedication. He is passionate about helping his clients find the perfect home and making the buying or selling process as smooth as possible. With his sharp negotiating skills and knowledge of the local market, Quise is a valuable asset to anyone looking to buy or sell real estate. He is committed to providing exceptional service and building lasting relationships with his clients. Let Quise help you achieve your real estate goals with his expertise and professionalism. </p>
            <br />
            <ButtonPrimary buttonText="Get To Know Quise" />
          </aside>
        </section>
        {/* contact section */}
        <section className={styles.contact}>
          <Image className={styles.contactBgImg} src="/contact-bg-img.jpg" alt="kewl haus" fill priority sizes="100%" />
          <div className={styles.contactBody}>
            <h1>Connect With Quise</h1>
            <div className={styles.contactButtonGroup}>
              <CalendlyPopup/>
            </div>
          </div>
        </section>
        {/* testimonials section */}
        <section>

        </section>
        {/* listings section */}
        <section>

        </section>
        {/* social media section */}
        <section>

        </section>
        {/* footer */}
        <footer>

        </footer>
      </main>
      <Analytics/>
    </>
  )
}
