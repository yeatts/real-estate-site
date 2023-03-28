// styles import
import styles from './buttonPrimary.module.scss'

// component imports
import DynamicIcon from '@/app/components/utils/DynamicIcon'

type TButtonPrimary = {
    buttonText: string
}

export default function ButtonPrimary(props: TButtonPrimary ) {
    return (
        <button className={styles.buttonPrimaryDark}>
            <span> {props.buttonText} </span>  
            &nbsp; &nbsp;  
            <DynamicIcon iconName="bs-arrow-right"/>
        </button>
    )
}