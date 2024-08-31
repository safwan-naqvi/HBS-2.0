"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./style.module.scss";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import Magnetic from "@/components/common/Magnetic";
import Link from "next/link";
import clsx from "clsx";
import { useMediaQuery } from "usehooks-ts";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function NavHeader({ lightMode }: { lightMode?: boolean }) {
  const header = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname();
  // const button = useRef(null);
  const mediumScreen = useMediaQuery("(min-width:1024px)");

  // // State to manage dropdown visibility
  // const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);

  useEffect(() => {
    if (isActive) setIsActive(false);
  }, [pathname]);

  return (
    <>
      <div
        ref={header}
        className={clsx(
          styles.header,
          "dark:text-white",
          lightMode && "!text-white"
        )}
      >
        <div className={styles.nav}>
          <Magnetic>
            <div className={styles.el}>
              <Link href={"/portfolio"}>Our Work</Link>
              <div
                className={clsx(
                  pathname === "/work"
                    ? styles.activeMenu
                    : styles.indicator,
                  "dark:!bg-white",
                  lightMode && "!bg-white"
                )}
              ></div>
            </div>
          </Magnetic>
          {/* onMouseEnter={() => setIsServicesDropdownOpen(true)} */}
          {/* onMouseLeave={() => setIsServicesDropdownOpen(false)} */}
          <div className={styles.el} >
            <Link href={"/services"}>Our Services</Link>
            <div
              className={clsx(
                pathname === "/work"
                  ? styles.activeMenu
                  : styles.indicator,
                "dark:!bg-white",
                lightMode && "!bg-white"
              )}
            ></div>
            {/* Dropdown Menu */}
            {/* <AnimatePresence>
            {isServicesDropdownOpen && (
              <motion.div
                className={styles.dropdown} // Style your dropdown
                initial={{ opacity: 0, y: -10 }} // Initial animation state
                animate={{ opacity: 1, y: 0 }} // Animate in
                exit={{ opacity: 0, y: -10 }} // Animate out
                transition={{ duration: 0.2 }}
              >
          
                <div className="min-w-[400px] rounded-md">

                </div>
   
              </motion.div>
            )}
          </AnimatePresence> */}
          </div>

          <Magnetic>
            <div className={styles.el}>
              <Link href={"/about"}>About Us</Link>
              <div
                className={clsx(
                  pathname === "/about"
                    ? styles.activeMenu
                    : styles.indicator,
                  "dark:!bg-white",
                  lightMode && "!bg-white"
                )}
              ></div>
            </div>
          </Magnetic>
          <Magnetic>
            <div className={styles.el}>
              <Link href={"/contact"}>Contact</Link>
              <div
                className={clsx(
                  pathname === "/contact"
                    ? styles.activeMenu
                    : styles.indicator,
                  "dark:!bg-white",
                  lightMode && "!bg-white"
                )}
              ></div>
            </div>
          </Magnetic>
        </div>
        <div className="flex items-center gap-3">
          <a href={"https://facebook.com/hashbitstudio"} target="_blank">
            <FaFacebook className="h-6 w-6 text-neutral-50 hover:text-neutral-200 transition-all" />
          </a>
          <a href={"https://instagram.com/hashbitstudio.official"} target="_blank">
            <FaInstagram className="h-6 w-6 text-neutral-50 hover:text-neutral-200 transition-all" />
          </a>
          <a href={"https://linkedin.com/hashbitstudio"} target="_blank">
            <FaLinkedin className="h-6 w-6 text-neutral-50 hover:text-neutral-200 transition-all" />
          </a>
        </div>
      </div >
    </>
  );
}
