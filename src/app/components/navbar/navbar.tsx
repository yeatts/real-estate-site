// React imports
import React, { useState, useEffect } from "react";

// style imports
import styles from "./navbar.module.scss";

// type imports
import { TNavbar } from "@/app/models/navbar/navbar";
import NavItem from "@/app/models/navbar/nav-item";
import { BsPrescription } from "react-icons/bs";

export default function Navbar(props: TNavbar) {
  // props
  const itemCount: number = props.navItems.length;
  const leftSideItems: NavItem[] = props.navItems.slice(
    0,
    Math.floor(itemCount / 2)
  );
  const rightSideItems: NavItem[] = props.navItems.slice(
    Math.floor(itemCount / 2),
    itemCount
  );

  // state
  const [navbarStyle, setNavbarStyle] = useState("nav__transparent");
  const [preScrollPosition, setPreScrollPosition] = useState<number>(0);
  const [postScrollPosition, setPostScrollPosition] = useState<number>(0);

  useEffect(() => {
    console.log("useEffect ran!");
    function scrollHandler(event: any) {

      setPostScrollPosition(document.body.scrollTop);
      
      setNavbarStyle(postScrollPosition === 0 
        ? "nav_transparent" 
        : postScrollPosition < preScrollPosition
        ? "nav__opaque"
      : "nav__hide")
      console.log(postScrollPosition);
      setPreScrollPosition(postScrollPosition);
    }

    document.getElementsByTagName("body")[0].addEventListener("scroll", (e) => { scrollHandler(e) })

    // cleanup function to remove event listener on unmounts
    return () => {
      document.getElementsByTagName("body")[0].removeEventListener("scroll", (e) => { scrollHandler(e) })
    };
  }, [preScrollPosition, postScrollPosition]);

  return (
    <nav className={`main ${navbarStyle}`}>
      <ul className={styles.navItems}>
        {leftSideItems.map((item) => {
          return (
            <ol className={styles.navItem} key={item.title}>
              <a href={item.url}>{item.title}</a>
            </ol>
          );
        })}
      </ul>
      <header className={styles.navTitle}>{props.navDisplayName}</header>
      <ul className={styles.navItems}>
        {rightSideItems.map((item) => {
          return (
            <ol className={styles.navItem} key={item.title}>
              <a href={item.url}>{item.title}</a>
            </ol>
          );
        })}
      </ul>
    </nav>
  );
}
