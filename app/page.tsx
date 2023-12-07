// nextjs imports
import Image from "next/image";
import { Analytics } from "@vercel/analytics/react";
// import { Inter } from 'next/font/google'

// style imports
import styles from "./page.module.scss";

// type imports
import { default as NavbarModel } from "app/models/navbar/navbar";
import { default as NavItemModel } from "app/models/navbar/navitem";

// component imports
import Navbar from "app/components/navbar/Navbar";
import ButtonPrimary from "app/components/buttons/ButtonPrimary";
import { default as CalendlyPopup } from "app/components/calendly/Popup";

export default function Home() {
  const navItems = [
    NavItemModel.builder()
      .withTitle("Properties")
      .withUrl(
        "https://www.homes.com/real-estate-agents/marquise-lovelace/c6rhq6g/",
      )
      .build(),
    NavItemModel.builder().withTitle("About").build(),
    NavItemModel.builder().withTitle("Contact").build(),
  ];
  const navbarProps = NavbarModel.builder()
    .withNavDisplayName("Marquise lovelace")
    .withNavItems(navItems)
    .build();

  return (
    <>
      <main className="w-full">
        {/* hero section */}
        <section className="w-screen" style={{ height: "100svh" }}>
          <Image
            className="object-cover brightness-50 z-0"
            src="/landing-houses.jpg"
            alt="Hauses"
            fill
            priority
            sizes="100%"
          />
          <div className="flex justify-center items-center h-full">
            <h1 className="border-2 border-primary border-solid text-2xl text-primary p-5 z-10">
              {"We sell "}{" "}
              <a
                className="underline underline-offset-8 text-quaternary animate-pulse"
                href="https://www.homes.com/real-estate-agents/marquise-lovelace/c6rhq6g/"
              >
                {"Houses"}
              </a>
            </h1>
          </div>
        </section>

        {/* bio section */}
        <section className="flex flex-wrap">
          <div className="relative flex-1 basis-full h-screen sm:basis-1/2">
            <Image
              className="object-cover z-0"
              src="/quise-2.jpg"
              alt="quise-bio-photo"
              fill
              sizes="100%"
            />
          </div>
          <aside className="flex flex-col justify-center px-10 basis-full h-screen bg-primary sm:basis-1/2 md:bg-gradient-to-r from-[#c4cad7] from-0% via-[#fff6ea] via-5% to-[#fff6ea] to-90%">
            <h1 className="">{"Quise Gives You The Keys 🔑"}</h1>
            <br />
            <p className="">
              {
                "As a Marine Corps veteran, Mar[quise] is a real estate agent who understands the value of hard work and dedication. He is passionate about helping his clients find the perfect home and making the buying or selling process as smooth as possible. With his sharp negotiating skills and knowledge of the local market, Quise is a valuable asset to anyone looking to buy or sell real estate. He is committed to providing exceptional service and building lasting relationships with his clients. Let Quise help you achieve your real estate goals with his expertise and professionalism."
              }
            </p>
          </aside>
        </section>

        {/* contact section */}
        <section className="absolute h-screen w-screen">
          <Image
            className="relative object-cover brightness-50 z-0"
            src="/contact.jpg"
            alt="contact-photo"
            quality={100}
            fill
            sizes="100%"
          />
          <div className="flex justify-center items-center h-full">
            <h1 className="border-2 border-primary border-solid text-2xl text-primary p-5 z-10">
              <CalendlyPopup textStyle="underline underline-offset-8 text-quaternary animate-pulse" />
              {" With Quise"}
            </h1>
          </div>
        </section>
      </main>
      <Analytics />
    </>
  );
}
