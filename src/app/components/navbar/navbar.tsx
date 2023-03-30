"use client";

// React imports
import React, { useState, useEffect, useRef } from "react";

// style imports
import styles from "./navbar.module.scss";

// type imports
import { TNavbar } from "@/app/models/navbar/navbar";
import NavItem from "@/app/models/navbar/nav-item";

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
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const preScrollPosition = useRef(window.scrollY);

  useEffect(() => {
    // scroll handler
    function scrollHandler() {
      console.log("scrollHandler called");

      const postScrollPosition = window.scrollY;
      const isScrollingUp = postScrollPosition < preScrollPosition.current;
      setIsScrollingUp(isScrollingUp);
      preScrollPosition.current = postScrollPosition;

      if (window.scrollY === 0) {
        setIsScrollingUp(true);
        return;
      }
    }

    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

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
