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
    // can only mount when layout body is mounted first  
    setIsMounted(true);
  }, []);

  return (
    <>
      {isMounted && (
        <PopupButton
          url="https://calendly.com/marquiselovelace"
          rootElement={document.getElementsByTagName('body')[0]}
          text="Contact"
        />
      )}
    </>
  );
}
