import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.scss'
import { useEffect, useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

{/* <h2 className={inter.className}>
  Docs <span>-&gt;</span>
</h2> */}

{/* <Image
  src="/vercel.svg"
  alt="Vercel Logo"
  className={styles.vercelLogo}
  width={100}
  height={24}
  priority
/> */}


export default function Home() {

  return (
    <main className={styles.main}>
      {/* TODO: start coding here       */}
    </main>
  )
}
