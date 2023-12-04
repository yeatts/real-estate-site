// nextjs imports
import Image from 'next/image'
import { Analytics } from '@vercel/analytics/react';
// import { Inter } from 'next/font/google'

// style imports
import styles from './page.module.scss'

// type imports
import { default as NavbarModel } from 'app/models/navbar/navbar'
import { default as NavItemModel } from 'app/models/navbar/navitem'

// component imports
import Navbar from 'app/components/navbar/Navbar'
import ButtonPrimary from 'app/components/buttons/ButtonPrimary'
import { default as CalendlyPopup } from 'app/components/calendly/Popup'

export default function Home() {
  const navItems = [
    NavItemModel.builder().withTitle("Properties").withUrl("https://www.homes.com/real-estate-agents/marquise-lovelace/c6rhq6g/").build(),
    NavItemModel.builder().withTitle("About").build(),
    NavItemModel.builder().withTitle("Contact").build(),
  ]
  const navbarProps = NavbarModel.builder().withNavDisplayName("Marquise lovelace").withNavItems(navItems).build()

  return (
    <>
      <main className="w-full">
        {/* hero section */}
        <section className="h-screen bg-cover bg-center"
          style={{ backgroundImage: "url('/landing-houses.jpg')" }}>
          <div className="flex justify-center items-center h-full bg-black/40">
            <h1 className="border-2 border-primary border-solid text-2xl text-primary p-5">
              {"We sell "} <a className="underline underline-offset-8 text-quaternary animate-pulse" href="https://www.homes.com/real-estate-agents/marquise-lovelace/c6rhq6g/">{"Houses"}</a>
            </h1>
          </div>
        </section>

        {/* bio section */}
        <section className="flex flex-wrap">
          <div className="flex-1 basis-full h-screen sm:basis-1/2 bg-cover bg-center"
            style={{ backgroundImage: "url('/quise-1.jpg')" }} />
          <aside className="flex flex-col justify-center items-center basis-full h-screen sm:basis-1/2">
            <h1 className="flex-1 border-2 border-solid border-red-500">
              {"Quise Gives You The Keys 🔑"}
            </h1>
            <br />
            <p className="flex-1 border-2 border-solid border-red-500">
              {"As a Marine Corps veteran, Mar[quise] is a real estate agent who understands the value of hard work and dedication. He is passionate about helping his clients find the perfect home and making the buying or selling process as smooth as possible. With his sharp negotiating skills and knowledge of the local market, Quise is a valuable asset to anyone looking to buy or sell real estate. He is committed to providing exceptional service and building lasting relationships with his clients. Let Quise help you achieve your real estate goals with his expertise and professionalism."}
            </p>
          </aside>
        </section>
        {/* contact section */}
        <section className="h-screen bg-cover bg-center"
          style={{ backgroundImage: "url('/contact.jpg')" }}>
          <div>
            <h1>Connect With Quise</h1>
            <div>
              <CalendlyPopup />
            </div>
          </div>
        </section>

      </main>
      <Analytics />
    </>
  )
}
