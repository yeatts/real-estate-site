// styles import
import styles from './buttonPrimary.module.scss'

// component imports
import DynamicIcon from '@/app/components/utils/DynamicIcon'

// TODO: make this a dynamic component that takes in a prop for the button text

type TButtonPrimary = {
    buttonText: string
}

export default function ButtonPrimary(props: TButtonPrimary ) {
    return (
        <button className={styles.buttonPrimaryDark}>
            <span> {props.buttonText} </span> <DynamicIcon iconName="bs-arrow-right"/>
        </button>
    )
}