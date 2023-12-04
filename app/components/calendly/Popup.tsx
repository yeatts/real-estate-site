'use client'
// react imports
import React, { useEffect, useState } from 'react'

// calendly imports
import { PopupButton } from 'react-calendly';

type TPopupProps = {
  textStyle: string
}

export default function Popup(props: TPopupProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // can only mount when layout body is mounted first  
    setIsMounted(true);
  }, []);

  return (
    <>
      {isMounted && (
        <PopupButton
          className={props.textStyle}
          url="https://calendly.com/marquiselovelace"
          rootElement={document.getElementsByTagName('body')[0]}
          text="Connect"
        />
      )
      }
    </>
  );
}
