'use client'
// react imports
import React, { useEffect, useState } from 'react'

// style imports
import buttStyle from '@/app/components/buttons/buttonPrimary.module.scss';

// calendly imports
import { PopupButton } from 'react-calendly';

export default function Popup() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true); // had to do this because I was getting an error that said "document is not defined" when we use it with the rootElement prop
  }, []);

  return (
    <>
      {isMounted && (
        <PopupButton
          className={buttStyle.buttonPrimaryDark}
          url="https://calendly.com/marquiselovelace"
          rootElement={document.getElementsByTagName('body')[0]}
          text="Contact Quise"
        />
      )}
    </>
  );
}
