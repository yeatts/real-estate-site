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
  const [isScrollingUp, setIsScrollingUp] = useState<boolean>(true);
  const [preScrollPosition, setPreScrollPosition] = useState<number>(0);
  const [postScrollPosition, setPostScrollPosition] = useState<number>(69);

  useEffect(() => {
    // scroll handler
    function scrollHandler(event: any) {
      if (postScrollPosition === 0) {
        setIsScrollingUp(true);
        return;
      }
      setPostScrollPosition(document.body.scrollTop);
      setIsScrollingUp(postScrollPosition < preScrollPosition);
      setPreScrollPosition(postScrollPosition);
    }

    document.getElementsByTagName("body")[0].addEventListener("scroll", (e) => { scrollHandler(e) })

    // cleanup function to remove event listener on unmounts
    return () => {
      document.getElementsByTagName("body")[0].removeEventListener("scroll", (e) => { scrollHandler(e) })
    };
  }, [preScrollPosition, postScrollPosition]);

  return (
    <nav className={`${isScrollingUp ? styles.nav : styles.nav__hide}`}>
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
