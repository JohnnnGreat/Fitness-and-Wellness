import { navDetails, quickLinks } from "@/data";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__wrapper footer-grid">
        <div className="footer-logo">
          <h1>FitVibeHub</h1>
          <p>
            At FitVibeHub, we are passionate about fostering a culture of health
            and fitness that goes beyond the surface.
          </p>
        </div>
        <div className="footer-section">
          <h1>Navigation</h1>
          <ul>
            {navDetails.map((nav) => (
              <li key={nav.id}>
                <Link href={nav.navLink}>{nav.navText}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer-section">
          <h1>Quick Links</h1>
          <ul>
            {quickLinks.map((nav) => (
              <li key={nav.id}>
                <Link href={nav.navLink}>{nav.navText}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer-section">
          <h1>Social Media</h1>
          <ul>
            {quickLinks.map((nav) => (
              <li key={nav.id}>
                <Link href={nav.navLink}>{nav.navText}</Link>
              </li>
            ))}
          </ul>
        </div>``
      </div>
    </div>
  );
};

export default Footer;
