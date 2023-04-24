import React, { useState } from "react";

function Home() {
  // state
  const [navbarStyle, setNavbarStyle] = useState("transparent");
  const [preScrollPosition, setPreScrollPosition] = useState(0);
  const [postScrollPosition, setPostScrollPosition] = useState(0);

  function scrollHandler() {
        const mainPostPosition = document.querySelector("main")!.scrollTop;
    setPostScrollPosition(mainPostPosition);
    setNavbarStyle(
      postScrollPosition === 0
        ? "transparent"
        : postScrollPosition < preScrollPosition
        ? "opaque"
        : "hide"
    );
    setPreScrollPosition(postScrollPosition);
  }

  return (
    <main onScroll={scrollHandler}>
      {/* Misc Content */}
      <Navbar className={navbarStyle} />
      {/* Misc Content */}
    </main>
  );
}


// Navbar Component
function Navbar(props: any) {
  return (
    <nav className={props.navbarStyle}>
      {/* Misc Content */}
    </nav>
  );
}
