"use client";
import "aos/dist/aos.css";
import { Inter } from "next/font/google";
import "./globals.css";
import "../styles/Home.scss";
import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import Header from "@/components/Header";
const inter = Inter({ subsets: ["latin"] });
import AOS from "aos";

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({ children }) {
  const cursorSize = 15;

  const mouse = {
    x: useMotionValue(0),

    y: useMotionValue(0),
  };

  const smoothOptions = { damping: 20, stiffness: 300, mass: 0.5 };

  const smoothMouse = {
    x: useSpring(mouse.x, smoothOptions),

    y: useSpring(mouse.y, smoothOptions),
  };

  const manageMouseMove = (e) => {
    const { clientX, clientY } = e;

    mouse.x.set(clientX - cursorSize / 2);

    mouse.y.set(clientY - cursorSize / 2);
  };

  useEffect(() => {
    window.addEventListener("mousemove", manageMouseMove);

    return () => {
      window.removeEventListener("mousemove", manageMouseMove);
    };
  }, []);
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <html lang="en">
        <motion.div
          style={{
            left: smoothMouse.x,
            top: smoothMouse.y,
          }}
          className="cursor"
        >
          <div></div>
        </motion.div>
        <Header />
        <body className={inter.className}>{children}</body>
      </html>
    </>
  );
}
