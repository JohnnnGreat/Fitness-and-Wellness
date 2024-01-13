import React from "react";
import { navDetails } from "@/data";
import Link from "next/link";
const Header = () => {
  return (
    <div className="header">
      <div className="header__wrapper">
        <Link href="/" className="logo">
          <svg
            width="40"
            height="18"
            viewBox="0 0 40 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="33" height="7" rx="3.5" fill="black" />
            <rect x="7" y="11" width="33" height="7" rx="3.5" fill="#796C3A" />
          </svg>
          <h1>FitVibeHub.</h1>
        </Link>
        <nav>
          <ul>
            {navDetails.map((navItem) => (
              <li key={navItem.id}>
                <Link href={navItem.navLink}>{navItem.navText}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <Link className="header-cta" href={"/"}>
          Start your journey
        </Link>
      </div>
    </div>
  );
};

export default Header;
