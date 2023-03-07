// next imports
// import Image from 'next/image'
import { Inter } from 'next/font/google'

// style imports
import styles from './page.module.scss'

// type imports
// TODO: maybe change the model name to NavbarModel? 
import { default as NavbarModel }from '@/app/models/navbar/navbar'

// component imports
import Navbar from '@/app/components/navbar/navbar'

// other imports
// import { useEffect, useState } from 'react'

// const inter = Inter({ subsets: ['latin'] })

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

  const navItems = NavbarModel.builder().withDefaultNavItems().build().navItems

  return (
    <main className={styles.main}>
      <Navbar 
        navDisplayName="Navbar Title"
        navItems={navItems}
      /> 
    </main>
  )
}
