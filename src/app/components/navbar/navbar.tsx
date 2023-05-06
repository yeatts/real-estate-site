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
  const [navbarStatus, setNavbarStatus] = useState({
    style: "nav",
    preScrollPosition: 0,
    postScrollPosition: 0,
  });

  useEffect(() => {
    // scroll handler
    function scrollHandler(event: any) {
      // TODO properly type instead of "explicit any" quick fix
      console.log("before state change: " + navbarStatus.style);

      setNavbarStatus({
        style:
          navbarStatus.postScrollPosition === 0
            ? "nav transparent"
            : navbarStatus.postScrollPosition < navbarStatus.preScrollPosition
            ? "nav opaque"
            : "nav hide",
        preScrollPosition: navbarStatus.postScrollPosition,
        postScrollPosition: document.body.scrollTop,
      });
      console.log("after state change: " + navbarStatus.style);
    }

    document.getElementsByTagName("body")[0].addEventListener("scroll", (e) => {
      scrollHandler(e);
    });

    // cleanup function to remove event listener on unmounts
    return () => {
      document
        .getElementsByTagName("body")[0]
        .removeEventListener("scroll", (e) => {
          scrollHandler(e);
        });
    };
  }, [navbarStatus]);

  return (
    <nav className={styles[navbarStatus.style]}>
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
