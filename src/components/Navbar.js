import * as React from "react";
import { useEffect, useState } from "react";
import { Link } from "gatsby";
// assets
import logoBlueImage from "../images/logo_blue.png";
import logoWhiteImage from "../images/logo.webp";

export const Navbar = () => {
  const [isHomePage, setHomePage] = useState(false);

  useEffect(() => {
    setHomePage(window.location.pathname === "/");
  }, []);

  return (
    <nav className="absolute flex items-center p-6 justify-between w-full">
      <img
        src={isHomePage ? logoWhiteImage : logoBlueImage}
        className="w-1/5 max-w-nav-logo"
      />
      <div
        className={
          (isHomePage ? "text-white" : "text-black") +
          " flex items-center w-2/6 justify-between min-w-nav-links"
        }
      >
        <Link to="/">Home</Link>
        <Link to="/">News</Link>
        <Link to="/">Community</Link>
        <Link to="/">Help</Link>
        <Link to="/">Docs</Link>
        <Link to="/">About</Link>
      </div>
      <div>
        <div
          className={
            (isHomePage
              ? "text-white border-white"
              : "text-black border-black") +
            " px-6 py-2 border-solid border rounded-full cursor-pointer"
          }
        >
          Use Mask
        </div>
      </div>
    </nav>
  );
};
