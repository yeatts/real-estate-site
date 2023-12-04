// style imports
import styles from './serviceCard.module.scss'

// util imports
import DynamicIcon from 'app/components/utils/DynamicIcon'

// type imports
import { TServiceCard } from 'app/models/cards/service-card'

export default function ServicesCard( props: TServiceCard ) {
  return (
    <div className={styles.serviceCard}>
      <DynamicIcon iconName={props.icon} size={25} color={"black"}/>
      <h2 className={styles.title}>{props.header}</h2>
      <p className={styles.description}>{props.description}</p>
    </div>
  )
}