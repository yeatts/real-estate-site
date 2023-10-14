// styles imports
import styles from '@/app/components/archive/services/servicesSection.module.scss'

// component imports
import ServiceCard from 'app/components/cards/ServiceCard'

// model imports
import { default as ServiceCardModel } from 'app/models/cards/service-card'

export default function ServicesSection() {
    const serviceCard = ServiceCardModel.builder().withDefaultServiceCard().build()

    return (
        <>
            {/* services section */}
            <section className={styles.services}>
            <h1 className={styles.servicesHeader}>
                {"Services"}
            </h1>
            {/* service cards */}
            <div className={styles.serviceCardGroup}>
                <ServiceCard icon={serviceCard.icon} header={serviceCard.header} description={serviceCard.description}/>
                <ServiceCard icon={serviceCard.icon} header={serviceCard.header} description={serviceCard.description}/>
                <ServiceCard icon={serviceCard.icon} header={serviceCard.header} description={serviceCard.description}/>
                <ServiceCard icon={serviceCard.icon} header={serviceCard.header} description={serviceCard.description}/>
                <ServiceCard icon={serviceCard.icon} header={serviceCard.header} description={serviceCard.description}/>
                <ServiceCard icon={serviceCard.icon} header={serviceCard.header} description={serviceCard.description}/>
            </div>
            </section>
        </>
    )
}