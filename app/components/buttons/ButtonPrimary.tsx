'use client'

// styles import
// import styles from './buttonPrimary.module.scss'

// component imports
import DynamicIcon from '@/app/components/utils/DynamicIcon'

type TButtonPrimaryProps = {
    buttonText: string,
    onClickUrl?: string
}

export default function ButtonPrimary(props: TButtonPrimaryProps ) {
    return (
        // <button className={styles.buttonPrimaryDark} onClick={() => location.href = `${props.onClickUrl}`}>
        <button className="flex items-center justify-center border-solid border-2 border-pink-500 rounded-full p-1" onClick={() => location.href = `${props.onClickUrl}`}>
            <span className="border-solid border-2 border-yellow-500"> {props.buttonText} </span>
            {/* &nbsp; &nbsp;   */}
            <DynamicIcon iconName="bs-arrow-right"/>
        </button>
    )
}