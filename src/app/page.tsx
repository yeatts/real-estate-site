// next imports
import Image from 'next/image'
// import { Inter } from 'next/font/google'

// style imports
import styles from './page.module.scss'
import buttonStyles from '@/app/styles/buttons.module.scss'

// type imports
// TODO: maybe change the model name to NavbarModel? 
import { default as NavbarModel }from '@/app/models/navbar/navbar'
import { default as ServiceCardModel } from '@/app/models/cards/service-card'

// component imports
import Navbar from '@/app/components/navbar/Navbar'
// import ServiceCard from '@/app/components/cards/ServiceCard'
import DynamicIcon from '@/app/components/utils/DynamicIcon'

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const navItems = NavbarModel.builder().withDefaultNavItems().build().navbarItems
  const serviceCard = ServiceCardModel.builder().withDefaultServiceCard().build()

  return (
    <main className={styles.main}>
      {/* header and nav */}
      <header className={styles.header}>
        <Navbar 
          navDisplayName="Marquise Lovelace"
          navItems={navItems}
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
            <button className={buttonStyles.buttonPrimaryDark}>
              <span> {"Search All Homes"} </span> <DynamicIcon iconName="bs-arrow-right"/>
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}


// {/* services section */}
// <section className={styles.services}>
//   <h1 className={styles.servicesHeader}>
//     {"Services"}
//   </h1>
//   {/* service cards */}
//   <div className={styles.serviceCardGroup}>
//     <ServiceCard icon={serviceCard.icon} header={serviceCard.header} description={serviceCard.description}/>
//     <ServiceCard icon={serviceCard.icon} header={serviceCard.header} description={serviceCard.description}/>
//     <ServiceCard icon={serviceCard.icon} header={serviceCard.header} description={serviceCard.description}/>
//     <ServiceCard icon={serviceCard.icon} header={serviceCard.header} description={serviceCard.description}/>
//     <ServiceCard icon={serviceCard.icon} header={serviceCard.header} description={serviceCard.description}/>
//     <ServiceCard icon={serviceCard.icon} header={serviceCard.header} description={serviceCard.description}/>
//   </div>
// </section>
