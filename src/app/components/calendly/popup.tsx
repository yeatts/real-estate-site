'use client'

// react imports
import { useRef, useEffect } from 'react'

// style imports
import buttStyle from '@/app/components/buttons/buttonPrimary.module.scss'

// calendly imports
import { PopupButton } from 'react-calendly'

export default function Popup() {
    const rootElementRef = useRef(document.getElementsByTagName("body")[0]);

    return (
        <>
            <PopupButton
                className={buttStyle.buttonPrimaryDark}
                url="https://calendly.com/marquiselovelace"
                rootElement={rootElementRef.current}
                text="Contact Quise"
            />
        </>
    )
}
