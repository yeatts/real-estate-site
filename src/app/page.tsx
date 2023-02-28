// next imports
// import Image from 'next/image'
import { Inter } from 'next/font/google'

// style imports
import styles from './page.module.scss'

// type imports
import Nav from '@/app/models/navbar/navbar'

// component imports
import Navbar from '@/app/components/navbar/navbar'

// other imports
// import { useEffect, useState } from 'react'

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
      <Navbar 
        navTitle="Navbar Title"
        navItems={Nav.withDefaultNavItems().navItems}
      /> 
    </main>
  )
}
