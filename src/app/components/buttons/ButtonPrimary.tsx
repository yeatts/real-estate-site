'use client'

// styles import
import styles from './buttonPrimary.module.scss'

// component imports
import DynamicIcon from '@/app/components/utils/DynamicIcon'

type TButtonPrimaryProps = {
    buttonText: string,
    onClickUrl?: string
}

export default function ButtonPrimary(props: TButtonPrimaryProps ) {
    return (
        <button className={styles.buttonPrimaryDark} onClick={() => location.href = `${props.onClickUrl}`}>
            <span> {props.buttonText} </span>
            &nbsp; &nbsp;  
            <DynamicIcon iconName="bs-arrow-right"/>
        </button>
    )
}