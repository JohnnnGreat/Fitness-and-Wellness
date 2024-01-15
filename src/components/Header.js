import React, { useState } from "react";
import { navDetails } from "@/data";
import Link from "next/link";
const Header = () => {
  const [menuClicked, setMenuClicked] = useState(false);
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
        <nav className={menuClicked && "open-nav"}>
          <div
            className="close"
            onClick={() => {
              setMenuClicked(false);
            }}
          >
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </div>

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
        <div
          className="menu"
          onClick={() => {
            console.log(menuClicked);
            setMenuClicked(true);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Header;
